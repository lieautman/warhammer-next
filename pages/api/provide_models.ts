// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from "next";
import csv from "csvtojson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://wahapedia.ru/wh40k10ed/Datasheets_models.csv");

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch CSV" });
    }

    const csvText = await response.text();

    const json = await csv({
      delimiter: "|",
      noheader: false, // There *is* a header line: id|name|link
            headers: [
        "datasheet_id",
        "line",
        "name",
        "M",
        "T",
        "Sv",
        "inv_sv",
        "inv_sv_descr",
        "W",
        "Ld",
        "OC",
        "base_size",
        "base_size_descr",
        "field14"
      ],
      trim: true,
    }).fromString(csvText);

    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: "Parsing error", details: err });
  }
}

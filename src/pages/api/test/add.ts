import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/utils/connectMongo";
import Test from "model/testModel";
/**

@param {NextApiRequest} req

@param {NextApiResponse} res
*/
export default async function addTest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const test = await Test.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/utils/connectMongo";
import User from "model/userModel";
/**

@param {NextApiRequest} req

@param {NextApiResponse} res
*/
export default async function signUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // console.log("CONNECTING TO MONGO");
    await connectMongo();
    // console.log("CONNECTED TO MONGO");

    // console.log("CREATING DOCUMENT");
    const user = await User.create(req.body);
    // console.log("CREATED DOCUMENT");
    console.log(user)

    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

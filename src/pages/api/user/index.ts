import { NextApiRequest, NextApiResponse } from "next";
import User from "model/userModel"
import connectMongo from "@/utils/connectMongo";

/**
@param {NextApiRequest} req

@param {NextApiResponse} res
*/


export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
    ) {
    const { method, cookies } = req;
  
    const token = cookies.token
  
    connectMongo();
  
    if (method === "GET") {
      try {
        const user = await User.find({});
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  
    if (method === "POST") {
    //   if(!token || token !== process.env.token){
    //     return res.status(401).json("Not authenticated!")
    //   }
      try {
        const user = await User.create(req.body);
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  }
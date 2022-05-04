import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req,res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Method not match' });
  }

  try
  {
    const FirstName=req.body.FirstName;
    const LastName=req.body.LastName;
    const Email=req.body.Email;
    const PhoneNumber=req.body.PhoneNumber;


    await prisma.form_data.create({ data: {

        f_name:FirstName,
        l_name:LastName,
        email:Email,
        phone:PhoneNumber
        } 
    });

    res.status(200).json({ status: "success" });


  } catch (err) {
    res.status(400).json({ status: "Failed" });
  }
};
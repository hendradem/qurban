import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../../libs/serverAuth";
import prisma from '../../../libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){ 
    if(req.method !== 'GET') return res.status(405).end()

    try {
        const { currentUser } = await serverAuth(req, res);   
        const { userId } = req.query;

        if(!userId || typeof userId !== 'string') throw new Error('Invalid ID')
        
        const notifications = await prisma.notification.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                hasNotification: false
            }
        })

        
         

        return res.status(200).json(notifications)        
    } catch (error) {
        console.log(error);
    }
}
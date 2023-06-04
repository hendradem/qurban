import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../libs/serverAuth";
import prisma from '../../libs/prismadb';

 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST' ) {
      return res.status(405).end();
    }
  
    try {
      const { userId } = req.body; 
      const { type } = req.query; 
      const { currentUser } = await serverAuth(req, res);  

      const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
        })
  
      if (!user) {
        throw new Error('Invalid ID');
      }
  
      let updatedFollowingIds = [...(user.followingIds || [])];
  
      if (type === 'follow') {
        updatedFollowingIds.push(userId);  
      }
  
      if (type === 'unfollow') {
        updatedFollowingIds = updatedFollowingIds.filter((followingId) => followingId !== userId);
      }
  
      const updatedUser = await prisma.user.update({
        where: {
          id: currentUser.id
        },
        data: {
          followingIds: updatedFollowingIds
        }
      });
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
}
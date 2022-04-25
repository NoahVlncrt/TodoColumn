import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    await prisma.task.update({
        where: {
            id: req.body.id
        },
        data: {
            done: true
        }
    })
    
    res.status(200).json({ message: 'task completed' })
}
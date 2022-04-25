import prisma from "../../lib/prisma"

export default async function handler(req, res) {
    let allTasks = await prisma.task.findMany()

    res.status(200).json(allTasks)
}
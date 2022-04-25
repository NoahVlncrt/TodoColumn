import prisma from "../../lib/prisma"

export default async function handler(req, res) {
    let allPeople = await prisma.person.findMany({
        include: {
            tasks: true
        }
    })

    res.status(200).json(allPeople)
}
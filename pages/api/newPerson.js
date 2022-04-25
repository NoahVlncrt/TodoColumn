import prisma from "../../lib/prisma"

export default async function handler(req, res) {
    await prisma.person.create({
        data: {
            name: req.body.name,
        }
    })

    res.status(200).json({ name: 'John Doe' })
}
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    await prisma.task.create({
        data: {
            title: req.body.title,
            done: false,
            person: {
                    id: req.body.person
                }
            }
        }
    })

    res.status(200).json({ message: 'task added' })
}
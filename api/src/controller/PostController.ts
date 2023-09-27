import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export class PostController {
    async getExercises(_: Request, res: Response) {
        try {

            const exersices = await prisma.exercise.findMany()

            return res.status(200).json({ exersices })
        } catch {
            return res.status(500).json({ error: "Failed in fetching exersices" })
        }
    }

    async addExercise(req: Request, res: Response) {
        try {
            const newExercise = await prisma.exercise.create({
                data: {
                    name: req.body.name,
                    series: req.body.series,
                    repetitions: req.body.repetitions,
                    from: {
                        connect: { id: req.body.wokoutId },
                    },
                }
            })

            return res.status(200).json({ newExercise })
        } catch {
            return res.status(500).json({ error: 'Failed in create exercise' })
        }
    }

    async updateExersice(req: Request, res: Response) {

        try {
            const updateExersice = await prisma.exercise.update({
                where: {
                    id: req.body.id
                },

                data: {
                    name: req.body.name,
                    series: req.body.series,
                    repetitions: req.body.repetitions,
                    from: {
                        connect: { id: req.body.wokoutId },
                    },
                },

            })

            return res.status(200).json({ updateExersice })
        } catch {
            return res.status(500).json({ error: 'Failed in update user' })
        }
    }

    async deleteExercise(req: Request, res: Response) {
        try {
            const deleteUser = await prisma.exercise.delete({
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({ deleteUser })
        } catch {
            return res.status(500).json({ error: 'cannot delete the user' })
        }
    }
}
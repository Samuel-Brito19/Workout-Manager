import { hash } from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";


export class UserController {
    async index(req: Request, res: Response) {
        const users = await prisma.user.findMany()

        const userNoPassword = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

        return res.json({ userNoPassword })
    }
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const userExists = await prisma.user.findUnique({ where: { email } })


        if (userExists) {
            return res.json({ error: "User already exists!" })
        }

        const hash_password = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hash_password
            }
        })


        return res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    }
}
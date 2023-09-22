import { hash } from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";


export class UserController {
    async index(req: Request, res: Response) {
        const users = await prisma.user.findMany()

        return res.json({ users })
    }
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const userExists = await prisma.user.findUnique({ where: { email: 'samuel@bitcoin.com' } })

        if (!userExists) {
            return res.json({ error: "User not found!" })
        }

        const hash_password = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                name: 'Samukowski',
                email: 'samuel@bitcoin.com',
                password: hash_password
            }
        })

        return res.json({ user })
    }
}
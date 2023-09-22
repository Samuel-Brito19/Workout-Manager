import { compare, hash } from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";


export class AuthController {

    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({ where: { email } })

        if (!user) {
            return res.json({ erro: "User not found!" })
        }

        const isValuePassword = await compare(password, user.password)

        if (!isValuePassword) {
            return res.json({ erro: "Invalid password" })
        }

        const token = sign({ id: user.id }, "secret", { expiresIn: "id" })

        const { id } = user

        return res.json({ user: { id, email }, token })
    }
}
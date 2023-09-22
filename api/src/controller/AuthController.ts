import { compare, hash } from "bcryptjs";
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";


export class UserController {

    async store(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({ where: { email } })

        const isValuePassword = await compare()


        return res.json({ user })
    }
}
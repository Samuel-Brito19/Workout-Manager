import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export class PostController {
    async getUsers(_: Request, res: Response) {
        try {

            const users = await prisma.user.findMany()

            return res.status(200).json({ users })
        } catch (err) {
            return res.status(400).json({ error: "Failed in fetching users" })
        }
    }
}
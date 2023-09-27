import { Router } from "express";
import { UserController } from "./controller/UserController";
import { AuthController } from "./controller/AuthController";
import { AuthMiddlwares } from "./middlewares/auth";
import { PostController } from "./controller/PostController";


const userController = new UserController()
const authController = new AuthController()
const postController = new PostController

export const router = Router()

router.post('/create', userController.store)
router.get('/users', AuthMiddlwares, userController.index)
router.post('/auth', authController.authenticate)

router.get('/exersices', postController.getExercises)
router.post('/exercises', postController.addExercise)
router.put('/exercise/:id', postController.updateExercise)
router.delete('/exercise/:id', postController.deleteExercise)
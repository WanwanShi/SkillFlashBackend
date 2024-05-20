import { Request, Response, NextFunction } from "express";
import { createUser } from "../models/usersModel";

export async function signup(req:Request, res:Response, next:NextFunction):Promise<void> {
    try {
        const user = req.body
        const newUser = await createUser(user)
        res.status(201).send({ user: newUser })
        // .then((user:object)=>{res.status(201).send({ user })})
    }
    catch(err) {
        next(err)
    }
}

import { client, connectDB, databaseString } from "../database/connection";
import bcrypt from 'bcryptjs'
import { User } from "../database/seeds/seed_test";
import { ObjectId } from "mongodb";

interface ReturnedUser{
    _id?: ObjectId;
    username: string;
    email: string;
}

interface CustomError{
    status: number;
    message: string;
}

export async function createUser({ username, email, password }: { username: string; email: string; password: string }):Promise<ReturnedUser | CustomError> {
    await connectDB()
    const hashedPw = await bcrypt.hash(password, 10)
    const newUser:User = { username, email, password: hashedPw }
        
    const result =  await client.db(databaseString).collection("users").insertOne(newUser)

    if (result.acknowledged) {
        const newUser = await client.db(databaseString).collection("users").findOne(result.insertedId)
        if (newUser) {
            const {_id, username, email} = newUser
            return {_id, username, email}
        } else {
            return Promise.reject({ status: 400, message: 'failed to signup' })
        }
    } else {
        return Promise.reject({ status: 400, message: 'failed to signup' })
    }
}
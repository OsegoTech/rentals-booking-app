import UserModel from "../models/UserModel.js"
import bcrypt from "bcryptjs"

export const register = async(req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save()
        res.status(201).send("User has been created")
    } catch (err) {
        next(err)
    }
}
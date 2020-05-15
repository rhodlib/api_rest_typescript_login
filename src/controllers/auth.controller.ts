import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
    return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400,
    });
}

export const signUp = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .send({ message: "Please insert email and password" });
    } else {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send({ message: "The user already exist" });
        } else {
            const newUser = await new User({ email, password });
            await newUser.save();

            return res.status(201).send(newUser);
        }
    }
};

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .send({ message: "Please insert email and password" });
    } else {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "The user doesn't exists" });
        } else {
            const isMatch = await user.comparePassword(password);

            if (isMatch) {
                return res.status(200).send({ token: createToken(user) });
            } else {
                return res
                    .status(400)
                    .send({ message: "The email or password are wrong" });
            }
        }
    }
};

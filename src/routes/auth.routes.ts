import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

const router = Router();

/**
 * @api {post} /signup Allow the User to signup
 * @apiName PostSignup
 * @apiGroup Auth
 *
 * @apiSuccess {String} _id Id's User.
 * @apiSuccess {String} email  Email of the User.
 * @apiSuccess {String} password  Password of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *          "_id": "5ebebc6fa8b5b821d07a53ed",
 *          "email": "rodo@gmail.com",
 *          "password": "$2b$10$ZYWfe/MvnlLL//TBfi6WaOFip8HJRna9hg3h/jdn/0nOZUiZKIQKq"
 *     }
 *
 * @apiError message The user already exist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *          "message": "The user already exist"
 *     }
 */

router.post("/signup", signUp);

/**
 * @api {post} /signin Allow the User to signin
 * @apiName PostSignin
 * @apiGroup Auth
 *
 * @apiSuccess {String} token Token of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYmQ5MzZjMDg5MTFiMTdiMDQ0Y2ZlZCIsImVtYWlsIjoicmhvZGxpYkBnbWFpbC5jb20iLCJpYXQiOjE1ODk1NTg5MjIsImV4cCI6MTU4OTY0NTMyMn0.RoKVRzux7qli9Lf3BDqhF7wcr2LIHMktmiYzfp5Hky0"
 *     }
 *
 * @apiError message The email or password are wrong.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad request
 *     {
 *          "message": "The email or password are wrong"
 *     }
 */
router.post("/signin", signIn);

export default router;

import { Router } from "express";
import passport from "passport";

const router = Router();

/**
 * @api {get} /private Private route for aunthenticated Users.
 * @apiName getPrivate
 * @apiGroup Private
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "success"
 *     }
 *
 * @apiError Unauthorized Unauthorized User.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     Unauthorized
 */

router.get(
    "/private",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.send({ message: "success" });
    }
);

export default router;

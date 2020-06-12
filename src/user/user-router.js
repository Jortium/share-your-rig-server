const express = require('express');
const xss = require('xss');
const UserService = require('./user-service');

const UserRouter = express.Router();
const bodyParser = express.json();

const serializeUser = (user) => ({
    id: user.id,
    email: xss(user.email),
    username: xss(user.username),
    password: xss(user.password),
});

UserRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        UserService.getUser(knexInstance)
            .then((user) => {
                res.json(user.map(serializeUser));
            })
            .catch(next);
    })

    .post(bodyParser, (req, res, next) => {
        const { manufacturer, model, cores } = req.body;
        const newUser = { manufacturer, model, cores };
        for (const [key, value] of Object.entries(newUser)) {
            if (value === null) {
                return res.status(400).json({
                    error: { message: `User '${key}' is required` },
                });
            }
        }

        UserService.postUser(
            req.app.get('db'),
            newUser,
        )
            .then((user) => {
                res.status(201)
                    .location(`/user/${user.id}`)
                    .json(serializeUser(user));
            })
            .catch(next);
    });

UserRouter

    .route('/:user_id')

    .all((req, res, next) => {
        const { user_id } = req.params;
        UserService.getId(req.app.get('db'), user_id)
            .then((user) => {
                if (!user) {
                    return res.status(404).json({
                        error: { message: 'User Not Found' },
                    });
                }
                res.user = user;
                next();
            })
            .catch(next);
    })

    .get((req, res) => {
        res.json(serializeUser(res.user));
    })

    // .delete((req, res, next) => {
    //     const { user_id } = req.params;
    //     UserService.deleteUser(
    //         req.app.get('db'),
    //         user_id,
    //     )
    //         .then(() => {
    //             res.status(204).end();
    //         })
    //         .catch(next);
    // })

    // .patch(bodyParser, (req, res, next) => {
    //     const { manufacturer, model, cores } = req.body;
    //     const userPatch = { manufacturer, model, cores };
    //     UserService.updateUser(
    //         req.app.get('db'),
    //         req.params.user_id,
    //         userPatch,
    //     )
    //         .then(() => {
    //             res.status(204).end();
    //         })
    //         .catch(next);
    // });

module.exports = UserRouter;

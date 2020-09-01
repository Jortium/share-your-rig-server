const express = require('express');
const xss = require('xss');
const PartService = require('./part-service');

const PartRouter = express.Router();
const bodyParser = express.json();

const serializePart = (part) => ({
    id: part.id,
    user_id: part.user_id,
    cpumanufacturer: xss(part.cpumanufacturer),
    cpumodel: xss(part.cpumodel),
    cpucores: xss(part.cpucores),
    gpumanufacturer: xss(part.gpumanufacturer),
    gpumodel: xss(part.gpumodel),
    ram: xss(part.ram),
});

PartRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        PartService.getPart(knexInstance)
            .then((part) => {
                res.json(part.map(serializePart));
            })
            .catch(next);
    })

    .post(bodyParser, (req, res, next) => {
        const {
            user_id, cpumanufacturer, cpumodel, cpucores, gpumanufacturer, gpumodel, ram
        } = req.body;
        const newPart = {
            user_id, cpumanufacturer, cpumodel, cpucores, gpumanufacturer, gpumodel, ram
        };
        for (const [key, value] of Object.entries(newPart)) {
            if (value === null) {
                return res.status(400).json({
                    error: { message: `Part '${key}' is required` },
                });
            }
        }

        PartService.postPart(
            req.app.get('db'),
            newPart,
        )
            .then((part) => {
                res.status(201)
                    .location(`/part/${part.id}`)
                    .json(serializePart(part));
            })
            .catch(next);
    });

PartRouter

    .route('/:part_id')

    .all((req, res, next) => {
        const { part_id } = req.params;
        PartService.getId(req.app.get('db'), part_id)
            .then((part) => {
                if (!part) {
                    return res.status(404).json({
                        error: { message: 'Part Not Found' },
                    });
                }
                res.part = part;
                next();
            })
            .catch(next);
    })

    .get((req, res) => {
        res.json(serializePart(res.part));
    })

    .delete((req, res, next) => {
        const { part_id } = req.params;
        PartService.deletePart(
            req.app.get('db'),
            part_id,
        )
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
    })

    .patch(bodyParser, (req, res, next) => {
        const {
            user_id, cpumanufacturer, cpumodel, cpucores, gpumanufacturer, gpumodel, ram
        } = req.body;
        const partPatch = {
            user_id, cpumanufacturer, cpumodel, cpucores, gpumanufacturer, gpumodel, ram
        };
        PartService.updatePart(
            req.app.get('db'),
            req.params.part_id,
            partPatch,
        )
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
    });

module.exports = PartRouter;

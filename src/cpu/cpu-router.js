const express = require('express');
const xss = require('xss');
const CPUService = require('./cpu-service');

const CPURouter = express.Router();
const bodyParser = express.json();

const serializeCPU = (cpu) => ({
    id: cpu.id,
    manufacturer: xss(cpu.manufacturer),
    model: xss(cpu.model),
    cores: xss(cpu.cores),
});

CPURouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        CPUService.getCPU(knexInstance)
            .then((cpu) => {
                res.json(cpu.map(serializeCPU));
            })
            .catch(next);
    })

    .post(bodyParser, (req, res, next) => {
        const {
            user_id, manufacturer, model, cores,
        } = req.body;
        const newCPU = {
            user_id, manufacturer, model, cores,
        };
        for (const [key, value] of Object.entries(newCPU)) {
            if (value === null) {
                return res.status(400).json({
                    error: { message: `CPU '${key}' is required` },
                });
            }
        }

        CPUService.postCPU(
            req.app.get('db'),
            newCPU,
        )
            .then((cpu) => {
                res.status(201)
                    .location(`/cpu/${cpu.id}`)
                    .json(serializeCPU(cpu));
            })
            .catch(next);
    });

CPURouter

    .route('/:cpu_id')

    .all((req, res, next) => {
        const { cpu_id } = req.params;
        CPUService.getId(req.app.get('db'), cpu_id)
            .then((cpu) => {
                if (!cpu) {
                    return res.status(404).json({
                        error: { message: 'CPU Not Found' },
                    });
                }
                res.cpu = cpu;
                next();
            })
            .catch(next);
    })

    .get((req, res) => {
        res.json(serializeCPU(res.cpu));
    })

    .delete((req, res, next) => {
        const { cpu_id } = req.params;
        CPUService.deleteCPU(
            req.app.get('db'),
            cpu_id,
        )
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
    })

    .patch(bodyParser, (req, res, next) => {
        const {
            user_id, manufacturer, model, cores,
        } = req.body;
        const cpuPatch = {
            user_id, manufacturer, model, cores,
        };
        CPUService.updateCPU(
            req.app.get('db'),
            req.params.cpu_id,
            cpuPatch,
        )
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
    });

module.exports = CPURouter;

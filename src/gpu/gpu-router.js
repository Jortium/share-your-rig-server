const express = require('express');
const xss = require('xss');
const GPUService = require('./gpu-service');

const GPURouter = express.Router();
const bodyParser = express.json();

const serializeGPU = (gpu) => ({
    id: gpu.id,
    manufacturer: xss(gpu.manufacturer),
    model: xss(gpu.model),
});

GPURouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        GPUService.getGPU(knexInstance)
            .then((gpu) => {
                res.json(gpu.map(serializeGPU));
            })
            .catch(next);
    })

    .post(bodyParser, (req, res, next) => {
        const { user_id, manufacturer, model } = req.body;
        const newGPU = { user_id, manufacturer, model };
        for (const [key, value] of Object.entries(newGPU)) {
            if (value === null) {
                return res.status(400).json({
                    error: { message: `GPU '${key}' is required` },
                });
            }
        }

        GPUService.postGPU(
            req.app.get('db'),
            newGPU,
        )
            .then((gpu) => {
                res.status(201)
                    .location(`/gpu/${gpu.id}`)
                    .json(serializeGPU(gpu));
            })
            .catch(next);
    });

GPURouter

    .route('/:gpu_id')

    .all((req, res, next) => {
        const { gpu_id } = req.params;
        GPUService.getId(req.app.get('db'), gpu_id)
            .then((gpu) => {
                if (!gpu) {
                    return res.status(404).json({
                        error: { message: 'GPU Not Found' },
                    });
                }
                res.gpu = gpu;
                next();
            })
            .catch(next);
    })

    .get((req, res) => {
        res.json(serializeGPU(res.gpu));
    })

    .delete((req, res, next) => {
        const { gpu_id } = req.params;
        GPUService.deleteGPU(
            req.app.get('db'),
            gpu_id,
        )
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
    })

    .patch(bodyParser, (req, res, next) => {
        const { user_id, manufacturer, model } = req.body;
        const gpuPatch = { user_id, manufacturer, model };
        GPUService.updateGPU(
            req.app.get('db'),
            req.params.gpu_id,
            gpuPatch,
        )
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
    });

module.exports = GPURouter;

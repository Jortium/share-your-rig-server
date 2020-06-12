exports.seed = function (knex) {
// Deletes ALL existing entries
    return knex('parts').del()
        .then(() =>
        // Inserts seed entries
        // eslint-disable-next-line implicit-arrow-linebreak
            knex('parts').insert([
                {
                    user_id: 1, cpumanufacturer: 'Intel', cpumodel: 'i3-9350KF', cpucores: 4, gpumanufacturer: 'Nvidia', gpumodel: 'GeForce GTX 770', ram: 16,
                },
                {
                    user_id: 2, cpumanufacturer: 'Intel', cpumodel: 'i5-8500', cpucores: 6, gpumanufacturer: 'Nvidia', gpumodel: 'GeForce GTX 980', ram: 8,
                },
                {
                    user_id: 3, cpumanufacturer: 'Intel', cpumodel: 'i7-7700K', cpucores: 4, gpumanufacturer: 'Nvidia', gpumodel: 'GeForce RTX 2080 Ti', ram: 32,
                },
                {
                    user_id: 4, cpumanufacturer: 'AMD', cpumodel: '1300X', cpucores: 4, gpumanufacturer: 'AMD', gpumodel: ' Radeon R9 290X', ram: 16,
                },
                {
                    user_id: 5, cpumanufacturer: 'AMD', cpumodel: 'FX-8170', cpucores: 8, gpumanufacturer: 'AMD', gpumodel: 'Radeon RX Vega 64', ram: 16,
                },
                {
                    user_id: 6, cpumanufacturer: 'AMD', cpumodel: 'Ryzen 7 PRO 3700', cpucores: 4, gpumanufacturer: 'AMD', gpumodel: 'Radeon RX 5700 XT', ram: 16,
                },
            ]));
};

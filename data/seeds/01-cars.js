// STRETCH
const cars = [
    {
    vin: '1111111111111',
    make: 'toyota',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual',
},
{
    vin: '1111111111113',
    make: 'corolla',
    model: 'prius',
    mileage: 2100,
    title: 'salvage',
},
{
    vin: '1111111121111',
    make: 'ford',
    model: 'focus',
    mileage: 5000,
    title: 'clean',
    transmission: 'manual',
}
]

exports.seed = async function (knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
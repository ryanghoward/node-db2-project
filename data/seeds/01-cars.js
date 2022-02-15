// STRETCH
const cars = [
  {
    vin: "11111111111111111",
    make: "Honda",
    model: "Civic",
    mileage: 10000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "22222222222222222",
    make: "Toyota",
    model: "Corolla",
    mileage: 100000,
    title: "clean",
  },
  {
    vin: "33333333333333333",
    make: "Ford",
    model: "F150",
    mileage: 200000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};

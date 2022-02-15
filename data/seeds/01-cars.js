// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "Honda",
    model: "Civic",
    mileage: 10000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "2222222222222",
    make: "Toyota",
    model: "Corolla",
    mileage: 100000,
    title: "clean",
  },
  {
    vin: "3333333333333",
    make: "Ford",
    model: "F150",
    mileage: 200000,
    title: "clean",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};

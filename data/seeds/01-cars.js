// STRETCH
const cars = [
  {
    vin: "5XYKT3A69DG353356",
    make: "Honda",
    model: "Civic",
    mileage: 10000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JN1CA31D3YT717809",
    make: "Toyota",
    model: "Corolla",
    mileage: 100000,
    title: "clean",
  },
  {
    vin: "2CNDL23F856093901",
    make: "Ford",
    model: "F150",
    mileage: 200000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};

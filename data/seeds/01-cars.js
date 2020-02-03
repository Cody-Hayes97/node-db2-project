exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "69696969", make: "Ford", model: "F150", mileage: 85000 }
      ]);
    });
};

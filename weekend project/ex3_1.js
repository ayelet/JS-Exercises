// Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?
console.log("*** ex 3.1 - Growth of Population ***");
// helper function
function log(base, number) {
  return Math.log(number) / Math.log(base);
}

let nb_year = (p0, r, aug, p) => {
  // validation:
  if (p < p0) return -1;
  if (p === p0) return 0;

  let counter = 1;
  let populationEachYear = p0 + Math.floor((p0 * r) / 100) + aug;
  while (populationEachYear <= p) {
    populationEachYear += Math.floor((populationEachYear * r) / 100) + aug;
    counter++;
  }
  return counter;
};

console.log(nb_year(1000, 2, 50, 1200)); //3
console.log(nb_year(1500, 5, 100, 5000)); //15
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // 10


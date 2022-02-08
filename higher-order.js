// Using Higher ORder Functions & Arrays

// we wanna look at the array and get the 21+ in the arr
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 25, 34, 78, 23];

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// With FIlter
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// One Liner
const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// filter retrail companies
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
// console.log(retailCompanies);

//filter All comapnies that started in the 80s
const eightiesCompanies = companies.filter((company) => company.start < 1990);
// console.log(eightiesCompanies);

//companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

// console.log(lastedTenYears);

//Map
//create array of company names
const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

// console.log(testMap);

const testMapArrow = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

// console.log(testMapArrow);

//square ages and then times 2
const agesSquare = ages.map((age) => Math.sqrt(age));
const agesTimesTwo = ages.map((age) => age * 2);
// console.log(agesSquare);

//Do it at the same time
const agesMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesMap);

// SORT

// Sort companies by the start year from the earliest to the latest

const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

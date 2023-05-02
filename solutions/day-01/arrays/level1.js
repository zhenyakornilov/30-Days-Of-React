// 1. Declare an empty array;
const empty_arr = [];

// 2. Declare an array with more than 5 number of elements
const techs = [
  "HTML",
  "CSS",
  "JS",
  "NodeJS",
  "React",
  "Vue",
  "MongoDB",
  "Postgres",
];

// 3. Find the length of your array
console.log(techs.length);

// 4. Get the first item, the middle item and the last item of the array
const firstItem = techs[0];

let middleItem;
if (techs.length % 2 === 0) {
  middleItem = techs.slice(techs.length / 2 - 1, techs.length / 2 + 1);
} else {
  middleItem = techs[Math.floor(techs.length / 2)];
}

const lastItem = techs[techs.length - 1];

console.log(firstItem, middleItem, lastItem);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the
// length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  { name: "Eugene" },
  ["array item"],
  true,
  "string",
  undefined,
  null,
];

console.log(mixedDataTypes.length > 5);

// 6. Declare an array variable name itCompanies and assign 
// initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Meta",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(`Count of companies: ${itCompanies.join(" | ")}`);

// 9. Print the first company, middle and last company
const firstItCompany = itCompanies[0];

let middleItCompany;
if (itCompanies.length % 2 === 0) {
  middleItCompany = itCompanies.slice(
    itCompanies.length / 2 - 1,
    itCompanies.length / 2 + 1
  );
} else {
  middleItCompany = itCompanies[Math.floor(itCompanies.length / 2)];
}

const lastItCompany = itCompanies[itCompanies.length - 1];

console.log(
  `First IT company: ${firstItCompany}, 
  Middle IT company: ${middleItCompany}, 
  Last IT company: ${lastItCompany}`
);

// 10. Print out each company
itCompanies.forEach(company => {
    console.log(company);
});

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
    company = company.toUpperCase();
    console.log(company);
})

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,
// Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ")} are big IT companies`);

// 13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found
if (itCompanies.includes("Meta")) {
    console.log(itCompanies[itCompanies.indexOf("Meta")]);
} else {
    console.log("Company not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies);
const filteredCompanies = [];
itCompanies.forEach(company => {
    let counter = 0;
    for (let i = 0; i < company.length; i++) {
        if (company[i] === "o") {
            counter++;
        }
    }

    if (counter > 1) {
        filteredCompanies.push(company);
    }

    counter = 0;
});

console.log(filteredCompanies);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log("Sorted: " + itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log("Reversed: " + itCompanies);

// 17. Slice out the first 3 companies from the array
const firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
const lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array
// Done before

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
    console.log("Before remove middle items: \n" + itCompanies);
    let middleIndex = (itCompanies.length / 2) - 1;
    itCompanies.splice(middleIndex, 1);
    itCompanies.splice(middleIndex, 1);
    console.log("After remove middle items: \n" + itCompanies);
}

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log("Last item removed: " + itCompanies);

// 23. Remove all IT companies
// itCompanies = [];
itCompanies.splice(0, itCompanies.length);
console.log("It companies array is empty now: " + itCompanies);
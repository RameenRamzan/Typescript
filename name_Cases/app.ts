// Project 03:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "Rameen ramzan";
// LOWER CASE:
console.log("LowerCase:", personName.toLowerCase());
// UPPER CASE:
console.log("UpperCase:", personName.toUpperCase());
// TITLE CASE :
console.log("TitleCase:", personName.replace(/\bw/g,c => c.toUpperCase()));


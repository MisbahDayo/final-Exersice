//storing a person name in a veriable
let personName = "Misbah Dayo";
//printing a person name in a lowercase
console.log(" LowerCase:", personName.toLowerCase());
//printing a person name in a uppercase
console.log("UpperCase:", personName.toUpperCase());
//printing a person name in a titlecase
console.log(personName.replace(/\b\w/g, c => c.toUpperCase()));
export {};

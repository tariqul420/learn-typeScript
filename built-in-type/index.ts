// built-in Type : number, string, boolean, void, undefined, null

let userId = 101;
userId = 25 // true
// userId = "25" // false

let userName: string;
let isActivated: boolean;

userId = 256; // true
userName = "TAriqul Islam"; // true
isActivated = true; // true

console.table({ userId, userName, isActivated });

let firstName: string;
let lastName: string;
let fullName: string;

firstName = "Tariqul";
lastName = "Islam";

fullName = firstName.concat(lastName)

console.log(fullName);
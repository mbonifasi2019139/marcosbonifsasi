const hbs = require("hbs");

hbs.registerHelper("getOld", () => {
    let today = new Date();
    let birthDate = new Date("11/26/2002");
    let age = today.getFullYear() - birthDate.getFullYear();
    let differenceMonths = today.getMonth() - birthDate.getMonth();
    if (
        differenceMonths < 0 ||
        (differenceMonths === 0 && hoy.getDate() < birthDate.getDate())
    ) {
        age--;
    } else {
        age = "error with age";
    }
    return age;
});
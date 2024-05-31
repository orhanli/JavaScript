// 1 ages
function person(age) {
    if (age >= 0 && age <= 2) {
        console.log('is a baby');
    }else if (age >= 3 && age <=13) {
        console.log('is a child');
    }else if (age >= 14 && age <= 19) {
        console.log('is a teenager');
    }else if (age >= 20 && age <= 65) {
        console.log('is an adult');
    }else if (age >= 65) {
        console.log('is an elder');
    }else {
        console.log('out of bounds');
    }
}

person(20);
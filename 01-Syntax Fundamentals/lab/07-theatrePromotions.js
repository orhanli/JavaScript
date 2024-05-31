// 7 theatre promotions
function theatre(day, age) {
    let ticket;
    if (day === 'Weekday') {
        if (0 <= age && age <= 18) {
            ticket = 12;
        }else if (18 < age && age <= 64) {
            ticket =  18;
        }else if (64 < age && age <= 122) {
            ticket = 12;
        }else {
            console.log('Error!');
            return;
        }

    }else if (day === 'Weekend') {
        if (0 <= age && age <= 18) {
            ticket = 15;
        }else if (18 < age && age <= 64) {
            ticket =  20;
        }else if (64 < age && age <= 122) {
            ticket = 15;
        }else {
            console.log('Error!');
            return;
        }
    }else if (day === 'Holiday') {
        if (0 <= age && age <= 18) {
            ticket = 5;
        }else if (18 < age && age <= 64) {
            ticket =  12;
        }else if (64 < age && age <= 122) {
            ticket = 10;
        }else {
            console.log('Error!');
            return;
        }
    }
    
    console.log(`${ticket}$`);

}

theatre('Weekday', 42);
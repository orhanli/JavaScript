// 9 fruit
function fruit(fruit, weightGrams, priceKg) {
    let weightKg = weightGrams / 1000;
    money = weightKg * priceKg;
    weightKg = weightKg.toFixed(2);
    money = money.toFixed(2);
    console.log(`I need $${money} to buy ${weightKg} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
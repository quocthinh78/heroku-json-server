const faker = require('faker');
const fs = require('fs');
faker.locale = 'vi';

// console.log("animal,", faker.animal.cat());
// console.log("product", faker.commerce.productName());
const randomCategory = (n) => {
    if (n <= 0) return;
    const catList = [];

    Array.from(new Array(n)).forEach(() => {
        cat = {
            id: faker.random.uuid(),
            name: faker.commerce.productName(),
        };

        catList.push(cat);
    });

    return catList;
};
const ramdomProduct = (category, quanty) => {
    if (quanty <= 0) return [];
    const productList = [];

    for (const cat of category) {
        Array.from(new Array(quanty)).forEach(() => {
            const product = {
                categoryId: cat.id,
                id: faker.random.uuid(),
                name: faker.commerce.productName(),
            };
            productList.push(product);
        });
    }
    return productList;
};
(() => {
    const category = randomCategory(5);
    const products = ramdomProduct(category, 5);
    const db = {
        categories: category,
        products: products,
    };
    fs.writeFile('db.json', JSON.stringify(db), () => {
        console.log('sucess');
    });
})();
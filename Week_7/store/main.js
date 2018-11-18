class Customer {
    constructor(name, balance, debts) {
        this.name = name;
        this.balance = balance;
        this.debts = debts;
    }
    buy() {

    }
    createDebt() {

    }
    robBank() {
        
    }
}

class VIPcustomer extends Customer {}

class Product {
    constructor(name, price, category, units) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.units = units;
    }
}

class ProductVIP extends Product {}

let customers = [];

for (let i = 0; i < 2; i++) {
    let name = prompt('name')
    let balance = prompt('balance')
    customers.push(new VIPcustomer(name, balance))
}

for (let i = 0; i < 2; i++) {
    let name = prompt('name')
    let balance = prompt('balance')
    customers.push(new Customer(name, balance))
}

let products = [];

let productNumber = prompt('how many products we have today')
for (let i = 0; i < productNumber; i++) {
    let name = prompt('name');
    let price = prompt('price');
    let category = prompt('category');
    let units = prompt('units');
    let productType = prompt(' Normal or VIP');
    if (productType == 'Normal') {
        products.push(new Product(name, price, category, units))
    } else if (productType == 'Vip') {
        products.push(new ProductVIP(name, price, category, units))
    }
}

alert('The store is open !')
alert('list of products:')
for (let i = 0; i < products.length; i++) {
    alert(products[i].name + ' ' + products[i].price + ' ' + products[i].category + ' ' + products[i].units)
}

class Customer {
    constructor(name, balance, debts) {
        this.name = name;
        this.balance = balance;
        this.debts = debts;
    }
    buy(price) {
        this.balance -= price
    }
    createDebt(amount, interest) {
        this.balance += amount;
        this.debts += amount + amount * interest;
    }
    robBank() {
        this.balance += 10000;
    }
}

class VIPcustomer extends Customer {
    constructor(name, balance, debts) {
        super(name, balance, debts);
    }
}

class Product {
    constructor(name, price, category, units) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.units = units;
    }
}

class ProductVIP extends Product {
    constructor(name, price, category, units) {
        super(name, price, category, units);
    }
}

let customers = [];

for (let i = 0; i < 2; i++) {
    let name = prompt('name')
    let balance = prompt('balance')
    customers.push(new VIPcustomer(name, balance, null))
}

for (let i = 0; i < 2; i++) {
    let name = prompt('name')
    let balance = prompt('balance')
    customers.push(new Customer(name, balance, null))
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


let customerBuy = null,
    productBuy = null;

while (Infinity) {
    customerBuy = prompt("Welcome to the store, what’s your name");
    if (customerBuy == "store_closed*") {
        break
    }
    alert('list of products:')
    for (let i = 0; i < products.length; i++) {
        alert(products[i].name + ' ' + products[i].price + ' ' + products[i].category + ' ' + products[i].units)
    }
    productBuy = prompt("Welcome to the store, what’s the product");
    let customerObj = customers.find(x => x.name === customerBuy);
    let produdctObj = products.find(x => x.name === productBuy);
    if (!(customerObj instanceof VIPcustomer) && produdctObj instanceof ProductVIP) {
        alert('You are not on the VIP list, sorry');
    } else if (produdctObj === undefined) {
        alert('We don’t have that');
    } else if (produdctObj.units < 1) {
        alert('We ran out of ' + produdctObj.name + ', sorry');
    } else if (customerObj.balance < produdctObj.price) {
        alert("Your credit card does not work, you don't have money");
    } else {
        customerObj.buy(produdctObj.price);
        produdctObj.units--;
        alert('Thank you for your purchase, bye')
    }
}
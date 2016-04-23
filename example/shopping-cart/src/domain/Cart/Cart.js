// LICENSE : MIT
"use strict";
const uuid = require("uuid");
// Cart is Shopping Cart
// Before you bought the product(item), add the product to the cart.
export default class Cart {
    /**
     * @param {Customer} customer
     */
    constructor({customer}) {
        this.id = uuid();
        this.products = [];
        this.customer = customer;
    }

    /**
     *
     * @param {ProductItem} product
     */
    addItem(product) {
        this.products.push(product);
    }

    /**
     * checkout the cart and (pay money) and flush cart
     */
    checkout() {

    }
}
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */

"use strict";
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class SavingsAccount extends Account {

    /**
 * saving account constructor
 * @param {number} number is the account number
 * @param {number} interest is the interest rate of the account
 */
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }
    /**
     *
     * @returns {number} interest
     */
    getInterest() {
        return this._interest;
    }
    /**
     *
     * @param {number} interest any number of interest 
     * @return {number} returns number 
     */
    setInterest(interest) {
        this._interest = interest;
    }
    addInterest() {
        const result =
            this.getBalance() + this.getBalance() * (this._interest / 100);
        this._balance = result;
    }
    /**
     *
     * @returns{undefined}
     */
    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }

    /**
     * tostring method
     * @returns {string} string of the account
     */
    toString() {
        return ("SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest);
    }
}


//module.exports.SavingsAccount = SavingsAccount;
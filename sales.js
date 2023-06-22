"use strict"

console.log("test 1")

const container = document.getElementById("container");
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function randonNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function CookieStand(storeName,minCustomer, maxCustomer, avgCookies,){
    this.storeName = storeName,
    this.minCustomer = minCustomer,
    this.maxCustomer = maxCustomer,
    this.avgCookies = avgCookies,
    this.customersPerHour = [],
    this.cookiesPerHour = [],
    this.totalDailyCookies = 0,
    this.render()
}

CookieStand.prototype.calcCustomerPerHour = function (){
    for (let i = 0; i < hours.length; i++){
        this.customersPerHour.push(randonNum(maxCustomer,minCustomer))
    }
}

CookieStand.prototype.calcCookiesPerHour = function (){
    for (let i = 0; 1 < hours.length; i++){
        const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
        this.cookiesPerHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
}

CookieStand.prototype.render = function(){

this.calcCookiesPerHour()
this.calcCustomerPerHour()

const tableHeader = document.createElement("th")
const tableRow = document.createElement("tr")
tr.appendChild(th)
tableHeader.textContent = this.storeName

for (let i = 0; i < hours.length; i++){
    const tabledata = document.createElement("td")
    tabledata.textContent = this.cookiesPerHour[i]
    tr.appendChild(tabledata);
}

const totalCookies = document.createElement("th")
tableRow.appendChild(totalCookies)
totalCookies.textContent = this.totalDailyCookies

}

const seattleStore = new CookieStand("seattle", 20, 80, 8);
console.log(seattleStore);
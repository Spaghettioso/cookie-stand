"use strict"

// Get our element from the HTML

const container = document.getElementById("container");
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
    storeName: "Seattle",
    minHourlyCust:23,
    maxHourlyCust:65,
    avgCookiesPerSale: 6.3,
    customersPerHour: [],
    avgCookiesPerHour: [],
    totalDailyCookies: 0,
    calcCustomersPerHour: function (){
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(randonNum(this.minHourlyCust, this.maxHourlyCust));
        }
    },
    calcCookiesPerHour: function (){
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale);
            this.avgCookiesPerHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },
    render: function (){
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();

        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        container.appendChild(h3);

        const article = document.createElement("article");
        container.appendChild(article);

        const ul = document.createElement("ul");
        article.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.avgCookiesPerHour[i]} cookies`;
            ul.appendChild(li);
        }
    }
}    

seattle.render();

function randonNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}















// // console.log(seattle.customersPerHour())
// for (let i = 0; i < 14; i++){
//     avgCookiesPerHour.push(seattle.customersPerHour())

// }
// // console.log(avgCookiesPerHour)
// for (let i = 0; i < avgCookiesPerHour.length; i++){
//     avgCookiesPerHour[i]
//     const li = document.createElement(li)
//     li.textcontent(avgCookiesPerHour[i])
//     ul.appendChild(list)
// }



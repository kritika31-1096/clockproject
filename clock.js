/* //date object

//date and time in javascript go with built in date object

//this print current date when we pass no argument
let date =new Date(); //date constructor it gives us time and date
console.log(date);

//Date object equal to 1/1000 seconds
//jan-1-1970 UTC 
//Epoch, also known as Unix timestamps, is the number of 
//seconds (not milliseconds!) that have elapsed since January 
//1, 1970 at 00:00:00 GMT (1970-01-01 00:00:00 GMT). 
//In many modern programming languages, date objects make use of epoch as a 
//starting point from which they compute the inner date value.

//if we pass 0 we will get jan-1-1970
let date1 =new Date(0);
console.log(date1);

//if we pass the below argument then we will get the year 1970
let date2 =new Date(24 * 3600 *1000);
console.log(date2);

//if we want to print some specific date we can pass string
let date3 =new Date("1996-10-31");
console.log(date3);

//===========Date object method=====================

// 1. Date.UTC()
console.log(Date.UTC(0));

// 2. Date.now()
console.log(Date.now());

// 3.Date.parse()
//Parses a string containing a date, and returns the number 
//of milliseconds between that date and midnight,January 1,1970.
console.log(Date.parse("13 oct 1996"));
console.log(new Date("31 oct 1996"));


//=================Date.prototype===================

//1. Date.prototype.getDate()
//2. Date.prototype.getDay()
//3.Date.prototype.getFullYear()
//4.Date.prototype.getHours()
//5.Date.prototype.getMilliseconds()
//6.Date.prototype.getMinutes()
//7.Date.prototype.getMonth()
//8.Date.prototype.getSeconds()
//9.Date.prototype.getTime()
//10.Date.prototype.getTimezoneOffset()

let date4 =new Date()
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getSeconds());  */

//=================================CLOCK PROJECT==========================

/* function DigitalClock(){
    let date =new Date();
    let hour =date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();
    let AmorPm =date.getHours() <12 ? "AM " :"PM" ;
    document.getElementById("clock").innerHTML= `<h1>${hour}:${minutes}:${seconds} ${AmorPm}</h1>`;

}
DigitalClock();
setInterval(DigitalClock, 1000); */


let second =document.querySelector('#second');
let minute =document.querySelector('#minute');

let hour =document.querySelector('#hour');
let digitalClock =document.querySelector('#digitalClock');

function SetClock(){
    let date =new Date();
    let hh= date.getHours();
    let mm =date.getMinutes();
    let ss= date.getSeconds();

    let hourdeg =hh * 30 + mm * 0.5;
    let minutedeg =mm * 6+ss * 0.1;
    let seconddeg =ss*6;
    hour.style.transform= `rotate(${hourdeg}deg)`;
    minute.style.transform= `rotate(${minutedeg}deg)`;
    second.style.transform= `rotate(${seconddeg}deg)`;
    digitalClock.innerHTML= `${hh % 12}: ${mm} : ${hh>12 ? "PM" :"AM"}`;
    
}
setInterval(SetClock, 1000);
SetClock();


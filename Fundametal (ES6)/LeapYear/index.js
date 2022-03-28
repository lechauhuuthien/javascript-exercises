/**
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
 * Flowchart link: https://www.w3resource.com/w3r_images/javascript-basic-image-exercise-6.png
 */

 function leapyear(year)
 {
 return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
 }
 console.log(leapyear(2016));
 console.log(leapyear(2000));
 console.log(leapyear(1700));
 console.log(leapyear(1800));
 console.log(leapyear(100));
 
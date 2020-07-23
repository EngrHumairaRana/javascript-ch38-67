// Chapter 38-42 Question 1
// function power(a,b){
//     Math.pow(a,b)
// }

// Chapter 38-42 Question 2
// function leapYear(year){
//     if (year % 100 == 0){
//         if (leapYear % 400 == 0){
//             alert("It is leap year");
//         }
//     }
//     else if (year % 4 == 0){
//         alert("It is leap year");
//     }
//     else{
//         alert("Not a leap year")
//     }
// }
// var year = prompt("Enter an year");
// year = parseInt(year);
// leapYear(year);

// Chapter 38-42 Question 3
// function calcS(a,b,c){
//     var S = (a+b+c)/2;
//     return S;
// }
// function area(S,a,b,c){
//     var a = S*(S-a)*(S-b)*(S-c)
//     return a;
// }
// var a = +prompt("Enter lengths of sides of a triangle(a)");
// var b = +prompt("Enter lengths of sides of a triangle(b)");
// var c = +prompt("Enter lengths of sides of a triangle(c)");
// var S = calcS(a,b,c);
// var A = area(S,a,b,c);
// alert("Area of triangle is: "+ A);

// Chapter 38-42 Question 4
// function mainFunction(sub1, sub2, sub3){
//     var avg = average(sub1,sub2,sub3);
//     var percent = percentage(avg);
//     alert("The average is: " +avg + "\n" + "The %age is: " + percent ); 
// }
// function average(sub1, sub2, sub3){
//     return (sub1+sub2+sub3)/3;
// }
// function percentage(avg){
//     return avg/100*100;
// }

// var sub1 = +prompt("Enter marks for subject 1");
// var sub2 = +prompt("Enter marks for subject 2");
// var sub3 = +prompt("Enter marks for subject 3");
// mainFunction(sub1,sub2,sub3)


// Chapter 38-42 Question 5
// function indexOf(str, char){
//     for (var i=0; i<str.length; i++){
//         if (str[i] == char){
//             return i;
            
//         }
//     }
//     if (i == str.length){
//         return -1;
//     }
// }

// var str = prompt("Enter a string: ");
// var char = prompt("Which character you want to search");
// var index = indexOf(str,char);
// alert("The char is at index " + index);

// Chapter 38-42 Question 6
// function vowelremove(str){
//     var newstr = "";
//     var vowels = ['a','e','i','o','u'];
    
//     for (var i=0;i<str.length;i++){
//         var flag = 0;
//         for (var j=0; j<5;j++){
    
//             if (vowels[j] != str[i]){
//                 flag ++;
//             }
//             if (flag == 5){
//                 newstr += str[i];
//             }
    
//         }
//     } 
//     return newstr;
// }
// var str = prompt("Enter a sentence");
// alert(vowelremove(str));

// Chapter 38-42 Question 7
// var str = prompt("Enter a sentence");
    
//     var found = 0, count = 0;
//     for (var i=0;i<str.length;i++){
//             if (isVowel(str[i])){
//                     found++;               
//             }
//             else {
//                 found = 0;
//             }
//             if (found == 2){
//                 alert(str[i-1]+str[i]);
//                 found = 1;
//                 count++;
//             }         
//     }
// alert("Total number of occurences: "+count);
// function isVowel(ch){
//     switch (ch){
//         case 'a':
//             return 1
//         case 'e':
//             return 1
//         case 'i':
//             return 1
//         case 'o':
//             return 1
//         case 'u':
//             return 1
//         default:
//             return 0
//     }
// }

// Chapter 38-42 Question 8
// var distance = +prompt("Enter distance between two cities(in km) ");
// var meters = convMeter(distance)
// var feet = convFeet(distance);
// var inches = convInches(distance);
// var cm = convCm (distance);
// function convMeter(dis){
//     return dis * 1000;
// }
// function convFeet(dis){
//     return dis * 3280.84
// }
// function convInches(dis){
//     return dis * 39370.08
// }
// function convCm(dis){
//     return dis * 100000.0032
// }
// alert("Distance in (meter): "+ meters + "\nDistance in (ft): " + feet + "\nDistance in (inches): "+ inches + "\nDistance in (cm): "+ cm );

// Chapter 38-42 Question 9
// var workHours = +prompt("Enter working hours of employee");
// if (workHours>40){
//     overtimeHours = workHours - 40;
//     overtimePay = overtimeHours  * 12;
//     alert("Your overtime pay is: "+ overtimePay);
// }
// else{
//     alert("You have to work more than 40 hours for overtime pay");
// }

// Chapter 38-42 Question 10
// var amount = +prompt ("Enter the amount to withdaw");
// hundred = amount / 100;
// fifty = (amount % 100)/50;
// ten = ((amount % 100)% 50)/10;
// alert("You will have  "+parseInt(hundred)+" hundred notes "+parseInt(fifty)+" fifty notes "+parseInt(ten)+" ten notes");

// Chapter 43-48 Question 3 
// function SomeDeleteRowFunction() {
//     // event.target will be the input element.
//     var td = event.target.parentNode; 
//     var tr = td.parentNode; // the row to be removed
//     tr.parentNode.removeChild(tr);
// }

// Chapter 43-48 Question 5
// var counter = document.getElementById("counter")
// var  count = 0;
// function inc(){
//     count += 1;
//     counter.innerHTML = count;
// };
// function dec(){
//     count = count - 1;
//     counter.innerHTML = count;
// };

// Chapter 49-52 Question 1


// Chapter 49-52 Question 2
// function call(){
//     var less = document.getElementById("less");
//     var more = document.getElementById("more");
//     var btn = document.getElementById("btn");

    
//   if (less.style.display === "none") {
//     less.style.display = "inline";
//     btn.innerHTML = "Read more"; 
//     more.style.display = "none";
//   } else {
//     less.style.display = "none";
//     btn.innerHTML = "Read less"; 
//     more.style.display = "inline";
//   }
// }

// Chapter 49-52 Question 3
// function table(){
    
// }

// Chapter 58-67 Question 1
// (i)
// var div = document.getElementById("main-content")
//(ii)
// var children = div.childNodes;
// var elements = [];
// for (var i=1; i<div.childNodes.length; i+=2) {
//   var child = div.childNodes[i];
//   console.log(child)
// }
//(iii)
// var render = document.getElementsByClassName("render")
// for (var i=0; i<render.length; i+=1) {
//     var data = render[i]
//     document.write(data.innerHTML)
// }
//(iv)
// document.getElementById("first-name").value = "Humaira";
// (v)
// document.getElementById("last-name").value = "Rana";
// document.getElementById("email").value = "engr.humairarana@gmail.com";

// Chapter 53-58 Question 1
// function showImage(e){
//     var modalImage = document.getElementById("modalImage")
//     modalImage.src = e.src

// }

// Chapter 53-58 Question 2
// function zoomin(){
//     var para = document.getElementById("para")

//     function css( element, property ) {
//         return window.getComputedStyle( element, null ).getPropertyValue( property );
//     }
//     var currFont = css( para, 'font-size' );
//     var newFont = " ";
//     for (var i = 0; currFont[i] != 'p'; i++){
//             newFont += currFont[i];
//     }
//     newFont = parseInt(newFont);
//     para.style.fontSize = (newFont + 10) +"px";
// }

// function zoomout(){
//     var para = document.getElementById("para")
//     function css( element, property ) {
//         return window.getComputedStyle( element, null ).getPropertyValue( property );
//     }
//     var currFont = css( para, 'font-size' );
//     var newFont = " ";
//     for (var i = 0; currFont[i] != 'p'; i++){
//             newFont += currFont[i];
//     }
//     newFont = parseInt(newFont);
//     para.style.fontSize = (newFont - 10) +"px";
// }

// Chapter 58-67 Question 2
// (i)
// document.write(document.getElementById("form-content").nodeType)
// (ii)
// document.write(document.getElementById("lastName").nodeType)
// document.write(document.getElementById("lastName").childNodes[0].nodeType)
// (iii)
// document.getElementById("lastName").innerHTML = "Last Name: Santa"
// (iv)
// console.log(document.getElementById("main-content").firstChild)
// console.log(document.getElementById("main-content").lastChild)
// (v)
// console.log(document.getElementById("lastName").nextSibling)
// console.log(document.getElementById("lastName").previousSibling)
// (vi)
// console.log(document.getElementById("email").parentNode)
// console.log(document.getElementById("email").nodeType)


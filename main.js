/**
 * 1.
 * Ex1:
 *  let a = 5;
    let b = 6;
    [a, b] = [b, a];
    console.log(a, b);
   Ex2:
    let a = 1;
    let b = 2;
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b);
------------------------------------------------------------------------------------------------
   2.
   const s = "Hello beauty there";
   const news = s.split(" ");
   console.log(news);

---------------------------------------------------------------------------------------------
   3.
    // // ... :Rest
    // const array = [4, 5, 7, -8];
    // var [a, b, ...rest] = array;
    // console.log(a);
    // console.log(b);
    // console.log(rest);

    // //...:Spread
    // const fe = ["HTML", "CSS", "JS", "ReactJS"];
    // const be = ["Node JS", "PHP"];
    // const web = [...fe, ...be];
    // console.log(web);
---------------------------------------------------------------------------------------------
   4.
   let items = ["Jeans", "T-Shirt", "Socks"];
// let loop = true;
// while (loop) {
//   let userInput = prompt(
//     "Hi there, welcom to shop admin panel, what do you want(C, R, U, D)?"
//   );

//   if (userInput === "r") {
//     let str1 = "The current items are: \n";
//     for (let i = 0; i < items.length; i++) {
//       str1 += `${i + 1}. ${items[i]} \n`;
//     }
//     alert(str1);
//   } else if (userInput === "c") {
//     let createInput = prompt("Enter the name of the new item");
//     alert("Done");
//     items.push(createInput);
//   } else if (userInput === "u") {
//     let updateIndex = Number(prompt("Enter the position you want to update"));
//     let updateValue = prompt("Enter the new name");
//     alert("Done");
//     items.splice(updateIndex - 1, 1, updateValue);
//   } else if (userInput === "d") {
//     let deleteIndex = Number(prompt("Enter the position you want to delete"));
//     alert("Done");
//     items.splice(deleteIndex - 1, 1);
//   } else {
//     alert("This command is not supported");
//   }
//   let confirm = prompt("Do you want to continue?(Y/N)");
//   if (confirm == "N") {
//     loop = false;
//   }
// }

//--------------------------------------------------------------------------------------------------
   5.
   let stringNum = prompt("Enter a squence of Number, separated of commas (,)");
   let arrayNum = stringNum.split(",");
   let arrayNum2 = arrayNum.map(function (a) {
   return Number(a);
   });
   function sum(array) {
   let tong = array.reduce(function (save, currentValue) {
      return save + currentValue;
   }, 0);
   return tong;
   }
   alert(`The sum of them is ${sum(arrayNum2)}`);

   //------------------------------------------------------------------------------------------------
   6.
   let stringNum = prompt("Enter a squence of Number, separated of commas (,)");
   let arrayNum = stringNum.split(",");
   let arrayNum2 = arrayNum.map(function (a) {
   return Number(a);
   });
   // console.log(...arrayNum2);
   let minNum = Math.min(...arrayNum2);
   alert(`The smallest number is ${minNum}`);
  //--------------------------------------------------------------------------------------------------
  
   7.
   const arr = [3, 4, 6, -9, 10, -88, 2];
   let userInput = Number(prompt("Enter a number"));
   let find = arr.find(function (e) {
   return e === userInput;
   });
   if (find) {
   let findindex = arr.findIndex(function (e) {
      return e === userInput;
   });
   alert(`${userInput} is FOUND in my array at index ${findindex}`);
   } else {
   alert(`${userInput} is NOT found in my array`);
   }
   //------------------------------------------------------------------------------------------------
   10.
   let nameStr = prompt("Enter a sequence of names");
   let nameArr = nameStr.split(",");
   let newNameArr = nameArr
   .map(function (element) {
      return `<${element}>`;
   })
   .join(",");
   alert(`${nameStr} => ${newNameArr}`);

   //------------------------------------------------------------------------------------------------
   11.
   let numberStr = prompt("Enter a sequence of number");
   let numberArr = numberStr.split(",");
   let newNumArr = numberArr.map(function (element) {
   return Number(element);
   });
   let newNumArr2 = newNumArr.filter(function (e) {
   return e % 2 !== 0;
   });
   console.log(newNumArr);
   console.log(newNumArr2);
   alert(`${numberStr} => ${newNumArr2.join(", ")}`);

 */
//

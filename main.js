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
   let loop = true;
   while (loop) {
   let userInput = prompt(
      "Hi there, welcom to shop admin panel, what do you want(C, R, U, D)?"
   ).toLowerCase();

   if (userInput === "r") {
      let str1 = "The current items are: \n";
      for (let i = 0; i < items.length; i++) {
         str1 += `${i + 1}. ${items[i]} \n`;
      }
      alert(str1);
   } else if (userInput === "c") {
      let createInput = prompt("Enter the name of the new item");
      alert("Done");
      items.push(createInput);
   } else if (userInput === "u") {
      let updateIndex = Number(prompt("Enter the position you want to update"));
      let updateValue = prompt("Enter the new name");
      alert("Done");
      items.splice(updateIndex - 1, 1, updateValue);
   } else if (userInput === "d") {
      let deleteIndex = Number(prompt("Enter the position you want to delete"));
      alert("Done");
      items.splice(deleteIndex - 1, 1);
   } else {
      alert("This command is not supported");
   }
   let confirm = prompt("Do you want to continue?(Y/N)");
   if (confirm == "N") {
      loop = false;
   }
   }

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

   8.
   let sizeList = [5, 7, 300, 90, 24, 50, 75];
   function readAll(sizeList, str) {
   str += "\n";
   sizeList.forEach(function (e) {
      str += `${e} `;
   });
   str += "\n";
   return str;
   }

   function changeSize(sizeList) {
   let newSize = sizeList.map(function (e) {
      //  console.log(e);
      return e + 50;
   });
   return newSize;
   }

   function maxSize(arr) {
   let max = Math.max(...arr);
   return max;
   }

   // console.log(changeSize());
   let str1 = "Hello, my name is Thu Ha and here is my sheep sizes:";
   let str2 = "After shearing, here is my flock";
   let str3 ="One month has, passed, my sheeps have grown, here are their sizes:\n";
   let notice = `Now my biggest sheep has size ${maxSize(sizeList)}, let shave it. \n`;
   let str = readAll(sizeList, str1) + notice;
   sizeList[sizeList.indexOf(maxSize(sizeList))] = 8;

   str += readAll(sizeList, str2);
   alert(str);


   for (let i = 1; i <= 3; i++) {
   sizeList = changeSize(sizeList);
   let newStr = 
   `MONTH ${i}
   ${readAll(sizeList, str3)}
   Now my biggest sheep has size ${maxSize(sizeList)}, let shave it.\n `;
   sizeList[sizeList.indexOf(maxSize(sizeList))] = 8;
   newStr += readAll(sizeList, str2);
   alert(newStr);
   }
   function sumArr(arr) {
      let tong = arr.reduce(function(save,currentValue){
         return save + currentValue
      },0); 
      return tong;
   }
   console.log(sizeList)
   alert(
      `My flock has size in total: ${sumArr(sizeList)}
   I would get ${sumArr(sizeList)} * 2$ = ${sumArr(sizeList) * 2}$`
      );

   //------------------------------------------------------------------------------------------------
   9.
   function demo(){
      reset();
      const colors = ["red", "gray", "blue", "purple", "cyan"];
      let path = 0;
      for(let i = 0; i < 5; i++){
         color(colors[i]);
         for(let j = 0; j < 4; j++){
            fd(path);
            right(90);
         }
         path += 50;
      }
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

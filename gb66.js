
            


//-----------------------------------
//------pyramid 1/3/5/7/9------///////
//----------------------------------


// let height = 5; 
// for (let i = 1; i <= height; i++) {
  
//   let row = '';
//   for (let j = 1; j <= height - i; j++) {
//     row += ' &nbsp';
//   }

  
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += '*';
//   }

  
//   document.write(row);
//   document.write("<br>");
// }

//------------------------------------









//--------------------------------//
//   1
//   23
//   456
//   78910
//----------------------------------

// let height = 4;  
// let currentNumber = 1; 

// for (let i = 1; i <= height; i++) {
//   let row = '';

  
//   for (let j = 1; j <= i; j++) {
//     row += currentNumber;
//     currentNumber++; 
//   }

  
//   document.write(row + '<br>');
// }

// ----------------------------------//






//-----------------------------------//
   //---1
    //  123
    //  12345
    //  1234567
    //  123456789
//---------------------------------------

// let height = 5; 

// for (let i = 1; i <= height; i++) {
//   let row = '';

  
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += j;
//   }

  
//   document.write(row + '<br>');
// }

  
// ------------------------------------








//-------------------------------------
//--------holo inverted triangle--/////
//----------------------------------


// let height = 5; 
// for (let i = height; i >= 1; i--) {
  
//   let row = '';

  
//   for (let j = 1; j <= height - i; j++) {
//     row += "&nbsp&nbsp";
//   }

  
//   for (let j = 1; j <= 2 * i - 1; j++) {
    
//     if (j === 1 || j === 2 * i - 1 || i === height) {
//       row += '*';
//     } else {
//       row += '&nbsp&nbsp';
//     }
//   }

  
//   document.write(row + '<br>');
// }

//-----------------------------------




//-----------------------------------
//===hello thirichidal==/////
//------------------------------

// let str="hello";
// let final='';
// for(let i=str.length-1;i>=0;i--){
//   final+=str[i]
// }

// document.write(final)

//-----------------------------------------//






//----------------------------------------
// find the grade for input mark
//---------------------------------

// let mark =40;

// if (mark>=90 && mark <=100){
//     document.write("grade s");
// }else if(mark>=80 && mark <=90){
//     document.write("grade A");
// }else if(mark>=70 && mark <=80){
//     document.write("grade B");
// }else if(mark>=60 && mark <=70){
//     document.write("grade C");
// }else if(mark>=50 && mark <=60){
//     document.write("grade D");
// }else if(mark>=40 && mark <=50){
//     document.write("grade E");
// }else if(mark>=0 && mark <=40){
//     document.write("failed");
// }else{
//    document.write("invalid number");
// }


//-----------------------------------------------------//





//--------------------------------
//leap or not???????????????????
//-------------------------------

// let year=2024;

// if(year%4===0&&year%100!==0 || year%400===0){
//     document.write("leap year");
// }else{
//     document.write("not leap year");
// }

//--------------------------------------------------------//



//------------------------------------------
//  find the positive or negative number//
//-------------------------------------------

// let inp=1;
// if(inp>0){
//     document.write(" positive number")
// }else if(inp<0){
//     document.write(" negative number")
// }else{
//     document.write("zero")
// }

//---------------------------------------------------------//


//----------------------------
//find the total even or odd
//----------------------------


// let arr=[1,2,3,4,5,6,7,8,9];
// let even=0,odd=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even++
//     }else{
//         odd++
//     }
// }
// document.write("even numbers"+even, " " +" " +"odd numbers"+odd)

//----------------------------------------------------



//-------------------------------------------
// Array-il biggest Number kandupidikkuka
//--------------------------------------------


// let ar=[6,5,4,3,2,1];
// let max=ar[0];

// for(let i=1;i<ar.length;i++){
//     if(ar[i]>max){
//         max=ar[i];
//     }
// }
// document.write("biggest Number:",max);

//--------------------------------------------------------------------



//--------------------------------------
//Sorting an Array (Bubble Sort)
//---------------------------------------


// let arr = [5, 2, 9, 1, 5, 6];
// let n=arr.length,i,j,temp;

// for ( i = 0; i < n; i++) {
//   for ( j = 0; j < n - 1-i; j++) {
//     if (arr[j] > arr[j + 1]) {
     
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// document.write("Sorted Array:", arr);

//-----------------------------------------------


//-----------------------------------------------
// Checking if an Element Exists???????????????
//-----------------------------------------------

// let arr=[1,2,3,4,5];
// let target=9;
// let found=false;

// for(let i=0;i<arr.length;i++){
//     if (arr[i]===target){
//         found=true;
//         break;
//     }
// }
// document.write(target ,"exists:",found);

//---------------------------------------------------



//----------------------------------------------
//reversing array
//--------------------------------

// var arr=[1,2,3,4,5];
// var n=arr.length;
// var revers=[];

// for(var i=n-1;i>=0;i--){
//     revers[revers.length]=arr[i];

// }
// document.write("reversed array:"+revers );

//-------------------------------------------------------



// for (i=0;i<=5;i++){
//     for(j=0;j<=5;j++){ 
//        if(i==0 || j==0 ||j==5||i==5){
//         document.write("*");
//        }else{
//         document.write("&nbsp&nbsp");
//        }
//     }
// document.write("<br>");
// }   





// for(i=0;i<=5;i++){

//     for(j=0;j<=5;j++){
//         if(i==5 || j==0 || i==j){
//             document.write("*");
//         }else{
//             document.write("&nbsp&nbsp");
//         }
        
// }
// document.write("<br>");

// }





// for(i=0;i<=5;i++){
//     for(j=0;j<10;j++){

//         if(i==5||j==0||j==i){
            
//             document.write("*");
                     
//     }else{
//         document.write("&nbsp&nbsp&nbsp");
    
//     }

// }
//     document.write("<br>");
// }


// let rows = 5; // Number of rows for the pyramid

// for (let i = 0; i < rows; i++) {
//     // Print spaces for alignment
//     for (let j = 0; j < rows - i - 1; j++) {
//         document.write("&nbsp;&nbsp;");
//     }

//     // Print the hollow stars
//     for (let j = 0; j < 2 * i + 1; j++) {
//         if (j == 0 || j == 2 * i || i == rows - 1) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }

//     // Move to the next line
//     document.write("<br>");
// }



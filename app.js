// function userData(){
//    var dateStored = document.getElementById("Date").value;
//     var monthStred = document.getElementById("Month").value;
//     var YearStored = document.getElementById("Year").value;

//     var calender = new Date();
    
//     var finalAge =  calender.getFullYear() - YearStored  
    
//     console.log(finalAge);
    


//   let mon = ["januarary","feburary" , "march", "april", "may", "june" , "july", "August", "september", "october", "november", "december"];
  
//   for(var i = 0; i<mon.length;i++){

//     if(monthStred == mon[i]){
//        monthStred = i
//     }
//   }

// var monthFinal = 0;

//   if(monthStred < calender.getMonth()){

//     for(var j = monthStred; j <= calender.getMonth(); j++){
//         monthFinal =  ++monthFinal
//     }
// }
// else{

//     for(var k = monthStred; k < calender.getMonth()+monthStred+1;k++){
//       ++monthFinal
//     }
//   }
// console.log(monthFinal)
  

// }

// function userData(){
    
//   //  Get input values from html to Js by given a id --->

   
//   var dateGet = document.getElementById("Date").value;
//   var monthGet = document.getElementById("Month").value;
//   var yearGet = document.getElementById("Year").value;

//   //  input Month Date Year Stored in a Calender ---> 

// //   Users Date time Yaers in this Calender
//    var calender = new Date(dateGet + monthGet + yearGet);
   
   
//    var d1 = calender.getDate();
//    var m1 = calender.getMonth();
//    var y1 = calender.getFullYear();
   
   
//    //   Cureent Date time Yaers in this Calender2
   
//    var calender2 = new Date();
 

//    var d2 = calender2.getDate();
//    var m2 = calender2.getMonth();
//    var y2 = calender2.getFullYear();
   

//    console.log(d2)
//   //  Final result Date years months variable

  
// }

function age() {
  var dd = document.getElementById("date").value;
  var mm = document.getElementById("month").value;
  var yy = document.getElementById("year").value;

  var date = new Date();
  var dd2 = date.getDate();
  var mm2 = 1 + date.getMonth();
  var yy2 = date.getFullYear();
  var month =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,];

  if(dd > dd2) {
      dd2 = dd2 + month[mm2-1];
      mm2 = mm2 -1;
  }

  if(mm>mm2) {
      mm2 = mm2 +12;
      yy2 = yy2 -1;
  }
  var d = dd2 - dd;
  var m = mm2 -mm;
  var y = yy2 - yy;
  document.getElementById('age').innerHTML ='Your age is '+y+' Years '+m+' Months '+d+' Days '  ;
}


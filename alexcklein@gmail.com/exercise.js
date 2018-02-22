var exercise = {};


exercise.roman = function(time){
    var hours = time.getHours();
    var minutes = time.getMinutes(); 
    var seconds = time.getSeconds();
    if(hours<10){
        hours = "0" + hours};
    if(minutes<10){
        minutes = "0" + minutes};
    if(seconds<10){
        seconds = "0" + seconds};

    var secondsArray=[];
    var secondsString = seconds.toString();
    secondsArray = secondsString.split("")

    var minutesArray=[];
    var minutesString = minutes.toString();
    minutesArray = minutesString.split("")

    var hoursArray=[];
    var hoursString = hours.toString();
    hoursArray = hoursString.split("")

    var column1 = hoursArray[0];
    var column2 = hoursArray[1];
    var column3 = minutesArray[0];
    var column4 = minutesArray[1];
    var column5 = secondsArray[0];
    var column6 = secondsArray[1];

    console.log(column6);

    var roman={
        hour_co11 : column1,
        hour_co12 : column2,
        min_col1 : column3,
        min_col2 : column4,
        sec_col1 : column5,
        sec_col2 : column6,
    }

    console.log(roman);
    return roman;

} 

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------


exercise.binary = function(time){

    var hours = time.getHours();
    var minutes = time.getMinutes(); 
    var seconds = time.getSeconds();
    if(hours<10){
        hours = "0" + hours};
    if(minutes<10){
        minutes = "0" + minutes};
    if(seconds<10){
        seconds = "0" + seconds};

    var secondsArray=[];
    var secondsString = seconds.toString();
    secondsArray = secondsString.split("")

    var minutesArray=[];
    var minutesString = minutes.toString();
    minutesArray = minutesString.split("")

    var hoursArray=[];
    var hoursString = hours.toString();
    hoursArray = hoursString.split("");

    var column1 = hoursArray[0];
    var column2 = hoursArray[1];
    var column3 = minutesArray[0];
    var column4 = minutesArray[1];
    var column5 = secondsArray[0];
    var column6 = secondsArray[1];
    
    var binary = {
        column1:{},
        column2:{},
        column3:{},
        column4:{},
        column5:{},
        column6:{},
    };
//you can't create an object property two levels deep 
    if(column1 == '0'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'off';
        binary.column1.position2= 'off';
        binary.column1.position1= 'off';
    } 
    if(column1 == '1'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'off';
        binary.column1.position2= 'off';
        binary.column1.position1= 'on';
    } 
    if(column1 == '2'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'off';
        binary.column1.position2= 'on';
        binary.column1.position1= 'off';
    } 
    if(column1 == '3'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'off';
        binary.column1.position2= 'on';
        binary.column1.position1= 'on';
    } 
    if(column1 == '4'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'on';
        binary.column1.position2= 'off';
        binary.column1.position1= 'off';
    } 
    if(column1 == '5'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'on';
        binary.column1.position2= 'off';
        binary.column1.position1= 'on';
    } 
    if(column1 == '6'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'on';
        binary.column1.position2= 'on';
        binary.column1.position1= 'off';
    } 
    if(column1 == '7'){
        binary.column1.position8= 'off';
        binary.column1.position4= 'on';
        binary.column1.position2= 'on';
        binary.column1.position1= 'on';
    } 
    if(column1 == '8'){
        binary.column1.position8= 'on';
        binary.column1.position4= 'off';
        binary.column1.position2= 'off';
        binary.column1.position1= 'off';
    } 
    if(column1 == '9'){
        binary.column1.position8= 'on';
        binary.column1.position4= 'off';
        binary.column1.position2= 'off';
        binary.column1.position1= 'on';
    } 

    //column 2
    if(column2 == '0'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'off';
        binary.column2.position2= 'off';
        binary.column2.position1= 'off';
    } 
    if(column2 == '1'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'off';
        binary.column2.position2= 'off';
        binary.column2.position1= 'on';
    } 
    if(column2 == '2'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'off';
        binary.column2.position2= 'on';
        binary.column2.position1= 'off';
    } 
    if(column2 == '3'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'off';
        binary.column2.position2= 'on';
        binary.column2.position1= 'on';
    } 
    if(column2 == '4'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'on';
        binary.column2.position2= 'off';
        binary.column2.position1= 'off';
    } 
    if(column2 == '5'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'on';
        binary.column2.position2= 'off';
        binary.column2.position1= 'on';
    } 
    if(column2 == '6'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'on';
        binary.column2.position2= 'on';
        binary.column2.position1= 'off';
    } 
    if(column2 == '7'){
        binary.column2.position8= 'off';
        binary.column2.position4= 'on';
        binary.column2.position2= 'on';
        binary.column2.position1= 'on';
    } 
    if(column2 == '8'){
        binary.column2.position8= 'on';
        binary.column2.position4= 'off';
        binary.column2.position2= 'off';
        binary.column2.position1= 'off';
    } 
    if(column2 == '9'){
        binary.column2.position8= 'on';
        binary.column2.position4= 'off';
        binary.column2.position2= 'off';
        binary.column2.position1= 'on';
    } 

     //column 3
     if(column3 == '0'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'off';
        binary.column3.position2= 'off';
        binary.column3.position1= 'off';
    } 
    if(column3 == '1'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'off';
        binary.column3.position2= 'off';
        binary.column3.position1= 'on';
    } 
    if(column3 == '2'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'off';
        binary.column3.position2= 'on';
        binary.column3.position1= 'off';
    } 
    if(column3 == '3'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'off';
        binary.column3.position2= 'on';
        binary.column3.position1= 'on';
    } 
    if(column3 == '4'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'on';
        binary.column3.position2= 'off';
        binary.column3.position1= 'off';
    } 
    if(column3 == '5'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'on';
        binary.column3.position2= 'off';
        binary.column3.position1= 'on';
    } 
    if(column3 == '6'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'on';
        binary.column3.position2= 'on';
        binary.column3.position1= 'off';
    } 
    if(column3 == '7'){
        binary.column3.position8= 'off';
        binary.column3.position4= 'on';
        binary.column3.position2= 'on';
        binary.column3.position1= 'on';
    } 
    if(column3 == '8'){
        binary.column3.position8= 'on';
        binary.column3.position4= 'off';
        binary.column3.position2= 'off';
        binary.column3.position1= 'off';
    } 
    if(column3 == '9'){
        binary.column3.position8= 'on';
        binary.column3.position4= 'off';
        binary.column3.position2= 'off';
        binary.column3.position1= 'on';
    } 

    //column 4
    if(column4 == '0'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'off';
        binary.column4.position2= 'off';
        binary.column4.position1= 'off';
    } 
    if(column4 == '1'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'off';
        binary.column4.position2= 'off';
        binary.column4.position1= 'on';
    } 
    if(column4 == '2'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'off';
        binary.column4.position2= 'on';
        binary.column4.position1= 'off';
    } 
    if(column4 == '3'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'off';
        binary.column4.position2= 'on';
        binary.column4.position1= 'on';
    } 
    if(column4 == '4'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'on';
        binary.column4.position2= 'off';
        binary.column4.position1= 'off';
    } 
    if(column4 == '5'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'on';
        binary.column4.position2= 'off';
        binary.column4.position1= 'on';
    } 
    if(column4 == '6'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'on';
        binary.column4.position2= 'on';
        binary.column4.position1= 'off';
    } 
    if(column4 == '7'){
        binary.column4.position8= 'off';
        binary.column4.position4= 'on';
        binary.column4.position2= 'on';
        binary.column4.position1= 'on';
    } 
    if(column3 == '8'){
        binary.column3.position8= 'on';
        binary.column3.position4= 'off';
        binary.column3.position2= 'off';
        binary.column3.position1= 'off';
    } 
    if(column4 == '9'){
        binary.column4.position8= 'on';
        binary.column4.position4= 'off';
        binary.column4.position2= 'off';
        binary.column4.position1= 'on';
    } 

//column 5
if(column5 == '0'){
    binary.column5.position8= 'on';
    binary.column5.position4= 'on';
    binary.column5.position2= 'on';
    binary.column5.position1= 'on';
} 
if(column5 == '1'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'off';
    binary.column5.position2= 'off';
    binary.column5.position1= 'on';
} 
if(column5 == '2'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'off';
    binary.column5.position2= 'on';
    binary.column5.position1= 'off';
} 
if(column5 == '3'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'off';
    binary.column5.position2= 'on';
    binary.column5.position1= 'on';
} 
if(column5 == '4'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'on';
    binary.column5.position2= 'off';
    binary.column5.position1= 'off';
} 
if(column5 == '5'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'on';
    binary.column5.position2= 'off';
    binary.column5.position1= 'on';
} 
if(column5 == '6'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'on';
    binary.column5.position2= 'on';
    binary.column5.position1= 'off';
} 
if(column5 == '7'){
    binary.column5.position8= 'off';
    binary.column5.position4= 'on';
    binary.column5.position2= 'on';
    binary.column5.position1= 'on';
} 
if(column5 == '8'){
    binary.column5.position8= 'on';
    binary.column5.position4= 'off';
    binary.column5.position2= 'off';
    binary.column5.position1= 'off';
} 
if(column5 == '9'){
    binary.column5.position8= 'on';
    binary.column5.position4= 'off';
    binary.column5.position2= 'off';
    binary.column5.position1= 'on';
} 

//column 6
if(column6 == '0'){
    binary.column6.position8= 'on';
    binary.column6.position4= 'on';
    binary.column6.position2= 'on';
    binary.column6.position1= 'on';
} 
if(column6 == '1'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'off';
    binary.column6.position2= 'off';
    binary.column6.position1= 'on';
} 
if(column6 == '2'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'off';
    binary.column6.position2= 'on';
    binary.column6.position1= 'off';
} 
if(column6 == '3'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'off';
    binary.column6.position2= 'on';
    binary.column6.position1= 'on';
} 
if(column6 == '4'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'on';
    binary.column6.position2= 'off';
    binary.column6.position1= 'off';
} 
if(column6 == '5'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'on';
    binary.column6.position2= 'off';
    binary.column6.position1= 'on';
} 
if(column6 == '6'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'on';
    binary.column6.position2= 'on';
    binary.column6.position1= 'off';
} 
if(column6 == '7'){
    binary.column6.position8= 'off';
    binary.column6.position4= 'on';
    binary.column6.position2= 'on';
    binary.column6.position1= 'on';
} 
if(column6 == '8'){
    binary.column6.position8= 'on';
    binary.column6.position4= 'off';
    binary.column6.position2= 'off';
    binary.column6.position1= 'off';
} 
if(column6 == '9'){
    binary.column6.position8= 'on';
    binary.column6.position4= 'off';
    binary.column6.position2= 'off';
    binary.column6.position1= 'on';
} 

    return binary;
    };
    

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------


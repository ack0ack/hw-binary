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
    var column5 = minutesArray[0];
    var column6 = minutesArray[1];

    console.log(column1);

    var roman={
        hour_co11 : column1,
        hour_co12 : column2,
        min_co11 : column3,
        min_co12 : column4,
        sec_co11 : column5,
        sec_co12 : column6,
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
    var column5 = minutesArray[0];
    var column6 = minutesArray[1];
    
    var binary = {
        column1:{},
        column2:{},
        column3:{},
        column4:{},
        column5:{},
        column6:{},
    };

    if(column1 == '1'){
        binary.column1.position8= 'on';
        binary.column1.position4= 'on';
        binary.column1.position2= 'off';
        binary.column1.position1= 'on';
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


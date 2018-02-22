var exercise = {};


exercise.roman = function(time){

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

};

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
    console.log(seconds);

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
    
    var binary = {
        if(column1===0){
            col1.position8= 'off';
            col1.position4= 'off';
            col1.position2= 'off';
            col1.position1= 'off';
        }
        if(col1===1){
            col1.position8= 'off';
            col1.position4= 'off';
            col1.position2= 'off';
            col1.position1= 'on';
        }
        if(col1===2){
            col1.position8= 'off';
            col1.position4= 'off';
            col1.position2= 'on';
            col1.position1= 'off';
        }
        if(col1===3){
            col1.position8= 'off';
            col1.position4= 'off';
            col1.position2= 'on';
            col1.position1= 'on';
        }
        if(col1===4){
            col1.position8= 'off';
            col1.position4= 'on';
            col1.position2= 'off';
            col1.position1= 'off';
        }
        if(timeNumbers[0]===5) {
            col1.position8= 'off';
            col1.position4= 'on';
            col1.position2= 'off';
            col1.position1= 'on';
        }
        if(timeNumbers[0]===6) {
            col1.position8= 'off';
            col1.position4= 'on';
            col1.position2= 'on';
            col1.position1= 'off';
        }
        if(timeNumbers[0]===7) {
            col1.position8= 'off';
            col1.position4= 'on';
            col1.position2= 'on';
            col1.position1= 'on';
        }
        if(timeNumbers[0]===8) {
            col1.position8= 'on';
            col1.position4= 'off';
            col1.position2= 'off';
            col1.position1= 'off';
        }
        if(timeNumbers[0]===9) {
            col1.position8= 'on';
            col1.position4= 'off';
            col1.position2= 'off';
            col1.position1= 'on';


            if(timeNumbers[1]===0) {
                col1.position8= 'off';
                col1.position4= 'off';
                col1.position2= 'off';
                col1.position1= 'off';
            }
            if(timeNumbers[1]===1) {
                col1.position8= 'off';
                col1.position4= 'off';
                col1.position2= 'off';
                col1.position1= 'on';
            }
            if(timeNumbers[1]===2) {
                col1.position8= 'off';
                col1.position4= 'off';
                col1.position2= 'on';
                col1.position1= 'off';
            }
            if(timeNumbers[1]===3) {
                col1.position8= 'off';
                col1.position4= 'off';
                col1.position2= 'on';
                col1.position1= 'on';
            }
            if(timeNumbers[1]===4) {
                col1.position8= 'off';
                col1.position4= 'on';
                col1.position2= 'off';
                col1.position1= 'off';
            }
            if(timeNumbers[1]===5) {
                col1.position8= 'off';
                col1.position4= 'on';
                col1.position2= 'off';
                col1.position1= 'on';
            }
            if(timeNumbers[1]===6) {
                col1.position8= 'off';
                col1.position4= 'on';
                col1.position2= 'on';
                col1.position1= 'off';
            }
            if(timeNumbers[1]===7) {
                col1.position8= 'off';
                col1.position4= 'on';
                col1.position2= 'on';
                col1.position1= 'on';
            }
            if(timeNumbers[1]===8) {
                col1.position8= 'on';
                col1.position4= 'off';
                col1.position2= 'off';
                col1.position1= 'off';
            }
            if(timeNumbers[1]===9) {
                col1.position8= 'on';
                col1.position4= 'off';
                col1.position2= 'off';
                col1.position1= 'on';
    }

    return binary;
    }
    

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

};
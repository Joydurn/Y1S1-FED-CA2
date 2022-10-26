/*This script samples the current time for 1 second, 
then changes the greeting of the page to match the time 
(Good morning, afternoon or evening)*/

//Function which allows program to sleep for 200ms 5 times (therefore delay 1 second)
function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}


var greeting;
var i=1;

do{
    var currentDate = new Date();
    var hours = currentDate.getHours();
    /*If before 12pm, it is morning*/
    if (hours < 12){
        greeting = 'Good Morning';
    }
    /*If between 12pm and 5pm, it is afternoon*/
    else if (hours >= 12 && hours <= 17){
        greeting = 'Good Afternoon';
    }
    /*If between 5pm and 12am, it is evening*/
    else if (hours >= 17 && hours <= 24){
        greeting = 'Good Evening';
    }
    /*Change greeting message accordingly*/
    document.getElementById('greeting').innerHTML ='<b>' + greeting + '</b> and welcome to my website!';
    /*Recompute every  fifth second for 1 second*/
    wait(200);
    i++;
}while(i<5);



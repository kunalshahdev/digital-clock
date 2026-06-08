function showTime(){
    var currentTime = new Date();


    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if(hours<10){
        hours = "0" + hours;
        
    }

    if(minutes<10){
        minutes = "0" + minutes;

    }

    if(seconds<10){
        seconds = "0" + seconds;

    }
    var time = hours + ":" + minutes + ":" + seconds;
 document.getElementById("clock").innerHTML = time;
 
}

showTime();
setInterval(showTime, 1000);

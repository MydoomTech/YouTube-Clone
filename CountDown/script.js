const endDate = new Date("1 Sep , 2025 20:00:00").getTime();
const strtDate = new Date().getTime();




let x = setInterval(function updateTimer(){

    const currDate =  new Date().getTime();
     
    const distCover =  currDate-strtDate;

    const distPending = endDate - currDate;

    const days = Math.floor((distPending / (24*60*60*1000)));
    const hrs = Math.floor((distPending%(24*60*60*1000))/ (60*60*1000) );
    const min = Math.floor((distPending % (60 * 60 * 1000))/(60*1000));
    const secs = Math.floor((distPending %( 60 *1000)) / (1000))


    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hrs;
    document.querySelector("#minutes").innerHTML = min;
    document.querySelector("#seconds").innerHTML = secs;


    const totalDist = endDate - strtDate;

    const percentageDistance = (distCover/totalDist)*100;

    document.getElementsByClassName("progress-bar").style.width = percentageDistance + "%";


    if(distPending < 0){
        clearInterval(x);
        document.getElementsByClassName("box-contener").innerHTML = "EXPIRED";
        document.getElementsByClassName("progress-bar").style.width  = "100%";

    }

}, 1000);
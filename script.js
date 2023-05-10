// function displayTime(){
//     let time =new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML=time;
// }
// setInterval(displayTime, 1000);

let hour=document.getElementById('hour');

let mins=document.getElementById('minute');

let secs=document.getElementById('second');

let day=document.getElementById('day');

let datestr=document.getElementById('datestr');

let meridium=document.getElementById('meridium');
function setTime(){
    let dataObj=new Date();

    let hours=dataObj.getHours();
    let minutes=dataObj.getMinutes();
    let seconds=dataObj.getSeconds();
    let weekday=dataObj.getDay();
    let year=dataObj.getFullYear();
    let month=dataObj.getMonth();
    let date=dataObj.getDate();

    hour.textContent=format(hours);
    mins.textContent=format(minutes);
    secs.textContent=format(seconds);

    day.textContent=returnday(weekday);
    datestr.textContent=format(date) + "/" +format(month+1)+"/"+format(year);
    meridium.textContent=hour <12 ? "AM": "PM";
}

function returnday(n){
    possibleDays=[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
    ];
    return possibleDays[n];
}

let format=(n)=>(n<10 ? "0"+n:n);
setInterval(setTime, 1000);

let isDOBOpen= false;
let dateofbirth;
const settingCogEl= document.getElementById("settingicon");
const settingContentEl= document.getElementById("settingcontent");
const initialTextEl = document.getElementById("initialText");
const afterDOBButtonEl = document.getElementById("afterDOBButton");
const dobbuttonEl = document.getElementById("dobbutton");
const dobinputEl = document.getElementById("dobinput");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const maketwodig=(number)=>{
if(number>9)
{return number;}
else{
    return "0"+number;
}
};
const toggleDOBselector =()=>
{ 
    if(isDOBOpen){
        settingContentEl.classList.add("hide");
    }
    else{
        settingContentEl.classList.remove("hide");
    }
 isDOBOpen = !isDOBOpen;  
console.log("Toggle",isDOBOpen);
};
const updateAge = () =>
{
const currentDate = new Date();
const datediff=currentDate-dateofbirth;
const year= Math.floor(datediff/(1000*60*60*24*365));
const month= Math.floor(datediff/(1000*60*60*24*365))%12;
const day= Math.floor(datediff/(1000*60*60*24))%30;
const hour= Math.floor(datediff/(1000*60*60))%24;
const minute= Math.floor(datediff/(1000*60))%60;
const second= Math.floor(datediff/1000)%60;
yearEl.innerHTML=maketwodig(year);
monthEl.innerHTML=maketwodig(month);
dayEl.innerHTML=maketwodig(day);
hourEl.innerHTML=maketwodig(hour);
minuteEl.innerHTML=maketwodig(minute);
secondEl.innerHTML=maketwodig(second);
};
const setDOB = () =>
{const datestring=dobinputEl.value;
dateofbirth=datestring?new Date(datestring):null;

if(dateofbirth){
   
   initialTextEl.classList.add("hide") ;
   afterDOBButtonEl.classList.remove("hide");
   
   setInterval(()=> updateAge(),1000);
}

else{
    afterDOBButtonEl.classList.add("hide");
    initialTextEl.classList.remove("hide") ;
}
};
setDOB();


settingCogEl.addEventListener("click",toggleDOBselector);
dobbuttonEl.addEventListener("click",setDOB);
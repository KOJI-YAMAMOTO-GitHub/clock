// 曜日
const youbi = ["日","月","火","水","木","金","土"];
var secondSound = new Audio('./sound/SoundOfSecondHand.mp3');
var secondsundflag = false; var stopdate = null;
setInterval(() => {
 const now=new Date(), yea=now.getFullYear(), mon=now.getMonth()+1, da=now.getDate(), h=now.getHours(),m=now.getMinutes(),s=now.getSeconds();
 document.getElementById("time").textContent=yea+"/"+mon+"/"+da+" "+h+":"+m+":"+s+" ("+youbi[now.getDay()]+")";
 const dH=h*(360/12)+m*(360/12/60),dM=m*(360/60),dS=s*(360/60);
 document.querySelector(".clock_hour").style.transform=`rotate(${dH}deg)`;
 document.querySelector(".clock_min").style.transform=`rotate(${dM}deg)`;
 document.querySelector(".clock_sec").style.transform=`rotate(${dS}deg)`;
 if(secondsundflag) soundstart();
 if(stopdate && stopdate<=now){pomodoroclear();soundstop();const endSound=new Audio('./sound/hanabi.mp3');endSound.play();stopdate=null;backgroudcolorflush();}
},1000);
function openTimerDialog(){const d=document.getElementById('timerDialog');if(d.showModal)d.showModal();else {const v=prompt('タイマー時間（分）', '25');if(v&&Number(v)>0)pomodoro(Number(v));}}
document.getElementById('timerForm').addEventListener('submit',e=>{e.preventDefault();const v=Number(document.getElementById('timerMinutes').value);if(v>0){document.getElementById('timerDialog').close();pomodoro(v);requestWakeLock();}});
document.getElementById('timerCancel').addEventListener('click',()=>document.getElementById('timerDialog').close());
function pomodoro(xmin){const startdate=new Date();document.querySelector(".start").style.transform=`rotate(${startdate.getMinutes()*6}deg)`;const enddate=new Date(startdate.getTime()+xmin*60000);document.querySelector(".stop").style.transform=`rotate(${enddate.getMinutes()*6}deg)`;document.getElementById("endtime").textContent="終了時刻 : "+enddate.getHours()+":"+enddate.getMinutes()+":"+enddate.getSeconds();stopdate=enddate;soundstart();}
function pomodoroclear(){document.querySelector(".start").style.transform="rotate(0deg)";document.querySelector(".stop").style.transform="rotate(0deg)";stopdate=null;soundstop();}
function soundstart(){secondSound.pause();secondSound.currentTime=0;secondSound.play().catch(()=>{});secondsundflag=true;}
function soundstop(){secondsundflag=false;secondSound.pause();secondSound.currentTime=0;}
function backgroudcolorflush(){document.getElementById("id").classList.add("backflash");}

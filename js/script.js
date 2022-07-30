const youbi = ["日", "月", "火", "水", "木", "金", "土"];

var secondSound = new Audio('./sound/SoundOfSecondHand.mp3');
var secondsundflag = false;

var stopdate = null;

setInterval(() => {
  // 現在時間の取得
  const now = new Date();
  const yea = now.getFullYear();
  const mon = now.getMonth() + 1;
  const da = now.getDate();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const w = "(" + youbi[now.getDay()] + ")";

  var elem = document.getElementById("time");
  elem.textContent = yea + "/" + mon + "/" + da + " " + h + ":" + m + ":" + s + " " + w;

  // 時、分、秒を元に角度を計算
  const dH = h * (360 / 12) + m * (360 / 12 / 60);
  const dM = m * (360 / 60);
  const dS = s * (360 / 60);

  // 各要素を取得
  const eH = document.querySelector(".clock_hour");
  const eM = document.querySelector(".clock_min");
  const eS = document.querySelector(".clock_sec");

  // 秒針の音
  if (secondsundflag) {
    soundstart();
  }

  // styleを追加
  eH.style.transform = `rotate(${dH}deg)`;
  eM.style.transform = `rotate(${dM}deg)`;
  eS.style.transform = `rotate(${dS}deg)`;

  // ポモドーロ　終了音を鳴らす
  if (!!stopdate && stopdate <= now) {
    pomodoroclear();
    soundstop();
    secondSound = new Audio('./sound/hanabi.mp3');
    secondSound.play();
    stopdate = null;

  }

}, 1000);

function pomodoro(xmin) {

  // 開始日時を取得する
  const startdate = new Date();
  const starth = startdate.getHours();
  const startm = startdate.getMinutes();
  // 開始した分を元に角度を計算
  const startM = startm * (360 / 60);
  // 開始時の要素を取得
  const sartt = document.querySelector(".start");
  // 開始時のstyleを追加
  sartt.style.transform = `rotate(${startM}deg)`;

  //終了日時の元を取得する
  const enddate = startdate;
  //終了日時を設定する
  enddate.setMinutes(enddate.getMinutes() + xmin);
  //終了時の分を取得する
  const endm = enddate.getMinutes();
  //終了時の角度を計算する
  const emdtM = endm * (360 / 60);
  // 終了時の要素を取得
  const stoptt = document.querySelector(".stop");
  // 終了時のstyleを追加
  stoptt.style.transform = `rotate(${emdtM}deg)`;

  // 終了時刻出力
  var elem = document.getElementById("endtime");
  const h = enddate.getHours();
  const m = enddate.getMinutes();

  elem.textContent = "終了時刻 : " + h + ":" + m;
  stopdate = enddate;

  soundstart();

}

function pomodoroclear() {
  // 開始時の要素を取得
  const sartt = document.querySelector(".start");
  // 開始時のstyleを追加
  sartt.style.transform = `rotate(0deg)`;
  // 終了時の要素を取得
  const stoptt = document.querySelector(".stop");
  // 終了時のstyleを追加
  stoptt.style.transform = `rotate(0deg)`;

  stopdate = null;
  soundstop();

}
function soundstart() {
  secondSound.pause();
  secondSound.currentTime = 0;
  secondSound.play();
  secondsundflag = true;
}

function soundstop() {
  secondsundflag = false;
  secondSound.pause();
  secondSound.currentTime = 0;

}
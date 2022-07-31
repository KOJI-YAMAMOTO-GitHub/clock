// 曜日
const youbi = ["日", "月", "火", "水", "木", "金", "土"];

//　秒針音
var secondSound = new Audio('./sound/SoundOfSecondHand.mp3');
//　秒針音表示判定フラグ
var secondsundflag = false;
//　ポモドーロ終了日時
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
    var endSound = new Audio('./sound/hanabi.mp3');
    endSound.play();
    stopdate = null;
    backgroudcolorflush();

  }

}, 1000);

/**
 * ポモドーロタイマー開始メソッド
 * @param {*} xmin //ポモドーロ時間
 */
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
  const s = enddate.getSeconds();

  elem.textContent = "終了時刻 : " + h + ":" + m + ":" + s;
  stopdate = enddate;

  soundstart();

}

/**
 * ポモドーロリセットメソッド
 * ただし、現在は、リロードしてリセットしている為利用していない
 */
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
/**
 * 秒針音開始メソッド
 */
function soundstart() {
  // 秒針音停止
  secondSound.pause();
  //秒針を最初に戻す
  secondSound.currentTime = 0;
  //秒針音開始
  secondSound.play();
  //秒針音開始フラグ変更
  secondsundflag = true;

}

/**
 * 秒針音終了メソッド
 */
function soundstop() {
  //秒針音開始フラグ変更
  secondsundflag = false;
  // 秒針音停止
  secondSound.pause();
  //秒針を最初に戻す
  secondSound.currentTime = 0;

}

/**
 * ポモドーロ終了時に背景色をフラッシュ表示させるメソッド
 */
function backgroudcolorflush() {

  //HTMLにフラッシュさせるStylesheetのクラスを追加する
  document.getElementById("id").classList.add("backflash");

}
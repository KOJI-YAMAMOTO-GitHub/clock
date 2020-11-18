const youbi = ["日","月","火","水","木","金","土"];

setInterval(() => {
  // 現在時間の取得
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // 時、分、秒を元に角度を計算
  const dH = h * (360 / 12) + m * (360 / 12 / 60);
  const dM = m * (360 / 60);
  const dS = s * (360 / 60);

  // 各要素を取得
  const eH = document.querySelector(".clock_hour");
  const eM = document.querySelector(".clock_min");
  const eS = document.querySelector(".clock_sec");

  // styleを追加
  eH.style.transform = `rotate(${dH}deg)`;
  eM.style.transform = `rotate(${dM}deg)`;
  eS.style.transform = `rotate(${dS}deg)`;
}, 10);

setInterval(() => {
  // 現在時間の取得
  const now = new Date();
  const yea = now.getFullYear();
  const mon = now.getMonth() + 1;
  const da = now.getDate();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const w = "(" + youbi[date1.getDay()] + ")";

  var elem = document.getElementById("time");
//  elem.textContent = now;
  elem.textContent = yea + "/" + mon + "/" + da + " " + h + ":" + m + ":" + s + " " + w;

//   var elem2 = document.getElementById("bwsize");
//   elem2.textContent = window.innerWidth;
//   var elem3 = document.getElementById("bhsize");
//   elem3.textContent = window.innerHeight;
}, 300);

// WakeLockSentinel object を格納する変数
let wakeLock = null;

// screen wake lock をリクエストするための関数
async function requestWakeLock() {
//window.onload = function(){
    // ブラウザは Screen Wake Lock を拒否することがあるので、
    // try...catch を使い拒否された場合の処理も記述する
    try {
        // screen wake lock をリクエストする
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('screen Lock');
      } catch (err) {
      }
  }

// screen wake lock をリクエストする
requestWakeLock();
// WakeLockSentinel object を格納する変数
let wakeLock = null;

// // screen wake lock をリクエストするための関数
// const requestWakeLock = async () => {
//     // ブラウザは Screen Wake Lock を拒否することがあるので、
//     // try...catch を使い拒否された場合の処理も記述する
//     try {
//     //   wakeLock = await navigator.wakeLock.request('screen');
//       wakeLock = navigator.wakeLock.request('screen');
  
//       // Screen Wake Lock がリリースされたときの処理
//       wakeLock.addEventListener('release', () => {
//         console.log('Screen Wake Lock was released');
//       });
//       console.log('Screen Wake Lock is active');
  
//     } catch (err) {
//       console.error(`${err.name}, ${err.message}`);
//     }
//   };
  
function requestWakeLock() { // wake lock をかける関数
    if ('wakeLock' in navigator) { // wake lock 機能の有無をチェック
        try {
            navigator.wakeLock.request('screen');
       console.log('Screen Wake Lock is active');

        }
        catch {
            console.log('wakeLock fails.');
        }
    }
    else {
           alarm("wakeLock API is not supported. Screen is not kept on."); // そもそも機能がない
    }
}

// screen wake lock をリクエストする
requestWakeLock();
/*Check kro whether the service worker feature exists in the web browser*/

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/help/" })
    .then(function() {
      console.log("Service worker registered");
    });
} else {
}

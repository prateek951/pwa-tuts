/*Check kro whether the service worker feature exists in the web browser*/
var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/help/" })
    .then(function() {
      console.log("Service worker registered");
    });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeInstallPrompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

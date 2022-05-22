function logDelayed(message) {
  setTimeout(function () {
    console.log(message);
  }, 2000);
}

function logDelayedWithSecondParam(message, seconds) {
  setTimeout(function () {
    console.log(message);
  }, seconds * 1000);
}

logDelayed("Hello world!");
logDelayedWithSecondParam("Hello again!", 3);

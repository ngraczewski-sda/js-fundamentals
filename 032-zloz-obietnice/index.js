function givePromise(secret) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(secret);
    }, 5000);
  });
}

givePromise("I won't tell").then(function (response) {
  console.log(response);
});

const alwaysFulfilledPromise = new Promise(function (resolve) {
  resolve("I always fulfill my promises");
});

const alwaysRejectedPromise = new Promise(function (resolve, reject) {
  reject("I never bother with my promises");
});

alwaysFulfilledPromise.then(function (response) {
  console.log(response);
});

alwaysRejectedPromise.catch(function (reason) {
  console.error(reason);
});

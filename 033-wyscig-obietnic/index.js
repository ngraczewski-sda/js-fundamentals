Promise.race([measureRedRacerScore(), measureBlueRacerScore()]).then(function (
  response
) {
  console.log(response);
});

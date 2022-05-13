function clickMe() {
  alert("Gratulacje! Udało się dotrzeć do końca");
}

document.body.innerHTML = `
  <div>
    <h1>Prosta apka</h1>
    <p>Kliknij przycisk</p>
    <button onclick="clickMe()">Kliknij mnie!</button>
  </div>
`;

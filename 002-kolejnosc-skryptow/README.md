# Zadanie 001 - Kolejność skryptów

Stwórz następujące pliki:

- `index.html`
- `first.js`, które loguje do konsoli literę `u`
- `second.js`, który loguje do konsoli literę `a`
- `third.js`, który loguje do konsoli literę `z`
- `fourth.js`, który loguje do konsoli literę `r`

Następnie załaduj je w następujący sposób zachowując kolejność

- `first.js` jako skrypt z opóźnionym ładowaniem (atrybut `defer`)
- `second.js` jako standardowy skrypt
- `third.js` jako skrypt z opóźnionym ładowaniem (atrybut `defer`)
- `fourth.js` jako standardowy skrypt

Ponadto, w `body` dodaj element `script`, który loguje do konsoli literę `b` (bez ładowania pliku).

Bez uruchamiania kodu przeanalizuj go i podaj kolejność w jakiej litery zostaną wypisane w konsoli.
Następnie uruchom kod i porównaj swoje oczekiwania z wynikiem.

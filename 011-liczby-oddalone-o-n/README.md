# 011 - Liczby oddalone o n

Napisz funkcję, która przyjmie argumenty `start`, `end`, `jump`, gdzie:

- `start` to początek przedziału
- `end` to koniec przedziału
- `jump` to skok

I wypisze wszystkie liczby, zaczynając od `start` oddalone od siebie o wartość skoku `jump` i nie
większe niż `end`.

Przykłady

```js
var a = 1;
var b = 11;
var jump = 5;

numbers(a, b, jump);
// wynik
// 1
// 6
// 11
```

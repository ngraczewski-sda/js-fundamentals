# 027 - Filtrowanie po callbacku

Napisz funkcję `filter` przyjmującą parametr `array`, który musi być tablicą, oraz parametr
`matches`, który musi być funkcją spełniająca poniższe warunki. Funkcja `filter` powinna zwrócić
nową listę, która zawiera tylko te elementy, dla których funkcja filtrująca `matches` zwróciła
wartość `true`

Funkcja przekazywana jako parametr `matches` musi:

- przyjmować jeden argument
- zwracać wartość typu boolean (`true`/`false`)
- powinna sprawdzać dowolny warunek, przykłady warunków poniżej

Przykładowe warunki:

- czy liczba jest parzysta
- czy liczba jest podzielna przez wybraną liczbę
- czy liczba jest liczbą pierwszą
- czy liczba jest liczbą dwucyfrową
- czy string zawiera wybraną literę
- czy obiekt zawiera pole o wybranej nazwie i wybranej wartości

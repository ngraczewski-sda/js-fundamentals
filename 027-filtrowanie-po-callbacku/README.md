# 027 - Filtrowanie po callbacku

Napisz funkcję `filter` przyjmującą parametr `array`, który musi być tablicą, oraz parametr
`matches`, który musi być funkcją spełniająca poniższe warunki. Funkcja `filter` powinna zwrócić
nową listę, która zawiera tylko te elementy, dla których funkcja filtrująca `matches` zwróciła
wartość `true`

Funkcja przekazywana jako parametr `matches` musi:

- przyjmować jeden argument
- zwracać wartość typu boolean (`true`/`false`)
- powinna sprawdzać dowolny warunek (czy liczba jest parzysta, czy jest podzielna przez liczbę, czy
  jest liczba pierwsza albo dwucyfrową, czy string zawiera jakąś literę, czy obiekt zawiera pole o
  konkretnej nazwie i konkretnej wartości)

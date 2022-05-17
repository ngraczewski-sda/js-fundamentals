# 022 - Obsługa wyjątków

Napisz funkcję, która przyjmuje obiekt a następnie odejmuje wartości pól max i min.

Funkcja powinno rzucać następujące wyjątki:

- jeżeli którekolwiek pole nie ma ustalonej wartości - rzuć wyjątek o treści `Field ${name} is empty`.
- jeżeli `min` jest większe od `max` - rzuć wyjątek `Max must be greater than min`.

Następnie wywołaj funkcję z parametrem spełniającym każdy warunek, złap warunek i zaloguj go w
konsoli.

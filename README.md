### ДЗ 80. Progress.jsx

### Install dep

`npm install`

<hr>

Реализуйте и экспортируйте по умолчанию компонент *Progress*, который принимает свойство *percentage* и рисует статический прогресс бар.

Использование:
`<Progress percentage={40} />;`

Результат:

```html
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style="width: 40%;">
        </div>
    </div>
```

Стиль `width` – вычисляется динамически
Атрибут `aria-valuenow` – вычисляется динамически

### ДЗ 79. React Работа с коллекциями

### Install dep

`npm install`

<hr>

Необходимо создать компонент **Definitions.jsx** который:

1. Будет возвращать следующую структуру — 
        ```
        <dl>
            <dt>one</dt>
            <dd>two</dd>
            <dt>another term</dt>
            <dd>another description</dd>
        </dl>
        ```
2. Компонент принимает данные через пропс — 
        ```
        const definitions = [
            { dt: 'one', dd: 'two', id: 1 },
            { dt: 'another term', dd: 'another description', id: 2 },
        ];

        <DefinitionsList data={definitions} />;
        ```
3. Необходимо принять их в компоненте и отрендерить
4. Подключить компонент **Definitions** в **App.js** и отрендерить его
*P.S Не забывайте про пропс **key***
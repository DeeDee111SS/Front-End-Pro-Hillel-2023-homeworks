### ДЗ 90. MarkdownEditor.jsx

### Install dep

`npm install`

<hr>

Реализуйте компонент `<MarkdownEditor />`, который является React оберткой плагина @toast-ui/editor. Этот плагин позволяет встроить в страницу Markdown-редактор.

использование — 

```javascript
    const editor = new Editor({
        el: element,
        hideModeSwitch: true,
    });

    editor.addHook('change', () => {
        const content = editor.getMarkdown();
        // код который будет вызван при изменении содержимого редактора
    });
```

Компонент принимает на вход функцию как свойство `onContentChange`, которая вызывается при каждом изменении в редакторе. Функция принимает на вход содержимое редактора. Его использование видно в файле src/index.jsx.

https://github.com/junjun-it-courses/react-hw/blob/master/task-15/index.jsx

Посмотреть пример работы редактора можно на странице документации toast-ui.
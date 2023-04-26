### ДЗ 38. This V2 - Call chain

### Install dep

`npm install`

<hr>

Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

```javascript
let ladder = {
  step: 0,
  up: function () {
    this.step++;
  },
  down: function () {
    this.step--;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
  },
};
```

Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

```javascript
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

**Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:**

```javascript
ladder.up().up().down().showStep(); // 1
```

_Такой подход широко используется в библиотеках JavaScript._

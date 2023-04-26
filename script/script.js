'use strict';

void function () {

    const someObj = {
        firstName: 'Ihor',
        lastName: 'Cat'
    }

    function example(a, b) {
        console.log(this, a, b);
    }

    function customBind(func, context, ...args) {
        return function (...argsFunc) {
            const id = Math.floor(Math.random() * 10000).toString();
            context[id] = func;
            const result = context[id](...args, ...argsFunc);
            delete context[id];
            return result;
        }
    }

    const exampleWithContext1 = customBind(example, someObj, 'string1', 'string2');
    exampleWithContext1();
    
}();

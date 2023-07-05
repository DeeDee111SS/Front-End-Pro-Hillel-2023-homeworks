'use strict';

void function () {

    const player1 = { id: 1, name: "Иван", level: 10 };
    const level10players = new WeakSet();

    function addPlayerToLevelSet(player) {
        level10players.add(player);
    }
    
    addPlayerToLevelSet(player1);
    
}();
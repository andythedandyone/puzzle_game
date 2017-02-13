/*
Puzzle Board Game
Code by Andy on 02/13/17
Feel free to modify and use as you see fit
*/


var emptyArray = [];
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15, 16];
var grid = ['01', '02', '03', '04',
            '11', '12', '13', '14',
            '21', '22', '23', '24',
            '31', '32', '33', '34'
            ];


function setup() {
    shuffle();
    document.addEventListener('dragstart', dragStart, false);
    document.addEventListener('dragover', dragOver, false);
    document.addEventListener('drop', dragDrop, false);
}

function cellPicker() {
    var temp;
    temp = grid[Math.floor(Math.random() * grid.length)];
    var cell = document.getElementById(temp);
    cell.innerHTML = '';
}


function dragStart(e) {
    e.dataTransfer.setData('Text', e.target.id);
}


function dragOver(e) {
    e.preventDefault();
}


function dragDrop(e) {
    var dropit = e.dataTransfer.getData('Text');

    if (e.target.className === 'cell') {
        var check = enforceMove(e.target.id, dropit);
        if (check === true) {
            e.target.appendChild(document.getElementById(dropit));
        }
    }
}


function enforceMove(current, previous) {

    var currentCell = parseInt(document.getElementById(current).id);
    var previousCell = parseInt(document.getElementById(previous).parentNode.id);

    // TODO: Implement moving collumn
    // //move collumn right
    // if (previousCell + 3 == currentCell) {
    //     console.log('leval move collumn right');
    //
    // }
    // //move collumn left
    // if (previousCell - 3 == currentCell) {
    //     console.log('legal move collumn left')
    // }

    //moving right
    if (previousCell + 1 == currentCell) {
        return true;
    }
    //moving down
    if (previousCell + 10 == currentCell) {
        return true;
    }
    //moving left
    if (previousCell - 1 == currentCell) {
        return true;
    }
    //moving top
    if (previousCell - 10 == currentCell) {
        return true;
    }
}


function shuffle() {
    var x = 0;
    var temp;

    while (x !== 16) {
        temp = Math.floor(Math.random() * (17 - 1) + 1);
        if (emptyArray.includes(temp) == false) {
            emptyArray.push(temp);
        }
        x = emptyArray.length;
    }
    plotGrid(emptyArray);
}


function plotGrid(shuffledArr) {

    var x = 0;

    while (x < grid.length) {

        var col = document.getElementById(grid[x]);
        var cell = document.createElement('div');
        var span = document.createElement('span');
        var p = document.createElement('p');

        cell.setAttribute('class', 'incell');
        cell.setAttribute('id', x + '_' + x);
        cell.setAttribute('draggable', true);

        p.appendChild(document.createTextNode(shuffledArr[x]));

        span.appendChild(p);
        cell.appendChild(span);
        col.appendChild(cell);
        x++;
    }
    cellPicker();
}

document.onload = setup();

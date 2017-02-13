



function setup() {
    drawTable();
    document.addEventListener('dragstart', dragStart, false);
    document.addEventListener('dragover', dragOver, false);
    document.addEventListener('drop', dragDrop, false);
}

function dragStart(e) {
    //console.log(e.target.id);
    e.dataTransfer.setData('Text', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
    console.log('over')
    console.log(e.target.id);
    e.stopImmediatePropagation();
}

function dragDrop(e) {

    var dropit = e.dataTransfer.getData('Text');
    var checkIdOver = document.getElementById(dropit).parentNode.id;
    var currentId = e.target.id;


   if (e.target.className === 'cell' && e.target.childElementCount === 0) {

       e.target.appendChild(document.getElementById(dropit));
   }
}


var tRow = 4;
var tCell = 4;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15, 16];
var arrayRow = [[00, 01, 02, 03],
                [10, 12, 13, 14],
                [20, 21, 23, 24],
                [30, 31, 33, 34]];

function drawTable() {
    var tbody = document.getElementById('tbody');
    var table = document.createElement("table")

    for (var x = 0; x < arrayRow.length; x++) {
        var tr = document.createElement("tr");
        tr.setAttribute('id', arrayRow[x]);
        for (var y = 0; y < tCell; y++) {
            var td = document.createElement("td");
            td.setAttribute("id", x + y);
            td.setAttribute("class", "cell");
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //container.appendChild(table);
}




document.onload = setup();

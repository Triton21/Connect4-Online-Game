var TABLE = (function () {
    var col1 = {
        start: 0
    };
    var columnCheck = {
        start: 0
    };
    var col2 = {
        start: 0
    };
    var col3 = {
        start: 0
    };
    var col4 = {
        start: 0
    };
    var col5 = {
        start: 0
    };
    var col6 = {
        start: 0
    };
    var col7 = {
        start: 0
    };
    var row1 = {
        start: 0
    };
    var row2 = {
        start: 0
    };
    var row3 = {
        start: 0
    };
    var row4 = {
        start: 0
    };
    var row5 = {
        start: 0
    };
    var row6 = {
        start: 0
    };
    row1Add = function () {
        this.row1 = this.row1 + 1;
        return this;
    };
    row2Add = function () {
        this.row2 = this.row2 + 1;
        return this;
    };
    row3Add = function () {
        this.row3 = this.row3 + 1;
        return this;
    };
    row4Add = function () {
        this.row4 = this.row4 + 1;
        return this;
    };
    row5Add = function () {
        this.row5 = this.row5 + 1;
        return this;
    };
    row6Add = function () {
        this.row6 = this.row6 + 1;
        return this;
    };
    col1Add = function () {
        this.col1 = this.col1 + 1;
        return this;
    };
    columnCheckAdd = function () {
        this.columnCheck = this.columnCheck + 1;
        return this;
    };
    resetColumnCheck = function () {
        this.columnCheck = 0;
        return this;
    };
    col2Add = function () {
        this.col2 = this.col2 + 1;
        return this;
    };
    col3Add = function () {
        this.col3 = this.col3 + 1;
        return this;
    };
    col4Add = function () {
        this.col4 = this.col4 + 1;
        return this;
    };
    col5Add = function () {
        this.col5 = this.col5 + 1;
        return this;
    };
    col6Add = function () {
        this.col6 = this.col6 + 1;
        return this;
    };
    col7Add = function () {
        this.col7 = this.col7 + 1;
        return this;
    };
    return {
        columnCheck: columnCheck.start,
        row1: row1.start,
        row2: row2.start,
        row3: row3.start,
        row4: row4.start,
        row5: row5.start,
        row6: row6.start,
        col1: col1.start,
        col2: col2.start,
        col3: col3.start,
        col4: col4.start,
        col5: col5.start,
        col6: col6.start,
        col7: col7.start,
        columnCheckAdd: columnCheckAdd,
        resetColumnCheck: resetColumnCheck,
        row1Add: row1Add,
        row2Add: row2Add,
        row3Add: row3Add,
        row4Add: row4Add,
        row5Add: row5Add,
        row6Add: row6Add,
        col1Add: col1Add,
        col2Add: col2Add,
        col3Add: col3Add,
        col4Add: col4Add,
        col5Add: col5Add,
        col6Add: col6Add,
        col7Add: col7Add,
    };
})();
connectModule = (function (om) {
    var data, init, changeUser;
    changeUser = function (startNode) {
        var usercolor = startNode.getAttribute('data-value');
        if (usercolor === 'blue') {
            startNode.setAttribute('data-value', 'red');
            var usercolor = startNode.getAttribute('data-value');
        } else {
            startNode.setAttribute('data-value', 'blue');
            var usercolor = startNode.getAttribute('data-value');
        }
    }

    playerMove = function (data) {
        switch (data) {
            case 'col1':
                om.col1Add();
                insertButton(data, om.col1);
                break;
            case 'col2':
                om.col2Add();
                insertButton(data, om.col2);
                break;
            case 'col3':
                om.col3Add();
                insertButton(data, om.col3);
                break;
            case 'col4':
                om.col4Add();
                insertButton(data, om.col4);
                break;
            case 'col5':
                om.col5Add();
                insertButton(data, om.col5);
                break;
            case 'col6':
                om.col6Add();
                insertButton(data, om.col6);
                break;
            case 'col7':
                om.col7Add();
                insertButton(data, om.col7);
                break;
        }
    }


    insertButton = function (data, rowNum) {
        var usercolor = startNode.getAttribute('data-value');
        //console.log(usercolor);

        var myButton = document.createElement('button');
        if (usercolor === 'blue') {
            myButton.className = 'btndisk btn-primary';
        } else {
            myButton.className = 'btndisk btn-danger';
        }
        myButton.innerHTML = '&nbsp;&nbsp;&nbsp;';
        var myId = data + rowNum;
        switch (rowNum) {
            case 1:
                om.row1Add();
                break;
            case 2:
                om.row2Add();
                break;
            case 3:
                om.row3Add();
                break;
            case 4:
                om.row4Add();
                break;
            case 5:
                om.row5Add();
                break;
            case 6:
                om.row6Add();
                break;
        }


        var insertNode = document.getElementById(myId);
        insertNode.appendChild(myButton);
        if (usercolor === 'blue') {
            var color = 'blue';
            insertNode.setAttribute('data-blue', '1');
            var colNum = data.charAt(3);
            removeColArrow(colNum);
            checkresultColumn(data, rowNum, color);
            checkresultRow(data, rowNum, color);
            checkDiagonalLeft(data, rowNum, color);
            checkDiagonalRight(data, rowNum, color);
        } else {
            var color = 'red';
            insertNode.setAttribute('data-red', 1);
            var colNum = data.charAt(3);
            removeColArrow(colNum);
            checkresultColumn(data, rowNum, color);
            checkresultRow(data, rowNum, color);
            checkDiagonalLeft(data, rowNum, color);
            checkDiagonalRight(data, rowNum, color);
        }
    }

    checkDiagonalLeft = function (data, rowNum, color) {
        om.resetColumnCheck();
        switch (data + "|" + rowNum) {
            case "col4|6":
            case "col5|5":
            case "col6|4":
            case "col7|3":
                var i = 7;
                var j = 3;
                while (i >= 4) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + j;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    j++;
                    i--;
                }
                break;
            case "col3|6":
            case "col4|5":
            case "col5|4":
            case "col6|3":
            case "col7|2":
                var i = 7;
                var j = 2;
                while (i >= 3) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + j;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    j++;
                    i--;
                }
                break;

            case "col1|6":
            case "col2|5":
            case "col3|4":
            case "col4|3":
            case "col5|2":
            case "col6|1":
                var i = 6;
                var j = 1;
                while (i >= 1) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + j;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    j++;
                    i--;
                }
                break;

            case "col2|6":
            case "col3|5":
            case "col4|4":
            case "col5|3":
            case "col6|2":
            case "col7|1":
                var i = 7;
                var j = 1;
                while (i >= 2) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + j;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    j++;
                    i--;
                }
                break;
            case "col1|5":
            case "col2|4":
            case "col3|3":
            case "col4|2":
            case "col5|1":
                //console.log('here');
                var i = 5;
                var j = 1;
                while (i >= 1) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + j;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    j++;
                    i--;
                }
                break;
            case "col1|4":
            case "col2|3":
            case "col3|2":
            case "col4|1":
                var i = 4;
                var j = 1;
                while (i >= 1) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + j;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    j++;
                    i--;
                }
                break;
        }
    };

    checkDiagonalRight = function (data, rowNum, color) {
        om.resetColumnCheck();
        switch (data + "|" + rowNum) {
            case "col4|1":
            case "col5|2":
            case "col6|3":
                var i = 1;
                while (i <= 4) {
                    var colNum = i + 3;
                    var myID2 = 'col' + colNum + i;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    i++;
                }
                break;
            case "col3|1":
            case "col4|2":
            case "col5|3":
            case "col6|4":
                var i = 1;
                while (i <= 5) {
                    var colNum = i + 2;
                    var myID2 = 'col' + colNum + i;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    i++;
                }
                break;
            case "col2|1":
            case "col3|2":
            case "col4|3":
            case "col5|4":
            case "col6|5":
            case "col6|7":
                var i = 1;
                while (i <= 6) {
                    var colNum = i + 1;
                    var myID2 = 'col' + colNum + i;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    i++;
                }
                break;
            case "col1|1":
            case "col2|2":
            case "col3|3":
            case "col4|4":
            case "col5|5":
            case "col6|6":
                var i = 1;
                while (i <= 6) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + i;
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    i++;
                }

                break;
            case "col1|2":
            case "col2|3":
            case "col3|4":
            case "col4|5":
            case "col5|6":
                var i = 1;
                while (i <= 5) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + (i + 1);
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    i++;
                }
                break;
            case "col1|3":
            case "col2|4":
            case "col3|5":
            case "col4|6":
                var i = 1;
                while (i <= 4) {
                    var colNum = i;
                    var myID2 = 'col' + colNum + (i + 2);
                    var checkNode2 = document.getElementById(myID2);
                    var tempResult = checkNode2.getAttribute('data-' + color);
                    if (tempResult === '1') {
                        om.columnCheckAdd();
                    } else {
                        om.resetColumnCheck();
                    }
                    if (om.columnCheck === 4) {
                        victory(color);
                    }
                    i++;
                }
                break;



        }

    };

    checkresultRow = function (data, rowNum, color) {
        var myID = 'col1' + rowNum;
        switch (rowNum) {
            case 1:
                if (om.row1 >= 4) {
                    countRowResult(rowNum, color);
                }
                break;
            case 2:
                if (om.row2 >= 4) {
                    countRowResult(rowNum, color);
                }
                break;
            case 3:
                if (om.row3 >= 4) {
                    countRowResult(rowNum, color);
                }
                break;
            case 4:
                if (om.row4 >= 4) {
                    countRowResult(rowNum, color);
                }
                break;
            case 5:
                if (om.row5 >= 4) {
                    countRowResult(rowNum, color);
                }
                break;
            case 6:
                if (om.row6 >= 4) {
                    countRowResult(rowNum, color);
                }
                break;
        }
    };
    countRowResult = function (rowNum, color) {
        om.resetColumnCheck();
        var rowNode = document.getElementById('col1' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        var rowNode = document.getElementById('col2' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        var rowNode = document.getElementById('col3' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        var rowNode = document.getElementById('col4' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        var rowNode = document.getElementById('col5' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        var rowNode = document.getElementById('col6' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        var rowNode = document.getElementById('col7' + rowNum);
        var tempResult = rowNode.getAttribute('data-' + color);
        if (tempResult === '1') {
            om.columnCheckAdd();
            if (om.columnCheck === 4) {
                victory(color);
            }
        } else {
            om.resetColumnCheck();
        }
        om.resetColumnCheck();
    };
    checkresultColumn = function (data, rowNum, color) {
        var colMain;
        if (data === 'col1') {
            var aLimit = om.col1;
            var colMain = 'colMain1';
        } else if (data === 'col2') {
            var aLimit = om.col2;
            var colMain = 'colMain2';
        } else if (data === 'col3') {
            var aLimit = om.col3;
            var colMain = 'colMain3';
        }
        if (data === 'col4') {
            var aLimit = om.col4;
            var colMain = 'colMain4';
        }
        if (data === 'col5') {
            var aLimit = om.col5;
            var colMain = 'colMain5';
        }
        if (data === 'col6') {
            var aLimit = om.col6;
            var colMain = 'colMain6';
        }
        if (data === 'col7') {
            var aLimit = om.col7;
            var colMain = 'colMain7';
        }
        //Column check
        if (aLimit >= 4) {
            om.resetColumnCheck();
            var i = 1;
            while (i <= 11) {
                var aMainCol = document.getElementById(colMain).childNodes[i];
                if (color === 'blue') {
                    var blueres = aMainCol.getAttribute('data-blue');
                } else {
                    var blueres = aMainCol.getAttribute('data-red');
                }
                if (blueres === '1') {
                    om.columnCheckAdd();
                } else {
                    om.resetColumnCheck();
                }
                i = i + 2;
                if (om.columnCheck === 4) {
                    victory(color);
                    break;
                }
            }
        }
    }
    victory = function (color) {
        if (color === 'blue') {
            var victory = document.getElementById('victory-blue');
            var nameNode = document.getElementById('blueName');
            var name = nameNode.getAttribute('action-name');
        } else {
            var victory = document.getElementById('victory-red');
            var nameNode = document.getElementById('redName');
            var name = nameNode.getAttribute('action-name');
        }
        disableArrow();
        victory.innerHTML = name + ' wins!';
        var playAgain = document.getElementById('playAgain');
        playAgain.removeAttribute("style");
    }

    function disableArrow() {
        var removeArrow = document.getElementsByClassName('chevronDiv');
        console.log(removeArrow);
        removeArrow[0].innerHTML = '';
        removeArrow[1].innerHTML = '';
        removeArrow[2].innerHTML = '';
        removeArrow[3].innerHTML = '';
        removeArrow[4].innerHTML = '';
        removeArrow[5].innerHTML = '';
        removeArrow[6].innerHTML = '';
    }
    
    removeColArrow = function (colNum) {
        switch (colNum) {
            case '1':
                if (om.col1 === 6) {
                    $( "#a-col" ).remove();
                }
                break;
            case '2':
                if (om.col2 === 6) {
                    $( "#b-col" ).remove();
                }
                break;
            case '3':
                if (om.col3 === 6) {
                    $( "#c-col" ).remove();
                }
                break;
            case '4':
                if (om.col4 === 6) {
                    $( "#d-col" ).remove();
                }
                break;
            case '5':
                if (om.col5 === 6) {
                    $( "#e-col" ).remove();
                }
                break;
            case '6':
                if (om.col6 === 6) {
                    $( "#f-col" ).remove();
                }
                break;
            case '7':
                if (om.col7 === 6) {
                    $( "#g-col" ).remove();
                }
                break;
        }
        return false;
    };

    init = function () {
        startNode = document.getElementById("startcolor");
        $(document).on('click', ".myChevron", function (e) {
            var data = $(this).attr('data-action');
            if (data) {
                playerMove(data);
                changeUser(startNode);
            }
        });
    };
    oppmove = function (oppMove) {
        console.log(oppMove);
        playerMove(oppMove);
        changeUser(startNode);
    };
    return {
        init: init,
        oppmove: oppmove,
    };
}(TABLE));

connectModule.init();





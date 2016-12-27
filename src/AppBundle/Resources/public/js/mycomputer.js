var COMPUTER = (function () {
    var moveCounter = {
        start: 0
    };
    var col1 = {
        start: 0
    };
    var columnCheck = {
        start: 0
    };
    var defenseCheck = {
        start: 0
    };
    var lastCol = {
        start: 0,
    };
    var lastRow = {
        start: 0,
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
    lastColAdd = function (colNum) {
        this.lastCol = colNum;
        return this;
    };
    lastRowAdd = function (rowNum) {
        this.lastRow = rowNum;
        return this;
    };
    moveCounterAdd = function () {
        this.moveCounter = this.moveCounter + 1;
        return this;
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
    defenseCheckAdd = function () {
        this.defenseCheck = this.defenseCheck + 1;
        return this;
    };
    resetColumnCheck = function () {
        this.columnCheck = 0;
        return this;
    };
    resetDefenseCheck = function () {
        this.defenseCheck = 0;
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
        moveCounter: moveCounter.start,
        defenseCheck: defenseCheck.start,
        lastRow: lastRow.start,
        lastCol: lastCol.start,
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
        moveCounterAdd: moveCounterAdd,
        columnCheckAdd: columnCheckAdd,
        defenseCheckAdd: defenseCheckAdd,
        resetColumnCheck: resetColumnCheck,
        resetDefenseCheck: resetDefenseCheck,
        lastColAdd: lastColAdd,
        lastRowAdd: lastRowAdd,
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




computerModule = (function (om, bl, rd, al, cl) {
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

    blueMove = function (data) {
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
            case "col7|4":
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
                //console.log(aMainCol);
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
        animateVictory(color);
    }

    removeColArrow = function (colNum) {
        switch (colNum) {
            case '1':
                if (om.col1 === 6) {
                    $("#a-col").remove();
                }
                break;
            case '2':
                if (om.col2 === 6) {
                    $("#b-col").remove();
                }
                break;
            case '3':
                if (om.col3 === 6) {
                    $("#c-col").remove();
                }
                break;
            case '4':
                if (om.col4 === 6) {
                    $("#d-col").remove();
                }
                break;
            case '5':
                if (om.col5 === 6) {
                    $("#e-col").remove();
                }
                break;
            case '6':
                if (om.col6 === 6) {
                    $("#f-col").remove();
                }
                break;
            case '7':
                if (om.col7 === 6) {
                    $("#g-col").remove();
                }
                break;
        }
        return false;
    };

    checkEnd = function () {
        if (om.moveCounter === 41) {
            var endgame = document.getElementById('victory-blue');
            var removeArrow = document.getElementById('removeArrow');
            removeArrow.innerHTML = '';
            endgame.innerHTML = ' Game over!';
        }
        return false;
    };

    insertButton = function (data, rowNum) {
        var usercolor = startNode.getAttribute('data-value');
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
            om.lastColAdd(colNum);
            om.lastRowAdd(rowNum);
            var myBlue = 'blue' + colNum + rowNum;
            var myAll = 'all' + colNum + rowNum;
            bl.addBlue(myBlue);
            al.addAll(myAll);
            removeColArrow(colNum);
            checkresultColumn(data, rowNum, color);
            checkresultRow(data, rowNum, color);
            checkDiagonalLeft(data, rowNum, color);
            checkDiagonalRight(data, rowNum, color);
            //checkEnd();
        } else {
            var color = 'red';
            var colNum = data.charAt(3);
            var myRed = 'red' + colNum + rowNum;
            var myAll = 'all' + colNum + rowNum;
            rd.addRed(myRed);
            al.addAll(myAll);
            insertNode.setAttribute('data-red', 1);
            removeColArrow(colNum);
            checkresultColumn(data, rowNum, color);
            checkresultRow(data, rowNum, color);
            checkDiagonalLeft(data, rowNum, color);
            checkDiagonalRight(data, rowNum, color);
            //checkEnd();
        }
    }




    findfirstMove = function (userColor) {
        var i = 1, colNode, colNum, myCol, RandomNum;
        var RandomNum = Math.floor(Math.random() * 2);
        while (i <= 7) {
            var colNode = document.getElementById('col' + i + '1');
            var tempResult = colNode.getAttribute('data-' + userColor);
            if (tempResult === '1') {
                colNum = i;
            }
            i++;
        }
        //console.log(colNum);
        if (colNum === 7) {
            myCol = 6;
            return myCol;
        } else if (colNum === 1) {
            myCol = 2;
            return myCol;
        }

        if (RandomNum === 1) {
            myCol = colNum - 1
            return myCol;
        } else {
            myCol = colNum + 1;
            return myCol;
        }

    };
    findthirdMove = function (pcColor, userColor) {
        var i = 1, j, k, colNode, colNum, myCol, RandomNum, userArray = new Array(7), pcArray = new Array(7), tempUser = false, tempPC = false;

        while (i <= 7) {
            var colNode = document.getElementById('col' + i + '1');

            tempUser = colNode.getAttribute('data-' + userColor);
            if (tempUser) {
                userArray[i] = tempUser;
            } else {
                userArray[i] = 0;
            }

            tempPC = colNode.getAttribute('data-' + pcColor);
            if (tempPC) {
                pcArray[i] = tempPC;
            } else {
                pcArray[i] = 0;
            }
            i++;
        }
        //checkfirstrow
        for (j = 1; j <= 7; j++) {
            if (userArray[j] === '1') {
                //console.log(userArray[j]);
                om.defenseCheckAdd();
                if (om.defenseCheck === 2) {
                    var myPosCheck1 = pcArray[j + 1];
                    var myPosCheck2 = pcArray[j - 2];
                    if (myPosCheck1 === 0) {
                        myCol = j + 1;
                        om.resetDefenseCheck();
                        return myCol;
                    } else if (myPosCheck2 === 0) {
                        myCol = j - 2;
                        om.resetDefenseCheck();
                        return myCol;
                    }
                }
            }
        }
        //checkcolumn
        om.resetDefenseCheck();
        var myColumn = 'colMain' + om.lastCol;
        var k = 1;
        while (k <= 11) {
            var aMainCol = document.getElementById(myColumn).childNodes[k];
            var blueres = aMainCol.getAttribute('data-blue');
            var redres = aMainCol.getAttribute('data-red');
            if (userColor === 'blue') {
                if (blueres === '1') {
                    om.defenseCheckAdd();
                } else {
                    om.resetDefenseCheck();
                }
            }
            if (userColor === 'red') {
                if (redres === '1') {
                    om.defenseCheckAdd();
                } else {
                    om.resetDefenseCheck();
                }
            }
            if (om.defenseCheck === 2) {
                myCol = parseInt(om.lastCol);
                om.resetDefenseCheck();
                return myCol;
            }
            k = k + 2;
        }
    };

    defenseMoveForThree = function (pcColor, userColor) {
        var i = 1, j, k;
        //console.log('def three');
        //checkallrow for three
        var myCol;
        om.resetDefenseCheck();
        if (userColor === 'blue') {
            var i = 1, j = 1;
            while (j <= 6) {
                var i = 1;
                while (i <= 7) {
                    var blueCoord = 'blue' + i + j;
                    var bluepos = bl.getBlue(blueCoord);
                    if (j === 1) {
                        if (bluepos === 1) {
                            om.defenseCheckAdd();
                            if (om.defenseCheck === 3) {
                                var nextCheckRight = 'red' + (i + 1) + j;
                                var nextCheckLeft = 'red' + (i - 3) + j;
                                var redNextRight = rd.getRed(nextCheckRight);
                                var redNextLeft = rd.getRed(nextCheckLeft);
                                if (redNextRight === 0) {
                                    myCol = i + 1;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                                if (redNextLeft === 0) {
                                    myCol = i - 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        } else {
                            om.resetDefenseCheck();
                        }
                    } else {
                        if (bluepos === 1) {
                            om.defenseCheckAdd();
                            if (om.defenseCheck === 3) {
                                var nextCheckRight = 'red' + (i + 1) + j;
                                var nextCheckLeft = 'red' + (i - 3) + j;
                                var redNextRight = rd.getRed(nextCheckRight);
                                var redNextLeft = rd.getRed(nextCheckLeft);
                                var nextCheckRightLow = 'all' + (i + 1) + (j - 1);
                                var nextCheckLeftLow = 'all' + (i - 3) + (j - 1);
                                var redNextRightLow = al.getAll(nextCheckRightLow);
                                var redNextLeftLow = al.getAll(nextCheckLeftLow);
                                if (redNextRight === 0 && redNextRightLow === 1) {
                                    myCol = i + 1;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                                if (redNextLeft === 0 && redNextLeftLow === 1) {
                                    myCol = i - 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        } else {
                            om.resetDefenseCheck();
                        }
                    }
                    i++;
                }
                j++;
            }
        }

        //check all column

        om.resetDefenseCheck();
        var myColumn = 'colMain' + om.lastCol;
        var k = 1;
        while (k <= 11) {
            var aMainCol = document.getElementById(myColumn).childNodes[k];
            var blueres = aMainCol.getAttribute('data-blue');
            var redres = aMainCol.getAttribute('data-red');
            if (userColor === 'blue') {
                if (blueres === '1') {
                    om.defenseCheckAdd();
                } else {
                    om.resetDefenseCheck();
                }
            }
            if (userColor === 'red') {
                if (redres === '1') {
                    om.defenseCheckAdd();
                } else {
                    om.resetDefenseCheck();
                }
            }
            if (om.defenseCheck === 3) {
                myCol = parseInt(om.lastCol);
                om.resetDefenseCheck();
                return myCol;
            }
            k = k + 2;
        }


        return false;
    }

    defenseMoveForTwo = function (pcColor, userColor) {
        var myCol;
        om.resetDefenseCheck();
        if (userColor === 'blue') {
            var j = 1;
            while (j <= 6) {
                var i = 1;
                while (i <= 7) {
                    var blueCoord = 'blue' + i + j;
                    var bluepos = bl.getBlue(blueCoord);
                    if (j === 1) {
                        if (bluepos === 1) {
                            om.defenseCheckAdd();
                            if (om.defenseCheck === 2) {
                                var nextCheckRight0 = 'all' + (i + 1) + j;
                                var nextCheckRight1 = 'all' + (i + 2) + j;
                                var nextCheckLeft0 = 'all' + (i - 2) + j;
                                var nextCheckLeft1 = 'all' + (i - 3) + j;
                                var redNextRight0 = al.getAll(nextCheckRight0);
                                var redNextRight1 = al.getAll(nextCheckRight1);
                                var redNextLeft0 = al.getAll(nextCheckLeft0);
                                var redNextLeft1 = al.getAll(nextCheckLeft1);
                                if (i <= 4 && redNextRight0 === 0 && redNextRight1 === 0) {
                                    myCol = i + 1;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                                if (i >= 5 && redNextLeft0 === 0 && redNextLeft1 === 0) {
                                    myCol = i - 2;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                                if (redNextRight0 === 0 && redNextLeft0 === 0) {
                                    if (i <= 5) {
                                        myCol = i + 1;
                                    } else {
                                        myCol = i - 2;
                                    }
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        } else {
                            om.resetDefenseCheck();
                        }
                    } else {
                        if (bluepos === 1) {
                            om.defenseCheckAdd();
                            if (om.defenseCheck === 2) {
                                var nextCheckRight0 = 'all' + (i + 1) + j;
                                var nextCheckRightLow0 = 'all' + (i + 1) + (j - 1);
                                var nextCheckRightLow1 = 'all' + (i + 2) + (j - 1);
                                var nextCheckRight1 = 'all' + (i + 2) + j;
                                var nextCheckLeft0 = 'all' + (i - 2) + j;
                                var nextCheckLeftLow0 = 'all' + (i - 2) + (j - 1);
                                var nextCheckLeftLow1 = 'all' + (i - 3) + (j - 1);
                                var nextCheckLeft1 = 'all' + (i - 3) + j;
                                var redNextRight0 = al.getAll(nextCheckRight0);
                                var redNextRight1 = al.getAll(nextCheckRight1);
                                var redNextLeft0 = al.getAll(nextCheckLeft0);
                                var redNextRightLow0 = al.getAll(nextCheckRightLow0);
                                var redNextRightLow1 = al.getAll(nextCheckRightLow1);
                                var redNextLeftLow0 = al.getAll(nextCheckLeftLow0);
                                var redNextLeftLow1 = al.getAll(nextCheckLeftLow1);
                                var redNextLeft1 = al.getAll(nextCheckLeft1);
                                if (redNextRight0 === 0 && redNextRight1 === 0 && redNextRightLow0 === 1 && redNextRightLow1 === 1) {
                                    myCol = i + 1;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                                if (redNextLeft0 === 0 && redNextLeft1 === 0 && redNextLeftLow0 === 1 && redNextLeftLow1 === 1) {
                                    myCol = i - 2;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        } else {
                            om.resetDefenseCheck();
                        }
                    }
                    i++;
                }
                j++;
            }
        }
        return false;
    }

    checkVictoryRow = function (thisColor) {
        //console.log('checkVictoryRow');
        var myCol;
        om.resetDefenseCheck();
        var j = 1;
        while (j <= 6) {
            var i = 1;
            while (i <= 7) {
                if (j === 1) {
                    var myCoord = thisColor + i + j;
                    if (thisColor === 'blue') {
                        var myPosition = bl.getBlue(myCoord);
                    } else {
                        var myPosition = rd.getRed(myCoord);
                    }
                    if (myPosition === 1) {
                        om.defenseCheckAdd();
                        //console.log(om.defenseCheck);
                        if (om.defenseCheck === 3) {

                            //console.log(om.defenseCheck);
                            var nextCheckRight = 'all' + (i + 1) + j;
                            var nextCheckLeft = 'all' + (i - 3) + j;
                            var allNextRight = al.getAll(nextCheckRight);
                            var allNextLeft = al.getAll(nextCheckLeft);
                            if (allNextRight === 0) {
                                myCol = i + 1;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if (allNextLeft === 0) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    } else {
                        om.resetDefenseCheck();
                    }
                } else {
                    var myCoord = thisColor + i + j;
                    if (thisColor === 'blue') {
                        var myPosition = bl.getBlue(myCoord);
                    } else {
                        var myPosition = rd.getRed(myCoord);
                    }
                    if (myPosition === 1) {
                        om.defenseCheckAdd();
                        if (om.defenseCheck === 3) {
                            var nextCheckRight = 'all' + (i + 1) + j;
                            var nextCheckLeft = 'all' + (i - 3) + j;
                            var nextCheckRightLow = 'all' + (i + 1) + (j - 1);
                            var nextCheckLeftLow = 'all' + (i - 3) + (j - 1);
                            var allNextRight = al.getAll(nextCheckRight);
                            var allNextLeft = al.getAll(nextCheckLeft);
                            var allNextRightLow = al.getAll(nextCheckRightLow);
                            var allNextLeftLow = al.getAll(nextCheckLeftLow);
                            if (allNextRight === 0 && allNextRightLow === 1) {
                                myCol = i + 1;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if (allNextLeft === 0 && allNextLeftLow === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                    else {
                        om.resetDefenseCheck();
                    }
                }
                i++;
            }
            j++;
        }

        om.resetDefenseCheck();
        console.log('here');
        var j = 1;
        while (j <= 6) {
            var i = 1;
            while (i <= 6) {
                var myCoord = thisColor + i + j;
                if (thisColor === 'blue') {
                    var myPosition = bl.getBlue(myCoord);
                } else {
                    var myPosition = rd.getRed(myCoord);
                }
                if (myPosition === 1) {
                    om.defenseCheckAdd();
                    if (om.defenseCheck === 2) {
                        var checkRigth1 = 'all' + (i + 1) + j;
                        var checkRigth2 = thisColor + (i + 2) + j;
                        var checkRigthPosition1 = al.getAll(checkRigth1);
                        if (thisColor === 'blue') {
                            var checkRigthPosition2 = bl.getBlue(checkRigth2);
                        } else {
                            var checkRigthPosition2 = rd.getRed(checkRigth2);
                        }

                        if (checkRigthPosition1 === 0 && checkRigthPosition2 === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }

                        var checkLeft1 = 'all' + (i - 2) + j;
                        var checkLeft2 = thisColor + (i - 3) + j;
                        var checkLeftPosition1 = al.getAll(checkLeft1);
                        if (thisColor === 'blue') {
                            var checkLeftPosition2 = bl.getBlue(checkLeft2);
                        } else {
                            var checkLeftPosition2 = rd.getRed(checkLeft2);
                        }

                        if (checkLeftPosition1 === 0 && checkLeftPosition2 === 1) {
                            myCol = i - 2;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                } else {
                    om.resetDefenseCheck();
                }
                i++;
            }
            j++;
        }






        return false;
    }
    checkVictoryCol = function (thisColor) {
        var myCol;
        om.resetDefenseCheck();
        var i = 1;
        while (i <= 7) {
            var j = 1;
            while (j <= 6) {
                var myCoord = thisColor + i + j;
                if (thisColor === 'blue') {
                    var myPosition = bl.getBlue(myCoord);
                } else {
                    var myPosition = rd.getRed(myCoord);
                }
                if (myPosition === 1) {
                    om.defenseCheckAdd();
                    if (om.defenseCheck === 3) {
                        var checkCoord = 'all' + i + (j + 1);
                        var checkPosition = al.getAll(checkCoord);
                        if (checkPosition === 0) {
                            myCol = i;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                } else {
                    om.resetDefenseCheck();
                }
                j++;
            }
            i++;
        }
        return false;
    }

    victoryDiagonalLeft = function (thisColor) {
        om.resetDefenseCheck();
        // 1st diagonal
        var i = 7, j = 1;
        while (i >= 2) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }

        // 2nd diagonal
        var i = 6, j = 1;
        while (i >= 1) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 3rd diagonal
        var i = 5, j = 1;
        while (i >= 1) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 4th diagonal
        var i = 4, j = 1;
        while (i >= 1) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 5th diagonal
        var i = 7, j = 2;
        while (i >= 3) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        return false;
    };
    
    
    defenseDiagonalLeft = function (thisColor) {
        om.resetDefenseCheck();
        // 1st diagonal
        var i = 7, j = 1;
        while (i >= 2) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }

        // 2nd diagonal
        var i = 6, j = 1;
        while (i >= 1) {
           if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 3rd diagonal
        var i = 5, j = 1;
        while (i >= 1) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 4th diagonal
        var i = 4, j = 1;
        while (i >= 1) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 5th diagonal
        var i = 7, j = 2;
        while (i >= 3) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        // 6th diagonal
        var i = 7, j = 3;
        while (i >= 4) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    //console.log('diagleft');
                    var nextRightAll = 'all' + (i - 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i - 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    if ((i + 3) <= 7) {
                        var nextLeftAll = 'all' + (i + 3) + (j - 3);
                        var nextLeftAllPos = al.getAll(nextLeftAll);
                        if (nextLeftAllPos === 0) {
                            if ((j - 3) === 1) {
                                myCol = i + 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if ((j - 4) >= 1) {
                                var nextRightLow = 'all' + (i + 3) + (j - 4);
                                var nextRightLowPos = al.getAll(nextRightLow);
                                if (nextRightLowPos === 1) {
                                    myCol = i + 3;
                                    om.resetDefenseCheck();
                                    return myCol;
                                }
                            }
                        }
                    }

                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i--;
        }
        return false;
    };


    victoryDiagonalRight = function (thisColor) {
        var myCol;
        //console.log('defdiag');
        om.resetDefenseCheck();



        // 1st diagonal
        var i = 1, j = 1;
        while (i <= 6) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 2nd diagonal rigth
        var i = 2, j = 1;
        while (i <= 7) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 3rd diagonal rigth
        var i = 3, j = 1;
        while (i <= 7) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 4th diagonal rigth
        var i = 4, j = 1;
        while (i <= 7) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 4th diagonal rigth
        var i = 1, j = 2;
        while (i <= 5) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 5th diagonal rigth
        var i = 1, j = 3;
        while (i <= 4) {
            var myCoord = thisColor + i + j;
            if (thisColor === 'blue') {
                var myPosition = bl.getBlue(myCoord);
            } else {
                var myPosition = rd.getRed(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        return false;
    };
    
    defenseDiagonalRight = function (thisColor) {
        var myCol;
        //console.log('defdiag');
        om.resetDefenseCheck();
        // 1st diagonal
        var i = 1, j = 1;
        while (i <= 6) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 2nd diagonal rigth
        var i = 2, j = 1;
        while (i <= 7) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 3rd diagonal rigth
        var i = 3, j = 1;
        while (i <= 7) {
             if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 4th diagonal rigth
        var i = 4, j = 1;
        while (i <= 7) {
             if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 5th diagonal rigth
        var i = 1, j = 2;
        while (i <= 5) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        // 5th diagonal rigth
        var i = 1, j = 3;
        while (i <= 4) {
            if (thisColor === 'blue') {
                var myCoord = 'red' + i + j;
                var myPosition = rd.getRed(myCoord);
            } else { 
                var myCoord = 'blue' + i + j;
                var myPosition = bl.getBlue(myCoord);
            }
            if (myPosition === 1) {
                om.defenseCheckAdd();
                if (om.defenseCheck === 3) {
                    var nextRightAll = 'all' + (i + 1) + (j + 1);
                    var nextRightAllPos = al.getAll(nextRightAll);
                    if (nextRightAllPos === 0) {
                        var nextRightLow = 'all' + (i + 1) + j;
                        var nextRightLowPos = al.getAll(nextRightLow);
                        if (nextRightLowPos === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                    var nextLeftAll = 'all' + (i - 3) + (j - 3);
                    var nextLeftAllPos = al.getAll(nextLeftAll);
                    if (nextLeftAllPos === 0) {
                        if ((j - 3) === 1) {
                            myCol = i - 3;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                        if ((j - 4) >= 1) {
                            var nextRightLow = 'all' + (i - 3) + (j - 4);
                            var nextRightLowPos = al.getAll(nextRightLow);
                            if (nextRightLowPos === 1) {
                                myCol = i - 3;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                }
            } else {
                om.resetDefenseCheck();
            }
            j++;
            i++;
        }
        return false;
    };

    randomMove = function computerMove(avoidCol) {
        var myRandomArray = [];
        var col1max = om.col1;
        var col2max = om.col2;
        var col3max = om.col3;
        var col4max = om.col4;
        var col5max = om.col5;
        var col6max = om.col6;
        var col7max = om.col7;
        if (col1max < 6) {
            myRandomArray.push(1);
        }
        if (col2max < 6) {
            myRandomArray.push(2);
        }
        if (col3max < 6) {
            myRandomArray.push(3);
        }
        if (col4max < 6) {
            myRandomArray.push(4);
        }
        if (col5max < 6) {
            myRandomArray.push(5);
        }
        if (col6max < 6) {
            myRandomArray.push(6);
        }
        if (col7max < 6) {
            myRandomArray.push(7);
        }

        if (avoidCol != 0) {
            var avoidIndex = myRandomArray.indexOf(avoidCol);

            if (avoidIndex > -1) {
                myRandomArray.splice(avoidIndex, 1);
            }
        }
        console.log(myRandomArray);

        var myRandomlength = myRandomArray.length;

        var myRandomNumber = Math.floor(Math.random() * myRandomlength);
        var myCol = myRandomArray[myRandomNumber];
        console.log(myCol);
        return myCol;
    };

    checkMaxCol = function computerMove(myCol) {
        var col1max = om.col1;
        var col2max = om.col2;
        var col3max = om.col3;
        var col4max = om.col4;
        var col5max = om.col5;
        var col6max = om.col6;
        var col7max = om.col7;
        switch (myCol) {
            case 1:
                if (col1max < 6) {
                    return myCol;
                }
                break;
            case 2:
                if (col2max < 6) {
                    return myCol;
                }
                break;
            case 3:
                if (col3max < 6) {
                    return myCol;
                }
                break;
            case 4:
                if (col4max < 6) {
                    return myCol;
                }
                break;
            case 5:
                if (col5max < 6) {
                    return myCol;
                }
                break;
            case 6:
                if (col6max < 6) {
                    return myCol;
                }
                break;
            case 7:
                if (col7max < 6) {
                    return myCol;
                }
                break;
        }
        return false;
    };

    attackMove = function computerMove(thisColor) {
        var myCol;
        om.resetDefenseCheck();

        // attack column
        var i = 1;
        while (i <= 7) {
            var j = 1;
            while (j <= 6) {
                var myCoord = thisColor + i + j;
                if (thisColor === 'blue') {
                    var myPosition = bl.getBlue(myCoord);
                } else {
                    var myPosition = rd.getRed(myCoord);
                }
                if (myPosition === 1) {
                    om.defenseCheckAdd();
                    if (om.defenseCheck === 2) {
                        var checkCoord1 = 'all' + i + (j + 1);
                        var checkPosition1 = al.getAll(checkCoord1);
                        var checkCoord2 = 'all' + i + (j + 2);
                        var checkPosition2 = al.getAll(checkCoord2);
                        if (checkPosition1 === 0 && checkPosition2 === 0) {
                            myCol = i;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                } else {
                    om.resetDefenseCheck();
                }
                j++;
            }
            i++;
        }

        //attack row

        om.resetDefenseCheck();
        var j = 1;
        while (j <= 6) {
            var i = 1;
            while (i <= 7) {
                if (j === 1) {
                    var myCoord = thisColor + i + j;
                    if (thisColor === 'blue') {
                        var myPosition = bl.getBlue(myCoord);
                    } else {
                        var myPosition = rd.getRed(myCoord);
                    }
                    if (myPosition === 1) {
                        om.defenseCheckAdd();
                        //console.log(om.defenseCheck);
                        if (om.defenseCheck === 2) {

                            //console.log(om.defenseCheck);
                            var nextCheckRight1 = 'all' + (i + 1) + j;
                            var nextCheckRight2 = 'all' + (i + 2) + j;
                            var nextCheckLeft1 = 'all' + (i - 2) + j;
                            var nextCheckLeft2 = 'all' + (i - 3) + j;
                            var allNextRight1 = al.getAll(nextCheckRight1);
                            var allNextRight2 = al.getAll(nextCheckRight2);
                            var allNextLeft1 = al.getAll(nextCheckLeft1);
                            var allNextLeft2 = al.getAll(nextCheckLeft2);
                            if (allNextRight1 === 0 && allNextRight2 === 0) {
                                myCol = i + 1;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if (allNextLeft1 === 0 && allNextLeft2 === 0) {
                                myCol = i - 2;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    } else {
                        om.resetDefenseCheck();
                    }
                } else {
                    var myCoord = thisColor + i + j;
                    if (thisColor === 'blue') {
                        var myPosition = bl.getBlue(myCoord);
                    } else {
                        var myPosition = rd.getRed(myCoord);
                    }
                    if (myPosition === 1) {
                        om.defenseCheckAdd();
                        if (om.defenseCheck === 2) {
                            var nextCheckRight1 = 'all' + (i + 1) + j;
                            var nextCheckRight2 = 'all' + (i + 2) + j;
                            var nextCheckLeft1 = 'all' + (i - 2) + j;
                            var nextCheckLeft2 = 'all' + (i - 3) + j;
                            var allNextRight1 = al.getAll(nextCheckRight1);
                            var allNextRight2 = al.getAll(nextCheckRight2);
                            var allNextLeft1 = al.getAll(nextCheckLeft1);
                            var allNextLeft2 = al.getAll(nextCheckLeft2);

                            var nextCheckRightLow = 'all' + (i + 1) + (j - 1);
                            var nextCheckLeftLow = 'all' + (i - 2) + (j - 1);

                            var allNextRightLow = al.getAll(nextCheckRightLow);
                            var allNextLeftLow = al.getAll(nextCheckLeftLow);
                            if (allNextRight1 === 0 && allNextRight2 === 0 && allNextRightLow === 1) {
                                myCol = i + 1;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                            if (allNextLeft1 === 0 && allNextLeft2 === 0 && allNextLeftLow === 1) {
                                myCol = i - 2;
                                om.resetDefenseCheck();
                                return myCol;
                            }
                        }
                    }
                    else {
                        om.resetDefenseCheck();
                    }
                }
                i++;
            }
            j++;
        }

        // attack row 2

        om.resetDefenseCheck();
        var j = 1;
        while (j <= 6) {
            var i = 1;
            while (i <= 7) {

                var myCoord = thisColor + i + j;
                if (thisColor === 'blue') {
                    var myPosition = bl.getBlue(myCoord);
                } else {
                    var myPosition = rd.getRed(myCoord);
                }
                if (myPosition === 1) {
                    om.defenseCheckAdd();
                    if (om.defenseCheck === 1) {
                        var nextCheckRight1 = 'all' + (i + 1) + j;
                        var nextCheckRight2 = 'all' + (i + 2) + j;
                        var nextCheckRight3 = 'all' + (i + 3) + j;
                        var allNextRight1 = al.getAll(nextCheckRight1);
                        var allNextRight2 = al.getAll(nextCheckRight2);
                        var allNextRight3 = al.getAll(nextCheckRight3);

                        var nextCheckRightLow = 'all' + (i + 1) + (j - 1);

                        var allNextRightLow = al.getAll(nextCheckRightLow);
                        if (allNextRight1 === 0 && allNextRight2 === 0 && allNextRightLow === 1) {
                            myCol = i + 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }

                        var nextCheckLeft1 = 'all' + (i - 1) + j;
                        var nextCheckLeft2 = 'all' + (i - 2) + j;
                        var nextCheckLeft3 = 'all' + (i - 3) + j;
                        var allNextLeft1 = al.getAll(nextCheckLeft1);
                        var allNextLeft2 = al.getAll(nextCheckLeft2);
                        var allNextLeft3 = al.getAll(nextCheckLeft3);
                        var nextCheckLeftLow = 'all' + (i - 2) + (j - 1);
                        var allNextLeftLow = al.getAll(nextCheckLeftLow);

                        if (allNextLeft1 === 0 && allNextLeft2 === 0 && allNextLeft3 === 0 && allNextLeftLow === 1) {
                            myCol = i - 1;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                }
                else {
                    om.resetDefenseCheck();
                }
                i++;
            }
            j++;
        }
        return false;
    };

    attackMove2 = function computerMove(thisColor) {
        var myCol;
        om.resetDefenseCheck();

        // attack column
        var i = 1;
        while (i <= 7) {
            var j = 1;
            while (j <= 6) {
                var myCoord = thisColor + i + j;
                if (thisColor === 'blue') {
                    var myPosition = bl.getBlue(myCoord);
                } else {
                    var myPosition = rd.getRed(myCoord);
                }
                if (myPosition === 1) {
                    om.defenseCheckAdd();
                    if (om.defenseCheck === 1) {
                        var checkCoord1 = 'all' + i + (j + 1);
                        var checkCoord2 = 'all' + i + (j + 3);
                        var checkPosition1 = al.getAll(checkCoord1);
                        var checkPosition2 = al.getAll(checkCoord2);
                        console.log(checkCoord2);
                        console.log(checkPosition2);
                        if (checkPosition1 === 0 && checkPosition2 === 0) {
                            myCol = i;
                            om.resetDefenseCheck();
                            return myCol;
                        }
                    }
                } else {
                    om.resetDefenseCheck();
                }
                console.log(om.defenseCheck);
                j++;
            }
            i++;
        }
        return false;
    };

    avoidCheck = function (thisColor, myCol) {
        om.resetDefenseCheck();
        if (thisColor === 'blue') {
            userColor = 'red';
        } else {
            userColor = 'blue';
        }
        var j = 2;
        while (j <= 6) {
            var i = 1;
            while (i <= 7) {
                var myCoord = userColor + i + j;
                if (thisColor === 'blue') {
                    var myPosition = rd.getRed(myCoord);
                } else {
                    var myPosition = bl.getBlue(myCoord);
                }
                if (myPosition === 1) {
                    om.defenseCheckAdd();
                    if (om.defenseCheck === 1) {
                        var checkCoord0 = userColor + (i - 1) + j;
                        var checkCoord1 = userColor + (i + 1) + j;
                        var checkCoord2 = userColor + (i + 2) + j;
                        var checkCoord3 = userColor + (i + 3) + j;
                        var checkCoord4 = userColor + (i + 4) + j;
                        var checkCoordLow0 = 'all' + (i - 1) + (j - 1);
                        var checkCoordLow1 = 'all' + (i + 1) + (j - 1);
                        var checkCoordLow2 = 'all' + (i + 2) + (j - 1);
                        var checkCoordLow3 = 'all' + (i + 3) + (j - 1);
                        var checkCoordLow4 = 'all' + (i + 4) + (j - 1);
                        if (thisColor === 'blue') {
                            var checkPosition0 = rd.getRed(checkCoord0);
                            var checkPosition1 = rd.getRed(checkCoord1);
                            var checkPosition2 = rd.getRed(checkCoord2);
                            var checkPosition3 = rd.getRed(checkCoord3);
                            var checkPosition4 = rd.getRed(checkCoord4);
                        } else {
                            var checkPosition0 = bl.getBlue(checkCoord0);
                            var checkPosition1 = bl.getBlue(checkCoord1);
                            var checkPosition2 = bl.getBlue(checkCoord2);
                            var checkPosition3 = bl.getBlue(checkCoord3);
                            var checkPosition4 = bl.getBlue(checkCoord4);
                        }
                        var checkPositionLow0 = al.getAll(checkCoordLow0);
                        var checkPositionLow1 = al.getAll(checkCoordLow1);
                        var checkPositionLow2 = al.getAll(checkCoordLow2);
                        var checkPositionLow3 = al.getAll(checkCoordLow3);
                        var checkPositionLow4 = al.getAll(checkCoordLow4);
                        console.log(checkPositionLow0);
                        if (checkPosition1 === 0 && checkPosition2 === 1 && checkPosition3 === 1 && checkPositionLow1 === 0) {
                            if (myCol === i + 1) {
                                return myCol;
                            }
                        }
                        if (checkPosition1 === 1 && checkPosition2 === 0 && checkPosition3 === 1 && checkPositionLow2 === 0) {
                            if (myCol === i + 2) {
                                return myCol;
                            }
                        }
                        if (checkPosition1 === 1 && checkPosition2 === 1 && checkPosition3 === 0 && checkPositionLow3 === 0) {
                            if (myCol === i + 3) {
                                return myCol;
                            }
                        }
                        if (checkPositionLow0 === 0 && checkPosition1 === 1 && checkPosition2 === 1) {
                            if (myCol === i - 1) {
                                return myCol;
                            }
                        }
                    }
                } else {
                    om.resetDefenseCheck();
                }
                i++;
            }
            j++;
        }
        return false;
    };



    computerMove = function computerMove(pcColor, userColor) {
        var compMove;
        var myCol = false;




        console.log('MOVE COUNTER ' + om.moveCounter);
        /*
        if (om.moveCounter <= 13) {
            if (om.moveCounter === 1) {
                myCol = 2;
            }
            if (om.moveCounter === 3) {
                myCol = 3;
            }
            if (om.moveCounter === 5) {
                //console.log(om.moveCounter);
                myCol = 4;
            }
            
            if (om.moveCounter === 7) {
                //console.log(om.moveCounter);
                myCol = 4;
            }
            if (om.moveCounter === 9) {
                //console.log(om.moveCounter);
                myCol = 7;
            }
            if (om.moveCounter === 11) {
                //console.log(om.moveCounter);
                myCol = 6;
            }
            if (om.moveCounter === 13) {
                //console.log(om.moveCounter);
                myCol = 7;
            }
        } else {
            var myCol = false;
        }
        */
        
       
        
        //First move
        if (om.moveCounter === 1) {
            myCol = findfirstMove(userColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('first move');
            }
        }

        //console.log(om.moveCounter);
        if (om.moveCounter === 3) {
            myCol = findthirdMove(pcColor, userColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('third move');
            }
        }

        // check row for victory
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = checkVictoryRow(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('victory row move');
            }
        }

        //check victory col
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = checkVictoryCol(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('victory Col move');
            }
        }

        //check Victory diagonal left
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = victoryDiagonalLeft(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('victory diag left move');
            }
        }
        //check Victory diagonal rigth
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = victoryDiagonalRight(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('victory diag right move');
            }
        }


        //defense for three
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = defenseMoveForThree(pcColor, userColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('defense move for three');
            }
        }


        // defense row for three diagonal left
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = defenseDiagonalLeft(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('defense diag left move');
            }
        }
        
        //check defense diagonal rigth
        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = defenseDiagonalRight(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('defense diag rigth');
            }
        }

        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = defenseMoveForTwo(pcColor, userColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('defense for two');
            }
        }

        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = attackMove(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('attack move');
            }
        }

        if (typeof myCol === 'undefined' || myCol === false) {
            myCol = attackMove2(pcColor);
            if (myCol) {
                myCol = checkMaxCol(myCol);
                console.log('attack move2');
            }
        }


        if (myCol) {
            var doNotCol = avoidCheck(pcColor, myCol);
            console.log(doNotCol);
            if (doNotCol) {
                var newMyCol = randomMove(doNotCol);
                myCol = checkMaxCol(newMyCol);
                console.log('avoidCheck');
            }
        }




        if (typeof myCol === 'undefined' || myCol === false) {
            var avoidCol = 0;
            myCol = randomMove(avoidCol);
            if (myCol) {
                console.log('random move');
            }
        }

        //myCol is the final computer move
        //insert value to column.js to calculate column positions for animation
        triggerDisplay(myCol, pcColor);

        console.log('FINAL MOVE: ' + myCol);

        switch (myCol) {
            case 1:
                compMove = 'col1';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
            case 2:
                compMove = 'col2';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
            case 3:
                compMove = 'col3';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
            case 4:
                compMove = 'col4';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
            case 5:
                compMove = 'col5';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
            case 6:
                compMove = 'col6';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
            case 7:
                compMove = 'col7';
                blueMove(compMove);
                om.moveCounterAdd();
                changeUser(startNode);
                break;
        }
    }

    init = function () {
        var colorNode, pcColor, userColor;
        startNode = document.getElementById("startcolor");


        $(document).on('click', ".myChevron", function (e) {
            var data = $(this).attr('data-action');

            if (data) {
                disableChevron();
                blueMove(data);
                om.moveCounterAdd();
                changeUser(startNode);
                colorNode = document.getElementById("startcolor");
                pcColor = colorNode.getAttribute('data-value');


                if (pcColor === 'red') {
                    userColor = 'blue';
                } else {
                    userColor = 'red';
                }
                //animation
                var myCol = data.substring(3);
                triggerDisplay(myCol, userColor, pcColor);
                setTimeout(function () {
                    if ($('#victory').css('display') == 'none') {
                        computerMove(pcColor, userColor);
                    }
                }, 1500);

                //triggerDisplay(myCol, userColor);
                //var addItem = 'col' + myCol;
                //console.log(addItem);
                //cl.addCol(addItem);

                //start the computer move here
            }
        });


    };
    return {
        init: init,
    };
}(COMPUTER, BLUE, RED, ALL, COLUMN));

computerModule.init();



var COLUMN = (function () {
    var col1 = {
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
    addCol = function (myCol) {
        switch (myCol) {
            case "col1":
                this.col1 = this.col1 + 1;
                return this;
                break;
            case "col2":
                this.col2 = this.col2 + 1;
                return this;
                break;
            case "col3":
                this.col3 = this.col3 + 1;
                return this;
                break;
            case "col4":
                this.col4 = this.col4 + 1;
                return this;
                break;
            case "col5":
                this.col5 = this.col5 + 1;
                return this;
                break;
            case "col6":
                this.col6 = this.col6 + 1;
                return this;
                break;
            case "col7":
                this.col7 = this.col7 + 1;
                return this;
                break;
        }
        //return this;
    }
    getCol = function (myCol) {
        switch (myCol) {
            case "col1":
                return this.col1;
                break;
            case "col2":
                return this.col2;
                break;
            case "col3":
                return this.col3;
                break;
            case "col4":
                return this.col4;
                break;
            case "col5":
                return this.col5;
                break;
            case "col6":
                return this.col6;
                break;
            case "col7":
                return this.col7;
                break;
        }
        return this;
    }
    return {
        col1: col1.start,
        col2: col2.start,
        col3: col3.start,
        col4: col4.start,
        col5: col5.start,
        col6: col6.start,
        col7: col7.start,
        addCol: addCol,
        getCol: getCol
    };
})();
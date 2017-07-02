//Task4================================
function pow(x, n) {
    return Math.pow(x, n);
}

//console.log( pow(2, 5) );

//Task5================================
function check(x, n) {
    return x === n;
}

//console.log( check(3, 3) );

//Task7================================
function countWhile() {
    var i = 0;

    while (i < 50) {
        i++;
        console.log(i);
    }
}

function countFor() {
    var i;

    for (i = 1; i <= 50; i++) {
        console.log(i);
    }
}

//countWhile();
//countFor();

//Task8================================
function capitals() {
    var obj = {
        'Оттава': 'Канада',
        'Киев': 'Украина'
    };

    for (item in obj) {
        console.log( item + " - это " + obj[item] );
    }
}

//capitals();

//Task10================================
function numbersColumn() {
    var numbers = [2, 5, 9, 15, 0, 4];
    var i;

    for ( i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] > 3 && numbers[i] < 10 ) {
            console.log(numbers[i]);
        }
    }
}

//numbersColumn();

//Task12================================
function iLearnJs() {
    var arr = ['я', 'учу', 'javascript', '!'];

    console.log( arr.join('+') );
    console.log( arr.join(' ') );
}

//iLearnJs();

//Task13================================
function arraysJoin() {
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3];
    var bigArr = arr1.concat(arr2);

    console.log(bigArr);
}

arraysJoin();
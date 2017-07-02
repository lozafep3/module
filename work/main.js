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

//arraysJoin();

//Task13================================
function arrayAdd() {
    var arr = ['a', 'b', 'c'];
    arr.push(1);
    arr.push(2);
    arr.push(3);

    console.log(arr);
}

//arrayAdd();

//Task15================================
function asinc() {
    var arr = [1, 2, 3, 4, 5, 6];

    function callback(i) {
        console.log(i);
    }

    arr.forEach(function (i) {
        setTimeout(callback(i), 0);
    });
}

//asinc();

//Task16================================
//1. Что будет в console. Исправить. //TODO

// function err() {
//     (function() {
//         var a = b = 5;
//     })();
//
//     console.log(b);
// }
//
// err();

//Task17================================
function findElement(arr, elem) {
    var i;
    var result;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            result = i;
            break;
        } else if (i > arr.length) {
            result = 'Not found';
            break;
        }
    }

    return result;
}

//console.log( findElement( [1, 2, 3, 4, 5], 4 ) );

//Task18================================
function addButtonNames() {
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    var btnIndex;

    function addText(i) {
        return function() {
            //console.log(prizes[i]);
            document.getElementById('btn-' + i).innerText = prizes[i];
        };
    }

    for (btnIndex = 0; btnIndex < prizes.length; btnIndex++) {
        document.getElementById('btn-' + btnIndex).onclick = addText(btnIndex);
    }
}

addButtonNames();

//Task21================================
function clickForText() {
    function addInputText(text) {
        return function() {
            document.getElementById('text-input').value = text;
        }
    }

    document.getElementById('text-button').onclick = addInputText('Custom text');
}

clickForText();

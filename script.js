// ===== INISIALISASI =====

// menyimpan 2 angka dan 1 operator
let prevNumber = '';
let currentNumber = 0;
calculationOperator = '';

// ==========

// ===== DEKLARASI INPUT NUMBER =====

// input berupa 1 digit atau > 1 digit
const inputNumber = (number) => {
    if (currentNumber === 0) {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

// ==========

// ===== DISPLAY =====

// update display
const calculatorScreen = document.querySelector(".calculator-screen");

// function updateScreen menjalankan aksi (dengan parameter number dari argument event.target.value), class calculator-screen dengan value masing diganti menjadi number; 
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// ==========

// ===== PEMBERIAN AKSI KETIKA KLIK TOMBOL =====

// ambil number per tiap tombol number lalu ketika klik, jalankan function mengupdate atribut value
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
})

// ===========

// ===== RUMUS KALKULATOR =====
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}
// ==========


// ===== OPERATOR =====
const inputOperator = (operator) => {
    // jika belum memasukkan operator, maka prev = current
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})
// ==========

// ===== EQUAL =====
const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})
// ==========


// ===== AC =====
const clearBtn = document.querySelector(".all-clear");

// mereset kembali menjadi keadaan semula
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = 0;
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})
// ===========


// ===== DECIMAL =====
const decimal = document.querySelector(".decimal");

// penambahan decimal ketika dibutuhkan
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
// ==========
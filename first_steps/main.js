
function is_integer(value) {
    if (Number.isInteger(value)) {
       console.log("true")
    } else {
        console.log("false")
    }
}
is_integer(4);

let arr = [1,2,3,4,5,6,7,8,9];

function all_arr(arr) {
    let sum = 0;
    arr.forEach(arg => {
        sum += arg;
        
    })
    console.log(sum);
}
all_arr(arr);

function c_to_f(temp) {
    let f_temp = (9*temp)/5 +32;
    console.log(f_temp);
}

function f_to_c(temp) {
    let c_temp = (temp - 32)/9 *5;
    console.log(c_temp);
}

c_to_f(100);
f_to_c(212);

function factorial(n) {
    let fact = 1;
    for (let x = 1; x <= n; x++) {
        fact = fact*x;
    }
    return fact;
}

console.log(factorial(5));


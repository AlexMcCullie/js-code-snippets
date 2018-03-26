const print = (arg, showValue = true) => {
    if (showValue && typeof(arg) === "function")
        console.log(arg());
    else
        console.log(arg);
  }
// head recursion
// A NON-tail-recursive function.  The function is not tail
// recursive because the value returned by fact(n-1) is used in
// fact(n) and call to fact(n-1) is not the last thing done by fact(n)
const factorial = (n) => {
    if (n === 0) return 1;
    return (n * factorial(n - 1))
}

//tail recursion
//some optimisation in js
const factorialTail = (n) => {
    const fact = (n, acc) => {
        if (n === 0) return acc;
        return fact(n - 1, n * acc)
    }
    return fact(n,1)
}
//tail recursion to summ array
const sumArray = (arr) => {
    const sumItem = (n,acc) => {
        if (n < 0) return acc;
        return sumItem(n-1,acc + arr[n])
    }
    return sumItem(arr.length - 1,0)
}

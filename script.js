// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// const count = fruitBasket.reduce( (tally, fruit) => {
//     tally[fruit] = (tally[fruit] || 0) + 1;
//     return tally;
// })
// //
// // const a = reverseWords('The quick brown fox jumps over the lazy dog.')
// console.log(count)

//['blue','green','green','black','orange','blue','green','red']
//
// const maxValue = (values) => {
//     return Math.max(...values.split(' ').map(value => +value));
// }
// const minValue = (values) => {
//     return Math.min(...values.split(' ').map(value => +value));
// }
// const boundaryValue = (values, boundary) => Math[boundary](...values.split(' ').map(value => +value))
// const highAndLow = (numbers) => [boundaryValue(numbers, 'max'), boundaryValue(numbers, 'min')].join(' ');
//
// function SeriesSum(n) {
//     let result;
//     for(let i = 1; i <= n; i++) {
//         result = 1 / (3 * i - 2)
//         console.log(result)
//     }
//     return result;
// }
// function SeriesSum(n) {
//     // let numbers = [];
//     // for (let i = 1; i <= n; i++) {
//     //     numbers.push(i);
//     // }
//     // return numbers.reduce((acc, current) =>  acc + 1 / (3 * current - 2), 0).toFixed(2)
// }
//
// console.log(SeriesSum(5))
//
// function getSum(a, b) {
//     let result = 0;
//     const min = a < b ? a : b;
//     const max = a > b ? a : b;
//
//     for (let i = min; i <= max; i++) {
//         result += i;
//     }
//     return result;
// }
// getSum(1, 0)
// // console.log()

// const a = ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"]
//

// function longestConsec(strarr, k) {
//     if (!strarr.length || k > strarr.length || k <= 0) return '';
//     const arr = [];
//     strarr.forEach((w, i, a) => {
//         if (a.slice(i, k + i).length >= k) arr.push(a.slice(i, k + i));
//     });
//     return arr.reduce((total, cur) => total.join('').length >= cur.join('').length ? total : cur).join('');
// }
// function longestConsec(strarr, k) {
//     if (!strarr.length || k > strarr.length || k <= 0) return '';
//     return strarr.reduce((t, c, i, a) =>  t.join('').length >= a.slice(i, k + i).join('').length ? t : a.slice(i, k + i), []).join('');
// }
// console.log(longestConsec(a, 0))
//

function toCamelCase(str){
    str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}











































































// 1. Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA',
];

function helper(string) {
    let a = [];
    a.push(string[0] + string.substring(1).toLowerCase());
    a.push(string.substring(0, 3));
    a.push(string.length);
    // console.log(a);
    return a;
}
// helper('ALBANIA');
function createArrayOfArrays(countries) {
    let result = [];
    countries.forEach((it) => result.push(helper(it)));
    // console.log(countries);
    return result;
}
console.log(createArrayOfArrays(countries));
// createArrayOfArrays(countries)
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

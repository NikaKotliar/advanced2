/* eslint-disable */
let result = []

const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}


function orderByProps(obj, keys) {
    let reversedKeys = keys.reverse();
    let keysSorted = Object.keys(obj).sort(function (a, b) {
        return reversedKeys.indexOf(b) - reversedKeys.indexOf(a) || a.localeCompare(b);
    });
    for (let i = 0; i < keysSorted.length; i++) {
        let array1 = {
            key: keysSorted[i],
            value: obj[keysSorted[i]]
        }
        result.push(array1)
    }
    return result
}


export{obj,orderByProps }
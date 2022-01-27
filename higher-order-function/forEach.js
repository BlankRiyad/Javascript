

/* array.forEach(funcArray);


function funcArray(item) {
    console.log(item);
}; */


let textArray = [
    {model:"Sentra", doors:4},
    {model:"Maxima", doors:4},
    {model:"Skyline", doors:2}
]

textArray.forEach(item => console.log(item));
textArray.forEach(item => console.log(item.model));
textArray.forEach(item => console.log(item.doors));



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


let sum = 0;

array.forEach(item => sum += item);

console.log(sum);
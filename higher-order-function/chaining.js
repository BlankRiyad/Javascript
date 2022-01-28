let ages = [20, 30, 25, 19, 53, 18, 10, 35, 29, 39, 12];


const eligible = ages
.filter(age => age >= 21)
.map(age => ({Adult: age}))
.filter(obj => obj.Adult >= 30)
.map(obj => ({older: obj}));

console.log(eligible);

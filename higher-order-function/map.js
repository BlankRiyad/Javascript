let biggerArray = [    
    {name:"Ram", email:"ram@gmail.com", age:23},    
    {name:"Shyam", email:"shyam23@gmail.com", age:28},  
    {name:"John", email:"john@gmail.com", age:33},    
    {name:"Bob", email:"bob32@gmail.com", age:41}   
];

const textMap = biggerArray.map(medicine =>  `${medicine.name} is ${medicine.age} years old and his email-address: ${medicine.email}`);

console.log(textMap);

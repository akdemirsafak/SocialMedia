let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 20, occupation: 'programmer' },
];


//1- forEach
// users.forEach(user => {
//     console.log(`Name : ${user.name}, Yaş : ${user.age}, Meslek : ${user.occupation}`)
// });

//2-
// for(let i in users){
//     console.log(`Name : ${users[i].name}, Yaş : ${users[i].age}, Meslek : ${users[i].occupation}`)
// }


//3-


for(let user of users){
    console.log(`Name : ${user.name}, Yaş : ${user.age}, Meslek : ${user.occupation}`)
}


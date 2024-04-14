
//--------------------FILTER METHOD--------------------------

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 20, occupation: 'programmer' },
]

let filteredUsers=[];

filteredUsers=users.filter((user)=>user.age>25 && user.occupation==='programmer'); //şarta uyan kayıtları döndürür.

console.log(filteredUsers)


//------ FILTERED SORTED MAP EXAMPLE ----------------

let filteredUserNames = users.filter(user => user.age > 40 && user.occupation === 'programmer')
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);

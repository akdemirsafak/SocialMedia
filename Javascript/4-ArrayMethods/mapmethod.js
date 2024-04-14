//--------------------MAP METHOD--------------------------

//map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır. 
//Her bir eleman tek tek işlenir, değerleri değiştirilebilir, geriye ne döndürüleceği belirlenebilir ve sonunda ise, işlemden geçen öğelerden oluşan bir dizi geriye döner.
// ! Varsayılan diziyi değiştirmez.

//Numbers dizisindeki elemanların karesini map fonksiyonu ile alma örneği :
let numbers = [1, 4, 9]
let roots = numbers.map(num => Math.sqrt(num));

console.log(roots); // [1, 2, 3]
console.log(numbers); // [1, 4, 9]


// ORNEK 2 : map ile return etme


const users=[{
    name: 'Akdem',
    surname: 'Demir',
    age: 25
},
{
    name:'Kaan',
    surname:'Boşnak',
    age: 30
}
]

const newUsers = users.map(user => {
	user.fullName = `${user.name} ${user.surname}`;
	return {
	    fullName: user.fullName,
		age: `${user.age} years old`
	}
});

console.log(newUsers)

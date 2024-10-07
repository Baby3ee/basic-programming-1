// array
const cars = ['Saab', 'Volvo', 'BMW']
console.log(cars.length) //cars.length จำนวนสมาชิก
console.log(cars[2]) //ดึงค่าของข้อมูล
console.log(cars[0] = 'Benz') //เป็นการเปลี่ยนจาก'Saab'เป็น'Benz'

// For Loop
// for (let i=0; i<= 10; i++){
//     console.log(i)
// }

// let i = 0
// do {
//     console.log(i)
//     i++
// }while (i <= 10)

// For Loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

//while Loop
let i = 0
while (i < cars.length) {
    console.log(cars[i])
    i++;
}

cars.pop() //เป็นการตัดตัวสุดท้ายออก ['Saab','Volvo'] .popเป็นการเล่นกับตัวท้าย
cars.push('Benz') //เป็นกรเพิ่มตัวสุดท้าย['Saab','Volvo','Benz'] .pushเป็นการเล่นกับตัวท้าย

cars.shift() //เป็นการตัดตัวหน้าออก['Volvo','Benz']
cars.unshift('BMW') //เป็นการเพิ่มตัวหน้าเข้าไป['BMW','Volvo','Benz']

const preson = {
    firstName: 'chomphunut',
    lastName: 'phaengya',
    age: 21,
    tel: '081365xxxx',
    sister: {
        fristName: 'xxxxx',
        lastName: 'xxxx',
        age: 18
    }
}
// preson.lastName //เป็นการเรียกดูทีละตัว
// preson.age = 25 // เป็นการเปลี่ยนค่า

// //Nested Objects เป็นการซ้อนของข้อมูล
// preson.sister.fristName //เป็นการเข้าทีละตัว

const frineds = [{

    firstName: 'chomphunut',
    lastName: 'phaengya',
    age: 21,
    tel: '081365xxxx',
    sister: {
        fristName: 'xxxxx',
        lastName: 'xxxx',
        age: 18
    }
},
{
    firstName: 'chomphunut',
    lastName: 'phaengya',
    age: 21,
    tel: '081365xxxx',
    sister: {
        fristName: 'xxxxx',
        lastName: 'xxxx',
        age: 18
    }
},
{
    firstName: 'chomphunut',
    lastName: 'phaengya',
    age: 21,
    tel: '081365xxxx',
    sister: {
        fristName: 'xxxxx',
        lastName: 'xxxx',
        age: 18
    }
}]

for (let i = 0; i<frineds.length;i++){
    console.log(frineds[i].firstName)
}





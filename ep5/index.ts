let sum: number = 0 //for Loop ไม่ถูกกวนจากข้างได้ ถ้าไม่อยากให้ใครมากวนให้ใช้ for Loop
for (let i = 1; i <= 31; i++) {
    i++ //เท่ากับเป็นค่าที่เพิ่มขึ้นเรื่อยๆ , i = 0 เท่ากับเริ่มต้นจาก0 , i<=5 เท่ากับการที่จะวนถึงเลขนั้น
    sum = sum + i
}
console.log('total:', sum) //เป็นการที่หาค่ารวม 

// while Loop มีโอกาสที่ถูกรบกวนจากข้างนอกได้ ถ้าชอบให้มีการกวนควรใช้ while Loop
//let i : number = 1
//let sum : number = 0
//while (i <= 365){ ทำเหมือนข้างบนแต่ใช้ while Loop
//sum = sum + i
//i++
//}
//console.log('total:', sum)


// do while
//let i : number = 1 เหมือนข้างบนแต่ใช้ do while
//let sum : number = 0
//do{
//   sum = sum + i
//   i++
//}while (i <= 365)
//console.log('total:', sum)

// let i: number = 1 ทำให้ค่าไม่ตรงกับเพราะมีการกวนจากข้างนอก
// let sum: number = 0

// for (let j = 1; j < 2; j++) { ตรงนี้
//     i = i * 5
// }
// while (i <= 365) {
//     sum = sum + i
//     i++
// }

// console.log('total:', sum)

// let sum : number = 0 
// let isBeark : boolean = false
// let row : number = 0


//  while (true){ เป็นการที่วนลูปจนถึงเวลาที่กำหนดจึงหยุดการทำงาน
//     console.log('วิภูวิลล่าโสด')
//     row++
//     if (row === 3){
//         break
//     }
//  }



// let car1: string = 'Honda'
// let car2: string = 'Yamaha'
// let car3: string = 'Toyota'
// let car4: string = 'Suzuki'

//const car : string[] = ['Honda','Yamaha','Toyota','Suzuki']
//console.log(car[1])  การหาข้อมูลอยู่ตำแหน่งไหน
//console.log(car.length) การดูว่าข้อมูลนั้นมีความยาวกี่ตัว
//car[1] = 'Mazda'
//console.log(car[1])


//const num : number[] = [1,2,3,4]

//const bool : boolean[] = [true, false, false, true]

//const myName : string = 'สุดสวย สวยสุด'
//console.log(myName[2]) // myName.charAt()


// const cars : string[] = ['Honda','Yamaha','Toyota','Suzuki']

// for (let i=0;i < 4;i++){ เป็นการแสดงข้อมูลมี่กำหนดให้ตามที่มี 4 เท่ากับมีข้อมูลอยู่สี่ค่า
//     console.log(cars[i])
// }

// for (let i =0; i < cars.length; i++){ เป็นการแสดงข้อมูลตามที่lengthความยาวของตัวษร
//    console.log(cars[i])
// }


//การที่ไล่เช็คค่าทีละตัวเพื่อหาตัวที่กำหนด ใช้เงื่อนไข พอเจอแล้วก็เปลี่ยนค่าจาก 'Yamaha' เป็น 'รถซื้อแกง จะแรงได้ไง'
const cars : string[] = ['Honda','Yamaha','Toyota','Suzuki', 'Mazda']

for (let i =0; i < cars.length; i++){ 
   if(cars[i] === 'Yamaha'){
    console.log('รถซื้อแกง จะแรงได้ไง')
   } 
}
//การที่เช็คค่าข้อมูลและแสดงแสดงข้อมูลที่มี forEach
cars.forEach(function(c){
    console.log(c)
})

cars.forEach(function(car: string){
    console.log(car)
})

//เครื่องหมายตัวหนอนใช้ได้ใน String

//function sayHi(dayOfWeek : number){
// if(dayOfWeek === 1){
//     console.log('วันอาทิตย์')
// }else if (dayOfWeek === 2){
//    console.log('วันจันทร์')
// }else if (dayOfWeek === 3){
//    console.log('วันอังคาร')
// }else if (dayOfWeek === 4){
//     console.log('วันพุธ')
// }else if (dayOfWeek === 5){
//      console.log('วันพฤหัสบดี')
//  }else if (dayOfWeek === 6){
//      console.log('วันศุกร์') 
//  }else if (dayOfWeek === 7){
//      console.log('วันเสาร์')
//   }
//}
//sayHi(2)

function sayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
        default: //เป็นการบอกว่าค่าที่ใส่มันไม่มีในเงื่อนไขนี้ต้องใส่ค่าใหม่
            console.log('ระบุวันผิด')
            break
    }
}
sayHi(8)

// const x: number = 41
// const y: number = 1000000

// console.log(y.toLocaleString()) เป็นการใส่ลูกน้ำให้ตัวเลข
// console.log(y.toFixed)

//const s :string = '45'
//  console.log(Number(s)) เป็นการเปลี่ยนจากตัวหนังสือเป็นตัวเลข

// const x: string = '46'
// console.log(parseInt('46.95')) 

//เขียนfunctionจัดการทศนิยมให้กับตัวเลข
function fixedDecimal(n: number, digit: number) { //ประกาศตัวแปร
    if (digit > 17) {
        return 'กดเกินค่ะคุณ'
    }
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(50.18888888888888, 12))


function fixNumber(x:number){
    const y = x.toLocaleString()
    return y
}

console.log(fixNumber(800000)) //รับตัวเลขเข้ามาทีหลัง

// const n: number = 5000000 การกำหนดตรงตัวโดยไม่ได้รับค่า

// console.log(n.toLocaleString()) 


const str: string = 'ณเดชน์ ณ บางคน บางคนใจเดียว บางคนหลายใจ เกิดบางแค เลยช่วยแม่ขายข้าวมันไก่'

//console.log(str.length) เป็นการนับตัวอักษรและเว้นวรรค
//console.log(str.charAt(0)) เป็นที่อยู่ตัวอักษร index ตัวอักษรแรกจะเป็น0

console.log(str.length) 
//console.log(str.charAt(str.length - 1)) เป็นการที่นับตัวอักษรย้อนกลับจากหลังมาหน้า


const string1: string = 'Chomphunut'

//console.log(str.indexOf('h')) เป็นการหาที่อยู่ตัวอักษร
//console.log(str.toLocaleUpperCase()) ตัวอักษรใหญ่ทุกตัว
//console.log(str.toLocaleLowerCase()) ตัวอักษรเล็กทุกตัว
//console.log(str.trimStart()) เป็นการที่ลบตัวอักษรว่างข้างหน้า
//console.log(str.trimEnd()) เป็นการที่ลบตัวอักษรว่างข้างหลัง
//console.log(str.length) เป็นการนับตัวอักษรและเว้นวรรค
//console.log(str.charAt(0)) เป็นที่อยู่ตัวอักษร index ตัวอักษรแรกจะเป็น0
//console.log(str.length) 
//console.log(str.charAt(str.length - 1)) เป็นการที่นับตัวอักษรย้อนกลับจากหลังมาหน้า

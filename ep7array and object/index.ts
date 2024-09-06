// const aboutMe = {
//     firstName : "Chomphunut" ,
//     lastName: "Phaengya" ,
// }

// console.log(aboutMe.firstName) การเรียกดูชื่อ

// aboutMe.firstName = 'Nan' การเปลี่ยนจาก "Chomphunut" เป็น 'Nan'
// console.log(aboutMe) 

// const iDol = {
//     firstName: "Jantana",
//     lastName: "Phajammool",
//     age: 22,
//     height: 163,
//     phone: '065xx45xxx'
//     fan: {
//         firstName: "Jantana",
//         lastName: "Phajammool",
//         age: 25,
//         height: 163,
//     }
// }
// console.log(iDol.fan.age) อันนี้เป็นการที่ซ้อนกันไป ค่อยๆเข้าไปทีละตัว



const iDolArray = [
    {
        firstName: "Jantana",
        lastName: "Phajammool",
        age: 22,
        height: 163,
        phone: '065xx45xxx'
    },{
        firstName: "Rawiwan",
        lastName: "chanda",
        age: 27,
        height: 158,
        phone: '095xx454xx'
    }, {
        firstName: "Nararat",
        lastName: "Phaengya",
        age: 26,
        height: 188,
        phone: '064xx457xx'
    },{
        firstName: "Yanisa",
        lastName: "Didkarmpom",
        age: 25,
        height: 173,
        phone: '061xx75xxx'
    }

]

const iDolArrayPhoneNumber = iDolArray.map(function(element,index){ //map ทำหน้าที่สร้าง array ใหม่ value ตามเงื่อนไขที่เรากำหนด
    return ({
        firstName : element.firstName,
        lastName : element.lastName,
        phone: element.phone
    })
})
console.log(iDolArrayPhoneNumber)


const iDolMoreThan = iDolArray.filter(function(element,index){ //filterป็นการทำคัดกรองสมาชิกตามเงื่อนไขที่เรากำหนดไว้
    return element.age > 22 && element.height > 160 //เป็นการเทียบว่าใครอายุมากกว่า 22 และสูงมากกว่า 160
})
 console.log(iDolMoreThan)
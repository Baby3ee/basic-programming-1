//เป็นการหาค่าของที่ราคามากกว่า 10 ใช้.filter
const items = [
    { product: 'Pen', price: 15 },
    { product: 'NoteBook', price: 50 },
    { product: 'Eraser', price: 5 }
];

const expnsiveIteme = items.filter(function (element, index) {
    return element.price > 10
})

console.log(expnsiveIteme)


const fruits = ['apple', 'babana', 'cherry', 'data'];

const longFruits = fruits.filter(function (element, index) {
    return element.length > 5 // ให้โชว์คำที่มีมากกว่า5
}).map(function (element, index) {
    return element.toUpperCase() //เป็นการให้เป็นพิมพ์ใหญ่ทั้งหมด
})
console.log(longFruits)

//เป็นการบวกค่าเพิ่มทีละหนึ่ง
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const incrementedNumbers = number.map(function (element, index) {
    return element + 1
})

console.log(incrementedNumbers)

const names = ["John Doe", "jane Smith", "Jack Brown"];
//แยกชื่อกับนามสกุลออกจากกัน ที่ระบุว่าเป็นชื่อจริง และนามสกุลโดยแยกกัน
function cutNameWithWhileLoops(name: string[]) {
    const fullNameArray: {
        firstName: string;
        lastName: string;
    }[] = [];

    for (let i = 0; i < name.length; i++) {
        const cutName = name[i].split(" ") // ["John", "Doe"]
        const fullName = {
            firstName: cutName[0],
            lastName: cutName[1],
        }
        fullNameArray.push(fullName);
    }

    return fullNameArray;
    //ยาก
}

function cutNameWithMap(names: string[]) {
    return names.map(function (element, index) {
        const cutName = element.split(" ")
        return ({
            firstName: cutName[0],
            lastName: cutName[1],
        })
    })
}

console.log(cutNameWithWhileLoops(names))
console.log(cutNameWithMap(names))
//ง่าย


const people = [
    { name: "Alice", age: 17 }, //ถ้าอายุน้อยกว่า 18 ปี จะขึ้นว่า isAdult: false ถ้าอายุมากกว่า 18 จะขึ้นว่า isAdult: true
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const updatePeople = people.map(function (element, index) {
    return {
        name: element.name,
        age: element.age,
        isAdult: element.age > 18

    }
})

console.log(updatePeople)

const Person = {
    firstName: "John",
    lastName: "Doe",
    getFullName(): string {
        return '${this.firstName} ${this.lastname}';
    }
};

console.log(Person.getFullName());


const Account = {
    balance: 1000,
    deposit: function(amount: number) {
        this.balance = this.balance + amount;
    },
    withdraw: function (amount: number) {
        if (this.balance < amount) {
            console.log("เงินไม่พอที่จะถอน ยอดเงินปัจจุบันไม่เพียงพอ" + this.balance)
            return
        }

        this.balance = this.balance - amount
        console.log("ถอนเงิน" + amount + "คงเหลือ " + this.balance)
    }
};
Account.withdraw(500);
//deposit ฝาก 
//withdraw ถอน
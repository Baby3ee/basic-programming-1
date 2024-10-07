//การหาผลรวมของตัวเลข และหาค่าเฉลี่ย
// const score: number[] = [10, 23, 26, 30, 33] เป็นการประกาศตัวแปรและค่า
// let sum: number = 0 ให้ sum เริ่มต้นที่ 0

// for (let i = 0; i < score.length; i++) { เป็นการทำงานวนลูป เริ่มจาก i = 0 และ i น้อยกว่าความยาวของ score และ  i++ คือบวกเพิ่มค่าไอไปเรื่อยๆ 
   // sum = sum + score[i] เป็นการหาผลรวมของ  score
//}

// const avg = sum / score.length เป็นหาค่าเฉลี่ย

// console.log('total', sum) เป็นการแสดงค่าผลรวม
// console.log('Avg', avg) เป็นการแสดงค่าเฉลี่ย

//การประกาศค่าตัวแปรและหาตำแน่ง 
// const studentsName: string = 'แนน , ฟู , บี , อ้นจี้ , ลัคกี้ ,นัท , เอ็ม , ออม , ปลื้ม , ก็อต' 

// const studentsNameArray = studentsName.split(',') ให้เป็น Array แบบนี้["แนน ", " ฟู ", " อ้นจี้ ", " ลัคกี้ ", "นัท ", " เอ็ม ", " ออม ", " ปลื้ม ", " ก็อต"]
// console.log(studentsNameArray[2]) แสดงค่า บี


//ประกาศตัวแปรประเภท string ใส่ชื่อสัตว์เชื่อมด้วย * สร้างตัวแปรเก็ยข้อมูลตัวแปรให้เป็น Array
// const animal:string = 'หมา*นก*ปลา*ลิง'

// const animalArray : string[] = animal.split('*') ไม่ว่าจะเชื่อมด้วยอะไรผลลัพธ์จะเป็น "ปลา" แบบนี้
// console.log(animalArray) คำตอบที่ได้ ["หมา", "นก", "ปลา", "ลิง"]  ไม่ว่าจะเชื่อมด้วยอะไร


//const animal:string = 'หมา*นก*ปลา*แมงกะพรุน'
// console.log('เดิม:',animalArray) คำตอบ "เดิม:",  ["หมา", "นก", "ปลา", "แมงกะพรุน"] 

// animalArray.pop() // ดึงตัวสุดท้ายออก
// console.log('ดึงตัวสุดท้าย:', animalArray) แมงกะพรุนถูกลบออก คำตอบ "ดึงตัวสุดท้าย:",  ["หมา", "นก", "ปลา"] 

// animalArray.push('คาปิบาร่า')
// console.log('ใส่ใหม่:', animalArray) ใส่คาปิบาร่าแทนที่แมงกะพรุน คำตอบ "ใส่ใหม่:",  ["หมา", "นก", "ปลา", "คาปิบาร่า"] 

// animalArray.shift()
// console.log('ดึงตัวหน้า:' , animalArray)  คำตอบลบตัวหน้า "ดึงตัวหน้า:",  ["นก", "ปลา", "คาปิบาร่า"] 

// animalArray.unshift('ยีราฟ')
// console.log('ใส่ตัวหน้า :', animalArray) เปลี่ยนหมาเป็นยีราฟคำตอบ"ใส่ตัวหน้า :",  ["ยีราฟ", "นก", "ปลา", "คาปิบาร่า"] 

// console.log('เรียง ก-ฮ :' , animalArray.sort()) คำตอบ "เรียง ก-ฮ :",  ["คาปิบาร่า", "นก", "ปลา", "ยีราฟ"] 

// console.log('เรียง ฮ-ก :', animalArray.reverse()) "เรียง ฮ-ก :",  ["ยีราฟ", "ปลา", "นก", "คาปิบาร่า"] 

// console.log('slice 0-2 :' , animalArray.slice(0,2)) "slice 0-2 :",  ["ยีราฟ", "ปลา"] 

// const fruits = ["Banana","Orange","Apple","Mango"]
// console.log('เรียง A-Z :' , fruits.sort()) คำตอบ "เรียง A-Z :",  ["Apple", "Banana", "Mango", "Orange"]
// console.log('เรียง Z-A :' , fruits.reverse()) คำตอบ "เรียง Z-A :",  ["Orange", "Mango", "Banana", "Apple"] 
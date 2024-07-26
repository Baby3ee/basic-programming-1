function HelloWorld(){ //เป็นการที่ไม่ต้องรับค่าอะไรเข้ามา
     console.log('สวัสดีแนน') //console.log เป็นการที่แสดงผลออกทางหน้าจอ ในการที่จะแสดงอะไรออกมาจะอยู่ในวงเล็บ
}

HelloWorld()
function secondHello(name: String){
    console.log(name)
    //return name เป็นการที่อยากให้ console.log(secondHello('Max')) ทำงานได้ต้องมีค่าให้ทำงานได้โดยต้องมี return ถึงจะแสดงค่าออกมา
} //รับ input แต่ไม่มีมี output

console.log(secondHello('Max')) //เป็นการที่ไม่พบข้อมูลเพราะไม่มีค่าอะไรให้ทำงานออกมา


function getPi(){
    return 3.14
}
console.log(getPi()) //console.log เป็นการแสดงค่าออกมา แต่การทำงานแสดงผลออกมาจะทำในวงเล็บในก่อนเสมอ

//เป็นการที่ค่าจริง และ จริง จะ('เริ่มสอน') แต่ถ้ามีคนใดคนหนึ่งจะ console.log('ยังไม่สอน')
function start(fname: string, sname: string){
    if(fname === 'nan' && sname ===  'pleum'){
        console.log('เริ่มสอน')
    }else {

        console.log('ยังไม่สอน')
    }
}
start('nan','pleum') 


// เป็นการที่ มีใครสักคน หรือ ไม่มีใครสักคน  จะ('เริ่มสอน') แต่ถ้าไม่มีคนสักคนเลย console.log('ยังไม่สอน') เข้าใจไหม? ตอบไม่แต่ต้องเข้าใจเพราะออกสอบบบบบ
function sta(fname: string, sname: string){
    if(fname === 'nan' || sname ===  'pleum'){   //==สองตัวคือการเปรียบเทียบแค่ค่าของมัน  แต่ถ้า===สามตัวจะเป็นการเปรียบเทียบค่าและDataType
        console.log('เริ่มสอน')
    }else {
        console.log('ยังไม่สอน')
    }
}
sta('nan','pleum')
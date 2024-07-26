//&& คือและ || คือหรือ === เป็นการเปรียบเทียบDataType
function standard(gender: string ,height: number, weight: number){
    if(gender === 'เพศชาย' &&  height >170 || (weight > 50 && weight <= 110 ) )  {
       console.log('จับใบดำใบแดง')
    }else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
standard('เพศชาย',171 ,79)  //(weight > 50 && weight <= 110 ) เป็นการที่มีเงื่อนไขให้มีน้ำหนักไม่น้อยกว่าแต่ไม่เกิน
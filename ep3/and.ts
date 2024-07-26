//เป็นการที่มีใครสักคนก็ได้อาจารย์จะสอน แต่ถ้าไม่มีใครเลยจะไม่สอน
function st(fname: string, sname: string, tname: string ){
    if (fname === 'nan' && sname ===  'pleum' || tname === 'yo'){
        console.log('เริ่มสอน')
    }else {
        
        console.log('ยังไม่สอน')
    }
}
st('nan','pleum','ya') 


//เป็นการที่ถ้ามีแนนหรือปลื้มอยู่สักคนจะสอนไม่ได้ และต้องมีโยจะทำการสอน    ถึงจะมีแนนหรือปลื้มใครสักคนอยู่แต่ไม่มีโยจะไม่สอน
function str(fname: string, sname: string, tname: string ){
    if ((fname === 'nan' || sname ===  'pleum') && tname === 'yo'){
        console.log('เริ่มสอน')
    }else {
        
        console.log('ยังไม่สอน')
    }
}
str('nan','pleum','yo') 

//!เป็นเครื่องหมายที่สื่อการกลับค่า ถ้ามีแนนและปลื้มอาจารย์จะไม่สอน แต่ถ้าไม่มีแนนและปลื้มจารจะสอน
function stra(fname: string, sname: string, tname: string ){
    if (!(fname === 'nan' || sname ===  'pleum') && tname === 'yo'){
        console.log('เริ่มสอน')
    }else {
        
        console.log('ยังไม่สอน')
    }
}
stra('nan','pleum','yo') 
//โจทย์คือจากStringเป็นnumber
function convertToArrayString(arr:number[]){
const newArray : string[]= [];

//ยาก
    for(let i=0; i <arr.length;i++){
newArray.push(arr[i].toString());
    }
    return newArray //ส่งค่าออก
}


function convertToArrayString2(arr:number[]){
    //ยากที่สุด
    const newArray: string[] = [];
    let i = 0
    while (i<arr.length){
        newArray.push(arr[i].toString());
        i++;
    }
    return newArray //ส่งค่าออก
}

function convertToArrayStringWitMap(arr:number[]){
    //ง่ายที่สุดใช้.map
    return arr.map(function(element,index){
        return element.toString();
    })
}

console.log(convertToArrayString([1,2,3,4,5]))
console.log(convertToArrayString2([1,2,3,4,5]))
console.log(convertToArrayStringWitMap([1,2,3,4,5]))
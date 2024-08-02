function BMI(height:number, weight : number): string{ //ประกาศตัวแปร
    let bmi = weight / (height * height) //สูตรการคำนวณ ในการที่ใช้เลขยกกำลังใช้**ได้
    if (bmi < 18.50){
        return 'อยู่ในเกณฑ์น้ำหนักน้อย'
    }else if (bmi  >= 18.50 && bmi < 22.90){
        return 'อยู่ในเกณฑ์ปกติ'
    }else if (bmi  >= 23 && bmi  < 24.90){
        return 'อยู่ในเกณฑ์ท้วม'
    }else if (bmi  >= 25 && bmi < 29.90){
        return 'อยู่ในเกณฑ์อ้วน'
    }else (bmi > 30)
        return 'อยู่ในเกณฑ์อ้วนมาก'
    }
console.log(BMI(1.65,52))

function getBmi(weight :number,height:number) {
    const bmi = weight / ((height/100) * (height/100))
        switch(true){
    default:
        console.log('ผิดพลาด')
        break
        case bmi < 18.50:
            console.log('ผอม')
        break
        case bmi > 18.50 && bmi < 22.90:
            console.log('ปกติ')
        break
        case bmi > 18.50 && bmi < 22.90:
            console.log('ปกติ')
        break
        }
    }

function BMI(height:number, weight : number){
    let BMI: number = weight / (height * height)
    if (BMI < 18.50){
        return 'อยู่ในเกณฑ์น้ำหนักน้อย'
    }else if (BMI >= 18.50 && BMI <= 22.90){
        return 'อยู่ในเกณฑ์ปกติ'
    }else if (BMI <= 23 && BMI <= 24.90){
        return 'อยู่ในเกณฑ์ท้วม'
    }else if (BMI <= 25 && BMI <= 29.90){
        return 'อยู่ในเกณฑ์อ้วน'
    }else (BMI > 30)
        return 'อยู่ในเกณฑ์อ้วนมาก'
    }

console.log(BMI(50,1.75))

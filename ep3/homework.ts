function BMI(height:number, weight : number): string{
    let bmi = weight / (height * height)
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

console.log(BMI(1.75,82))

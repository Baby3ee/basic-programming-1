function grade(homework : number, midterm : number, final : number){
    let score: number = homework + midterm + final

    if (score < 50){
        return 'เกรด F'
    } else if  (score < 50)  {
        return 'เกรด D'
    } else if (score < 60){
        return 'เกรด C'
    } else if (score < 80){
        return 'เกรด B'
    }
}
console.log(grade(20,20,20))

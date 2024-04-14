//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function averageScore(...score:number[]): number {
    let total = score.reduce((sum , score)=> sum + score ,0)
    return total / score.length
}
console.log(averageScore(80, 90, 100, 70));
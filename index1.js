let height = prompt("Введіть висоту двомірного масиву")
let width = prompt("Введіть ширину двомірного масиву")

let matrix = new Array()
matrix.length = height
for (let i = 0; i < height; i++)
{
    matrix[i] = new Array()
    matrix[i].length = width
}

let counter = 1

for (let i = 0; i < height; i++)
{
    let row = ""
    for (let j = 0; j < width; j++)
    {
        matrix[i][j] = counter
        counter++
        row += matrix[i][j] + " "
    }
    console.log(row)
}

let sumLine = new Array()
let sumColumn = new Array()

for (let i = 0; i < height; i++) 
{
    sumLine[i] = 0
    sumColumn[i] = 0

    for (let j = 0; j < width; j++)
    {
        sumLine[i] += matrix[i][j]
        sumColumn[i] += matrix[j][i]
    }
}

for (let i = 0; i < height; i++)
{
    console.log(`Сума ${i+1} рядку = ${sumLine[i]}`)
}

for (let i = 0; i < height; i++)
{
    console.log(`Сума ${i+1} колонки = ${sumColumn[i]}`)
}
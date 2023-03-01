let height = prompt("Введіть висоту двомірного масиву")
let width = prompt("Введіть ширину двомірного масиву")

let matrix = new Array()
matrix.length = height
for (let i = 0; i < height; i++) 
{
  matrix[i] = new Array()
  matrix[i].length = width
}

let max = 0, sum = 0, index = 0
let test = false
for (let i = 0; i < height; i++) 
{
  let row = `${i + 1}) `
  for (let j = 0; j < width; j++) 
  {
    matrix[i][j] = Math.round(Math.random() * 10)
    matrix[i][j] += Math.round(Math.random() * 90)
    sum += matrix[i][j]
    row += `${matrix[i][j]} `
    if (matrix[i][j] == 10 || matrix[i][j] == 100){
        test = true
    }
  }
  console.log(row)
  if (sum > max) 
  {
    max = sum
    index = i
  }
  sum = 0
}

console.log(`Найбільша сума елементів у рядку під номером ${index + 1} з сумою ${max}`)
console.log(test)
let weight = Number(prompt('Lütfen kilonuzu giriniz! (kg)'))
let height = Number(prompt('Lütfen boyunuzu giriniz! (m)'))

const bmiCategory = value => {
  let durum = ''

  if (value < 18.5) durum = 'Zayıf'
  else if (value >= 18.5 && value < 25) durum = 'Normal'
  else if (value >= 25 && value < 30) durum = 'Fazla Kilolu'
  else if (value >= 30 && value < 35) durum = 'I. Derece Obez'
  else if (value >= 35 && value < 40) durum = 'II. Derece Obez'
  else if (value >= 40) durum = 'III. Derece Obez'

  return durum
}

const calculateInfo = (weight, height, callback) => {
  console.log('Your BMI value calculating...')
  callback(weight, height, bmiCategory)
}

const calculateBMI = (weight, height, callback) => {
  const BMI = weight / (height * height)
  console.log(`Your BMI value is ${BMI}`)
  const durum = callback(BMI)
  console.log(`Your BMI category is ${durum}`)
}

calculateInfo(weight, height, calculateBMI)

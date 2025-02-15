let one_box = document
  .getElementById('one')
  .addEventListener('click', () => coloring('one'))
let two_box = document
  .getElementById('two')
  .addEventListener('click', () => coloring('two'))
let three_box = document
  .getElementById('three')
  .addEventListener('click', () => coloring('three'))
let four_box = document
  .getElementById('four')
  .addEventListener('click', () => coloring('four'))

const coloring = value => {
  const div = document.getElementById(value)
  div.classList.remove('bg-secondary')
  div.classList.add('bg-primary')
  setTimeout(() => {
    const array = ['one', 'two', 'three', 'four']
    const randomIndex = Math.floor(Math.random() * array.length)
    const randomElement = array[randomIndex]
    document.getElementById(randomElement).textContent = 'Bu kutuyu seçtim!'
    document.getElementById(randomElement).classList.add('bg-danger')
  }, 3000)
}

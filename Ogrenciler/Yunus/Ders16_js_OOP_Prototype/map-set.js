// Map - set
// setleri arraylere benzetebiliriz
// mapleri foreachle dönüp value ve keyleri alabiliyoruz

// büyük veriler için performanslı set

user = {
    name: 'Yunus',
    age: 23
}

const key1 = 'name'
const key2 = { a: 10, b: 20 }
const key3 = () => console.log('merhaba')
const key4 = ["a", "b", "c"]

const myMap = new Map()

myMap.set(key1, 'String VALUE')
myMap.set(key2, 'Object Değer')
myMap.set(key3, 'Function Değer')
myMap.set(key4, 'Array Değer')

// console.log(myMap)
// console.log(typeof myMap)

// console.log(myMap.get('name'))
// console.log(myMap.get('key2'))

myMap.forEach((key, value) => {
    // console.log(key, value)
})

// Set Veri Tipi ************DEĞERLER UNİQUE OLUŞTURUR BİRDEN FAZLA VERİRSEK EKLEMEZ

const mySet = new Set()
mySet.add(100)
mySet.add('Yunusss')
mySet.add(key2) // object ekliyoruz
mySet.add(key4) // array ekliyoruz
mySet.add(key4) // DEĞERLER UNİQUE OLUŞTURUR BİRDEN FAZLA VERİRSEK EKLEMEZ

// console.log(mySet)
// console.log(typeof mySet)

// console.log(mySet.has(100)) // varsa ture yoksa false
// console.log(mySet.has(100532)) // varsa ture yoksa false


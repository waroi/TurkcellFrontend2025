function Person (name, age,langs){
    this.name = name;
    this.age =age;
    this.lengs= lengs;

}
Person.protoype.showInfos=function (){
    console.log(this.name, 'Bilgiler gösteriliyor')
}
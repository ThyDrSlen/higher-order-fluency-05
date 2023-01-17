

function averageAge(arr){
    return arr.reduce((total,next) => total + next.age,0)/alumni.length;
}

function orderedAlumni(arr){
    return arr.sort((a,b) => b.age-a.age)
}
function allUseJavaScript(arr){
    return arr.every(person=> person.language == "JavaScript")
}
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]


console.log(averageAge(alumni).toFixed(0))

console.log(orderedAlumni(alumni));

console.log(allUseJavaScript(alumni));
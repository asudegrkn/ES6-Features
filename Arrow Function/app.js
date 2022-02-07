// const merhaba = function(){
//     console.log("merhaba");
// }

// merhaba();


//Arrow Function

const merhaba = () => {

    console.log("Merhaba");
}
merhaba();


const merhaba = (firstName,lastName) => console.log("merhaba", firstName,lastName);

merhaba("kullanıcı","1");

// const cube = function(x){
//     return x*x*x;

// }
// console.log(cube(4));

const cube = x => x * x * x;


console.log(cube(4));
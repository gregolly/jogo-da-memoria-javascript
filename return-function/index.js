// function getName(){
//   return 'Gregolly França';
// }


// const getName = () =>{
//   return 'Gregolly França'
// }

// const getName = () => 'Gregolly França'

// const name = getName();

// console.log(name)

let infos = {
  name: "Sem valor",
  email: "Sem valor"
};

// function imprimirDados(name,email){
//   console.log("Name", name);
//   console.log("Email", email);

//   return function(){
//     infos = {
//       name: name,
//       email: email
//     }
//   }
// }

// const imprimeDados = (name, email) =>{
//   console.log("Name", name);
//   console.log("Email", email);


//   return () =>{
//     infos ={
//       name: name,
//       email: email
//     }
//   }
// }


// const gerarDados = (name, email) => () => {
//     infos ={
//       name: name,
//       email: email
//     }
//   }





// console.log("Valores antes", infos)
// const salvaDados = gerarDados("Gregolly França", "gregollyff@hotmail.com  ")
// salvaDados();
// console.log("valores depois", infos)


// function pessoa(name, email){
//   return {
//     nome: name,
//     correio: email
//   }
// }


const pessoa = (name, email) => ({
    nome: name,
    correio: email
})

const json = pessoa("Gregolly França", "gregollyff@hotmail.com")

console.log(json)
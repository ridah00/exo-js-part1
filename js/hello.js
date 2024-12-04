// exercice1
// let partOne = "hello";
// let partTwo = "world";
// console.log(partOne+ " " + partTwo)

// exercice 04
// let firstName = prompt("c'est quoi ton prénom ? ");
// let lastName = prompt("c'est quoi ton nom ? ");
// let age = prompt("quel age avez-vous ? ");
// let mail = prompt("quel ton mail ?")
// console.log("ton nom est : " + lastName + " , et ton prénom est  : " + firstName + " et vous aurez " + (parseInt(age)+1) + " ans en 2025 ");
// alert(`ton nom est : ${lastName}  \n et ton prénom est : ${firstName} \n et vous aurez ${parseInt(age)+1} ans  en 2025 \n ${mail}`);
// alert(`ton nom est : ${lastName}
//        et ton prénom est : ${firstName}
//        et vous aurez ${parseInt(age)+1} ans  en 2025 \n
//        mail : ${mail}
//     `);

// exercice 05

// let number1 = prompt("entrez le premier nombre");
// let number2 = prompt("entrez le deuxieme nombre");
// alert(` le resultat de l'addition est :  ${number1}  +  ${number2} = ${parseInt(number1) + parseInt(number2)} `)

// exercice 06

// let age =parseInt(prompt("Entrez votre age"));
// if (age>=18){
//     alert("l'utilisateur est majeur .")
// } else if(age<18 && age>0){
//     alert("l'utilisateur est mineur .")
// }else {
//     alert("l'utilistaeur n'est pas encore né(e)");
// }

// exercice 07

// let number = parseInt(prompt("donner un nombre"));

// if(number%2==0){
//     alert("le nombre " + number + " est pair")
// } else {
//     alert("le nombre " + number + " est impair")
// }

//exercice 08

// const password = "the white rabbit";
// let message ;
// while (message != password) {
//    message = prompt("entrez le mot de passe!");
// if (message == password) {
//   alert("hello Mr. Anderson");
// } else {
//   alert("Mauvais mot de passe");
// }
// }

// exercice 09

// let gender = prompt(" donner ton genre ( femme ou homme ) ");
// let age = parseInt(prompt(" quel age avez vous ? "));

// if (gender == "homme") {
//   if (age >= 18) {
//     alert("l'utulisateur est de type masculin et majeur");
//   } else if (age < 18 && age > 0) {
//     alert("l'utulisateur est de type masculin et mineur");
//   } else {
//     alert("l'utulisateur n'est encore né(e)");
//   }
// } else if (gender == "femme") {
//   if (age >= 18) {
//     alert("l'utulisateur est de type féminin et majeure");
//   } else if (age < 18 && age > 0) {
//     alert("l'utulisateur est de type féminin et mineure");
//   } else {
//     alert("l'utulisateur n'est encore né(e)");
//   }
// }

//exercice 10

// let note = parseFloat(prompt("entrez la note /20  "));

// if (note <= 20 && note >= 0) {
//   if (note == 0) {
//     alert("Un rendez-vous sera programmé en raison de la moyenne.");
//   } else if (note > 0 && note <= 5) {
//     alert("Trimestre insuffisant.");
//   } else if (note > 5 && note <= 10) {
//     alert("Trimestre moyen.");
//   } else if (note > 10 && note <= 13) {
//     alert("Bon trimestre.");
//   } else if (note > 13 && note <= 18) {
//     alert(" Excellent trimestre.");
//   } else {
//     alert("Félicitations.");
//   }
// } else {
//   alert("note invalid ");
// }

// exercice 11

// let month = prompt("entrez le numero du mois ( 1 - 12 ) ");

// switch (month) {
//   case "1":
//     alert("Janvier");
//     break;
//   case "2":
//     alert("fevrier");
//     break;
//   case "3":
//     alert("mars");
//     break;
//   case "4":
//     alert("avril");
//     break;
//   case "5":
//     alert("mai");
//     break;
//   case "6":
//     alert("Juin");
//     break;
//   case "7":
//     alert("Juillet");
//     break;
//   case "8":
//     alert("aout");
//     break;
//   case "9":
//     alert("septembre");
//     break;
//   case "10":
//     alert("octobre");
//     break;
//   case "11":
//     alert("novombre");
//     break;
//   case "12":
//     alert("décembre");
//     break;
//   default:
//     alert("'Veuillez uniquement saisir un chiffre entren 1 et 12'");
// }





// exercice 12
// let number = parseInt(prompt("donner un nombre"));
// (number%2==0) ? console.log("le nombre " + number + " est pair") : console.log("le nombre " + number + " est impair");


// exercice 13

// if(window.confirm("En cliquant sur OK, je confirme que je rentre sur ce site en 'mon âme et conscience")){
//     console.log(" L'utilisateur a cliqué OK");
// }else {
//     console.log(" L'utilisateur n'a pas validé");
// }






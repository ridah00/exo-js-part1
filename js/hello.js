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

// exercice 14
// let i=0;
// while (i!=100){
//     i++;
//     console.log(i);
// }

// exercice 15

// let i=100;
// while (i>=0){

//     console.log(i);
//     i-=2;
// }

// exercice 16
// let nb1=3;
// let nb2=6;

// while((nb1+nb2)<2023){
//     console.log(nb1+nb2);
//     nb2=nb2+nb1;
// }

// exercice 17

// let i=0;
// while(i<10){
//     i++;
//     (i==10) ?
//    console.log("message "  + i + " ,C'est le dernier message !: ") : console.log("message " +i ); }

// exercice 18

// for (let i=0;i<13;i++){
// console.log("Vendredi 13 ");}

// exercice 19

// for(let i=0;i<=99;i+=3){
//     console.log(i);
// }

// exercice 20

// for(let i=21;i>=-1;i--){
//     if(i==21){
// console.log("Start !!")
//     }
//         else if(i<0){
//             console.log("Finish !!");
//         }else {
//             console.log(i);
//         }
// }

// exercice 21

// for (let i = 1; i <= 100; i++) {
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz !");
//     }else if(i%3==0){
//         console.log("Fizz");
//     }else if(i%5==0){
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }

// exercice 22
// let word = "";
// for (let i = 1; i <= 10; i++) {
//   word += i;
//   if(i<10){
//     word += "-";
//   }
// }
// console.log(word);

// partie 04.

// exercice 01
// let table_2 = new Array ();
// let moisDeLanne = ["Janvier" ,"Février" , "Mars" , "Avril" , "Mai", "juin" ,"juillet","Aout", "Septembre" , "octobre", "Novembre" , "Décembre" ];

// for (let i=0 ;i<moisDeLanne.length ;i++){
// console.log(moisDeLanne[i]);
// }
// console.log(moisDeLanne);
// console.table(moisDeLanne);

// exercice 02

// let week_days = ["Monday" ,"Tuesday" ,"Wednesday", "thirsday" , "friday" , "Saturday", "Sunday" ];

// console.log(week_days[4]);

// exercice 03

// let week_days = ["Lundi" ,"Mardi" ,"Mercredi", "Jeudi" , "Vendredi" , "Samedi", "Dimanche" ];

// console.log(week_days[5]);

// exercice 04

//  let moisDeLanne = ["Janvier" ,"Février" , "Mars" , "Avril" , "Mai", "juin" ,"juillet","Aout", "Septembre" , "octobre", "Novembre" , "Décembre" ];
//  for (let i=0 ;i<moisDeLanne.length ;i++){
//  console.log(i+1 +  " - "  + moisDeLanne[i]);
//  }

// exercice 05

let moisDeLanne = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "juin",
  "juillet",
  "Aout",
  "Septembre",
  "octobre",
  "Novembre",
  "Décembre",
];
let year_months = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
let jourDeLasemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
let week_days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "thirsday",
  "friday",
  "Saturday",
  "Sunday",
];
let question_1 = "";
let question_2 = "";
let jourEtMois = [moisDeLanne, jourDeLasemaine];
let yearsAndMonths = [year_months, week_days];
console.table(jourEtMois);
console.table(yearsAndMonths);

let the_table = [jourEtMois, yearsAndMonths];
console.table(the_table);

console.log(the_table[0][0][10]);
console.log(the_table[1][1][4]);
for (let i = 0; i < year_months.length; i++) {
  question_1 += the_table[0][0][i];

  if (i < year_months.length - 1) {
    question_1 += " , ";
  }
}
console.log(question_1);

for (let j = 0; j < week_days.length; j++) {
  question_2 += the_table[0][1][j];

  if (j < week_days.length - 1) {
    question_2 += " , ";
  }
}
console.log(question_2);

// exercice 06

// let arr = ["Cendrillon"];

// console.table(arr);
// arr.push("Mulan","Peach" ,"Raiponce","Belle","Vaiana","Zelda","Jasmine");
// let princesses = arr.concat("Mulan","Peach" ,"Raiponce","Belle","Vaiana","Zelda","Jasmine");
// console.log(princesses);
// console.table(princesses);

// princesses.splice(princesses.indexOf("Peach"),1);

// princesses.splice(princesses.indexOf("Zelda"),1)

// console.table(princesses);
// princesses.sort();
// console.table(princesses);
// console.log("Il y a  "+ princesses.length +" princesses dans le tableau");

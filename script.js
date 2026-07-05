import { majScore,select_button,resetButton,b_asso,good_asso,bad_asso,game_over,delete_key, victoire} from "./fonction.js";
//button pour lancer le jeu
const button_valider=document.getElementById("button_valider");
let div_citation=document.getElementById("div_citation");
let menuDebut=document.getElementById("menuDebut");
let pseudoid=document.getElementById("textPseudo");
let score = document.getElementById("score");
const test = document.getElementById("test")
//INIT DU JEU
const dico_asso =new Map();
let nbDePair=9;
let div_victoire=document.getElementById("victoire");
let nbPDV=10;
let premierButtonAppuye=null;
let body=document.getElementById("body");
let pseudoemplacement=document.getElementById("pseudoplace");
//creation dico
for(let i=1;i<=nbDePair;i++){
    let btnA=document.getElementById("A"+i);
    let btnB=document.getElementById("B"+i);
    if(btnA && btnB){
        dico_asso.set(btnA, btnB);
    }

}
const tableau_A= document.querySelectorAll(".A");
const tableau_B= document.querySelectorAll(".B");

//lancement du jeu
button_valider.addEventListener("click",function(){
    menuDebut.style="display : none";
    div_citation.style="display: block"
    let pseudo=pseudoid.value;
    majScore(pseudo,nbPDV,score,pseudoemplacement);
    

})

//click boutton A
for(let i=0;i<tableau_A.length;i++){
    tableau_A[i].addEventListener("click",function(){
        if(premierButtonAppuye!=null){
            resetButton(premierButtonAppuye);
        
            
        }
        premierButtonAppuye=tableau_A[i];
        select_button(tableau_A[i]);
        
    })
}
for(let j=0;j<tableau_B.length;j++){
    tableau_B[j].addEventListener("click",function(){
        select_button(tableau_B[j]);
        if(premierButtonAppuye==null){
            b_asso(tableau_B[j]);

        }        
        //si correct
        else if(dico_asso.get(premierButtonAppuye)==tableau_B[j]){
            good_asso(premierButtonAppuye,tableau_B[j]);
            delete_key(premierButtonAppuye,dico_asso);
            premierButtonAppuye=null;
                if(dico_asso.size==8){
                victoire(body,div_citation,pseudoid.value,score);
                    
        }

            
        }
        //si faux
        else{
            nbPDV=nbPDV-1;
            score.innerText="Score : " + nbPDV;
        //game over
        if(nbPDV==0){
            game_over(tableau_A,tableau_B,body,div_citation,pseudoid.value); }  
        //bad asso
        else { bad_asso(premierButtonAppuye,tableau_B[j],test)
            premierButtonAppuye=null;
        }
        }
         })}



//function maj score
export function majScore(pseudo,nbPDV,scoreElement,pseudoElement){
scoreElement.innerText="score : " + nbPDV;
scoreElement.classList.add("game-score-style");
pseudoElement.innerText=pseudo;
pseudoElement.classList.add("game-pseudo-style");
}
//function selectionner boutton 
export function select_button(button){
    button.style.backgroundColor="orange";
}
//function reset button 
export function resetButton(button){
    button.style.backgroundColor="";
}
//function b_asso
export function b_asso(button){
    button.style.backgroundColor="purple";
    setTimeout(function(){button.style.background=""},500)
}
//function good_asso
export function good_asso(premierButtonAppuye,button){
    button.style.backgroundColor="green";
    premierButtonAppuye.style.backgroundColor="green";
    setTimeout(function(){
        button.style.display= "none"; premierButtonAppuye.style.display="none";},500
    )
}
//function bad_asso
export function bad_asso(premierButtonAppuye,button){
    premierButtonAppuye.style.backgroundColor="red";
    button.style.backgroundColor="red";
    setTimeout(function(){resetButton(premierButtonAppuye)},500);
    setTimeout(function(){resetButton(button)},500);


}
//function game_over
export function game_over(tableau_A, tableau_B, body, divparent, pseudo) {
    for (let i = 0; i < tableau_A.length; i++) {
        tableau_A[i].style.backgroundColor = "red";
    }
    for (let j = 0; j < tableau_B.length; j++) {
        tableau_B[j].style.backgroundColor = "red";
    }
    setTimeout(function() {
        for (let i = 0; i < tableau_A.length; i++) {
            tableau_A[i].style.display = "none";
        }
        for (let j = 0; j < tableau_B.length; j++) {
            tableau_B[j].style.display = "none";
        }
        divparent.style.display = "none";
        const end_overlay = document.createElement('div');
        end_overlay.id = "gameover_overlay";
        body.appendChild(end_overlay);

        let titre = document.createElement('h1');
        titre.textContent = "GAME OVER";
        titre.id="gameover_title";
        end_overlay.appendChild(titre);

        let text_looser = document.createElement("p");
        text_looser.innerText =  pseudo + " a perdu !";
        text_looser.classList.add("looser-banner");
        end_overlay.appendChild(text_looser);
        
    }, 500);
    
}
export function victoire(body,divactuelle,pseudo,score){
    divactuelle.style="display: none";
    let div_victoire=document.createElement("div");
    div_victoire.id="victory_overlay";
    body.appendChild(div_victoire);
    let victory_title=document.createElement("h1");
    victory_title.innerText="Victoire";
    victory_title.id="victory_title";
    div_victoire.appendChild(victory_title);
    let text_winner = document.createElement("p");
    text_winner.innerText="Bravo  "  + pseudo + "! "+  score.innerText; 
    text_winner.classList.add("winner-text");
    div_victoire.appendChild(text_winner);



}

//function delete_key
export function delete_key(key,dico){
    dico.delete(key);

}
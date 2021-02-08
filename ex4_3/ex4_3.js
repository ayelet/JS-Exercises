// exercise 4.3 - Ayelet Danieli - The winner takes it all
"use strict";


const average = (team) => {
  return (team[1] + team[2] + team[3]) / 3;
};

let team_jon = ["John", 89, 120, 130];
let team_mike = ["Mike", 116, 94, 123];
let team_mary = ["Mary", 97, 134, 105];
let avg1 = average(team_jon);
let avg2 = average(team_mike);
let avg3 = average(team_mary);


const winner = (team1, team2, team3) => {
    let winner = ``;
    if (avg1 > avg2) {
        if (avg1 > avg3) {
            winner = team1[0];
        } else if (avg1 < avg3) {
            winner = team3[0];
        }
    } else if (avg1 < avg2) {
        if (avg2 > avg3){
            winner = team2[0];
        } 
        else if (avg2 < avg3) {
            winner = team3[0];
        }
    } else {
        console.log('2 == 1')
        if (avg3 > avg1) winner = team3[0];
    }
    return winner;
};

let theWinner = winner(team_jon, team_mike, team_mary);
let winnerAvg = Math.max(avg1, avg2, avg3);
let msg = ``;
if (theWinner == '') 
    msg = `A draw (avgScore: ${winnerAvg}!`;
else
    msg = `${theWinner}'s team has won the champoinship, average score: ${winnerAvg}`;
console.log(msg)

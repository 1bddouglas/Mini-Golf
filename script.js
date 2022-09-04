let name = prompt("Welcome to GC mini golf! What is your name?");

let numberOfHoles = Number( prompt(`Hi, ${name}! Would you like to play 3 or 6 holes? `) );

if (numberOfHoles === 3) {
    let hole1 = Number ( prompt("How many putts for hole 1? (par: 3)") );
    let hole2 = Number ( prompt("How many putts for hole 2? (par: 3)") );
    let hole3 = Number (prompt("How many putts for hole 3? (par: 3)") );
    
    let total = hole1 + hole2 + hole3;

    if (total === 9) {
        console.log(`Good game, ${name}. Your total par was: 0`);
    } else if (total < 9) {
        let finalPar = 9 - total;
        console.log(`Great job, ${name}! Your total par was: -${finalPar}`);
    } else {
        let finalPar = total - 9;
        console.log(`Nice try, ${name}... Your total par was: +${finalPar}`);
    }

} else if (numberOfHoles === 6) {
    let hole1 = Number ( prompt("How many putts for hole 1? (par: 3)") );
    let hole2 = Number ( prompt("How many putts for hole 2? (par: 3)") );
    let hole3 = Number ( prompt("How many putts for hole 3? (par: 3)") );
    let hole4 = Number ( prompt("How many putts for hole 4? (par: 3)") );
    let hole5 = Number ( prompt("How many putts for hole 5? (par: 3)") );
    let hole6 = Number ( prompt("How many putts for hole 6? (par: 3)") );

    let total = hole1 + hole2 + hole3 + hole4 + hole5 + hole6;

    if (total === 18) {
        console.log(`Good game, ${name}. Your total par was: 0`);
    } else if (total < 18) {
        let finalPar = 18 - total;
        console.log(`Great job, ${name}! Your total par was: -${finalPar}`);
    } else {
        let finalPar = total - 18;
        console.log(`Nice try, ${name}... Your total par was: +${finalPar}`);
    }
}

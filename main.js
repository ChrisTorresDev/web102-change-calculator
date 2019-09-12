// Write your JavaScript here
var received = document.getElementById("amount-received").value;
var cost = document.getElementById("amount-due").value;

function calculateChange(cost, received) {
    
    var received = document.getElementById("amount-received").value;
    var cost = document.getElementById("amount-due").value;
    var change = (received - cost).toFixed(2);

    if (change > .99){
    var dollars = Math.floor(change/1.00); 
    change = change%1.00;
    document.getElementById('dollars-output').innerHTML = dollars;
    }

    if (change > .24){
    var quarters = Math.floor(change/.25);
    change = change%.25;
    document.getElementById("quarters-output").innerHTML = quarters;
    }

    if (change > .09){
    var dimes = Math.floor(change/.10); 
    change = change%.10;
    document.getElementById("dimes-output").innerHTML = dimes;
    }

    if (change > .04){
    var nickels = Math.floor(change/.05); 
    change = change%.05;
    document.getElementById("nickels-output").innerHTML = nickels;
    }

    if (change > .00) {
    var pennies = (change/.01).toFixed();
    document.getElementById("pennies-output").innerHTML = pennies;
    }
    return received - cost;
    
}

calculateChange(cost, received);








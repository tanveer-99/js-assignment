
// repo: https://github.com/tanveer-99/js-assignment



// kilometer to meter conversion code

function kilometerToMeter (value) {
    if (value>=0) {
    var result = value*1000;
    return result;
    }
    else {
        return "Error: This is not a valid input.";
    }
}


// budget calculator code

function budgetCalculator (watch, phone, laptop) {
    if (watch>=0 && phone>0 && laptop>0) {
    var watchPrice = watch*50;  // each watch's price value is 50
    var phonePrice = phone*100;  // each phone's price value is 100
    var laptopPrice = laptop*500;  // each laptop's price value is 500
    var total = watchPrice+phonePrice+laptopPrice;
    return total;
    }
    else {
        return "Error: This is not a valid input.";
    }
}




// hotel cost code

function hotelCost (days) {
    if (days<0) {
        return "Error: This is not a valid input.";
    }
    else if (days <=10) {

        // for first 10 days the cost is 100 per day
        var totalCost = days*100; 
        return totalCost; 
    }
    else if (days>10 && days<=20) {

        // for second 10 days the cost is 80 per day 
        // 1000 for the first 10 days
        var totalCost = ((days-10)*80)+1000;  
        return totalCost; 
    }
    else { 

        // for the rest of the days the cost is 50 per day
        // 1800 for the first 20 days
        var totalCost = ((days-20)*50)+(1000+800);  
        return totalCost; 
    }
}





// mega friend code

function megaFriend (name) {

    var bigName = "";
    if (name.length==0) {
        return "Error: This is not a valid input.";
    }
    else {
    for(var i=0; i<name.length; i++) {
    if (name[i].length > bigName.length) {
        bigName = name[i];
    }
}   
if (bigName.length==0) {
    return "Every string of the array is an empty string";
} 
else {
    return bigName;
}
}
}





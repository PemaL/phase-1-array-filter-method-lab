// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, string){
let match = arr.filter(function(element){
    return (element.toLowerCase() === string.toLowerCase());
  
});
return match;
}
function fuzzyMatch(arr, string){
    let match2 = arr.filter(function(element){
        return (element.startsWith(string));
    });
    return match2;
}
function matchName(driver,string){
let match3 = driver.filter(function(element){
    return(element.name.includes(string));
});
return(match3);
}

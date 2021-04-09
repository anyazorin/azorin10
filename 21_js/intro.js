// Team e&a - Anya Zorin, Ethan Shenker
// SoftDev
// K21 -- Get Scripty
// 2021-4-9
function factI(n){
    if (n==0){return 1}//base case/exception of factorial is 0!=1
    var ans=1;
    for (i=1; i<=n;i++){//simple for loop
        ans=i*ans;
    }
    return ans;
}

function factR(n) {
    if (n==0){return 1}//base case
    return n* factR(n-1);
}
//js has no print, so use console log
//if on VS code, install package "Code Runner" then ctrl+alt+n prints console log in output
console.log(factI(9));
console.log(factR(9));
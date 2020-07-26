const helpers = {};
helpers.randomNumber = () =>{
    const possible = 'abcdefghijklmnopqrstuvwyz0123456789';
    let ramdomNumber = 0;
    for(let i = 0; i < 6; i++){
        ramdomNumber += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return ramdomNumber
};


module.exports = helpers;
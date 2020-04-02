import {intersection, isSuperset} from "/../../cypress/utils/helper";

let currencySet = new Set ();

currencySet.add('RUB');
// currencySet.add('EUR');
currencySet.add('CRON');
a = ['CRON', 'BYN'];
currencySet.add('BYN');
currencySet.add('USD');
currencySet.add(a);


function presentcurrency(currencyValue) {
    currencyPresentState = currencySet.has(currencyValue);
    stateLog = console.log(`In currencsyset value ${currencyValue} is ${currencyPresentState}`);
    if (currencyPresentState){
        return stateLog
    }
    return stateLog
}

// presentcurrency('EUR');
function getRandomItemsArrFromSet(setItem) {
    currenceArr = Array.from(currencySet);
    let Chance = require('chance');
    let chance = new Chance();
    return console.log(chance.pickset(currenceArr, chance.integer({min:1, max: currenceArr.length})))
}

getRandomItemsArrFromSet(currencySet);
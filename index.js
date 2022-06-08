// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
 }
 
 
 function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
 }
 
 
 function wrapAdjective(awesomePerson = "||"){
    return function (result = "the best of the best"){
      return `You are ${awesomePerson}${result}${awesomePerson}!`;
    }
  } 

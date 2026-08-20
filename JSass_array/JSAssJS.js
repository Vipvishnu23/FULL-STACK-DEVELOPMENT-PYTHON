var roster = [];
var game = prompt("would you like to continue to start the roster app?(y/n)");

function add(roster){
  var name = prompt("What name would you like to add: ");
  roster.push(name)
};

function remove(roster){
  var name = prompt("enter the name to remove ")
  var index = roster.indexOf(name);
  roster.splice(index,1);
};

function display(roster){
  console.log(roster)
};



while (game === 'y'){
  var action = prompt("Please select an action: add, remove, display or quit: ")
  if (action === 'add'){
    add(roster);
  }else if (action === 'remove'){
    remove(roster);
  }else if (action === 'display'){
    display(roster);
  }else if (action === 'quit'){
    break;
  }else {
    console.log("enter a correct action");
    continue
  };
};
console.log("Thank you for playing")

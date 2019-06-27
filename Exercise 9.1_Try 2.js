<p id="demo"></p>

// Constructor function for Person objects

// function myWizard(x.display) {
//   console.log(toArray)
// }
//
// function myBard(y.display) {
//   console.log(toArray)
// }


class Character {
  constructor(name, age, favorite song){
      this._name = name;
      this._age = age;
      this._favoritesong = favorite song;
  }

  describeMe(){
    console.log('My name is' + this._name + 'and I am' + this._age 'years old' + 'and my favorite song is' + this._favoritesong);
  }
}

class myWizard extends Character {
  constructor(name, age, favorite song, hatColor, castSpell()){
      super(name, age, favorite song);
      this._hatColor = hatColor;
      this._castSpell = castSpell;
  }
}

  class myBard extends Character {
    constructor(name, age, favorite song, playSong){
      super(name, age, favorite song);
      this._playSong = playSong;
    }
  }


let myWizard = new Character("Gandalf", 2000, "Song of the Lonely Mountain");
myWizard.describeMe();

let myBard = new Bard("Shakespeare", 455, "The Earl of Essex Galliard");
myBard.describeMe();


//       myWizard(x.display)
//       super(hatColor(); castSpell();)
//
//     myBard(y.display)
//     super(playSong();)
//       this._name = name;
//       this._age = age;
//       this._favoritesong = favorite song;
//
//     getName() }
//       return this.name + " " + this.age;
//     }
//   }
//
//
// var myWizard = new _hatColor ("pointyhat");
// var myWizard = new _castSpell ("castspells");
//
// var myBard = new myBard.playSong('Edelweiss');
//
// // Display name
// // document.getElementById("demo").innerHTML = "My name is " + sayMyName.name;

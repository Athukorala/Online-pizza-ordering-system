import React,{Component} from 'react';
import sweet from "sweetalert";

const App = (props) => (

    sweet({
        text: 'okkk',
        icon: "warning",
        button: "Okay!",
    })

    /*
    swal("A wild Pikachu appeared! What do you want to do?", {
      buttons: {
        cancel: "Run away!",
        catch: {
          text: "Throw Pokéball!",
          value: "catch",
        },
        defeat: true,
      },
    })
.then((value) => {
  switch (value) {

    case "defeat":
      swal("Pikachu fainted! You gained 500 XP!");
      break;

    case "catch":
      swal("Gotcha!", "Pikachu was caught!", "success");
      break;

    default:
      swal("Got away safely!");
  }
});
     */


);

export default App;
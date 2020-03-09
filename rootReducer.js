const INITIAL_STATE = { face: "⊂((・⊥・))⊃", background: "grey"};

function rootReducer (state=INITIAL_STATE, action){
  console.log(action.type);
  switch(action.type){
    case "happy":
      return { ...state, face: "(＾ω＾)", background: "yellow"};

    case "sad":
      return { ...state, face: "ಠ⌣ಠ", background: "blue"};

    case "angry":
      return { ...state, face: "⋋_⋌", background: "red"};

    case "confused":
      return { ...state, face: "(⊙_☉)", background: "green"};

    default :
      return state;
  }
};



const store = Redux.createStore(rootReducer);

// module.exports = store;
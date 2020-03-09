const INITIAL_STATE = { face: "⊂((・⊥・))⊃" };

function rootReducer (state=INITIAL_STATE, action){
  switch(action.type){
    case "happy":
      return { ...state, face: "(＾ω＾)"};

    case "sad":
      return { ...state, face: "ಠ⌣ಠ"};

    case "angry":
      return { ...state, face: "⋋_⋌"};

    case "confused":
      return { ...state, face: "(⊙_☉)"};

    default :
      return state;
  }
};

const store = Redux.createStore(rootReducer);

// module.exports = store;
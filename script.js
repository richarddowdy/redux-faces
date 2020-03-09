window.onload = function () {
  const faceElement = document.getElementById("face");
  const happyButton = document.getElementById("happy");
  const sadButton = document.getElementById("sad");
  const angryButton = document.getElementById("angry");
  const confusedButton = document.getElementById("confused");
  const randomButton = document.getElementById("random");

  const initialFace = store.getState().face;
  const initialColor = store.getState().background;
  faceElement.innerHTML = initialFace;
  document.body.style.backgroundColor = initialColor

  function handleChange(faceElement){
    const currentFace = store.getState().face;
    const color = store.getState().background;
    faceElement.innerHTML = currentFace;
    document.body.style.backgroundColor = color;
  }
  store.subscribe( () => handleChange(faceElement) );
  
  happyButton.addEventListener("click", function(){
    store.dispatch({ type: "happy" });
  });

  sadButton.addEventListener("click", function(){
    store.dispatch({ type: "sad" });
  });

  angryButton.addEventListener("click", function(){
    store.dispatch({ type: "angry" });
  });

  confusedButton.addEventListener("click", function(){
    store.dispatch({ type: "confused" });
  });
  
  randomButton.addEventListener("click", function(){
    store.dispatch({ type: "random" });
  });
};
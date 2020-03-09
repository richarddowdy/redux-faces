window.onload = function () {
  const faceElement = document.getElementById("face");
  const happyButton = document.getElementById("happy");
  const sadButton = document.getElementById("sad");
  const angryButton = document.getElementById("angry");
  const confusedButton = document.getElementById("confused");
  const randomButton = document.getElementById("random");

  const { face, background } = store.getState();
  faceElement.innerHTML = face;
  document.body.style.backgroundColor = background;

  function handleChange(faceElement){
    const { face, background } = store.getState();
    faceElement.innerHTML = face;
    document.body.style.backgroundColor = background;
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
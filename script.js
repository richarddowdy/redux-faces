// import store from "./rootReducer";

window.onload = function () {
  const faceElement = document.getElementById("face");
  const happyButton = document.getElementById("happy");
  const sadButton = document.getElementById("sad");
  const angryButton = document.getElementById("angry");
  const confusedButton = document.getElementById("confused");

  const initialFace = store.getState().face;
  faceElement.innerHTML = initialFace;

  happyButton.addEventListener("click", function(){
    store.dispatch({ type: "happy" });
    const currentFace = store.getState().face;
    faceElement.innerHTML = currentFace;
  });
  sadButton.addEventListener("click", function(){
    store.dispatch({ type: "sad" });
    const currentFace = store.getState().face;
    faceElement.innerText = currentFace;
  });
  angryButton.addEventListener("click", function(){
    store.dispatch({ type: "angry" });
    const currentFace = store.getState().face;
    faceElement.innerText = currentFace;
  });
  confusedButton.addEventListener("click", function(){
    store.dispatch({ type: "confused" });
    const currentFace = store.getState().face;
    faceElement.innerText = currentFace;
  });
};
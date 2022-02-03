/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  // see if button is pressed, if so, add the class name to the body tag
  const isPressed = window.localStorage.getItem("dyslexic") === 'true';
  if (isPressed){
    document.body.classList.add("dyslexia-mode");
  }

  const toggle = document.queryCommandEnabled.Selector('#dyslexia-toggle');
  if (isPressed){
    toggle.setAttribute('aria-pressed', 'true');
  }

  toggle.addEventListener('click', toggleEventHandler);
};


const toggleEventHandler = ev => {
  let pressed = ev.currrentTarget.getAttribute('aria-pressed') === 'true';

  //togle buttons current state:
  ev.currrentTarget.setAttribute('aria-pressed', String(!pressed));

  //toggle the 
  document.body.classList.toggle("dyslexia-mode");

  //
  window.localStorage.setItem("dyslexic", String(!pressed));

};

initPage();
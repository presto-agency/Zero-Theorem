 import {addClassHeader} from "./modules/addClassToHeader.js";
// import {showSubmenu} from "./modules/showSubmenu.js";
//  import {preloader} from "./modules/preloader.js";
// import {initAnimation} from "./modules/initAnimation.js";

 import {portfolioSlider} from "./modules/logoSlider.js";
 import {aosAnimation} from "./modules/aosAnimation.js";
window.addEventListener('load', () => {
  // initAnimation();
  // preloader();
    addClassHeader();
    portfolioSlider();
    aosAnimation();
  // showSubmenu(document.querySelectorAll('.submenu-questions'));
});

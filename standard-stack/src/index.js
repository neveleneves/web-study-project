import "./assets/css/reset.css";

import "./assets/css/style.css";
import "./assets/css/fonts.css";

import "./assets/css/style-template-1.css";
import "./assets/css/fonts-template-1.css";

import "./js/example";

(function () {
  const stageCard = document.querySelectorAll(".mntn-section-title__title");
  console.log(stageCard)
  document.innerHTML = '<div class="mntn-section-title__title">123</div>'

  for(let item of stageCard) {
      item.textContent = '123'
  }

})();

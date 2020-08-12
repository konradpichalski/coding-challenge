'use strict';

(function () {
  // find the bar element to check if it doesn't exist already
  var bar = document.querySelector('.most-helpful-bar');

  // check if the bar element exists in which case just return false;
  if (bar) return false;

  // get the head element to append the styles to later
  var head = document.getElementsByTagName('head')[0];

  // css variables for colours
  var primaryColor = '#452765';
  var lightGreyColor = '#eaeaec';
  var circleBackColor = '#f5f6fb';
  var highlightColor = '#e51a90';

  // custom css as a string that will be appended to the head via link element
  var customCSSBar = '\n    .image-bar-wrapper {\n      position: relative;\n      max-width: 100%;\n      box-sizing: border-box;\n    }\n\n    .image-bar-wrapper .main-article-image {\n      margin-top: 60px;\n    }\n\n    .most-helpful-bar {\n      position: absolute;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      top: -40px;\n      width: 100%; \n      max-width: 600px;\n      margin-top: 10px;\n      box-sizing: border-box;\n      color: #fff;\n      background: ' + primaryColor + ';\n      border-top: 10px solid ' + lightGreyColor + ';\n    }\n\n    .most-helpful-bar--text-container {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n      margin: 0 10px;\n      text-align: right;\n    }\n\n    .most-helpful-bar--text {\n      margin: 0;\n    }\n\n    .most-helpful-bar--header {\n      margin-top: 11px;\n      margin-bottom: 5px;\n      color: #fff;\n      font-size: 1em !important;\n      font-weight: 300 !important; \n    }\n\n    .most-helpful-bar--p {\n      color: #fff;\n      font-size: 0.8em;\n    }\n\n    .most-helpful-bar--circle {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;  \n      width: 100px;\n      min-width: 100px;\n      height: 100px;\n      margin: -30px 0 -30px;\n      padding: 5px;\n      background: ' + circleBackColor + ';\n      border: 5px solid ' + primaryColor + ';\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: ' + primaryColor + ';\n      font-size: 0.8em;\n      font-weight: 400;\n      text-align: center;\n      line-height: 1.3;\n    }\n\n    .most-helpful-bar--circle strong {\n      color: ' + highlightColor + ';\n    }\n\n    .icon-custom {\n      margin: 10px 0 10px 5px;\n      font-size: 30px;\n    }\n\n    @media only screen and (min-width: 600px) {\n      .icon-custom {\n        margin: 10px;\n        font-size: 50px;\n      }\n\n      .most-helpful-bar--circle {\n        width: 130px;\n        min-width: 130px;\n        height: 130px;\n        margin: -30px 10px -30px;\n        padding: 10px;\n        font-size: 1em;\n      }\n\n      .most-helpful-bar--header {\n        font-size: 1.2em;\n      }\n\n      .most-helpful-bar--p {\n        font-size: 1em;\n      }\n\n      .most-helpful-bar--text {\n        margin: 0 10px;\n      }\n    }\n  ';

  var linkStyle = document.createElement('link');
  linkStyle.setAttribute('rel', 'stylesheet');
  linkStyle.setAttribute('type', 'text/css');
  linkStyle.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(customCSSBar));

  // append the created css styles to the head via link
  head.appendChild(linkStyle);

  // create updated HTML
  var mostHelpfulBar = '\n    <div class=\'most-helpful-bar\'>\n      <div class=\'most-helpful-bar--circle\'>\n        Voted <strong>really helpful</strong> by our readers\n      </div>\n\n      <div class=\'most-helpful-bar--text-container\'>\n        <div class=\'most-helpful-bar--text\'>\n          <h2 class=\'most-helpful-bar--header\'>Most helpful</h2>\n          <p class=\'most-helpful-bar--p\'>Our readers voted this article their favourite</p>\n        </div>\n\n        <i class="rm-icon-font rm-icon-font--suggestions icon-custom"></i>\n      </div>\n    </div>';

  // get the image element
  var imgElement = document.querySelector('.main-article-image');

  // wrap image and update HTML with another container to group them together
  var updatedElement = '\n    <div class=\'image-bar-wrapper\'>\n      ' + imgElement.outerHTML + '\n      ' + mostHelpfulBar + '\n    </div>\n  ';

  // update the image to the updatedElement html (including wrapper, image and new HTML)
  imgElement.outerHTML = updatedElement;
})();

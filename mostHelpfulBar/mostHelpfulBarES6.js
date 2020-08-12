(function () {
  // find the bar element to check if it doesn't exist already
  const bar = document.querySelector('.most-helpful-bar');

  // check if the bar element exists in which case just return false;
  if (bar) return false;

  // get the head element to append the styles to later
  const head = document.getElementsByTagName('head')[0];

  // css variables for colours
  const primaryColor = '#452765';
  const lightGreyColor = '#eaeaec';
  const circleBackColor = '#f5f6fb';
  const highlightColor = '#e51a90';

  // custom css as a string that will be appended to the head via link element
  const customCSSBar = `
    .image-bar-wrapper {
      position: relative;
      max-width: 100%;
      box-sizing: border-box;
    }

    .image-bar-wrapper .main-article-image {
      margin-top: 60px;
    }

    .most-helpful-bar {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      top: -40px;
      width: 100%; 
      max-width: 600px;
      margin-top: 10px;
      box-sizing: border-box;
      color: #fff;
      background: ${primaryColor};
      border-top: 10px solid ${lightGreyColor};
    }

    .most-helpful-bar--text-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 0 10px;
      text-align: right;
    }

    .most-helpful-bar--text {
      margin: 0;
    }

    .most-helpful-bar--header {
      margin-top: 11px;
      margin-bottom: 5px;
      color: #fff;
      font-size: 1em !important;
      font-weight: 300 !important; 
    }

    .most-helpful-bar--p {
      color: #fff;
      font-size: 0.8em;
    }

    .most-helpful-bar--circle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;  
      width: 100px;
      min-width: 100px;
      height: 100px;
      margin: -30px 0 -30px;
      padding: 5px;
      background: ${circleBackColor};
      border: 5px solid ${primaryColor};
      border-radius: 50%;
      box-sizing: border-box;
      color: ${primaryColor};
      font-size: 0.8em;
      font-weight: 400;
      text-align: center;
      line-height: 1.3;
    }

    .most-helpful-bar--circle strong {
      color: ${highlightColor};
    }

    .icon-custom {
      margin: 10px 0 10px 5px;
      font-size: 30px;
    }

    @media only screen and (min-width: 600px) {
      .icon-custom {
        margin: 10px;
        font-size: 50px;
      }

      .most-helpful-bar--circle {
        width: 130px;
        min-width: 130px;
        height: 130px;
        margin: -30px 10px -30px;
        padding: 10px;
        font-size: 1em;
      }

      .most-helpful-bar--header {
        font-size: 1.2em;
      }

      .most-helpful-bar--p {
        font-size: 1em;
      }

      .most-helpful-bar--text {
        margin: 0 10px;
      }
    }
  `;

  let linkStyle = this.document.createElement('link');
  linkStyle.setAttribute('rel', 'stylesheet');
  linkStyle.setAttribute('type', 'text/css');
  linkStyle.setAttribute(
    'href',
    'data:text/css;charset=UTF-8,' + encodeURIComponent(customCSSBar),
  );

  // append the created css styles to the head via link
  head.appendChild(linkStyle);

  // create updated HTML
  const mostHelpfulBar = `
    <div class='most-helpful-bar'>
      <div class='most-helpful-bar--circle'>
        Voted <strong>really helpful</strong> by our readers
      </div>

      <div class='most-helpful-bar--text-container'>
        <div class='most-helpful-bar--text'>
          <h2 class='most-helpful-bar--header'>Most helpful</h2>
          <p class='most-helpful-bar--p'>Our readers voted this article their favourite</p>
        </div>

        <i class="rm-icon-font rm-icon-font--suggestions icon-custom"></i>
      </div>
    </div>`;

  // get the image element
  let imgElement = document.querySelector('.main-article-image');

  // wrap image and update HTML with another container to group them together
  const updatedElement = `
    <div class='image-bar-wrapper'>
      ${imgElement.outerHTML}
      ${mostHelpfulBar}
    </div>
  `;

  // update the image to the updatedElement html (including wrapper, image and new HTML)
  imgElement.outerHTML = updatedElement;
})();

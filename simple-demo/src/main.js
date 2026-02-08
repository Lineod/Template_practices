import './styles/main.scss';
console.log('Styles loaded!');
// document.querySelector('#heads').innerHTML = `<head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml"
//         href="https://gcore.jsdelivr.net/gh/Lineod/wiki_assets/Template_practice/img/icon.svg?v=2" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link href="https://cdn.bootcdn.net/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
//     <link rel="stylesheet" href="/src/style.scss">
//     <title>Another Page</title>
// </head>`
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './utils.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
document.querySelector('#feet').innerHTML = `<footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h4 class="footer-heading">Tools of My Trade</h4>
                    <p>The technologies that made this portfolio possible, each with its unique strengths and color
                        identity.</p>
                    <div class="tool-icons">
                        <div class="tool-icon tool-html" title="HTML5">
                            <b class="fab fa-html5">html</b>
                        </div>
                        <div class="tool-icon tool-scss" title="SCSS">
                            <b class="fab fa-sass">scss</b>
                        </div>
                        <div class="tool-icon tool-js" title="JavaScript">
                            <b class="fab fa-js">js</b>
                        </div>
                        <div class="tool-icon tool-bootstrap" title="Bootstrap">
                            <b class="fab fa-bootstrap">bs</b>
                        </div>
                        <div class="tool-icon tool-vite" title="Vite">
                            <b class="fas fa-bolt">vite</b>
                        </div>
                        <div class="tool-icon tool-figma" title="Figma">
                            <b class="fab fa-figma">fgm</b>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mb-4">
                    <h4 class="footer-heading">Learning Resources</h4>
                    <div class="footer-links">
                        <a href="https://www.w3schools.com" target="_blank">W3Schools Tutorials</a>
                        <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a>
                        <a href="https://getbootstrap.com" target="_blank">Bootstrap Documentation</a>
                        <a href="https://vitejs.dev" target="_blank">Vite Official Guide</a>
                        <a href="https://sass-lang.com" target="_blank">Sass Documentation</a>
                    </div>
                </div>

                <div class="col-lg-4 mb-4">
                    <h4 class="footer-heading">Final Thoughts</h4>
                    <p>This portfolio represents a week of intense learning, experimentation, and growth. Every line of
                        code, every design decision, and every troubleshooting session contributed to the developer I am
                        today.</p>
                    <p class="mt-3"><i class="fas fa-heart me-2" style="color: #e34c26;"></i> 🔥Built with passion in
                        one
                        intensive week🔥</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2026 My Learning Journey Portfolio. All rights reserved. | Created in 7 days with
                    determination and the help of incredible resources.</p>
                <p class="mt-2">Special thanks to W3Schools, DeepSeek AI, and my self for not giving up.</p>
            </div>
        </div>
    </footer>`
// setupCounter(document.querySelector('#counter'))

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// export function fixNavbarFocus() {
//   document.addEventListener('DOMContentLoaded', function () {
//     var navbarToggler = document.querySelector('.navbar-toggler');
//     var navbarCollapse = document.querySelector('#navbarSupportedContent');

//     if (navbarToggler && navbarCollapse) {
//       // 当折叠区域完全隐藏后，移除按钮焦点
//       navbarCollapse.addEventListener('hidden.bs.collapse', function () {
//         navbarToggler.blur();
//       });

//       // 当折叠区域完全显示后，也可以选择移除焦点
//       navbarCollapse.addEventListener('shown.bs.collapse', function () {
//         // 如果你希望在展开后也移除焦点，可以取消注释下面这行
//         // navbarToggler.blur();
//       });
//     }
//   });
// }

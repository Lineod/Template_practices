(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();console.log("Styles loaded!");document.querySelector("#feet").innerHTML=`<footer class="footer">
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
    </footer>`;
//# sourceMappingURL=index-ClJvYOiu.js.map

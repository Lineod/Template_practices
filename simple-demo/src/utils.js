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

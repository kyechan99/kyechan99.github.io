/**
 * 저장된 theme 데이터에 따라 HTML 속성 업데이트
 */
export function rootThemeSetting() {
  try {
    var root = document.documentElement;
    var themeStorage = localStorage.getItem("theme");

    if (themeStorage) {
      root.setAttribute("data-theme", themeStorage);
    }
  } catch (e) {
    console.log(e);
  }
}

export function modalOpenPadding() {
  try {
  } catch (e) {
    console.log(e);
  }
}

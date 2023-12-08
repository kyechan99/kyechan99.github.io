const THEME = "theme" as const;

/**
 * 테마 설정
 * @param theme 테마 이름
 */
export const setThemeStorage = (theme: string) => {
  localStorage.setItem(THEME, theme);
  document.documentElement.setAttribute("data-theme", theme);
};

/**
 * 테마 제거
 */
export const clearThemeStorage = () => {
  localStorage.removeItem(THEME);
  document.documentElement.setAttribute("data-theme", "");
};

/**
 * 테마 확인하기
 * @returns 테마 여부
 */
export const getThemeStorage = (): string => {
  if (typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(THEME) || "";
};

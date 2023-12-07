import { getThemeStorage, setThemeStorage } from "@/utils/storage";
import { DefaultValue, atom, atomFamily, selector } from "recoil";

const themeAtom = atom<string>({
  key: "themeAtom",
  default: getThemeStorage(),
});

export const themeState = selector({
  key: "themeState",
  get: ({ get }) => {
    return get(themeAtom);
  },
  set: ({ set }, newTheme) => {
    if (!(newTheme instanceof DefaultValue)) {
      set(themeAtom, newTheme);
      setThemeStorage(newTheme);
    }
  },
});

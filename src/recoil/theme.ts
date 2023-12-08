import { DefaultValue, atom, atomFamily, selector } from "recoil";

import { getThemeStorage, setThemeStorage } from "@/utils/storage";

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

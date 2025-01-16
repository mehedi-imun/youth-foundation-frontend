import 'server-only'
const dictionaries = {
  "en-US": () => import("./dictionaries/en-US.json").then((module) => module.default),
  "bn-BD": () => import("./dictionaries/bn-BD.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-US" | "bn-BD") => {
  return dictionaries[locale]();
};
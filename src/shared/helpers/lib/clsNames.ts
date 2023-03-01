export interface classNameInputData {
  mainCls: string;
  mods?: Record<string, boolean>;
  additional?: string[]
};


export const clsNames = ({mainCls, mods = {}, additional}: classNameInputData): string => {
  const filtredMods = Object.entries(mods).filter(([name, value]) => {
    return value ? name : null
  }).map(([name]) => {
    return name
  });

  return [
    mainCls,
    ...additional,
    ...filtredMods,
  ].join(' ');
}
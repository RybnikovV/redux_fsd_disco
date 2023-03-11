type ClsNames = (mainCls: string, mods?: Record<string, boolean>, additional?: string[]) => string;

const clsNames: ClsNames = (mainCls, mods = {}, additional = []) => {
  const filtredMods = Object.entries(mods).filter(([name, value]) => {
    return value ? name : null
  }).map(([name]) => {
    return name
  });

  return [
    mainCls,
    ...additional.filter(Boolean),
    ...filtredMods,
  ].join(' ');
};

export { clsNames };
const deepCloneHelper = (objOrPrimitive) => {
  if (typeof objOrPrimitive === 'object') {
    const clonedObjectOrArray = Array.isArray(objOrPrimitive) ? [] : {};

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(objOrPrimitive)) {
      clonedObjectOrArray[key] = deepCloneHelper(value);
    }

    return clonedObjectOrArray;
  }

  return objOrPrimitive;
};

export default function deepClone(obj) {
  return deepCloneHelper(obj);
}

export const filterDataInArray = (array: Array<any>, text: string) => {
  const includesText = (value: any): boolean => {
    const stack = [value];
    while (stack.length) {
      const current = stack.pop();
      if (typeof current === "object" && current !== null) {
        Object.values(current).forEach((val) => stack.push(val));
      } else if (
        typeof current === "string" &&
        current.toLowerCase().includes(text.trim().toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  };

  return array.filter((item) => includesText(item));
};

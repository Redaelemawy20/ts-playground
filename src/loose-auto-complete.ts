/** this file is to test how to build loose auto-complete  in typescript*/

type SizeType = "small" | "large" | string;

function getNumber(size: SizeType): number {
  // return number beased on size if large number return large number
  if (size == "large") {
    return 10;
  }
  return 5;
}
// if we called the function here we lose auto completion
// getNumber("large");
// getNumber("small");
// getNumber("");

// to avoid this we can use omit
type Size = LooseAutoComplete<"large" | "small">;

function getNumber2(size: Size): number {
  // return number beased on size if large number return large number
  if (size == "large") {
    return 10;
  }
  return 5;
}
// if we called the function here we lose auto completion
// getNumber2("large");
// getNumber2("small");
// getNumber2("");

export type LooseAutoComplete<T extends string> = Omit<String, T>;

/** this file is to test how to avoid loose auto-complete  in typescript*/

type LoozedSizeType = "small" | "large" | string;

function getNumber(size: LoozedSizeType): number {
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
type Size = "small" | "large" | Omit<string, "small" | "large">;

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

let getValue = (): number | string => {
  return 10;
};

const output = getValue();

// bottom type
// never
if (typeof output == "number") {
  output; // number
} else if (typeof output == "string") {
  output;
} else {
  // unreachable code
  let a = output; // never
}

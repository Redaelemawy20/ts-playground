const myObj: Record<string, string> = {};
// tsConfig => noUncheckedIndexedAccess = false
myObj.foo.length; // works but could lead to bugs if foo is not in the object

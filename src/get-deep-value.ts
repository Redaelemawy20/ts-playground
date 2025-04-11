const getDeepValue = function <
  Obj extends object,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  object: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] {
  return object[firstKey][secondKey];
};

const object = {
  name: {
    firstName: 'reda',
    lastName: 7,
  },
};
getDeepValue(object, 'name', 'lastName');

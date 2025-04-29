type Foo = {
  bar: string;
  baz: number;
  qux: boolean;
  x: 8;
};
type StringStartsWithX = Extract<keyof Foo, `x${any}`>;
type Bar = Extract<keyof Foo, 'bar'>;

type _Extract<T, U> = T & U;

type Bar2 = _Extract<keyof Foo, 'bar'>;
type StriingStartsWithX2 = _Extract<keyof Foo, `s${any}`>;

import type { S } from 'ts-toolbelt';

type AccpetedPorts = '3000' | '8080';

type Port<T extends string> = S.Split<T, 'http://localhost:'>[1];

const verifyDomain = <T extends string>(
  url: Port<T> extends AccpetedPorts ? T : never
) => {};

// ✅ Valid
verifyDomain('http://localhost:3000');

// ❌ Invalid
// verifyDomain('http://localhost:5000');

// using template string types

type ValidUrl<T extends AccpetedPorts> = `http://localhost:${T}`;
const verifyDomain2 = <T extends ValidUrl<AccpetedPorts>>(url: T) => {};
// ✅ Valid
verifyDomain2('http://localhost:3000');
// ❌ Invalid
// verifyDomain2('http://localhost:5000');

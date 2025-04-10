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

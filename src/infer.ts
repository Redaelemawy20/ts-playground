type ExtractDomainName<T> = T extends `${'http' | 'https'}://${infer S}.com`
  ? S
  : never;

function getDomain(url: ExtractDomainName<'http://x.com' | 'https://xyz.com'>) {
  console.log('Valid domain:', url);
}
getDomain('xyz');

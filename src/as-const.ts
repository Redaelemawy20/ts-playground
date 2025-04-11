const routes = {
  home: '/',
  about: '/about',
  faq: '/faq',
} as const;

type RoutesArr = [keyof typeof routes];
type RoutesStr = `bb${keyof typeof routes}`;
type RoutesValues = (typeof routes)[keyof typeof routes];
const myArr: RoutesArr = ['faq'];
const mystring: RoutesStr = 'bbhome';

const validValue: RoutesValues = '/about';

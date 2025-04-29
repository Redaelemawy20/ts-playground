export interface Config {
  name: string;
  mode: 'development' | 'production' | 'testing';
  startup: 'index.dev.js' | 'index.prod.js';
}

const myDevelopmentConfig = {
  name: 'Reda App',
  mode: 'development',
  startup: 'index.dev.js',
} satisfies Config;

const myConfig = {
  name: 'Reda App',
  mode: 'development',
  startup: 'index.dev.js',
};

let sartup = myDevelopmentConfig.startup; // as const

let file = myConfig.startup; // as string

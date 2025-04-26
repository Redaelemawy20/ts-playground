type Config = {
  value?: 0 | 5 | 10 | 15 | false;
};
const control = (config: Config) => {
  console.log(config);
  const worngVol = config.value || 6;
  // if the value is 0 we get value not intended
  console.log(worngVol);

  const vol = config.value ?? 6;
  // safer to check the value if it is undefined use the fallback
  console.log(vol);
};
// works well in both cases
control({ value: undefined });
// works well only with `??`
control({ value: 0 });
control({ value: false });

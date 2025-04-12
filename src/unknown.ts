function handleData(input: unknown) {
  // let len = input.length;  can't do till we narrow it down
  if (typeof input === 'string') {
    let len = input.length;
    console.log(len);
  }
}

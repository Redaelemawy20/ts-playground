function handleData(input: unknown) {
  // let len = input.length;  can't do till we narrow it down
  if (typeof input === 'string') {
    let len = input.length;
    console.log(len);
  }
}

function safeParse(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

const result = safeParse('{"name": "John"}');
// result.name — not allowed till we check data

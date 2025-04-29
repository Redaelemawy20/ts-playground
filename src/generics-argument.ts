interface HasId {
  id: string;
}

interface Player {
  id: string;
  postion: string;
}

interface Match {
  id: string;
  time: string;
}

function getRandomObjFromData<T extends HasId[]>(data: T, idx: number) {
  return data[idx];
}

function getRandomObjFromData1<T extends HasId>(data: T[], idx: number) {
  return data[idx];
}

let player: Player = {
  id: '123',
  postion: 'goalkeeper',
};
let match: Match = {
  id: '123',
  time: '12:00',
};
let obj = getRandomObjFromData([player, match], 0); // because the generic type is HasId we don't hav close type related to our inputs
let obj1 = getRandomObjFromData1([player, match], 0); // here the type of is related to our input

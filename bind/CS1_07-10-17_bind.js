// YouTube: https://www.youtube.com/watch?v=oYDDke8hehw

function speak() {
  const saying = this.saying;
  console.log(saying);
};

const Yoda = {
  saying: 'Judge me by my size, do you?',
};

const YoungAni = {
  saying: 'IIIIIIITTTSSSSS WOOOOOOOORRRRRRKKKKKKING!!!!',
};

const bindToYoda = speak.bind(Yoda);
const bindToYoungAni = speak.bind(YoungAni);

bindToYoda();
bindToYoungAni();
speak();

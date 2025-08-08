import * as readline from "readline";

function READ(str: string) {
  return str;
}

function EVAL(str: string) {
  return str;
}

function PRINT(str: string) {
  return str;
}

function REP(str: string) {
  const r = READ(str);
  const e = EVAL(r);
  return PRINT(e);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveReadLine = () => {
  rl.question("user> ", (str) => {
    const res = REP(str);
    console.log(res);
    recursiveReadLine();
  });
};

recursiveReadLine();

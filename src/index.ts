import { Utility } from "./utility/utility";
import * as readLineSync from "readline-sync";

function main() {
  const merge = new Utility().merge;
  const collection1 = readLineSync
    .question('Enter the  first collection number array separate by ",": ')
    .split(",")
    .map((e: string) => parseInt(e))
    .filter(Number);
  const collection2 = readLineSync
    .question('Enter the second collection number array separate by ",": ')
    .split(",")
    .map((e: string) => parseInt(e))
    .filter(Number);
  console.log(merge(collection1, collection2));
}

main();

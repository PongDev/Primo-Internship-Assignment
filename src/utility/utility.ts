import { IUtility } from "src/types/utility.type";

export class Utility implements IUtility {
  merge(collection_1: number[], collection_2: number[]): number[] {
    let mergeCollection: number[] = [];
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < collection_1.length && ptr2 < collection_2.length) {
      if (collection_1[ptr1] < collection_2[ptr2]) {
        mergeCollection.push(collection_1[ptr1]);
        ptr1++;
      } else {
        mergeCollection.push(collection_2[ptr2]);
        ptr2++;
      }
    }
    while (ptr1 < collection_1.length) {
      mergeCollection.push(collection_1[ptr1]);
      ptr1++;
    }
    while (ptr2 < collection_2.length) {
      mergeCollection.push(collection_2[ptr2]);
      ptr2++;
    }
    return mergeCollection;
  }
}

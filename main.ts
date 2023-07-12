export function merge(collection1: number[], collection2: number[]): number[] {
     const merged: number[] = [];
     let i = 0;
     let j = 0;
   
     while (i < collection1.length || j < collection2.length) {
       if (j >= collection2.length || collection1[i] <= collection2[j]) {
         merged.push(collection1[i]);
         i++;
       } else {
         merged.push(collection2[j]);
         j++;
       }
     }
     return merged;
   }
   
   
"use strict";
let name1 = 'ahmed';
console.log(name1);
let title = "";
for (let i = 0; i < name1.length; i++) {
    if (i == 0) {
        title += name1[i].toLocaleUpperCase();
        i++;
    }
    title += name1[i];
}
console.log(title);

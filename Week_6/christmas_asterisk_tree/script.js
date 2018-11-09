var num = prompt('tree row');
tree(num)

function tree(treeRow) {
    var c = 1;
    var z=0;
    for (i = 0; i < treeRow-z; i++) {
     //   console.log(i)
        var str = "";
        z++
        for (j = i; j < treeRow/2-1; j++) {
            str = str.concat(" ");
          //  console.log(j)
        }
        for (k = 1; k <= c; k++) {
            str = str.concat("*");
        }
        for (j = i; j < treeRow/2-1; j++) {
            str = str.concat(" ");
          //  console.log(j)
        }
       alert(str);
        c += 2;
    }
}

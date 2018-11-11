var treeRow = prompt('tree row');
tree(treeRow)

function tree(num) {
    var c = 1;
    var z = 0;
    for (i = 0; i < num - z; i++) {
        var str = "";
        z++
        for (j = i; j < num / 2 - 1; j++) {
            str = str.concat(" ");
        }
        for (k = 1; k <= c; k++) {
            str = str.concat("*");
        }
        for (j = i; j < num / 2 - 1; j++) {
            str = str.concat(" ");
        }
        alert(str);
        c += 2;
    }
}
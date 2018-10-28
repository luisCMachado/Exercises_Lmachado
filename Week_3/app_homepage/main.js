function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openSearch() {
    document.getElementById("mySearch").style.height = "150px";
}

function closeSearch() {
    document.getElementById("mySearch").style.height = "0";
}


/*
function hideIcons() {
    const search = document.getElementById("demo-2"),
    icons = document.getElementsByClassName('header__text');

    console.log(icons)

    search.addEventListener('click', () => {
        
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = 'none'
        }
        
        
    })
}
function showIcons() {
    const search = document.getElementById("demo-2"),
    icons = document.getElementsByClassName('header__text');

    console.log(icons)

    search.addEventListener('onmouseleave', () => {
        
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = 'block'
        }
        
        
    })
}


*/


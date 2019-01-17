const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}!`));

const arr = [{
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "content": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "author": "James Brown",
        "category": 'Music'
    },
    {
        "title": "qui est esse",
        "content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "author": "Miles Davis",
        "category": 'Music'
    },
    {
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "content": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "author": "Ottis Redding",
        "category": 'Movies'
    },
    {
        "title": "eum et est occaecati",
        "content": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "author": "Clint Eastwood",
        "category": 'Movies'
    },
    {
        "title": "nesciunt quas odio",
        "content": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "author": "Michael Knight",
        "category": 'Movies'
    }
];

app.get("/", (req, res) => res.send('Welcome to the homepage'))
app.get("/posts", (req, res) => res.send(arr))
app.get("/posts/:category", function (req, res) {
    const filterArr = arr.filter(x => x.category == req.params.category)
    res.send(filterArr)
});
app.get("*", (req, res) => res.send('404 not found'))
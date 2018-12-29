const loginForm =
    `<form>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button id="submit" class="btn btn-danger btn-danger btn-block">Submit</button>
                <div class="inlineContent btn-group-toggle">
                    <label class="btn btn-outline-secondary"> 
                        <input type="radio" id="signup" autocomplete="off" onclick=signUpModule()>Sign up 
                    </label>
                    <label class="btn btn-outline-secondary active"> 
                        <input type="radio" id="login" autocomplete="off" checked>Log in 
                    </label>
                </div>
            </form>`;

const signupForm =
    `<form>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="username">Id / username</label>
                    <input type="text" class="form-control" id="username" placeholder="Id">
                </div>
                <button id="submit" class="btn btn-danger btn-danger btn-block">Submit</button>
                    <div class="inlineContent btn-group-toggle">
                        <label class="btn btn-outline-secondary active"> 
                            <input type="radio" id="signup" autocomplete="off" checked>Sign up 
                        </label>
                        <label class="btn btn-outline-secondary "> 
                            <input type="radio" id="login" autocomplete="off" onclick=logInModule()>Log in 
                        </label>
                </div>
            </form>`;

const mainUI =
    `<form>
                <div id="mainUI" class="inlineContent">
                    <input type="email" class="form-control" id="email" placeholder="User's email">
                    <button id="search" class="btn btn-danger">Search</button>
                    <button id="myProfile" class="btn btn-danger">My profile</button>
                    <button id="followThisPerson" class="btn btn-danger">Follow this person</button>
                    <button id="logout" class="btn btn-danger">Log out</button>
                </div>
            </form>`;

const getPublish =
    `<div class="inlineContent">
                <label for="photoURL">Photo URL</label>
                <input type="text" class="form-control" id="photoURL">
            </div>
            <div class="inlineContent">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" cols="30" rows="4"></textarea>
            </div>
            <button id="publish">Publish</button>`;

const getUserSummary =
    `<div id="userSummary">
                Name: <span id="userName"></span>
                Followers: <span id="userFollowers"></span>
                Following: <span id="userFollowing">0</span>
            </div>`;

logInModule = () => {
    $('#centerForm').css('grid-template-rows', '80px 300px 80px')
    $('#centerForm').css('grid-template-columns', 'auto 500px auto')
    $('#centerForm')[0].innerHTML = loginForm;
    $('#submit').click(function (e) {
        e.preventDefault();
        let email = $('#email')[0].value;
        let password = $('#password')[0].value;
        if (app.logIn(email, password)) {
            userPage(app.loggedEmail);
        } else {
            logInModule();
        }
    })
}

signUpModule = () => {
    $('#centerForm').css('grid-template-rows', '80px 475px 80px')
    $('#centerForm')[0].innerHTML = signupForm;
    $('#submit').click(function (e) {
        e.preventDefault();
        let name = $('#name')[0].value;
        let email = $('#email')[0].value;
        let password = $('#password')[0].value;
        if (app.signUp(name, email, password)) {
            logInModule();
        } else {
            signUpModule();
        }
    })
}

mainModule = () => {
    $('#centerForm').css('grid-template-columns', ' auto 800px auto ');
    $('#centerForm').css('grid-template-rows', ' 10px 400px 10px');
    $('#centerForm')[0].innerHTML = mainUI;
    $('#centerForm > form').css('border', 'none');
    $('#search').click((e) => {
        e.preventDefault();
        let email = $('#email')[0].value
        if (app.search(email)) {
            userPage(email);
        }
    });
    $('#myProfile').click((e) => {
        e.preventDefault();
        userPage(app.loggedEmail);
    });
    $('#followThisPerson').click((e) => {
        e.preventDefault();
        app.follow(app.searchedEmail);
        userPage(app.searchedEmail);
    });
    $('#logout').click((e) => {
        e.preventDefault();
        app.logout();
        logInModule();
    });
}

publishModule = () => {
    $('#centerForm > form').append(getPublish);
    $('.inlineContent > label').css('width', '100px');
    $('#photoURL').css('width', '550px');
    $('#description').css('width', '550px');
    $('#publish').click((e) => {
        e.preventDefault();
        let photoURL = $('#photoURL')[0].value;
        let description = $('#description')[0].value;
        app.getLoggedInUser().addPost(photoURL, description);
        userPage(app.loggedEmail);
    });
}

getPosts = (email) => {
    let user = app.getUser(email);
    let posts = "";
    for (let i = 0; i < user.posts.length; i++) {
        posts += `<div class="post">
                        <div><img src="${user.posts[i].photoURL}"></div>
                        <p>${user.posts[i].description}</p>
                    </div>`
    }
    return `<div id="userPosts">
                ${posts}
            </div>`
}

userSummary = () => {
    $('#centerForm').append(getUserSummary);
}

userPosts = (email) => {
    $('#centerForm').append(getPosts(email));
}

userPage = (email) => {
    mainModule();
    if (app.loggedEmail == email) {
        publishModule();
    }
    userSummary();
    userPosts(email);
    $('#centerForm').css('grid-template-rows', '80px 350px 30px auto')
    $('#userSummary').css('grid-row', '3/4');
    $('#userSummary').css('grid-column', '1/4');
    $('#userPosts').css('grid-row', '4/5');
    $('#userPosts').css('grid-column', '1/4');
    $('#userName')[0].innerHTML = app.getNameFromEmail(email);
    $('#userFollowers')[0].innerHTML = app.getFollowersFromEmail(email);
    $('#userFollowing')[0].innerHTML = app.getFollowingFromEmail(email);
    app.searchedEmail = email;
}

$(document).ready(function () {
    logInModule()
});
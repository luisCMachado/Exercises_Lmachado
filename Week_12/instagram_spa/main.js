class Instagram {
    constructor() {
        this.EMAIL_TAKEN = 'Sorry, that email is already taken\n';
        this.EMAIL_INVALID = 'Insert a valid email\n';
        this.SIGN_UP_OK = "Thank you for your registration, welcome!\n";
        this.UNKNOWN_EMAIL = "We don't have that account\n";
        this.NO_USER = "That user does not exist\n";
        this.EMAIL_NOT_FOUND = "We have no results for that query";
        this.PASSWORD_ERROR = "The password is incorrect\n";
        this.USER_LOGGED_IN = "You are already logged in\n";
        this.LOG_IN_SUCESS = "Welcome, ";
        this.USER_ALREADY_FOLLOWED = "You already follow this user\n";
        this.FOLLOW = "You now follow ";
        this.NO_USER_LOGGED = "Sorry, you have to be logged in to use that functionality\n";
        this.LOGGED_OUT = "You logged out, see you later\n";
        this.userArr = [];
        this.userLogged = false;
        this.loggedEmail = "";
        this.searchedEmail = "";
    }

    isEmailValid(email) {
        let validation = /^\w+\@(\w+\.)+(\w{2,3})+$/;
        if (validation.test(String(email)) !== true) {
            alert(this.EMAIL_INVALID);
            return false;
        }
        return true;
    }

    emailExists(email) {
        return this.userArr.findIndex(x => x.email === email) !== -1;
    }

    emailAndPasswordMatch(email, password) {
        for (let i = 0; i < this.userArr.length; i++) {
            if (this.userArr[i].email == email && this.userArr[i].password == password) {
                return true;
            }
            return false;
        }
    }

    getNameFromEmail(email) {
        let userObj = this.userArr.find(x => x.email === email);
        return userObj.name;
    }

    getFollowersFromEmail(email) {
        let userObj = this.userArr.find(x => x.email === email);
        return userObj.followers;
    }

    getFollowingFromEmail(email) {
        let userObj = this.userArr.find(x => x.email === email);
        return userObj.following;
    }

    getLoggedInUser() {
        for (let i = 0; i < this.userArr.length; i++) {
            if (this.userArr[i].email == this.loggedEmail) {
                return this.userArr[i];
            }
        }
    }
    
    getUser(email) {
        let userObj = this.userArr.find(x => x.email === email);
        return userObj;
    }

    signUp(name, email, password) {
        if (this.userLogged) {
            alert(this.USER_LOGGED_IN);
            return false;
        } else if (!this.isEmailValid(email)) {
            return false;
        } else if (this.emailExists(email)) {
            alert(this.EMAIL_TAKEN);
            return false;
        } else {
            this.userArr.push(new User(name, email, password));
            alert(this.SIGN_UP_OK);
            return true;
        }
    }

    logIn(email, password) {
        if (this.userLogged) {
            alert(this.USER_LOGGED_IN);
            return false;
        } else if (!this.emailExists(email)) {
            alert(this.UNKNOWN_EMAIL);
            return false;
        } else if (!this.emailAndPasswordMatch(email, password)) {
            alert(this.PASSWORD_ERROR);
            return false;
        } else {
            alert(this.LOG_IN_SUCESS + this.getNameFromEmail(email) + ".\n");
            this.userLogged = true;
            this.loggedEmail = email;
            return true;
        }
    }
    logout() {
        if (!this.userLogged) {
            alert(this.NO_USER_LOGGED);
        } else {
            this.userLogged = false;
            this.loggedEmail = "";
            alert(this.LOGGED_OUT);
        }
    }

    increaseFollowing(email) {
        for (let i = 0; i < this.userArr.length; i++) {
            if (this.userArr[i].email == email) {
                this.userArr[i].following += 1;
            }
        }
    }
    increaseFollowers(email) {
        for (let i = 0; i < this.userArr.length; i++) {
            if (this.userArr[i].email == email) {
                this.userArr[i].followers += 1;
            }
        }
    }
    follow(email) {
        if (!this.userLogged) {
            alert(this.NO_USER_LOGGED);
            return false;
        } else if (!this.emailExists(email)) {
            alert(this.NO_USER);
            return false;
        } else if (this.getLoggedInUser().alreadyFollows(email)) {
            alert(this.USER_ALREADY_FOLLOWED);
            return false;
        } else {
            this.increaseFollowing(this.loggedEmail);
            this.increaseFollowers(email);
            this.getLoggedInUser().followedUsers.push(email);
            alert(this.FOLLOW + this.getNameFromEmail(email) + "\n");
            return true;
        }
    }

    search(email) {
        if (!this.userLogged) {
            alert(this.NO_USER_LOGGED);
            return false;
        }
        if (!this.emailExists(email)) {
            alert(this.EMAIL_NOT_FOUND);
            return false;
        } else {
            return true;
        }
    }
}

class Post {
    constructor(photoURL, description) {
        this.photoURL = photoURL;
        this.description = description;
    }
}

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.followers = 0;
        this.following = 0;
        this.followedUsers = [];
        this.posts = [];
    }
    alreadyFollows(email) {
        for (let i = 0; i < this.followedUsers.length; i++) {
            if (this.followedUsers[i] == email) {
                return true;
            }
        }
        return false;
    }
    addPost(photoURL, description) {
        this.posts.push(new Post(photoURL, description));
    }
}
let app = new Instagram();
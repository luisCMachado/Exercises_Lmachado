class Instagram {
    constructor() {
        this.userLogged = false;
        this.userArr = [];
        this.loggedObj = [];
        this.EMAIL_TAKEN = ('Sorry, that email is already taken\n');
        this.OTHER_USER_LOGGED = ('log out first before you create a new account\n');
        this.SIGN_UP_OK = ('Thank you for your registration, welcome!\n');
        this.EXIT = ('You left the program, bye');
        this.UNKNOWN_EMAIL = ('We don\'t have that account\n');
        this.PASSWORD_ERROR = ('The password is incorrect\n');
        this.USER_LOGGED_IN = ('You are already logged in\n');
        this.LOG_IN_SUCESS = ("Welcome ");
        this.EMAIL_INVALID = ('Insert a valid email\n');
        this.LOGGED_OUT = ('You logged out, see you later\n');
        this.NO_USER = ('That user does not exist\n');
        this.EMAIL_NOT_FOUND = ('We have no results for that query\n');
        this.NO_USER_LOGGED = ('Sorry, you have to be logged in to use that functionality\n');
        this.UNKNOWN_OPTION = 'We don\'t have that option\n';
        this.FOLLOW = 'You now follow ';
    }

    hasUser(email) { 
        return this.userArr.findIndex(x => x.email === email) !== -1;
    }

    getUser(email) { 
        return this.userArr.find(x => x.email === email);
    }

    isEmailValid(email) { 
        let validation = /^\w+\@(\w+\.)+(\w{2,3})+$/;
        if (validation.test(String(email)) !== true) {
            alert(this.EMAIL_INVALID);
            return false;
        }
        return true;
    }

    createUser(name, email, password) { 
        this.userArr.push(new User(name, email, password))
    }

    listUser(email) {
        let userObj = this.getUser(email);
        alert(userObj.name);
        alert(userObj.email);
        alert('Followers: ' + userObj.followers);
        alert('Following: ' + userObj.following + "\n");
    }

    askEmail() {
        let email = prompt('email').trim();
        if (email === 'exit*') {
            return null
        }
        if (this.isEmailValid(email)) {
            return email;
        }
        return this.askEmail();
    }

    signUp() {
        if (this.userLogged === true) {
            return alert(this.USER_LOGGED_IN);
        }
        let name = prompt('Enter your name', 'john');
        let email = null;
        let loopIsOn = true;
        while (loopIsOn) {
            email = this.askEmail();
            if (!email) {
                return
            }
            loopIsOn = this.hasUser(email);
            if (loopIsOn) {
                alert(this.EMAIL_TAKEN);
            }
        }
        let password = prompt('Enter your password', 'password');
        this.createUser(name, email, password);
        alert(this.SIGN_UP_OK);
    }

    logIn() {
        if (this.userLogged === true) {
            return alert(this.USER_LOGGED_IN);
        }
        let email = prompt('Enter your email', 'teste@mail.pt').trim();
        let password = prompt('Enter your password', 'password');
        let userObj = this.getUser(email);
        if (!this.hasUser(email)) {
            return alert(this.UNKNOWN_EMAIL);
        }
        if (userObj.password !== password) {
            return alert(this.PASSWORD_ERROR);
        }
        if (userObj.email === email && userObj.password === password) {
            this.userLogged = true;
            this.loggedObj = userObj;
            return alert("Welcome, " + userObj.name + ".\n");
        }
    }

    logOut() {
        if (this.userLogged === false) {
            return alert(this.NO_USER_LOGGED);
        }
        this.userLogged = false
        return alert(this.LOGGED_OUT)
    }

    follow() {
        if (!this.userLogged === true) {
            return alert(this.NO_USER_LOGGED);
        }
        let email = prompt('email of the person he/she wants to follow').trim();
        if (!this.hasUser(email)) {
            return alert(this.NO_USER);
        }
        let userToFollow = this.getUser(email);
        userToFollow.addFollowers();
        this.loggedObj.addFollowing();
        alert(this.FOLLOW + userToFollow.name + "\n");
    }

    search() {
        debugger;
        if (!this.userLogged === true) {
            return alert(this.NO_USER_LOGGED);
        }
        let email = prompt('email').trim();
        if (!this.hasUser(email)) {
            return alert(this.EMAIL_NOT_FOUND);
        }
        this.listUser(email);
    }

    askUser() {
        let commands = prompt('Enter a command');
        switch (commands) {
            case 'log in':
                this.logIn();
                break;
            case 'sign up':
                this.signUp();
                break;
            case 'exit':
                return alert(this.EXIT);
            case 'search':
                this.search()
                break;
            case 'log out':
                this.logOut()
                break;
            case 'follow':
                this.follow()
                break;
            default:
                alert(this.UNKNOWN_OPTION)
                break;
        }
        return this.askUser();
    }
}

class User {
    constructor(name, email, password, followers = 0, following = 0) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.followers = followers;
        this.following = following;
    }
    addFollowers() {
        this.followers++;
    }
    addFollowing() {
        this.following++;
    }
}

let test = new Instagram()
test.askUser()
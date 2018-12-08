class Cloud {
    constructor() {
        this.userArr = [];
        this.COMMAND = 'Enter a command';
        this.EXIT = 'Exiting...\n';
        this.ACCOUNT_ADDED = 'Account was added.\n';
        this.ACCOUNT_EXISTS = 'Account already exists.\n';
        this.UPLOAD_FILE = 'File uploaded into account.\n';
        this.ACCOUNT_DOES_NOT_EXIST = 'Account does not exist.\n';
        this.FILE_EXISTS = 'File already exists in the account.\n';
        this.FILE_OVER_SIZE = 'File size exceeds account capacity.\n';
        this.FILE_SHARED = 'File was shared.\n';
        this.FILE_DOES_NOT_EXIST = 'File does not exist.\n';
        this.FILE_NOT_SHARED = 'File not shared.\n';
        this.SHARING_NOT_ALLOWED = 'Account does not allow file sharing.\n';
        this.FILE_ALREADY_SHARED = 'File already shared.\n';
        this.BIGGEST_ACCOUNT = 'Account with least free space: ';
        this.ALL_ACCOUNTS = 'All accounts:';
        this.ACCOUNT_FILES = 'Account files:';
        this.NO_ACCOUNTS = 'No accounts.\n';
        this.FILE_UPDATED = 'File was updated.\n';
        this.LAST_UPDATE = 'Last update: '
    }

    hasUser(email) {
        return this.userArr.findIndex(user => user.email === email) !== -1;
    }

    getUser(email) {
        return this.userArr.find(user => user.email === email);
    }

    createUser(name, email, accountType) {
        return (accountType === 'basic') ?
            this.userArr.push(new BasicUser(name, email, 'Basic')) :
            this.userArr.push(new PremiumUser(name, email, 'Premium'));
    }

    isFileOverSize(email, fileSize) {
        let userObj = this.getUser(email);
        return (fileSize > userObj.accountSize);
    }

    shareFile(fileOwner, userToShare, fileName) {
        let ownerObj = this.getUser(fileOwner)
        if (!this.hasUser(fileOwner) || !this.hasUser(userToShare)) {
            return alert(this.ACCOUNT_DOES_NOT_EXIST);
        }
        if (!ownerObj.hasFile(fileName)) {
            return alert(this.FILE_DOES_NOT_EXIST);
        }
        if (ownerObj instanceof BasicUser) {
            return alert(this.SHARING_NOT_ALLOWED);
        }
        if (ownerObj.isFileShared(fileName)) {
            return alert(this.FILE_ALREADY_SHARED);
        }
        let sharedObj = this.getUser(userToShare);
        let fileSize = ownerObj.fileArr[ownerObj.indexOfFile(fileName)].size;
        return (sharedObj instanceof PremiumUser) ?
            sharedObj.createFile(fileName, fileSize, userToShare, true) + alert(this.FILE_SHARED) : 
            this.isFileOverSize(userToShare, fileSize / 2) ?
            alert(this.FILE_OVER_SIZE) : sharedObj.reduceAccountSize(fileSize / 2) +
            sharedObj.createFile(fileName, fileSize, userToShare, true) +
            alert(this.FILE_SHARED);
    }

    addAccount(email, accountType) {
        if (this.hasUser(email)) {
            return alert(this.ACCOUNT_EXISTS);
        }
        this.createUser(name, email, accountType);
        return alert(this.ACCOUNT_ADDED);
    }

    uploadFile(email, fileName, fileSize) {
        if (!this.hasUser(email)) {
            return alert(this.ACCOUNT_DOES_NOT_EXIST);
        }
        let userObj = this.getUser(email);
        if (userObj.hasFile(fileName)) {
            return alert(this.FILE_EXISTS);
        }
        return (this.isFileOverSize(email, fileSize)) ?
            alert(this.FILE_OVER_SIZE) : userObj.createFile(fileName, fileSize, email) +
            userObj.reduceAccountSize(fileSize) + alert(this.UPLOAD_FILE);
    }

    listAll() {
        alert(this.ALL_ACCOUNTS);
        this.userArr.forEach(file => alert(file.email + " (" + file.accountType + ")"));
        alert('\n');
    }

    listFilles(email) {
        if (!this.hasUser(email)) {
            return alert(this.ACCOUNT_DOES_NOT_EXIST);
        }
        alert(this.ACCOUNT_FILES);
        let userObj = this.getUser(email);
        userObj.fileArr.forEach(file => alert(file.name + " (" + file.size + " MB)" + (file.shared == true ? " (shared)" : "")));
        alert('\n');
    }

    minSpace() {
        this.userArr.sort((a, b) => (a.accountSize - b.accountSize));

        return (this.userArr[0] === undefined) ? alert(this.NO_ACCOUNTS) :
            alert(this.BIGGEST_ACCOUNT + this.userArr[0].email + '\n');
    }

    updateFile(fileOwner, updAccount, fileName) {
        let ownerObj = this.getUser(fileOwner);
        let updaterObj = this.getUser(updAccount);
        if (!(this.hasUser(fileOwner) && this.hasUser(updAccount))) {
            return alert(this.ACCOUNT_DOES_NOT_EXIST);
        }
        if (!ownerObj.hasFile(fileName) || ownerObj.isFileShared(fileName)) {
            return alert(this.FILE_DOES_NOT_EXIST);
        }
        if (!updaterObj.hasFile(fileName)) {
            return alert(this.FILE_NOT_SHARED);
        }
        ownerObj.fileArr[ownerObj.indexOfFile(fileName)].updatedBy = updAccount;
        return alert(this.FILE_UPDATED);
    }

    lastUpdate(fileOwner, fileName) {
        if (!this.hasUser(fileOwner)) {
            return alert(this.ACCOUNT_DOES_NOT_EXIST);
        }
        let ownerObj = this.getUser(fileOwner);
        if (!ownerObj.hasFile(fileName)) {
            return alert(this.FILE_DOES_NOT_EXIST);
        }
        if (ownerObj.fileArr[ownerObj.indexOfFile(fileName)].updatedBy == null) {
            return alert(this.LAST_UPDATE + fileOwner + "\n")
        }
        let updatedBy = ownerObj.fileArr[ownerObj.indexOfFile(fileName)].updatedBy;
        return alert(this.LAST_UPDATE + updatedBy + "\n")
    }

    askUser() {
        let commands = prompt(this.COMMAND);
        let commandArr = commands.split(' ');
        switch (commandArr[0]) {
            case 'ADD':
                this.addAccount(commandArr[1], commandArr[2]);
                break;
            case 'UPLOAD':
                this.uploadFile(commandArr[1], commandArr[2], commandArr[3]);
                break;
            case 'SHARE':
                this.shareFile(commandArr[1], commandArr[2], commandArr[3]);
                break;
            case 'EXIT':
                return alert(this.EXIT);
            case 'MINSPACE':
                this.minSpace()
                break;
            case 'LISTFILES':
                this.listFilles(commandArr[1]);
                break;
            case 'LISTALL':
                this.listAll();
                break;
            case 'UPDATE':
                this.updateFile(commandArr[1], commandArr[2], commandArr[3]);
                break;
            case 'LASTUPDATE':
                this.lastUpdate(commandArr[1], commandArr[2])
                break;
            default:
                alert(this.NO_OPTION)
                break;
        }
        return this.askUser();
    }
}

class File {
    constructor(name, size, email, shared, updatedBy) {
        this.name = name;
        this.size = size;
        this.email = email;
        this.shared = shared;
        this.updatedBy = updatedBy
    }
}

class User {
    constructor(name, email, accountType, accountSize) {
        this.fileArr = [];
        this.name = name;
        this.email = email;
        this.accountType = accountType
        this.accountSize = accountSize;
    }

    createFile(name, size, email, shared = false, updatedBy = null) {
        return this.fileArr.push(new File(name, size, email, shared, updatedBy));
    }

    reduceAccountSize(size) {
        return this.accountSize -= size;
    }
    hasFile(name) {
        return this.fileArr.findIndex(file => file.name === name) !== -1;
    }

    indexOfFile(name) {
        return this.fileArr.findIndex(file => file.name === name);
    }
    isFileShared(name) {
        let fileObj = this.fileArr.find(file => file.name === name);
        return (fileObj.shared) ? true : false;
    }
    getFileSize(name) {
        let fileObj = this.fileArr.find(file => file.name === name);
        return fileObj.fileSize;
    }
}

class BasicUser extends User {
    constructor(name, email, accountType) {
        super(name, email, accountType, 2048);
    }
}

class PremiumUser extends User {
    constructor(name, email, accountType) {
        super(name, email, accountType, 5120);
    }
}

let test = new Cloud()
test.askUser()
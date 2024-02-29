class UserDTO {
    constructor(user){
        this._id = user.id;
        this._username = user.username;
        this._name = user.name;
    }
}

module.exports = UserDTO;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.followerCount = userResponse.followers;
        this.repoCount = userResponse.public_repos;
        // this.repo = userResponse.repoProp;
    }
    return User;
}());
exports.User = User;

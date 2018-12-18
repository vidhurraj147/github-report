"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    JSON: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        // https://api.github.com/users/koushikkothagal
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            // console.log(error);
            // console.log(response);
            // console.log(body);
            var user = new User_1.User(JSON.parse(body));
            // let user = new User(body);
            // console.log(user);
            cb(user);
        });
        console.log("Deails for UserName- " + userName);
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, function (error, response, body) {
            // let repoArray = body;
            // let repos = body.map((repo: any) => new Repo(repo));
            // let repos = body.map((repo: any) => new Repo(repo));
            console.log(body);
            // cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;

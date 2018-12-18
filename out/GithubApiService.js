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
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName) {
        var options = {
            headers: {
                'User-Agent': 'request'
            },
            JSON: true
        };
        // https://api.github.com/users/koushikkothagal
        request.get("https://api.github.com/users/" + userName, options, function (error, response, body) {
            //console.log(error);
            // console.log(response);
            // console.log(body);
            // let user = new User(JSON.parse(body));
            var user = new User_1.User(JSON.parse(body));
            console.log(user);
        });
        console.log("Deails for UserName- " + userName);
    };
    GithubApiService.prototype.getRepos = function () {
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('koushikkothagal', function (user) {
    console.log(user);
});
svc.getRepos('koushikkothagal', function (repos) {
    console.log(repos);
});
// let svc2 = new GithubApiService();
// svc2.getUserInfo('vidhurraj147');

import {GithubApiService} from './GithubApiService';
import {User} from './User';
import {Repo} from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('koushikkothagal', (user: User)=> {
    console.log(user);
});

svc.getRepos('koushikkothagal', (repos: Repo[]) =>{
    console.log(repos);
})
// let svc2 = new GithubApiService();
// svc2.getUserInfo('vidhurraj147');
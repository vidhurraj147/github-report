import * as request from 'request';
import { User } from './User';

export class GithubApiService{
    getUserInfo(userName: string){
        let options: any = {
            headers:{
                'User-Agent' : 'request'
            },
            JSON: true
        };
        // https://api.github.com/users/koushikkothagal
        request.get("https://api.github.com/users/"+userName, options, (error: any, response: any, body: any)=>{
            //console.log(error);
            // console.log(response);
            // console.log(body);
            // let user = new User(JSON.parse(body));
            let user = new User(JSON.parse(body));
            console.log(user);
        })
        console.log("Deails for UserName- "+userName);
    }

    getRepos(){

    }
}
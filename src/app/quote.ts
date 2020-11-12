export class Quote {
    id:number;
    author:string;
    state:string;
    user:string;
    day:Date;
    upVotes:number;
    downVotes:number; 
    showDescription: boolean;
    constructor(id:number, state:string, author:string, user:string, day:Date){
        this.id=id;
        this.author=author;
        this.state=state; 
        this.user= user;
        this.day=day;
        this.upVotes=0;
        this.downVotes=0;
        this.showDescription=false;
    }
}

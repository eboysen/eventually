export class Project{
    title:string
    description:string;
    tasks:any;
    id:any;
    constructor(t:string,d:string,ts:any,i:any){
        this.title = t;
        this.description=d;
        this.tasks=ts;
        this.id = i;
    }
}

export class Character {
    private name:string;
    private  team:string;
    private avatar:string;

    constructor(name:string, team: string, avatar:string){
        this.name = name;
        this.team = team;
        this.avatar = avatar;
    }


    public toModel(){
        return {
            name: this.name,
            team: this.team,
            avatar: this.avatar
        }
    }
}

const character1 = new Character('BootBlue', "TASKS", "HELPER-TASK-MANAGER")

console.log(character1.toModel());


export class Characters{
    private charactersList :Character[]=[];

}

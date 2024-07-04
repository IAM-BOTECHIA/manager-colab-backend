class TaskItem {
    private id : string;
    private titulo : string;
    private descricao: string;
    private status : number = 0;
    private responsable?: string|null|string[] = null;

    constructor(id: string, titulo: string, descricao: string, responsable:  string|null|string[]  = null) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.responsable = responsable;
    }

}
"use strict";
class TaskItem {
    constructor(id, titulo, descricao, responsable = null) {
        this.status = 0;
        this.responsable = null;
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.responsable = responsable;
    }
}
//# sourceMappingURL=task.js.map
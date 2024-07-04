// FORMA CURTA 
// propriedade static nao manda como argumentos
import { Item } from "./item";

export class Category {
        constructor(
            private id: string,
            private name: string,
            private createdAt: string,
            private listContent : Item[]=[]
        ){}
}
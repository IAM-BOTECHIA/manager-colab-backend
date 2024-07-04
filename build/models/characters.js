"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characters = exports.Character = void 0;
class Character {
    constructor(name, team, avatar) {
        this.name = name;
        this.team = team;
        this.avatar = avatar;
    }
    toModel() {
        return {
            name: this.name,
            team: this.team,
            avatar: this.avatar
        };
    }
}
exports.Character = Character;
const character1 = new Character('BootBlue', "TASKS", "HELPER-TASK-MANAGER");
console.log(character1.toModel());
class Characters {
    constructor() {
        this.charactersList = [];
    }
}
exports.Characters = Characters;
//# sourceMappingURL=characters.js.map
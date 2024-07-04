"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(id, name, createdAt, listContent = []) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.listContent = listContent;
    }
}
exports.Category = Category;
//# sourceMappingURL=category.js.map
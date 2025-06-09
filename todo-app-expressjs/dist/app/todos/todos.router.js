"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log("From todos Router");
    res.json({
        message: "From Todos Router",
        data
    });
});
exports.todosRouter.post('/create-job', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello Express JS!");
});
exports.todosRouter.get('/:title', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello Express JS!");
});
exports.todosRouter.put("/update-todos/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello Express JS!");
});
exports.todosRouter.delete("/delete-todos/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello Express JS!");
});

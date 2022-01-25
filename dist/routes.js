"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const CreateUser_1 = __importDefault(require("./services/CreateUser"));
// string, number, boolean, object, array
// interfaces --- para tipagem de conjunto de dados
function helloWorld(resquest, response) {
    const user = (0, CreateUser_1.default)({
        email: "@email",
        password: "123",
        techs: [
            'node',
            'react',
            'typeScript',
            { title: 'javaScript', experience: 100 }
        ],
    });
    return response.json({ message: 'hello ' });
}
exports.helloWorld = helloWorld;
;

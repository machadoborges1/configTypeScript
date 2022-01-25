"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name = '', email, password }) {
    const user = {
        name,
        email,
        password,
    };
    return user;
}
exports.default = createUser;
/**export default function createUser(name = '', email: string, password: string) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}*/ 

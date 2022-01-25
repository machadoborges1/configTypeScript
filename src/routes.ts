import {Request, Response} from 'express'
import createUser from './services/CreateUser';

// string, number, boolean, object, array
// interfaces --- para tipagem de conjunto de dados

export function helloWorld(resquest: Request, response: Response){

  const user = createUser({
    email: "@email",
    password: "123",
    techs: [
      'node',
      'react',
      'typeScript',
      {title: 'javaScript', experience: 100}],
  });

  return response.json({ message: 'hello '});
};


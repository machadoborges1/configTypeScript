interface techObject {
  title: string;
  experience: number
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | techObject>  //string[]
}


export default function createUser({name = '', email, password}: CreateUserData) {
  const user = {
    name,
    email, 
    password,

  }

  return user;
}

/**export default function createUser(name = '', email: string, password: string) {
  const user = {
    name,
    email, 
    password,
  }

  return user;
}*/
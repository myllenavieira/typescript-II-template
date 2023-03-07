/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/
enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}
//Role Admin | Normal
type Person = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
}

type AdminAccount = {
  account: string,
  permission: boolean
}

type NormalAccount = {
  account: string,
  permission: boolean
}

type AdminUser = Person & AdminAccount
type NormalUser = Person & NormalAccount

const user1: AdminUser = {
  id: "1",
  name: "Myllena",
  email: "my@gmail.com",
  password: "123456",
  role: Role.ADMIN,
  account: "001",
  permission: true
}

const user2: NormalUser = {
  id: "2",
  name: "Victor",
  email: "vi@gmail.com",
  password: "654321",
  role: Role.NORMAL,
  account: "002",
  permission: false
}

const admins: AdminUser[] = []
const normals: NormalAccount[] = []


function checkUser(usuario: AdminUser | NormalUser){
  if(usuario.role !== Role.ADMIN){
    normals.push(usuario)
  }else{
    admins.push(usuario)
  }
}

checkUser(user1)
checkUser(user2)

console.table(normals);
console.table(admins);



/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 
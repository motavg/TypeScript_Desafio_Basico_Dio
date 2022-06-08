// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";


//MAneira mais organizada e limpa que sei no momento. 

interface employee {
    name: string,
    code: number,
}

const John: employee = {
    name: 'John',
    code: 10,
}

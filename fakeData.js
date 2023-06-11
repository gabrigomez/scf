// Foram adicionados os campos de password (pra controle de permissões) e access, pra controlar
// quantas vezes o usuário foi acessado

const fakeData  =  [
    {
        id: 1,
        name: "João Oliveira",
        job: "Desenvolvedor",
        password: '$2b$12$mOBvunf.O3wr4Ego2enM/umi1gjO3Qp97GS4Ao2ldUkXdXpHYKAxm',
        access: 0,
    }
]


module.exports = fakeData;
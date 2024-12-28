// src/types.ts

export type greet = string;

const app = () => {
    const message: greet = "Bem-vindo ao Meu App em TypeScript!";
    console.log(message);
};

app();
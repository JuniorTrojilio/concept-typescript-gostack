<div align="center">
	<img src="https://user-images.githubusercontent.com/39541807/81132560-3a20a000-8f25-11ea-8179-4f4540936787.png">
	<h1> TypeScript Concepts</h1>
</div>
<p align="center">In this initial module we learn the main TypeScript concepts.</p>
<div display="inline" align="center">
<img src="https://img.shields.io/github/license/juniortrojilio/concept-typescript-gostack">
</div>

---

# O que é TypeScript?

O TypeScript é uma linguagem de código aberto que se baseia no JavaScript, uma das ferramentas mais usadas no mundo, adicionando definições de tipo estáticas.

Os tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se o seu código está funcionando corretamente.

Os tipos de escrita podem ser opcionais no TypeScript, porque a inferência de tipo permite obter muito poder sem escrever código adicional.

---

## Mitos e verdades

- Javascript diminui a produtividade - falso, a curva de aprendizado tende a ser maior que a de Javascript, porém aumenta  performance do desenvolvimento a médio, longo prazo.
- Typescript é Javascript fortimente tipado - falso, a tipagem é adicionada apenas em algumas informações, comparado com linguagens como java e delphi é fracamente tipada.
- O mercado não usa TypeScript - falso, baseado em pesquisas as empresas aumentam exponencialmente a adesão do TS, na programação.
- TypeScript substitui o JavaScript por completo - falso, TypeScript baseia-se em JavaScript e avança juntamente com ele.

---

## Configurando o TypeScript

```bash
# Adicionamos o TS como dependência de desenvolvimento
yarn add typescript -D

# Criamos o arquivo de configurações do TS
yarn tsc --init
```

Dentro do arquivo tsconfig.json adicionar diretório onde será gerado o código javascript.

Quando apresentar falha no Write Suggestion, provavelmente ainda não instalei o pacóte de tipos daquela lib. por exemplo, para o express :

```bash
yarn add -D @types/express
```

---

<p align="center"> <> with 💙 by <a href="https://github.com/juniortrojilio">Junior Trojilio</a></p>

# 🔥 Name Cloud Sara Nossa Terra Augusta!

Este projeto foi desenvolvido para exibir os nomes de oração para serem projetados na projeção da igreja!

🌐 [Web View](https://sntaugusta.github.io/name-cloud/)

## ⚡ Execução
Para executar o projeto seria obrigatórios existirem os parâmetros **sheetId** e **apiKey** na URL.

## 🔗 Parâmetros
Para facilitar a projeção dos nomes, incluimos alguns parâmetros na URL para customizar a visualização dos nomes a serem exibidos

| parâmetro   | valor padrão | descrição
| -           | -            | - 
| sheetId     | undefined    | Valor para o ID da planilha do [Google Spreadsheet](https://spreadsheets.google.com/)
| apiKey      | undefined    | Valor da chave de API de Credenciais do [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
| repeatRows  | 3            | Quantidade de vezes que seria repetiriam as colunas de nomes da planilha
| repeatNames | 2            | Quantidade de vezes que seria repetiriam os nomes por linha
| delay       | 1            | Tempo de delay na transição da linhas
| fontSize    | 20           | Tamanho da fonte dos nomes
| range       | A1:T20       | Intervalo de células da planilha

> 1️⃣ Para encontra o ID da planilha basta acessar a planilha do Google Spreadsheet e utilizar o ID do path param da URL (ex.: https:\/\/docs.google.com/spreadsheets/d/**1234567890_qWeRtYuIoPaSdFgHjKl**/edit)

> 2️⃣ Para encontra a chave da API de Credenciais bastar apertar o botão de "*EXIBIR CHAVE*" da chave criada

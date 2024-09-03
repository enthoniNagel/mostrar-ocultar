# Projeto Mostrar-Ocultar

## Objetivo

Criar um componente que mostre e esconda um texto quando um botão é clicado.

## Descrição

O projeto contém um componente React chamado `MostrarOcultar` que permite alternar a visibilidade de um texto com o clique de um botão.

## Instruções

1. **Inicialize o Estado do Componente**

   O estado inicial do componente deve ter uma propriedade `visivel` definida como `false` (oculto).

2. **Crie o Método `alternarVisibilidade`**

   Este método altera o valor de `visivel` entre `true` e `false` quando chamado.

3. **Renderize o Componente**

   - Mostre o texto somente se `visivel` for `true`.
   - Adicione um botão que chama o método `alternarVisibilidade` ao ser clicado.

## Estrutura do Projeto

1. **Criação do Projeto**

   Crie o projeto usando `create-react-app`:

   ```bash
   npx create-react-app mostrar-ocultar

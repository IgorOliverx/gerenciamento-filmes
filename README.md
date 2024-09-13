# Somativa Node.js - React - MongoDB
## PLATAFORMA DE GERENCIAMENTO DE EVENTOS

---

# Contexto
Uma empresa de cinema precisa de uma plataforma para gerenciar seu catálogo de filmes. A principal função do sistema será permitir que os administradores da empresa realizem operações de CRUD (Criar, Ler, Atualizar e Deletar) nos filmes e listem as avaliações feitas pelos espectadores, fornecendo uma visão geral sobre a popularidade dos filmes com base nas avaliações recebidas.

---

# Escopo
## Objetivos
### Específicos:
- Desenvolver uma interface administrativa onde os administradores possam adicionar, editar e remover filmes.
- Implementar uma funcionalidade para listar e visualizar filmes com suas avaliações e comentários.
- Criar um sistema de avaliação onde os espectadores possam classificar e comentar sobre os filmes.

### Mensuráveis:
- O sistema deve permitir a criação, leitura, atualização e exclusão de pelo menos 50 filmes.
- A interface deve listar filmes e avaliações com capacidade de filtrar por gênero, data e popularidade.
- As avaliações devem ser capturadas e exibidas com um sistema de média de notas e comentários.

### Atingíveis:
- Utilizar Node.js para o backend e MongoDB para o banco de dados, garantindo a escalabilidade e flexibilidade do sistema.
- Desenvolver a interface com React para uma experiência de usuário interativa e responsiva.
- Garantir que as funcionalidades sejam implementadas usando práticas de desenvolvimento ágeis e testes contínuos para assegurar a qualidade do sistema.

### Relevantes:
- A plataforma vai atender a uma necessidade crítica da empresa de cinema, permitindo a gestão eficiente dos filmes e análises detalhadas das avaliações dos espectadores.
- Melhoria na gestão do catálogo de filmes e na análise de popularidade ajudará a empresa a tomar decisões mais informadas sobre quais filmes promover e quais ajustar ou retirar.

### Temporais:
- Desenvolver e implementar a plataforma em um prazo de 6 meses.
- Completar a fase de planejamento e prototipagem em 1 mês.
- Finalizar o desenvolvimento do backend e do banco de dados em 2 meses.
- Concluir o desenvolvimento da interface e a integração com o backend em 2 meses.
- Realizar testes, ajustes e preparar o lançamento em 1 mês.

## Análise de Riscos

### Problemas com Disponibilização de Conteúdos:
- **Risco:** Dificuldades no upload e gerenciamento de arquivos de filmes e avaliações.
- **Mitigação:** Implementar validações e testes rigorosos para o upload e gerenciamento de arquivos. Fornecer suporte técnico e instruções claras aos administradores e usuários finais.

### Desafios na Implementação da Interface de Usuário:
- **Risco:** Interface pouco intuitiva e difícil de usar para administradores e espectadores.
- **Mitigação:** Realizar testes de usabilidade com administradores e usuários finais. Ajustar o design e a funcionalidade com base no feedback recebido para garantir uma experiência de usuário intuitiva.

### Segurança de Dados e Controle de Acesso:
- **Risco:** Acesso não autorizado e vazamento de dados dos usuários e dos filmes.
- **Mitigação:** Implementar criptografia para dados sensíveis e controle rigoroso de permissões de acesso. Realizar auditorias de segurança regulares e manter atualizações de segurança em dia.

### Problemas de Performance e Escalabilidade:
- **Risco:** A plataforma pode enfrentar problemas de desempenho e não suportar um grande número de usuários simultâneos.
- **Mitigação:** Realizar testes de carga para identificar e resolver problemas de desempenho. Otimizar consultas ao banco de dados e planejar soluções de escalabilidade, como balanceamento de carga e otimização de caching.

## Recursos:
### Humanos:
- **Desenvolvedores Backend:** Especialistas em Node.js para implementar a lógica do servidor e integração com MongoDB.
- **Desenvolvedores Frontend:** Especialistas em React para criar a interface do usuário interativa e responsiva.
- **Designer de UI/UX:** Para garantir uma experiência de usuário intuitiva e agradável.
- **Administrador de Banco de Dados:** Para configurar e gerenciar o MongoDB.
- **Analista de Qualidade/Testes:** Para garantir a funcionalidade e a qualidade do sistema através de testes rigorosos.

### Tecnológicos:
- **Ambiente de Desenvolvimento:** Ferramentas de desenvolvimento como editores de código, IDEs (por exemplo, Visual Studio Code), e softwares de controle de versão (por exemplo, Git).
- **Servidores de Teste e Produção:** Infraestrutura para hospedar a aplicação e o banco de dados, que pode incluir servidores locais ou soluções em nuvem.
- **Documentação e Ferramentas de Gerenciamento de Projetos:** Software para documentação e gerenciamento de projetos (por exemplo, Jira, Confluence) para garantir a organização e o acompanhamento das tarefas e progresso do projeto.

## Cronograma:
```mermaid
    gantt
    title Cronograma de Desenvolvimento
    dateFormat  YYYY-MM-DD
    excludes    weekends

    section Planejamento e Prototipagem
    Planejamento:         des1, 2024-09-01, 30d
    Prototipagem:         des2, 2024-10-01, 28d

    section Desenvolvimento Backend
    Configuração do Ambiente: des3, 2024-10-29, 10d
    Desenvolvimento de API:    des4, 2024-11-08, 45d
    Integração com MongoDB:    des5, 2024-12-22, 20d

    section Desenvolvimento Frontend
    Design da Interface:       des6, 2024-10-01, 30d
    Desenvolvimento de Frontend: des7, 2024-10-31, 60d
    Integração com Backend:    des8, 2024-12-30, 20d

    section Testes e Ajustes
    Testes Unitários:           des9, 2025-01-19, 15d
    Testes de Integração:       des10, 2025-02-03, 15d
    Ajustes Finais:             des11, 2025-02-18, 15d

    section Lançamento
    Preparação para Lançamento: des12, 2025-03-04, 10d
    Lançamento:                 des13, 2025-03-14, 5d

```

## Diagramas:
### Classe:
```mermaid
    classDiagram
        class Usuario {
            +int id
            +string nome
            +string email
            +string senha
            +criaUsuario()
            +editaUsuario()
            +deletaUsuario()
        }

        class Filme {
            +int id
            +int usuario_id
            +string titulo
            +string descricao
            +date estreia
            +string genero
            +string imagemCapa
            +criaFilme()
            +editaFilme()
            +deletaFilme()
            +listaFilmes()
            +listaFilmesUsuario()
            +verFilme()
        }

        class Comentario {
            +int id
            +int filme_id
            +int usuario_id
            +string titulo
            +string conteudo
            +int nota
            +criaComentario()
            +editaComentario()
            +deletaComentario()
            +listaComentario()
        }
```
### Uso:
```mermaid
    flowchart TD
    %% Definição dos nós principais
    AcessaPlataforma[Acessa a Plataforma]
    ListarFilmes[Listar Filmes]
    FazerLogin[Fazer Login]
    CriarConta[Criar Conta]
    UsuarioLogado[Usuário Logado]
    VerFilme[Ver Filme]
    VerFilmeUsuario[Ver Filme Usuário]
    EditarUsuario[Editar Usuário]
    DeletarUsuario[Deletar Usuário]
    CriarFilme[Criar Filme]
    EditarFilme[Editar Filme]
    ExcluirFilme[Excluir Filme]
    ListarComentarios[Listar Comentários]
    CriarComentario[Criar Comentário]
    EditarComentario[Editar Comentário]
    DeletarComentario[Deletar Comentário]

    %% Conexões principais
    AcessaPlataforma --> ListarFilmes_sem_interação
    AcessaPlataforma --> FazerLogin
    AcessaPlataforma --> CriarConta
    CriarConta --> FazerLogin

    FazerLogin --> UsuarioLogado

    UsuarioLogado --> ListarFilmes
    UsuarioLogado --> CriarFilme
    UsuarioLogado --> EditarUsuario
    UsuarioLogado --> DeletarUsuario

    ListarFilmes --> VerFilme
    ListarFilmes --> VerFilmeUsuario

    VerFilme --> ListarComentarios

    VerFilmeUsuario --> ListarComentarios
    VerFilmeUsuario --> EditarFilme
    VerFilmeUsuario --> ExcluirFilme

    ListarComentarios --> CriarComentario
    ListarComentarios --> EditarComentario
    ListarComentarios --> DeletarComentario
```
### Fluxo:
#### Usuário não logado
```mermaid
flowchart TD
    %% Definindo as Páginas como Ações
    P1[Página Inicial - Página de filmes sem interação]
    P2[Página de Registro]
    P3[Página de Login]
    P4[Visualizar Filmes]

    %% Definindo as Ações e Transições
    A1[Registro Realizado]
    A2[Login Realizado]

    %% Fluxo de Registro
    P1 -->|Acessar Registro| P2
    P2 -->|Enviar Registro| A1
    A1 -->|Redireciona para Login| P3

    %% Fluxo de Login
    P1 -->|Acessar Login| P3
    P3 -->|Realizar Login| A2
    A2 -->|Redireciona para Visualizar Filmes| P4

    %% Estilizando as Páginas e Ações
    classDef page fill:#d0f0c0,stroke:#333,stroke-width:2px,color:#000;
    classDef action fill:#c0e0ff,stroke:#333,stroke-width:2px,color:#000;
    class P1,P2,P3,P4,P5 page;
    class A1,A2 action;

    %% Estilizando as Conexões
    linkStyle default stroke:#333,stroke-width:2px;
```
#### Usuário Logado Gerenciando Filmes e Comentários:
```mermaid
flowchart TD
    %% Definindo o Ator
    A1(Usuário Logado)

    %% Definindo as Ações
    P1[Listar Filmes]
    P2[Ver Filme]
    P3[Ver Filme Usuário]
    P4[Criar Filme]
    P5[Editar Filme]
    P6[Excluir Filme]
    P7[Listar Comentários]
    P8[Criar Comentário]
    P9[Editar Comentário]
    P10[Deletar Comentário]

    %% Fluxo de Ações
    A1 -->|Acessa| P1
    P1 -->|Seleciona Filme| P2
    P1 -->|Seleciona Filme Usuário| P3

    P2 -->|Ver Comentários| P7

    P3 -->|Gerenciar Filme| P4
    P3 -->|Editar Filme| P5
    P3 -->|Gerenciar Comentários| P7
    P3 -->|Excluir Filme| P6

    P7 -->|Adicionar Comentário| P8
    P7 -->|Editar Comentário| P9
    P7 -->|Deletar Comentário| P10

    %% Estilizando o Ator
    classDef actor fill:#ffcccb,stroke:#333,stroke-width:2px,color:#000;
    class A1 actor;

    %% Estilizando as Ações
    classDef action fill:#d0f0c0,stroke:#333,stroke-width:2px,color:#000;
    class P1,P2,P3,P4,P5,P6,P7,P8,P9,P10 action;

    %% Estilizando as Conexões
    linkStyle default stroke:#333,stroke-width:2px;
```
#### Usuário Logado Gerenciando Perfil
```mermaid
flowchart TD
    %% Definindo o Ator
    A1(Usuário Logado)

    %% Definindo as Páginas
    P1[Acessar Perfil]
    P2[Editar Perfil]
    P3[Deletar Perfil]

    %% Fluxo de Ações
    A1 -->|Acessa| P1
    P1 -->|Editar Perfil| P2
    P1 -->|Deletar Perfil| P3

    %% Estilizando o Ator
    classDef actor fill:#ffcccb,stroke:#333,stroke-width:2px,color:#000;
    class A1 actor;

    %% Estilizando as Páginas
    classDef page fill:#d0f0c0,stroke:#333,stroke-width:2px,color:#000;
    class P1,P2,P3,P4 page;

    %% Estilizando as Conexões
    linkStyle default stroke:#333,stroke-width:2px;
```
## Protótipos:
### Baixa fidelidade:
<p align="center">
  <img src="https://github.com/user-attachments/assets/62d9117c-8f0c-4efe-a00b-ee96c8767d77" alt="Baixa Fidelidade" />
</p>

### Média fidelidade:
<p align="center">
  <img src="https://github.com/user-attachments/assets/a11c3fad-33cc-41a5-aaf8-917b86928d31" alt="Média fidelidade" />
</p>

### Alta fidelidade:
<p align="center">
  <img src="https://github.com/user-attachments/assets/0634b621-77a7-45fe-8462-8c37d22df76f" alt="Alta fidelidade" />
</p>

# Manual de testes e desenvolvimento:
## Executar a aplicação:
É necessário executar o BackEnd e FrontEnd separadamente, para isso, siga os seguintes passos:
1. BackEnd:
> Abra um primeiro terminal na pasta "`server`" (Na pasta raíz, `cd .\server\`);
> Execute o comando `node .\server.js`;
2. Frontend:
> Abra um segundo terminal na pasta "`appraiser` (Na pasta raíz, `cd .\appraiser\`);
> Execute o comando `npm run dev`;
3. Acessar o localhost:5173, porta onde a aplicação já está rodando!
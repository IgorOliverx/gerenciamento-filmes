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
    Planejamento:         des1, 2024-01-01, 30d
    Prototipagem:         des2, 2024-01-31, 28d

    section Desenvolvimento Backend
    Configuração do Ambiente: des3, 2024-02-28, 10d
    Desenvolvimento de API:    des4, 2024-03-09, 45d
    Integração com MongoDB:    des5, 2024-04-23, 20d

    section Desenvolvimento Frontend
    Design da Interface:       des6, 2024-03-01, 30d
    Desenvolvimento de Frontend: des7, 2024-03-31, 60d
    Integração com Backend:    des8, 2024-05-30, 20d

    section Testes e Ajustes
    Testes Unitários:           des9, 2024-06-19, 15d
    Testes de Integração:       des10, 2024-07-04, 15d
    Ajustes Finais:             des11, 2024-07-19, 15d

    section Lançamento
    Preparação para Lançamento: des12, 2024-08-03, 10d
    Lançamento:                 des13, 2024-08-13, 5d
```

## Diagramas:
### Classe:

### Uso:

### Fluxo:

## Protótipos:
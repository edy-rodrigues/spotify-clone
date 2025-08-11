# Documentação de Decisões Técnicas

Este documento descreve as principais decisões técnicas que tomei durante o desenvolvimento deste projeto para o desafio técnico da vaga de Frontend na Kanastra. Ele explica a lógica por trás dessas decisões, reconhecendo dívidas técnicas quando aplicável e fornecendo contexto de melhorias para demonstrar conhecimento.

*Leia em [inglês](technical-decisions.md)*

## Funcionalidades Planejadas Não Implementadas

Abaixo estão funcionalidades que planejei para este projeto que não puderam ser implementadas por falta de tempo:

- **Player de áudio**: Um player funcional que permitiria aos usuários ouvir prévias de músicas
- **Autenticação do usuário**: Implementação do OAuth do Spotify para experiências personalizadas
- **UI/UX personalizada**: Alterações na interface baseadas no status de autenticação para oferecer conteúdo personalizado
- **Página do álbum**: Página dedicada para exibir detalhes e faixas do álbum
- **Página da música**: Páginas individuais para músicas com metadados adicionais e opções de reprodução

Vale ressaltar que, devido à ausência da implementação da página de álbum, alguns links na página inicial podem levar a uma página 404. Esta é uma limitação conhecida da versão atual.

## Entidades de Domínio

### Acoplamento com a API do Spotify

As entidades de domínio no diretório `domain` (por exemplo, `Artist`, `Album`) estão diretamente acopladas às estruturas de dados do Spotify. Por exemplo, na classe Artist:

- Optei por importar e usar o tipo Artist do Spotify diretamente
- Encapsulei o objeto Artist do Spotify em nossa classe de domínio
- Expus propriedades do Spotify através de métodos getter

**Por que tomei esta decisão:**
- **Velocidade de Desenvolvimento**: Escolhi esta abordagem porque acelerou significativamente meu desenvolvimento ao eliminar a necessidade de criar e manter modelos de domínio separados.
- **Dívida Técnica**: Reconheço que isso cria um forte acoplamento com a API do Spotify, tornando mais difícil mudar de provedor ou modificar o modelo de domínio de forma independente.
- **Melhoria Futura**: Em um ambiente de produção com mais tempo, eu implementaria um modelo de domínio adequado que mapearia os dados do Spotify para nossas próprias entidades, criando uma clara separação entre a API externa e nosso domínio.

## Serviços de Infraestrutura

Na implementação dos serviços no diretório `infra/spotify-api`, decidi usar diretamente os tipos de resposta do Spotify sem transformação. Por exemplo, na minha implementação da API de artistas:

- Desenvolvi métodos que retornam os tipos de dados do Spotify diretamente (Artist[], TopTracksResult, etc.)
- Optei por não utilizar Objetos de Transferência de Dados (DTOs) para transformar os dados
- Aceitei que a aplicação ficaria fortemente acoplada à estrutura da API do Spotify

**Por que tomei esta decisão:**
- **Eficiência de Desenvolvimento**: Ao usar os tipos do Spotify diretamente, consegui evitar a criação e manutenção de DTOs (Data Transfer Objects), o que acelerou meu desenvolvimento.
- **Dívida Técnica**: Estou ciente que esta minha abordagem acopla fortemente a aplicação às estruturas de dados do Spotify, tornando mais difícil mudar de provedor ou modificar a interface da API.
- **Preocupações de Escalabilidade**: Reconheço que a solução que implementei não é escalável para uma aplicação em produção onde eu gostaria de ter mais controle sobre as estruturas de dados.

## Componentes de UI

Para enriquecer a experiência do usuário, criei diversos elementos visuais no projeto que replicam a interface do Spotify, mesmo sem implementar todas as funcionalidades:

### Exemplo Botão de Play

Implementei o componente `CardPlayButton` em `src/components/data-display/card/card.tsx` como um elemento visual que aparece quando o usuário passa o mouse sobre o card, mas sem acionar a reprodução de música. O botão foi estilizado para seguir o padrão visual do Spotify, mesmo sem ter a funcionalidade completa de reprodução.

**Por que tomei esta decisão:**
- **Fidelidade visual**: Incluí esses elementos para criar uma experiência mais próxima do Spotify original, mesmo sem todas as funcionalidades.
- **Foco no essencial**: A implementação completa de reprodução musical fugiria do escopo principal do desafio técnico.
- **Base para evolução**: Desenvolvi a estrutura pensando em facilitar a adição de funcionalidades reais no futuro.

## Internacionalização (i18n)

Implementei no projeto um suporte abrangente à internacionalização com:

- Adicionei suporte a múltiplos idiomas (Inglês, Português-Brasil, Coreano)
- Desenvolvi roteamento baseado em localidade
- Criei funções utilitárias para resolução de idioma
- Organizei arquivos de tradução de forma estruturada
- Projetei a estrutura para permitir que eu possa adicionar facilmente novos idiomas no futuro

## Como a IA foi utilizada neste projeto

Hoje a IA tem um papel muito importante no desenvolvimento, mas obviamente que no desafio técnico fiz toda a camada técnica à mão, digitando cada linha de código. A IA foi utilizada em diferentes aspectos do projeto:

### No desenvolvimento

- **Autocomplete**: Utilizei recursos de autocomplete que antigamente eram feitos de forma "procedural", por assim dizer e que hoje a IA traz uma robustez maior porque propõe um código óbvio que você digitaria mas com um "tab" você ganha uma pequena performance
- **Dúvidas pontuais**: Em questões de arquitetura e tomada de decisão, discuti com a IA e busquei informações em blogs, StackOverflow e repositórios open-source (que era a única maneira que tínhamos antigamente)

Hoje eu vejo a IA sendo robusta na **maior parte** das decisões simples e em decisões complexas para **discutir e iniciar um raciocínio lógico** mas nunca assumir como verdade absoluta se faz necessário validar em grandes projetos, livros e casos de uso reais.

### Em tarefas complementares

A IA também me ajudou em aspectos não centrais do desenvolvimento:

- **Traduções**: Auxiliou nas traduções para coreano e nas correções das versões em inglês e português
- **Documentação**: Contribuiu para melhorar a clareza e escrita das documentações, mantendo meu estilo pessoal

Em todos os casos, mantive o controle total sobre as decisões técnicas e a implementação do código. A IA foi uma ferramenta complementar, sem substituir meu conhecimento técnico e minha experiência.

## Conclusão

As decisões técnicas que documentei aqui refletem o equilíbrio que busquei entre velocidade de desenvolvimento e melhores práticas. Embora algumas abordagens que escolhi introduzam dívida técnica, tomei essas decisões conscientemente para atender aos prazos do projeto enquanto entregava uma experiência de usuário de alta qualidade.

Para um ambiente de produção, eu recomendaria:

1. Desacoplar as entidades de domínio que criei das estruturas de dados do Spotify
2. Implementar os DTOs adequados para as respostas da API que desenvolvi
3. Adicionar funcionalidade real aos componentes de UI que simulei
4. Expandir a cobertura de testes que planejei
5. Implementar as funcionalidades planejadas
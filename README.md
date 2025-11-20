# GS-WebDevelopment
Global Solution desenvolvida por Cainã Sandes Batista, RM: 568571; Kenzo Hiro, RM: 568158; Yuri Aroste, RM: 567314.  <br>
Apresentado ao curso de Engenharia de Software. <hr>

<h3>Nome do Projeto:</h3> 
<p>Inscrição FutureSkills</p>

<h3>Descrição do Caso:</h3> 
<p> O projeto foi desenvolvido para a Global Solution FIAP 2025, com o tema <b>"O Futuro do Trabalho"</b> , visando aplicar os conhecimentos de desenvolvimento web (HTML e JavaScript) em um formulário interativo. O formulário simula a porta de entrada para uma ideia de projeto relacionada ao futuro do trabalho, como uma plataforma de reskilling ou um sistema de gerenciamento de freelancers. O foco é demonstrar o domínio de conceitos como manipulação de Funções, Vetores (Arrays), Manipulação de Strings, e Acesso/Modificação de elementos DOM. </p>

<h3>Estrutura do projeto:</h3> <p>
<ul>
  <li>GS-WebDevelopment (folder)</li>
  <ul>
    <b><li>index.html</b> - Estrutura básica da página web e do formulário de inscrição, com elementos acessíveis via id para o JavaScript.</li>
    <b><li>java.js</b> - Script com as funções JavaScript puro (vanilla) para validação do formulário, manipulação de dados e interação com o DOM.</li>
    <b><li>style.css</b> - Desenvolvimento de estilização com css básico meramente estético.</li>
    <li>README.md</li>
  </ul>
</ul>

<h3>Objetivo:</h3> 
<p>
Desenvolver um formulário interativo utilizando HTML e JavaScript, capaz de validar dados, gerenciar listas de habilidades, exibir mensagens através do DOM e oferecer uma experiência simples e clara ao usuário.
Desenvolver uma página HTML com um formulário que utiliza JavaScript puro para validação de dados e interação dinâmica com o usuário, sem a necessidade de persistência dos dados.
</p>

<h3>Desenvolvimento:</h3> 
<p>
A aplicação foi desenvolvida seguindo os requisitos da disciplina Web Development, utilizando HTML e JavaScript para composição estrutural, interatividade e exibição dinâmica dos dados. <br>
O objetivo principal é demonstrar a implementação dos seguintes conceitos obrigatórios: </p>

<ul>
    <li>Criação e manipulação de Funções (ex: validarFormulario(), checarCPF(), checarEmail(), exibirFeedback());</li>
    <li>Uso e gestão de Vetores (Arrays) para armazenar habilidades e mensagens de erro;</li>
    <li>Técnicas de Manipulação de Strings para validação de campos (Nome, CPF, E-mail);</li>
    <li>Acesso e modificação de elementos DOM usando document.getElementById() para leitura de dados e exibição de feedback.</li>
</ul>
<p>

<h3>Requisitos do formulário</h3>

Campos obrigatórios: <ul>
  <li>Nome Completo;</li>
  <li>CPF;</li>
  <li>E-mail;</li>
  <li>Tipo de interesse;</li>
  <li>Habilidades (mínimo 3 e máximo de 5 adicionadas).</li>
</ul>

Botões: <ul>
  <li>Adicionar habilidade;</li>
  <li>Enviar inscrição;</li>
  <li>Limpar formulário.</li>
</ul>

Áreas: <ul>
  <li>Lista de habilidades adicionadas;</li>
  <li>Área de feedback.</li>
</ul>

<h3>Requisitos de JavaScript</h3>

Funções utilizadas: <ul>
  <li><code>adicionarHabilidade()</code></li>
  <li><code>validarFormulario()</code></li>
  <li><code>checarEmail()</code></li>
  <li><code>checarCPF()</code></li>
  <li><code>exibirFeedback()</code></li>
  <li><code>limparFormulario()</code></li>
</ul>

Vetores: <ul>
  <li><code>habilidades[]</code> - armazena as skills adicionadas;</li>
  <li><code>erros[]</code> - reúne as mensagens de validação.</li>
</ul>

Manipulação de strings: <ul>
  <li><code>toLowerCase()</code> - conversão de ".COM";</li>
  <li>Limpeza de caracterez não numéricos no "CPF";</li>
  <li>Validação de caracteres permitidos no "Nome".</li>
</ul>

Manipulação do DOM: <ul>
  <li><code>document.getElementById().value</code> - leitura de inputs;</li>
  <li><code>ul</code> - atualização dinâmica da lista;</li>
  <li><code>innerHTML</code> - exibição de erros e sucesso na inscrição.</li>
</ul>

<h3>Como executar</h3>
<ul>
  <li>Abra e execute o arquivo index.html ou acesse nosso GitHub pages do projeto;</li>
  <li>Preencha os campos obrigatórios;</li>
  <li>Adicione pelo menos 3 habilidades;</li>
  <li>Clique em "Enviar Inscrição" para visualizar o feedback;</li>
  <li>Utilize o botão "Limpar Formulário" para recomeçar.</li>
</ul>

Nenhuma dependência ou servidor é necessário.

<h3>Publicação:</h3> <p>
O projeto foi publicado no GitHub Pages para visualização online. <br>
🔗 Link GitHub-Pages: https://yurifukamachi07-beep.github.io/GS-WebDevelopment/
</p>




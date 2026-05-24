# CONTEXT.md — Site Pró-Saúde Itajubá-MG

Este arquivo é o contexto principal para implementação do site da **Pró-Saúde Itajubá-MG** no Codex.

## 0. Resumo executivo

Criar um site institucional com catálogo enxuto, focado em SEO local e conversão pelo WhatsApp.

O site **não** será e-commerce.

O site deve funcionar como:

1. vitrine profissional da loja;
2. catálogo organizado por categorias principais;
3. hub de SEO local para buscas de produtos de saúde em Itajubá e região;
4. canal de contato rápido pelo WhatsApp;
5. base escalável para futuras páginas de produto.

A experiência do usuário deve ser simples:

- a pessoa entra;
- entende o que a loja vende;
- encontra uma categoria ou produto;
- chama a loja no WhatsApp;
- confirma disponibilidade.

A estratégia de SEO deve ser forte, mas sem poluir visualmente o site.

Exemplo de objetivo:

- usuário pesquisa no Google: `cadeira de rodas em Itajubá`;
- encontra a página da Pró-Saúde;
- entra na página `Cadeira de Rodas`;
- vê informações úteis;
- chama no WhatsApp para consultar disponibilidade.

Importante: não colocar `em Itajubá` em todos os cards, menus e títulos visíveis. O contexto local deve aparecer de forma natural em metadados, textos, seções, dados estruturados, FAQ, endereço e conteúdo da página.

---

## 1. Contexto do negócio

### 1.1 Nome

Pró-Saúde Itajubá

### 1.2 Local

Itajubá-MG

### 1.3 Tipo de negócio

Loja física de produtos de saúde, materiais médicos, ortopédicos, hospitalares, itens de mobilidade, cuidados domiciliares, curativos, respiratório, EPIs, descartáveis e produtos relacionados.

### 1.4 Modelo de venda

A loja **vende produtos**.

Não tratar como locadora.

Não criar textos dizendo que a loja aluga cadeira de rodas, cama hospitalar, muleta, andador ou qualquer outro produto.

### 1.5 Conversão principal

WhatsApp.

Não implementar carrinho.

Não implementar checkout.

Não implementar compra online.

Não exibir preço se não houver fonte confiável atualizada.

Não afirmar estoque garantido.

Usar sempre linguagem de consulta:

- `Consultar disponibilidade`
- `Falar com a loja`
- `Confirmar modelos disponíveis`
- `Chamar no WhatsApp`
- `Ver opções com atendimento`

---

## 2. Fonte de produtos

Existe uma planilha XLSX da loja chamada:

```txt
TODOS PRODUTOS LOJA.xlsx
```

A planilha possui:

```txt
Aba: Planilha1
Colunas:
- INDICE
- NOME DO PRODUTOS
Total aproximado analisado: 3.189 produtos
```

A planilha é a fonte principal para entender o mix de produtos.

A planilha contém muitos nomes internos, abreviações, marcas, tamanhos, medidas e variações.

Exemplos de padrões encontrados:

- agulhas por medida e marca;
- ataduras por tamanho;
- cintas por tamanho;
- meias de compressão por modelo e medida;
- aparelhos de pressão por tipo;
- cadeiras, bengalas, barras, apoios e acessórios;
- produtos de curativo;
- produtos de higiene e antissepsia;
- itens ortopédicos;
- produtos respiratórios;
- materiais médicos e hospitalares.

Não exibir todos os 3.189 produtos na primeira versão do site.

Usar a planilha para validar categorias e produtos estratégicos.

---

## 3. Objetivo do site

O site deve ajudar a Pró-Saúde Itajubá a:

1. ser encontrada no Google por buscas locais;
2. mostrar que é uma loja física confiável em Itajubá;
3. apresentar categorias de produtos de forma clara;
4. direcionar clientes para o WhatsApp;
5. atender clientes de Itajubá e cidades próximas;
6. evitar poluição visual e excesso de produtos;
7. preparar uma base escalável para SEO;
8. permitir futuras melhorias com Search Console.

---

## 4. Escopo da primeira versão

### 4.1 Entregar na fase 1

Criar:

```txt
1 home
1 página geral de produtos
10 páginas de categorias principais
25 páginas estratégicas de produto
1 página Sobre
1 página Localização
1 página Contato
Sitemap
Robots.txt
Metadados SEO por página
Breadcrumbs
FAQ nas páginas de produto
Schema LocalBusiness
Schema BreadcrumbList
Schema FAQPage quando houver FAQ visível
Botões de WhatsApp contextuais
```

### 4.2 Não entregar na fase 1

Não implementar:

```txt
Carrinho
Checkout
Pagamento online
Login
Área do cliente
Painel administrativo
CMS
Blog
Catálogo completo com 3.189 produtos
Páginas duplicadas por cidade
Páginas para cada variação de produto
Preço
Estoque em tempo real
Avaliações inventadas
Depoimentos inventados
```

---

## 5. Estratégia de UX e SEO

### 5.1 Princípio principal

Separar o que o usuário vê do que o Google entende.

O usuário deve ver nomes simples:

```txt
Cadeira de Rodas
Andador
Aparelho de Pressão
Mobilidade e Acessibilidade
Ortopédicos
Curativos
```

O Google deve entender contexto local por:

```txt
Title SEO
Meta description
Primeiro parágrafo
Seção de atendimento regional
FAQ
Schema LocalBusiness
Breadcrumbs
Links internos
Sitemap
Endereço da loja
Nome Pró-Saúde Itajubá
```

### 5.2 Exemplo correto

Página:

```txt
/produtos/cadeira-de-rodas
```

H1 visível:

```txt
Cadeira de Rodas
```

Title SEO:

```txt
Cadeira de Rodas em Itajubá | Pró-Saúde Itajubá
```

Texto:

```txt
A Pró-Saúde Itajubá trabalha com produtos de mobilidade e acessibilidade, incluindo cadeira de rodas e acessórios relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja em Itajubá-MG.
```

FAQ:

```txt
Onde comprar cadeira de rodas em Itajubá?
```

### 5.3 Exemplo incorreto

Não fazer menu assim:

```txt
Cadeira de Rodas em Itajubá
Andador em Itajubá
Aparelho de Pressão em Itajubá
Colchão Hospitalar em Itajubá
Bota Imobilizadora em Itajubá
```

Isso fica artificial e polui o site.

---

## 6. Arquitetura de rotas

Usar URLs simples, sem acento e sem repetir `em Itajubá` na URL.

### 6.1 Rotas principais

```txt
/
 /produtos
 /produtos/mobilidade-e-acessibilidade
 /produtos/ortopedicos
 /produtos/cuidados-domiciliares
 /produtos/materiais-medicos
 /produtos/aparelhos-de-saude
 /produtos/curativos
 /produtos/respiratorio
 /produtos/higiene-e-antissepsia
 /produtos/epis-e-descartaveis
 /produtos/fisioterapia-e-reabilitacao
 /produtos/odontologicos
 /sobre
 /localizacao
 /contato
```

### 6.2 Rotas estratégicas de produto

```txt
/produtos/cadeira-de-rodas
/produtos/andador
/produtos/bengala
/produtos/muleta
/produtos/cadeira-de-banho
/produtos/barra-de-apoio
/produtos/aparelho-de-pressao
/produtos/oximetro
/produtos/estetoscopio
/produtos/balanca-digital
/produtos/colchao-hospitalar
/produtos/colchao-anti-escaras
/produtos/cama-hospitalar
/produtos/cinta-lombar
/produtos/bota-imobilizadora
/produtos/colar-cervical
/produtos/meia-de-compressao
/produtos/joelheira
/produtos/tornozeleira
/produtos/munhequeira
/produtos/tipoia
/produtos/gaze
/produtos/atadura
/produtos/esparadrapo
/produtos/alcool-70
/produtos/inalacao-e-oxigenio
```

### 6.3 Não criar na fase 1

Não criar:

```txt
/produtos/cadeira-de-rodas-itajuba
/produtos/cadeira-de-rodas-piranguinho
/produtos/cadeira-de-rodas-maria-da-fe
/produtos/cadeira-de-rodas-brazopolis
/produtos/cadeira-de-rodas-santa-rita-do-sapucai
```

Também não criar página para cada variação:

```txt
/produtos/cadeira-de-rodas-dobravel
/produtos/cadeira-de-rodas-aluminio
/produtos/cadeira-de-rodas-preta
/produtos/cadeira-de-rodas-tamanho-g
```

Criar uma página única para o produto principal e mencionar que modelos e disponibilidade devem ser consultados pelo WhatsApp.

---

## 7. Navegação principal

Menu recomendado:

```txt
Início
Produtos
Cuidados Domiciliares
Mobilidade
Ortopédicos
Localização
Contato
```

O menu deve ser enxuto.

O item `Produtos` deve levar para `/produtos`.

As páginas de produto não precisam estar todas no menu.

As páginas de produto devem ser acessadas por:

- cards de produtos mais procurados;
- página de categoria;
- links internos;
- sitemap;
- rodapé com lista curta.

---

## 8. Estrutura da Home

Rota:

```txt
/
```

### 8.1 Objetivo da home

A home deve:

1. explicar o que a loja vende;
2. mostrar categorias principais;
3. destacar produtos mais procurados;
4. informar atendimento em Itajubá e região;
5. gerar contato pelo WhatsApp.

### 8.2 Seções da home

Usar esta ordem:

```txt
1. Hero
2. Categorias principais
3. Produtos mais procurados
4. Para quem a loja atende
5. Atendimento em Itajubá e região
6. Chamada para WhatsApp
7. Localização resumida
```

### 8.3 Conteúdo do Hero

H1:

```txt
Produtos médicos, ortopédicos e hospitalares em Itajubá
```

Subtexto:

```txt
A Pró-Saúde Itajubá oferece produtos para saúde, mobilidade, cuidados domiciliares, curativos, aparelhos, materiais médicos e atendimento para clientes, cuidadores, clínicas e profissionais da região.
```

Botões:

```txt
Consultar pelo WhatsApp
Ver produtos
```

Mensagem do WhatsApp:

```txt
Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento.
```

### 8.4 Categorias principais na Home

Mostrar as categorias:

```txt
Mobilidade e Acessibilidade
Ortopédicos
Cuidados Domiciliares
Aparelhos de Saúde
Materiais Médicos
Curativos
Respiratório
Higiene e Antissepsia
EPIs e Descartáveis
Fisioterapia e Reabilitação
```

Texto curto de cada categoria:

#### Mobilidade e Acessibilidade

```txt
Cadeiras de rodas, andadores, bengalas, muletas, cadeiras de banho, barras de apoio e acessórios relacionados.
```

#### Ortopédicos

```txt
Cintas, joelheiras, tornozeleiras, munhequeiras, colares cervicais, botas imobilizadoras, tipoias, palmilhas e itens de apoio.
```

#### Cuidados Domiciliares

```txt
Colchões hospitalares, colchões anti-escaras, cama hospitalar, almofadas, apoios e produtos para cuidados em casa.
```

#### Aparelhos de Saúde

```txt
Aparelhos de pressão, oxímetros, termômetros, estetoscópios, balanças e acessórios para acompanhamento de saúde.
```

#### Materiais Médicos

```txt
Seringas, agulhas, sondas, cateteres, bolsas coletoras, instrumentais, campos e materiais hospitalares.
```

#### Curativos

```txt
Gazes, ataduras, esparadrapos, algodão, compressas, fitas e curativos especiais.
```

#### Respiratório

```txt
Produtos para inalação, oxigenoterapia, cateter tipo óculos, conectores, aspiradores e acessórios.
```

#### Higiene e Antissepsia

```txt
Álcool 70, álcool gel, clorexidina, água oxigenada, água destilada, almotolias e itens para rotina de higiene.
```

#### EPIs e Descartáveis

```txt
Aventais, luvas, máscaras, toucas, jalecos, descartáveis hospitalares e itens para uso profissional.
```

#### Fisioterapia e Reabilitação

```txt
Bandagens, faixas elásticas, bolas, colchonetes, hand grip e acessórios para exercícios e reabilitação.
```

### 8.5 Produtos mais procurados na Home

Título:

```txt
Produtos mais procurados
```

Subtexto:

```txt
Consulte a disponibilidade dos produtos pelo WhatsApp ou visite a Pró-Saúde Itajubá.
```

Lista:

```txt
Cadeira de Rodas
Andador
Bengala
Muleta
Cadeira de Banho
Barra de Apoio
Aparelho de Pressão
Oxímetro
Colchão Hospitalar
Colchão Anti-escaras
Cinta Lombar
Bota Imobilizadora
Meia de Compressão
Gaze
Atadura
Esparadrapo
```

Cada item deve linkar para sua respectiva página quando existir.

### 8.6 Para quem a loja atende

Título:

```txt
Atendimento para clientes, famílias e profissionais
```

Texto:

```txt
A Pró-Saúde Itajubá atende clientes, famílias, cuidadores, idosos, clínicas, consultórios e profissionais da saúde que precisam de produtos para saúde, mobilidade, curativos, cuidados em casa e uso profissional.
```

### 8.7 Atendimento regional

Título:

```txt
Atendimento em Itajubá e região
```

Texto:

```txt
A Pró-Saúde está localizada em Itajubá-MG e atende clientes da cidade e de municípios próximos, como Piranguinho, Maria da Fé, Brazópolis, Santa Rita do Sapucaí, Wenceslau Braz, Pedralva, Delfim Moreira, Piranguçu, São José do Alegre e outras cidades da região.
```

### 8.8 CTA final da home

Título:

```txt
Precisa consultar algum produto?
```

Texto:

```txt
Fale com a Pró-Saúde Itajubá pelo WhatsApp e confirme a disponibilidade com a loja.
```

Botão:

```txt
Chamar no WhatsApp
```

---

## 9. Página geral de produtos

Rota:

```txt
/produtos
```

### 9.1 Objetivo

Funcionar como hub de produtos.

Não listar 3.189 produtos.

Mostrar:

1. categorias principais;
2. produtos mais procurados;
3. orientação para consultar disponibilidade;
4. links para WhatsApp.

### 9.2 SEO

Title:

```txt
Produtos Médicos, Ortopédicos e Hospitalares | Pró-Saúde Itajubá
```

Description:

```txt
Conheça as categorias de produtos da Pró-Saúde Itajubá: mobilidade, ortopédicos, cuidados domiciliares, materiais médicos, curativos, aparelhos e mais.
```

H1:

```txt
Produtos da Pró-Saúde Itajubá
```

Texto inicial:

```txt
Encontre produtos médicos, ortopédicos, hospitalares, de mobilidade, curativos, aparelhos de saúde, EPIs e itens para cuidados domiciliares. Consulte a disponibilidade pelo WhatsApp.
```

---

## 10. Páginas de categoria

Todas as páginas de categoria devem seguir este modelo:

```txt
H1 limpo
Texto introdutório com Pró-Saúde Itajubá
Lista de produtos relacionados
CTA para WhatsApp
Seção de atendimento regional
FAQ opcional, quando fizer sentido
Breadcrumb
Links internos para produtos estratégicos
```

### 10.1 Categoria: Mobilidade e Acessibilidade

Rota:

```txt
/produtos/mobilidade-e-acessibilidade
```

Title:

```txt
Mobilidade e Acessibilidade | Pró-Saúde Itajubá
```

Description:

```txt
Produtos de mobilidade e acessibilidade na Pró-Saúde Itajubá: cadeira de rodas, andador, bengala, muleta, cadeira de banho, barra de apoio e acessórios.
```

H1:

```txt
Mobilidade e Acessibilidade
```

Texto:

```txt
Na Pró-Saúde Itajubá, você encontra produtos de mobilidade e acessibilidade para auxiliar a rotina, a locomoção e os cuidados em casa. Consulte opções como cadeira de rodas, andadores, bengalas, muletas, cadeiras de banho, barras de apoio e acessórios relacionados.
```

Produtos relacionados:

```txt
Cadeira de Rodas
Andador
Bengala
Muleta
Cadeira de Banho
Barra de Apoio
Assento Elevado
Acessórios para Cadeira de Rodas
```

CTA:

```txt
Consultar produtos de mobilidade pelo WhatsApp
```

Mensagem WhatsApp:

```txt
Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos de mobilidade e acessibilidade.
```

### 10.2 Categoria: Ortopédicos

Rota:

```txt
/produtos/ortopedicos
```

Title:

```txt
Produtos Ortopédicos | Pró-Saúde Itajubá
```

Description:

```txt
Produtos ortopédicos na Pró-Saúde Itajubá: cintas, joelheiras, tornozeleiras, munhequeiras, colares cervicais, botas imobilizadoras, tipoias e palmilhas.
```

H1:

```txt
Produtos Ortopédicos
```

Texto:

```txt
A Pró-Saúde Itajubá trabalha com produtos ortopédicos para diferentes necessidades do dia a dia, incluindo cintas, joelheiras, tornozeleiras, munhequeiras, colares cervicais, botas imobilizadoras, tipoias, palmilhas, calcanheiras e outros itens de apoio.
```

Produtos relacionados:

```txt
Cinta Lombar
Bota Imobilizadora
Colar Cervical
Meia de Compressão
Joelheira
Tornozeleira
Munhequeira
Tipoia
Palmilha
Calcanheira
Corretor Postural
```

CTA:

```txt
Consultar produtos ortopédicos pelo WhatsApp
```

### 10.3 Categoria: Cuidados Domiciliares

Rota:

```txt
/produtos/cuidados-domiciliares
```

Title:

```txt
Cuidados Domiciliares | Pró-Saúde Itajubá
```

Description:

```txt
Produtos para cuidados domiciliares na Pró-Saúde Itajubá: colchão hospitalar, colchão anti-escaras, cama hospitalar, almofadas, apoios e itens para cuidado em casa.
```

H1:

```txt
Cuidados Domiciliares
```

Texto:

```txt
Encontre produtos para cuidados em casa, apoio ao paciente, conforto e rotina de cuidadores. A Pró-Saúde Itajubá oferece itens como colchão hospitalar, colchão anti-escaras, cama hospitalar, almofadas, apoios e produtos auxiliares para cuidados domiciliares.
```

Produtos relacionados:

```txt
Colchão Hospitalar
Colchão Anti-escaras
Cama Hospitalar
Almofada Ortopédica
Almofada para Cóccix
Assento Elevado
Apoio Cervical
Produtos para Acamados
```

CTA:

```txt
Consultar produtos para cuidados domiciliares pelo WhatsApp
```

### 10.4 Categoria: Aparelhos de Saúde

Rota:

```txt
/produtos/aparelhos-de-saude
```

Title:

```txt
Aparelhos de Saúde | Pró-Saúde Itajubá
```

Description:

```txt
Aparelhos de saúde na Pró-Saúde Itajubá: aparelho de pressão, oxímetro, termômetro, estetoscópio, balança digital e acessórios.
```

H1:

```txt
Aparelhos de Saúde
```

Texto:

```txt
A Pró-Saúde Itajubá oferece aparelhos e acessórios para acompanhamento de saúde no dia a dia, como aparelho de pressão, oxímetro, termômetro, estetoscópio, balança digital e itens relacionados.
```

Produtos relacionados:

```txt
Aparelho de Pressão
Oxímetro
Termômetro
Estetoscópio
Balança Digital
Braçadeira para Aparelho de Pressão
Acessórios para Estetoscópio
```

### 10.5 Categoria: Materiais Médicos

Rota:

```txt
/produtos/materiais-medicos
```

Title:

```txt
Materiais Médicos e Hospitalares | Pró-Saúde Itajubá
```

Description:

```txt
Materiais médicos e hospitalares na Pró-Saúde Itajubá: seringas, agulhas, sondas, cateteres, bolsas coletoras, instrumentais, campos e acessórios.
```

H1:

```txt
Materiais Médicos e Hospitalares
```

Texto:

```txt
A Pró-Saúde Itajubá trabalha com materiais médicos e hospitalares para uso profissional, clínico e cuidados em geral. Consulte opções como seringas, agulhas, sondas, cateteres, bolsas coletoras, campos, instrumentais e acessórios.
```

Produtos relacionados:

```txt
Seringas
Agulhas
Sondas
Cateteres
Bolsas Coletoras
Lâminas de Bisturi
Campos Estéreis
Instrumentais
Suporte para Soro
```

### 10.6 Categoria: Curativos

Rota:

```txt
/produtos/curativos
```

Title:

```txt
Curativos e Primeiros Cuidados | Pró-Saúde Itajubá
```

Description:

```txt
Curativos e primeiros cuidados na Pró-Saúde Itajubá: gaze, atadura, esparadrapo, algodão, fitas, compressas e curativos especiais.
```

H1:

```txt
Curativos e Primeiros Cuidados
```

Texto:

```txt
Encontre produtos para curativos e primeiros cuidados, como gazes, ataduras, esparadrapos, algodão, compressas, fitas e outros materiais auxiliares. Consulte a disponibilidade na Pró-Saúde Itajubá.
```

Produtos relacionados:

```txt
Gaze
Atadura
Esparadrapo
Algodão
Compressa
Fita Microporosa
Curativos Especiais
Bota de Unna
```

### 10.7 Categoria: Respiratório

Rota:

```txt
/produtos/respiratorio
```

Title:

```txt
Produtos Respiratórios e Oxigenoterapia | Pró-Saúde Itajubá
```

Description:

```txt
Produtos respiratórios na Pró-Saúde Itajubá: itens para inalação, oxigênio, cateter tipo óculos, conectores, aspirador de secreção e acessórios.
```

H1:

```txt
Respiratório, Inalação e Oxigenoterapia
```

Texto:

```txt
A Pró-Saúde Itajubá oferece produtos e acessórios para cuidados respiratórios, inalação e oxigenoterapia, incluindo cateter tipo óculos, conectores, copos para inalador, aspirador de secreção e itens relacionados.
```

Produtos relacionados:

```txt
Inalador
Cateter Tipo Óculos
Cateter Nasal
Conector para Oxigênio
Aspirador de Secreção
Copo para Inalador
Máscara para Inalação
```

### 10.8 Categoria: Higiene e Antissepsia

Rota:

```txt
/produtos/higiene-e-antissepsia
```

Title:

```txt
Higiene e Antissepsia | Pró-Saúde Itajubá
```

Description:

```txt
Produtos de higiene e antissepsia na Pró-Saúde Itajubá: álcool 70, álcool gel, clorexidina, água oxigenada, água destilada e almotolias.
```

H1:

```txt
Higiene e Antissepsia
```

Texto:

```txt
A Pró-Saúde Itajubá trabalha com produtos de higiene, antissepsia e apoio à rotina de cuidados, como álcool 70, álcool gel, clorexidina, água oxigenada, água destilada, almotolias e itens relacionados.
```

Produtos relacionados:

```txt
Álcool 70
Álcool Gel
Clorexidina
Água Oxigenada
Água Destilada
Almotolia
Swab de Álcool
```

### 10.9 Categoria: EPIs e Descartáveis

Rota:

```txt
/produtos/epis-e-descartaveis
```

Title:

```txt
EPIs e Descartáveis Hospitalares | Pró-Saúde Itajubá
```

Description:

```txt
EPIs e descartáveis na Pró-Saúde Itajubá: aventais, luvas, máscaras, toucas, descartáveis hospitalares e itens para uso profissional.
```

H1:

```txt
EPIs e Descartáveis
```

Texto:

```txt
Encontre EPIs e descartáveis para uso profissional, clínico, hospitalar e cuidados em geral. Consulte opções como aventais, luvas, máscaras, toucas e outros itens descartáveis na Pró-Saúde Itajubá.
```

Produtos relacionados:

```txt
Avental Descartável
Luvas
Máscaras
Toucas
Jalecos
Descartáveis Hospitalares
```

### 10.10 Categoria: Fisioterapia e Reabilitação

Rota:

```txt
/produtos/fisioterapia-e-reabilitacao
```

Title:

```txt
Fisioterapia e Reabilitação | Pró-Saúde Itajubá
```

Description:

```txt
Produtos para fisioterapia e reabilitação na Pró-Saúde Itajubá: bandagens, faixas elásticas, bolas, colchonetes e acessórios.
```

H1:

```txt
Fisioterapia e Reabilitação
```

Texto:

```txt
A Pró-Saúde Itajubá oferece produtos para fisioterapia, exercícios e reabilitação, como bandagens, faixas elásticas, bolas, colchonetes e acessórios relacionados.
```

Produtos relacionados:

```txt
Bandagem Elástica
Faixa Elástica
Bola para Exercício
Colchonete
Hand Grip
Acessórios para Fisioterapia
```

### 10.11 Categoria: Odontológicos

Rota:

```txt
/produtos/odontologicos
```

Title:

```txt
Produtos Odontológicos | Pró-Saúde Itajubá
```

Description:

```txt
Produtos odontológicos na Pró-Saúde Itajubá. Consulte materiais disponíveis para uso profissional e rotina odontológica pelo WhatsApp.
```

H1:

```txt
Produtos Odontológicos
```

Texto:

```txt
A Pró-Saúde Itajubá possui itens relacionados à rotina odontológica e materiais de apoio profissional. Consulte a disponibilidade pelo WhatsApp antes de se deslocar até a loja.
```

Observação:

A planilha aparenta ter poucos itens claramente odontológicos. Essa página pode existir como categoria secundária, mas não deve ser destaque principal da home.

---

## 11. Template padrão de página de produto

Toda página de produto estratégico deve seguir esta estrutura.

### 11.1 Estrutura

```txt
Breadcrumb
H1
Texto introdutório
Botão WhatsApp
Seção: Produtos relacionados
Seção: Atendimento em Itajubá e região
Seção: Dúvidas frequentes
CTA final
```

### 11.2 Template de metadados

Title:

```txt
{Produto} em Itajubá | Pró-Saúde Itajubá
```

Description:

```txt
Consulte {produto} na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.
```

H1:

```txt
{Produto}
```

Texto inicial:

```txt
A Pró-Saúde Itajubá trabalha com {produto} e produtos relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja em Itajubá-MG.
```

CTA:

```txt
Consultar {produto} pelo WhatsApp
```

Mensagem WhatsApp:

```txt
Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de {produto}.
```

### 11.3 FAQ padrão para produto

Usar nas páginas de produto.

Pergunta 1:

```txt
Onde comprar {produto} em Itajubá?
```

Resposta:

```txt
A Pró-Saúde Itajubá trabalha com {produto} e itens relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja física em Itajubá-MG.
```

Pergunta 2:

```txt
A Pró-Saúde vende ou aluga {produto}?
```

Resposta:

```txt
A Pró-Saúde trabalha com venda de produtos. Para confirmar modelos disponíveis, consulte a loja pelo WhatsApp.
```

Pergunta 3:

```txt
A loja atende cidades próximas?
```

Resposta:

```txt
Sim. A Pró-Saúde Itajubá atende clientes de Itajubá e região, incluindo Piranguinho, Maria da Fé, Brazópolis, Santa Rita do Sapucaí, Wenceslau Braz, Pedralva, Delfim Moreira, Piranguçu e São José do Alegre.
```

Não usar FAQ se ela não aparecer visivelmente na página.

---

## 12. Produtos estratégicos iniciais

Criar dados para estes produtos.

### 12.1 Mobilidade

```txt
Cadeira de Rodas
Andador
Bengala
Muleta
Cadeira de Banho
Barra de Apoio
```

### 12.2 Aparelhos de saúde

```txt
Aparelho de Pressão
Oxímetro
Estetoscópio
Balança Digital
```

### 12.3 Cuidados domiciliares

```txt
Colchão Hospitalar
Colchão Anti-escaras
Cama Hospitalar
```

### 12.4 Ortopédicos

```txt
Cinta Lombar
Bota Imobilizadora
Colar Cervical
Meia de Compressão
Joelheira
Tornozeleira
Munhequeira
Tipoia
```

### 12.5 Curativos

```txt
Gaze
Atadura
Esparadrapo
```

### 12.6 Respiratório e higiene

```txt
Álcool 70
Inalação e Oxigênio
```

---

## 13. Conteúdo das páginas estratégicas de produto

### 13.1 Cadeira de Rodas

Slug:

```txt
cadeira-de-rodas
```

Categoria:

```txt
mobilidade-e-acessibilidade
```

Title:

```txt
Cadeira de Rodas em Itajubá | Pró-Saúde Itajubá
```

Description:

```txt
Consulte cadeira de rodas na Pró-Saúde Itajubá. Loja física em Itajubá-MG com produtos de mobilidade, acessibilidade e atendimento pelo WhatsApp.
```

H1:

```txt
Cadeira de Rodas
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com produtos de mobilidade e acessibilidade, incluindo cadeira de rodas e acessórios relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja em Itajubá-MG.
```

Relacionados:

```txt
Andador
Bengala
Muleta
Cadeira de Banho
Barra de Apoio
```

### 13.2 Andador

Slug:

```txt
andador
```

Title:

```txt
Andador em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Andador
```

Intro:

```txt
Na Pró-Saúde Itajubá, você pode consultar opções de andador e produtos de mobilidade relacionados. Fale pelo WhatsApp para confirmar disponibilidade e modelos.
```

Relacionados:

```txt
Cadeira de Rodas
Bengala
Muleta
Barra de Apoio
Cadeira de Banho
```

### 13.3 Bengala

Title:

```txt
Bengala em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Bengala
```

Intro:

```txt
A Pró-Saúde Itajubá oferece produtos de apoio à mobilidade, incluindo bengalas e acessórios relacionados. Consulte a disponibilidade pelo WhatsApp.
```

### 13.4 Muleta

Title:

```txt
Muleta em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Muleta
```

Intro:

```txt
Consulte opções de muletas e itens de apoio à mobilidade na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp para verificar disponibilidade.
```

### 13.5 Cadeira de Banho

Title:

```txt
Cadeira de Banho em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Cadeira de Banho
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com produtos para acessibilidade e cuidados em casa, incluindo cadeira de banho e acessórios relacionados. Consulte disponibilidade pelo WhatsApp.
```

### 13.6 Barra de Apoio

Title:

```txt
Barra de Apoio em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Barra de Apoio
```

Intro:

```txt
Consulte barras de apoio e produtos de acessibilidade na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar opções disponíveis.
```

### 13.7 Aparelho de Pressão

Title:

```txt
Aparelho de Pressão em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Aparelho de Pressão
```

Intro:

```txt
A Pró-Saúde Itajubá oferece aparelhos de pressão e acessórios relacionados para acompanhamento de saúde. Consulte modelos disponíveis pelo WhatsApp.
```

### 13.8 Oxímetro

Title:

```txt
Oxímetro em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Oxímetro
```

Intro:

```txt
Consulte opções de oxímetro e aparelhos de saúde na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp para confirmar disponibilidade.
```

### 13.9 Estetoscópio

Title:

```txt
Estetoscópio em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Estetoscópio
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com estetoscópios e acessórios relacionados para uso profissional e acadêmico. Consulte disponibilidade pelo WhatsApp.
```

### 13.10 Balança Digital

Title:

```txt
Balança Digital em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Balança Digital
```

Intro:

```txt
Consulte balanças digitais e aparelhos de saúde na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar opções disponíveis.
```

### 13.11 Colchão Hospitalar

Title:

```txt
Colchão Hospitalar em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Colchão Hospitalar
```

Intro:

```txt
A Pró-Saúde Itajubá oferece produtos para cuidados domiciliares, incluindo colchão hospitalar e itens relacionados. Consulte disponibilidade pelo WhatsApp.
```

### 13.12 Colchão Anti-escaras

Title:

```txt
Colchão Anti-escaras em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Colchão Anti-escaras
```

Intro:

```txt
Consulte opções de colchão anti-escaras e produtos para cuidados domiciliares na Pró-Saúde Itajubá. Fale pelo WhatsApp para confirmar disponibilidade.
```

### 13.13 Cama Hospitalar

Title:

```txt
Cama Hospitalar em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Cama Hospitalar
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com produtos para cuidados domiciliares, incluindo cama hospitalar e acessórios relacionados. Consulte disponibilidade pelo WhatsApp.
```

### 13.14 Cinta Lombar

Title:

```txt
Cinta Lombar em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Cinta Lombar
```

Intro:

```txt
Consulte cintas lombares e produtos ortopédicos na Pró-Saúde Itajubá. Fale pelo WhatsApp para confirmar tamanhos, modelos e disponibilidade.
```

### 13.15 Bota Imobilizadora

Title:

```txt
Bota Imobilizadora em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Bota Imobilizadora
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com produtos ortopédicos, incluindo bota imobilizadora e itens relacionados. Consulte disponibilidade pelo WhatsApp.
```

### 13.16 Colar Cervical

Title:

```txt
Colar Cervical em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Colar Cervical
```

Intro:

```txt
Consulte colares cervicais e produtos ortopédicos na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp para verificar opções disponíveis.
```

### 13.17 Meia de Compressão

Title:

```txt
Meia de Compressão em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Meia de Compressão
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com meias de compressão e produtos relacionados. Consulte disponibilidade, medidas e modelos pelo WhatsApp.
```

### 13.18 Joelheira

Title:

```txt
Joelheira em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Joelheira
```

Intro:

```txt
Consulte joelheiras e produtos ortopédicos na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar tamanhos e disponibilidade.
```

### 13.19 Tornozeleira

Title:

```txt
Tornozeleira em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Tornozeleira
```

Intro:

```txt
A Pró-Saúde Itajubá oferece produtos ortopédicos como tornozeleiras e itens relacionados. Consulte disponibilidade pelo WhatsApp.
```

### 13.20 Munhequeira

Title:

```txt
Munhequeira em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Munhequeira
```

Intro:

```txt
Consulte munhequeiras e produtos ortopédicos na Pró-Saúde Itajubá. Fale com a loja para verificar opções disponíveis.
```

### 13.21 Tipoia

Title:

```txt
Tipoia em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Tipoia
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com tipoias e produtos ortopédicos relacionados. Consulte disponibilidade pelo WhatsApp.
```

### 13.22 Gaze

Title:

```txt
Gaze em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Gaze
```

Intro:

```txt
Consulte gazes e materiais para curativos na Pró-Saúde Itajubá. Fale pelo WhatsApp para confirmar disponibilidade.
```

### 13.23 Atadura

Title:

```txt
Atadura em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Atadura
```

Intro:

```txt
A Pró-Saúde Itajubá oferece ataduras e produtos para curativos e primeiros cuidados. Consulte opções disponíveis pelo WhatsApp.
```

### 13.24 Esparadrapo

Title:

```txt
Esparadrapo em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Esparadrapo
```

Intro:

```txt
Consulte esparadrapos, fitas e materiais para curativos na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp.
```

### 13.25 Álcool 70

Title:

```txt
Álcool 70 em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Álcool 70
```

Intro:

```txt
A Pró-Saúde Itajubá trabalha com álcool 70 e produtos de higiene e antissepsia. Consulte disponibilidade pelo WhatsApp.
```

### 13.26 Inalação e Oxigênio

Title:

```txt
Produtos para Inalação e Oxigênio em Itajubá | Pró-Saúde Itajubá
```

H1:

```txt
Inalação e Oxigênio
```

Intro:

```txt
Consulte produtos para inalação, oxigenoterapia e acessórios respiratórios na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar disponibilidade.
```

---

## 14. Páginas institucionais

### 14.1 Sobre

Rota:

```txt
/sobre
```

Title:

```txt
Sobre a Pró-Saúde Itajubá | Loja de Produtos de Saúde
```

Description:

```txt
Conheça a Pró-Saúde Itajubá, loja física de produtos médicos, ortopédicos, hospitalares, cuidados domiciliares e materiais de saúde em Itajubá-MG.
```

H1:

```txt
Sobre a Pró-Saúde Itajubá
```

Texto:

```txt
A Pró-Saúde Itajubá é uma loja física especializada em produtos de saúde, materiais médicos, ortopédicos, hospitalares, produtos de mobilidade, cuidados domiciliares, curativos, EPIs e itens para uso profissional e familiar.

A loja atende clientes de Itajubá-MG e região, oferecendo atendimento próximo para ajudar na consulta de produtos conforme a disponibilidade.
```

Seções:

```txt
Quem somos
O que você encontra na loja
Atendimento para clientes, cuidadores e profissionais
Localização
WhatsApp
```

### 14.2 Localização

Rota:

```txt
/localizacao
```

Title:

```txt
Localização da Pró-Saúde Itajubá | Itajubá-MG
```

Description:

```txt
Veja a localização da Pró-Saúde Itajubá e entre em contato pelo WhatsApp para consultar produtos médicos, ortopédicos e de saúde.
```

H1:

```txt
Localização da Pró-Saúde Itajubá
```

Texto:

```txt
Visite a Pró-Saúde Itajubá para consultar produtos médicos, ortopédicos, hospitalares, de mobilidade, cuidados domiciliares e materiais de saúde em geral.
```

Campos configuráveis:

```txt
Endereço
WhatsApp
Telefone
Horário de funcionamento
Google Maps URL
```

### 14.3 Contato

Rota:

```txt
/contato
```

Title:

```txt
Contato | Pró-Saúde Itajubá
```

Description:

```txt
Fale com a Pró-Saúde Itajubá pelo WhatsApp para consultar produtos, disponibilidade, endereço e atendimento da loja.
```

H1:

```txt
Fale com a Pró-Saúde Itajubá
```

Texto:

```txt
Entre em contato pelo WhatsApp para consultar disponibilidade de produtos, tirar dúvidas e falar com a loja.
```

Ações:

```txt
Botão WhatsApp
Telefone
Endereço
Google Maps
Horário de funcionamento
```

Formulário é opcional e secundário. O foco deve ser WhatsApp.

---

## 15. Configuração central do site

Criar arquivo:

```txt
src/data/site.ts
```

Modelo:

```ts
export const siteConfig = {
  businessName: "Pró-Saúde Itajubá",
  city: "Itajubá",
  state: "MG",
  country: "BR",
  whatsapp: "55XXXXXXXXXXX",
  phone: "PREENCHER_TELEFONE",
  address: "PREENCHER_ENDERECO",
  mapsUrl: "PREENCHER_GOOGLE_MAPS_URL",
  siteUrl: "https://PREENCHER_DOMINIO",
  openingHours: "PREENCHER_HORARIO",
  description:
    "Loja de produtos médicos, ortopédicos, hospitalares, mobilidade, cuidados domiciliares, curativos e materiais de saúde em Itajubá-MG.",
}
```

Criar arquivo:

```txt
src/data/regions.ts
```

Conteúdo:

```ts
export const servedRegions = [
  "Itajubá",
  "Piranguinho",
  "Maria da Fé",
  "Brazópolis",
  "Santa Rita do Sapucaí",
  "Wenceslau Braz",
  "Pedralva",
  "Delfim Moreira",
  "Piranguçu",
  "São José do Alegre",
]
```

---

## 16. Estrutura de dados de categorias

Criar arquivo:

```txt
src/data/categories.ts
```

Modelo:

```ts
export type Category = {
  slug: string
  name: string
  h1: string
  title: string
  description: string
  intro: string
  relatedProductSlugs: string[]
  whatsappMessage: string
}

export const categories: Category[] = [
  {
    slug: "mobilidade-e-acessibilidade",
    name: "Mobilidade e Acessibilidade",
    h1: "Mobilidade e Acessibilidade",
    title: "Mobilidade e Acessibilidade | Pró-Saúde Itajubá",
    description:
      "Produtos de mobilidade e acessibilidade na Pró-Saúde Itajubá: cadeira de rodas, andador, bengala, muleta, cadeira de banho, barra de apoio e acessórios.",
    intro:
      "Na Pró-Saúde Itajubá, você encontra produtos de mobilidade e acessibilidade para auxiliar a rotina, a locomoção e os cuidados em casa.",
    relatedProductSlugs: [
      "cadeira-de-rodas",
      "andador",
      "bengala",
      "muleta",
      "cadeira-de-banho",
      "barra-de-apoio",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos de mobilidade e acessibilidade.",
  },
]
```

Preencher todas as categorias listadas na seção 10.

---

## 17. Estrutura de dados de produtos

Criar arquivo:

```txt
src/data/products.ts
```

Modelo:

```ts
export type ProductPage = {
  slug: string
  name: string
  categorySlug: string
  title: string
  description: string
  h1: string
  intro: string
  relatedProductSlugs: string[]
  whatsappMessage: string
  faqs: {
    question: string
    answer: string
  }[]
}

export const productPages: ProductPage[] = [
  {
    slug: "cadeira-de-rodas",
    name: "Cadeira de Rodas",
    categorySlug: "mobilidade-e-acessibilidade",
    title: "Cadeira de Rodas em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte cadeira de rodas na Pró-Saúde Itajubá. Loja física em Itajubá-MG com produtos de mobilidade, acessibilidade e atendimento pelo WhatsApp.",
    h1: "Cadeira de Rodas",
    intro:
      "A Pró-Saúde Itajubá trabalha com produtos de mobilidade e acessibilidade, incluindo cadeira de rodas e acessórios relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja em Itajubá-MG.",
    relatedProductSlugs: [
      "andador",
      "bengala",
      "muleta",
      "cadeira-de-banho",
      "barra-de-apoio",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de cadeira de rodas.",
    faqs: [
      {
        question: "Onde comprar cadeira de rodas em Itajubá?",
        answer:
          "A Pró-Saúde Itajubá trabalha com produtos de mobilidade e acessibilidade, incluindo cadeira de rodas e itens relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja física em Itajubá-MG.",
      },
      {
        question: "A Pró-Saúde vende ou aluga cadeira de rodas?",
        answer:
          "A Pró-Saúde trabalha com venda de produtos. Para confirmar modelos disponíveis, consulte a loja pelo WhatsApp.",
      },
      {
        question: "A loja atende cidades próximas?",
        answer:
          "Sim. A Pró-Saúde Itajubá atende clientes de Itajubá e região, incluindo Piranguinho, Maria da Fé, Brazópolis, Santa Rita do Sapucaí, Wenceslau Braz, Pedralva, Delfim Moreira, Piranguçu e São José do Alegre.",
      },
    ],
  },
]
```

Criar todos os produtos estratégicos listados na seção 12.

---

## 18. Componentes necessários

Criar componentes reutilizáveis.

```txt
Header
Footer
WhatsAppButton
CategoryCard
ProductCard
Breadcrumbs
FaqSection
RegionServiceSection
LocationBlock
CallToAction
RelatedProducts
PageHeader
SeoJsonLd
```

### 18.1 Header

Deve conter:

```txt
Nome/logo textual da loja
Menu principal
Botão WhatsApp
```

Menu:

```txt
Início
Produtos
Cuidados Domiciliares
Mobilidade
Ortopédicos
Localização
Contato
```

### 18.2 Footer

Deve conter:

```txt
Nome da loja
Resumo curto
Endereço
WhatsApp
Horário
Links principais
Categorias principais
Produtos mais procurados
Cidades atendidas
```

Produtos no rodapé, lista curta:

```txt
Cadeira de Rodas
Andador
Aparelho de Pressão
Colchão Hospitalar
Cinta Lombar
Bota Imobilizadora
Meia de Compressão
```

Não transformar rodapé em lista gigante.

### 18.3 WhatsAppButton

Props:

```ts
type WhatsAppButtonProps = {
  label?: string
  message: string
  variant?: "primary" | "secondary" | "floating"
}
```

Comportamento:

```txt
Abrir WhatsApp em nova aba
Usar mensagem contextual
Ter aria-label
Usar texto claro
```

Helper:

```ts
export function createWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
```

### 18.4 Breadcrumbs

Exemplos:

```txt
Início > Produtos
Início > Produtos > Mobilidade e Acessibilidade
Início > Produtos > Mobilidade e Acessibilidade > Cadeira de Rodas
```

### 18.5 RegionServiceSection

Texto padrão:

```txt
A Pró-Saúde está localizada em Itajubá-MG e atende clientes da cidade e de municípios próximos, como Piranguinho, Maria da Fé, Brazópolis, Santa Rita do Sapucaí, Wenceslau Braz, Pedralva, Delfim Moreira, Piranguçu, São José do Alegre e outras cidades da região.
```

### 18.6 FaqSection

Deve renderizar perguntas e respostas visíveis na página.

Só gerar schema `FAQPage` quando a FAQ estiver visível.

---

## 19. SEO técnico

### 19.1 Metadados obrigatórios por página

Cada página deve ter:

```txt
title
description
canonical
Open Graph title
Open Graph description
robots index,follow
```

### 19.2 Padrões de Title

Home:

```txt
Pró-Saúde Itajubá | Produtos Médicos, Ortopédicos e Hospitalares
```

Categoria:

```txt
{Categoria} | Pró-Saúde Itajubá
```

Produto:

```txt
{Produto} em Itajubá | Pró-Saúde Itajubá
```

Institucional:

```txt
{Página} | Pró-Saúde Itajubá
```

### 19.3 Padrões de Description

Produto:

```txt
Consulte {produto} na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.
```

Categoria:

```txt
Conheça produtos de {categoria} na Pró-Saúde Itajubá. Consulte disponibilidade pelo WhatsApp e veja opções para clientes, cuidadores e profissionais.
```

### 19.4 H1

Usar somente um H1 por página.

H1 deve ser limpo.

Exemplos:

```txt
Cadeira de Rodas
Andador
Aparelho de Pressão
Produtos Ortopédicos
Mobilidade e Acessibilidade
```

Não precisa usar `em Itajubá` em todos os H1.

### 19.5 Headings

Exemplo de produto:

```txt
H1: Cadeira de Rodas
H2: Consulte opções de cadeira de rodas
H2: Produtos relacionados
H2: Atendimento em Itajubá e região
H2: Dúvidas frequentes
H2: Fale pelo WhatsApp
```

### 19.6 URLs

URLs devem ser simples:

```txt
/produtos/cadeira-de-rodas
/produtos/andador
/produtos/aparelho-de-pressao
```

Evitar:

```txt
/produtos/cadeira-de-rodas-em-itajuba
/produtos/compre-cadeira-de-rodas-em-itajuba
```

---

## 20. Dados estruturados

Usar JSON-LD.

Criar componente:

```txt
SeoJsonLd
```

### 20.1 LocalBusiness

Usar em layout global ou páginas principais.

Tipo recomendado:

```txt
LocalBusiness
```

Evitar tipos muito específicos se não houver certeza.

Modelo:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pró-Saúde Itajubá",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PREENCHER_ENDERECO",
    "addressLocality": "Itajubá",
    "addressRegion": "MG",
    "addressCountry": "BR"
  },
  "telephone": "PREENCHER_TELEFONE",
  "url": "https://PREENCHER_DOMINIO",
  "areaServed": [
    "Itajubá",
    "Piranguinho",
    "Maria da Fé",
    "Brazópolis",
    "Santa Rita do Sapucaí",
    "Wenceslau Braz",
    "Pedralva",
    "Delfim Moreira",
    "Piranguçu",
    "São José do Alegre"
  ]
}
```

### 20.2 BreadcrumbList

Gerar conforme rota.

Produto:

```txt
Início
Produtos
Categoria
Produto
```

### 20.3 FAQPage

Usar só nas páginas com FAQ visível.

Não gerar FAQ schema invisível.

### 20.4 Product schema

Não usar Product schema na fase 1, porque não haverá preço, estoque real, imagem validada e dados completos.

Se futuramente usar Product schema, garantir que tudo esteja visível e verdadeiro na página.

---

## 21. Sitemap e robots

### 21.1 sitemap.xml

Gerar sitemap com:

```txt
/
 /produtos
 /produtos/mobilidade-e-acessibilidade
 /produtos/ortopedicos
 /produtos/cuidados-domiciliares
 /produtos/materiais-medicos
 /produtos/aparelhos-de-saude
 /produtos/curativos
 /produtos/respiratorio
 /produtos/higiene-e-antissepsia
 /produtos/epis-e-descartaveis
 /produtos/fisioterapia-e-reabilitacao
 /produtos/odontologicos
 /produtos/cadeira-de-rodas
 /produtos/andador
 /produtos/bengala
 /produtos/muleta
 /produtos/cadeira-de-banho
 /produtos/barra-de-apoio
 /produtos/aparelho-de-pressao
 /produtos/oximetro
 /produtos/estetoscopio
 /produtos/balanca-digital
 /produtos/colchao-hospitalar
 /produtos/colchao-anti-escaras
 /produtos/cama-hospitalar
 /produtos/cinta-lombar
 /produtos/bota-imobilizadora
 /produtos/colar-cervical
 /produtos/meia-de-compressao
 /produtos/joelheira
 /produtos/tornozeleira
 /produtos/munhequeira
 /produtos/tipoia
 /produtos/gaze
 /produtos/atadura
 /produtos/esparadrapo
 /produtos/alcool-70
 /produtos/inalacao-e-oxigenio
 /sobre
 /localizacao
 /contato
```

### 21.2 robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://PREENCHER_DOMINIO/sitemap.xml
```

---

## 22. Regras de conteúdo

### 22.1 Pode usar

```txt
Consulte disponibilidade
Fale com a loja
Produtos para cuidados em casa
Produtos de mobilidade
Produtos ortopédicos
Produtos para clínicas e profissionais
Atendimento em Itajubá e região
Loja física em Itajubá-MG
Produtos médicos em Itajubá
Materiais médicos em Itajubá
Loja de produtos de saúde em Itajubá
```

### 22.2 Evitar

```txt
Cura garantida
Tratamento garantido
Resultado garantido
Produto indicado para curar
Melhor produto do mercado
A melhor loja de Itajubá
Preço mais barato
Estoque garantido
Entrega garantida
Aluguel de cadeira de rodas
Aluguel de cama hospitalar
```

### 22.3 Não inventar

Não inventar:

```txt
Preço
Estoque
Marca
Modelo
Certificação
Prazo de entrega
Avaliação
Depoimento
Indicação médica
Garantia terapêutica
```

---

## 23. Stack recomendada

Se o projeto já existir, respeitar a stack atual.

Se for iniciar do zero, usar:

```txt
Next.js
TypeScript
App Router
Rotas estáticas
Dados em arquivos TypeScript
Sitemap automático
Robots automático
Componentes reutilizáveis
```

Estrutura sugerida:

```txt
app/
  page.tsx
  produtos/
    page.tsx
    [slug]/
      page.tsx
  sobre/
    page.tsx
  localizacao/
    page.tsx
  contato/
    page.tsx
  sitemap.ts
  robots.ts

src/
  components/
    header.tsx
    footer.tsx
    whatsapp-button.tsx
    category-card.tsx
    product-card.tsx
    breadcrumbs.tsx
    faq-section.tsx
    region-service-section.tsx
    location-block.tsx
    call-to-action.tsx
    related-products.tsx
    seo-json-ld.tsx
  data/
    site.ts
    regions.ts
    categories.ts
    products.ts
  lib/
    whatsapp.ts
    seo.ts
    slug.ts
```

---

## 24. App Router — comportamento esperado

### 24.1 `/produtos/[slug]/page.tsx`

A rota dinâmica deve resolver tanto categoria quanto produto.

Regra:

1. procurar slug em `categories`;
2. se encontrou, renderizar página de categoria;
3. se não encontrou, procurar slug em `productPages`;
4. se encontrou, renderizar página de produto;
5. se não encontrou, retornar `notFound()`.

Ou separar em rotas diferentes, se preferir:

```txt
/produtos/categorias/[slug]
/produtos/[slug]
```

Mas a estrutura simples `/produtos/[slug]` é melhor para URLs limpas.

### 24.2 generateStaticParams

Gerar params para todas as categorias e produtos.

### 24.3 generateMetadata

Gerar title, description e canonical com base no dado da categoria/produto.

---

## 25. Links internos

Links internos são importantes.

### 25.1 Home deve linkar para

```txt
/produtos
/produtos/mobilidade-e-acessibilidade
/produtos/ortopedicos
/produtos/cuidados-domiciliares
/produtos/aparelhos-de-saude
/produtos/materiais-medicos
/produtos/curativos
/produtos/cadeira-de-rodas
/produtos/andador
/produtos/aparelho-de-pressao
/produtos/colchao-hospitalar
/contato
/localizacao
```

### 25.2 Categoria deve linkar para produtos relacionados

Exemplo:

Mobilidade:

```txt
Cadeira de Rodas
Andador
Bengala
Muleta
Cadeira de Banho
Barra de Apoio
```

### 25.3 Produto deve linkar para

```txt
Categoria pai
Produtos relacionados
Contato
WhatsApp
Localização
```

---

## 26. Acessibilidade e HTML semântico

Implementar:

```txt
Um H1 por página
Hierarquia correta de H2 e H3
Links com texto descritivo
Botões com texto claro
aria-label quando necessário
Breadcrumbs navegáveis
Conteúdo principal dentro de main
Header dentro de header
Footer dentro de footer
Listas reais para listas
```

Não usar botão quando deve ser link.

WhatsApp deve ser link `<a>` com `target="_blank"` e `rel="noopener noreferrer"`.

---

## 27. Performance e indexação

O site deve:

```txt
Ter HTML renderizável para conteúdo principal
Não depender de client-side rendering para textos importantes
Gerar páginas estáticas quando possível
Ter sitemap
Ter robots.txt
Ter canonical
Evitar JS desnecessário
Carregar rápido
```

Conteúdo SEO importante deve estar no HTML inicial.

---

## 28. Checklist de implementação

### 28.1 Dados

```txt
[ ] Criar siteConfig
[ ] Criar servedRegions
[ ] Criar categories
[ ] Criar productPages
```

### 28.2 Componentes

```txt
[ ] Header
[ ] Footer
[ ] WhatsAppButton
[ ] CategoryCard
[ ] ProductCard
[ ] Breadcrumbs
[ ] FaqSection
[ ] RegionServiceSection
[ ] LocationBlock
[ ] CallToAction
[ ] RelatedProducts
[ ] SeoJsonLd
```

### 28.3 Páginas

```txt
[ ] Home
[ ] Produtos
[ ] Categoria dinâmica
[ ] Produto dinâmico
[ ] Sobre
[ ] Localização
[ ] Contato
```

### 28.4 SEO

```txt
[ ] Metadata por página
[ ] Canonical por página
[ ] Sitemap
[ ] Robots
[ ] LocalBusiness JSON-LD
[ ] BreadcrumbList JSON-LD
[ ] FAQPage JSON-LD quando houver FAQ
[ ] Links internos
```

### 28.5 WhatsApp

```txt
[ ] Helper createWhatsAppUrl
[ ] Mensagem contextual na home
[ ] Mensagem contextual por categoria
[ ] Mensagem contextual por produto
[ ] Mensagem contextual no contato
```

### 28.6 Conteúdo

```txt
[ ] Não afirmar estoque
[ ] Não afirmar preço
[ ] Não afirmar aluguel
[ ] Não prometer resultado médico
[ ] Não usar excesso de “Itajubá” em elementos visíveis
[ ] Usar contexto local naturalmente
```

---

## 29. Critérios de aceite

O site estará correto quando:

```txt
A home estiver clara e guiando o usuário
O site não parecer e-commerce
Não existir carrinho nem checkout
O WhatsApp estiver visível e contextual
As categorias principais estiverem organizadas
As páginas de produto estratégico existirem
Cada página tiver title e description próprios
As URLs forem simples
O H1 for limpo
O SEO local aparecer naturalmente
Existir seção de atendimento em Itajubá e região
Existir sitemap.xml
Existir robots.txt
Existir schema LocalBusiness
Existir schema BreadcrumbList
Existir FAQ nas páginas de produto principais
Não houver promessas médicas
Não houver preços inventados
Não houver estoque inventado
Não houver aluguel inventado
Não houver páginas duplicadas por cidade
```

---

## 30. Ordem de execução recomendada

Implementar nesta ordem:

```txt
1. Criar estrutura de dados
2. Criar helper de WhatsApp
3. Criar componentes base
4. Criar layout com header e footer
5. Criar home
6. Criar página /produtos
7. Criar rota dinâmica /produtos/[slug]
8. Renderizar categorias
9. Renderizar produtos
10. Criar páginas institucionais
11. Implementar metadados
12. Implementar JSON-LD
13. Implementar sitemap
14. Implementar robots
15. Revisar links internos
16. Testar build
17. Testar navegação
18. Testar mensagens de WhatsApp
```

---

## 31. Prompt operacional para o Codex

Use este prompt como orientação de execução:

```txt
Leia o arquivo CONTEXT.md inteiro antes de modificar o projeto.

Implemente um site institucional para a Pró-Saúde Itajubá seguindo exatamente as regras deste contexto.

Não crie e-commerce, carrinho, checkout, login ou área administrativa.

Priorize estrutura, conteúdo, SEO local, páginas estáticas, WhatsApp contextual, rotas limpas, dados centralizados e componentes reutilizáveis.

Não invente preços, estoque, marcas, avaliações, aluguel ou promessas médicas.

Crie a primeira versão com:
- home
- página /produtos
- páginas de categorias
- páginas estratégicas de produtos
- páginas /sobre, /localizacao e /contato
- sitemap
- robots
- metadata
- JSON-LD
- WhatsApp contextual

Mantenha o site simples, limpo, sem excesso de páginas visíveis no menu e com SEO local aplicado de forma natural.
```

---

## 32. Referências oficiais para SEO

Usar estas referências como base técnica:

```txt
Google SEO Starter Guide
https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Google Search Essentials
https://developers.google.com/search/docs/essentials

Google structured data introduction
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Google LocalBusiness structured data
https://developers.google.com/search/docs/appearance/structured-data/local-business

Google meta descriptions/snippets
https://developers.google.com/search/docs/appearance/snippet

Google Product structured data
https://developers.google.com/search/docs/appearance/structured-data/product
```

Notas importantes extraídas dessas referências:

1. Criar páginas úteis para pessoas, não páginas repetidas só para buscadores.
2. Usar títulos e descrições específicos por página.
3. Dados estruturados devem representar conteúdo visível e verdadeiro na página.
4. LocalBusiness ajuda o Google a entender dados da empresa local.
5. Meta descriptions devem ser específicas e úteis, não copiadas iguais em todas as páginas.
6. Product structured data não deve ser usado sem dados confiáveis e visíveis como produto, preço, disponibilidade e informações reais.
7. Sitemap e links internos ajudam descoberta e rastreamento.
8. Não há garantia de primeira posição no Google; a estrutura aumenta a qualidade técnica e a chance de indexação/rankeamento, mas resultado depende de concorrência, autoridade, conteúdo, Google Business Profile e tempo.

---

## 33. Observações finais

Este projeto deve priorizar:

```txt
Clareza
SEO local
Conversão pelo WhatsApp
Organização de categorias
Rotas simples
Conteúdo verdadeiro
Facilidade de manutenção
Base escalável
```

O site deve ser preparado para crescer depois, mas a primeira versão deve ser objetiva.

Não transformar o catálogo inteiro em interface pública agora.

Usar as 25 páginas estratégicas de produto como base inicial de SEO.

Depois da publicação, a evolução deve ser guiada por dados do Google Search Console.

export type RelatedItem = {
  name: string
  slug?: string
}

export type CardImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Category = {
  slug: string
  name: string
  h1: string
  title: string
  description: string
  intro: string
  shortDescription: string
  relatedItems: RelatedItem[]
  whatsappMessage: string
  image: CardImage
  featuredOnHome?: boolean
}

type CategorySeed = Omit<Category, "image">

const categorySeeds: CategorySeed[] = [
  {
    slug: "mobilidade-e-acessibilidade",
    name: "Mobilidade e Acessibilidade",
    h1: "Mobilidade e Acessibilidade",
    title: "Mobilidade e Acessibilidade | Pró-Saúde Itajubá",
    description:
      "Produtos de mobilidade e acessibilidade na Pró-Saúde Itajubá: cadeira de rodas, andador, bengala, muleta, cadeira de banho, barra de apoio e acessórios.",
    intro:
      "Na Pró-Saúde Itajubá, você encontra produtos de mobilidade e acessibilidade para auxiliar a rotina, a locomoção e os cuidados em casa. Consulte opções como cadeira de rodas, andadores, bengalas, muletas, cadeiras de banho, barras de apoio e acessórios relacionados.",
    shortDescription:
      "Cadeiras de rodas, andadores, bengalas, muletas, cadeiras de banho, barras de apoio e acessórios relacionados.",
    relatedItems: [
      { name: "Cadeira de Rodas", slug: "cadeira-de-rodas" },
      { name: "Andador", slug: "andador" },
      { name: "Bengala", slug: "bengala" },
      { name: "Muleta", slug: "muleta" },
      { name: "Cadeira de Banho", slug: "cadeira-de-banho" },
      { name: "Barra de Apoio", slug: "barra-de-apoio" },
      { name: "Assento Elevado" },
      { name: "Acessórios para Cadeira de Rodas" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos de mobilidade e acessibilidade.",
    featuredOnHome: true,
  },
  {
    slug: "ortopedicos",
    name: "Ortopédicos",
    h1: "Produtos Ortopédicos",
    title: "Produtos Ortopédicos | Pró-Saúde Itajubá",
    description:
      "Produtos ortopédicos na Pró-Saúde Itajubá: cintas, joelheiras, tornozeleiras, munhequeiras, colares cervicais, botas imobilizadoras, tipoias e palmilhas.",
    intro:
      "A Pró-Saúde Itajubá trabalha com produtos ortopédicos para diferentes necessidades do dia a dia, incluindo cintas, joelheiras, tornozeleiras, munhequeiras, colares cervicais, botas imobilizadoras, tipoias, palmilhas, calcanheiras e outros itens de apoio.",
    shortDescription:
      "Cintas, joelheiras, tornozeleiras, munhequeiras, colares cervicais, botas imobilizadoras, tipoias, palmilhas e itens de apoio.",
    relatedItems: [
      { name: "Cinta Lombar", slug: "cinta-lombar" },
      { name: "Bota Imobilizadora", slug: "bota-imobilizadora" },
      { name: "Colar Cervical", slug: "colar-cervical" },
      { name: "Meia de Compressão", slug: "meia-de-compressao" },
      { name: "Joelheira", slug: "joelheira" },
      { name: "Tornozeleira", slug: "tornozeleira" },
      { name: "Munhequeira", slug: "munhequeira" },
      { name: "Tipoia", slug: "tipoia" },
      { name: "Palmilha" },
      { name: "Calcanheira" },
      { name: "Corretor Postural" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos ortopédicos.",
    featuredOnHome: true,
  },
  {
    slug: "cuidados-domiciliares",
    name: "Cuidados Domiciliares",
    h1: "Cuidados Domiciliares",
    title: "Cuidados Domiciliares | Pró-Saúde Itajubá",
    description:
      "Produtos para cuidados domiciliares na Pró-Saúde Itajubá: colchão hospitalar, colchão anti-escaras, cama hospitalar, almofadas, apoios e itens para cuidado em casa.",
    intro:
      "Encontre produtos para cuidados em casa, apoio ao paciente, conforto e rotina de cuidadores. A Pró-Saúde Itajubá oferece itens como colchão hospitalar, colchão anti-escaras, cama hospitalar, almofadas, apoios e produtos auxiliares para cuidados domiciliares.",
    shortDescription:
      "Colchões hospitalares, colchões anti-escaras, cama hospitalar, almofadas, apoios e produtos para cuidados em casa.",
    relatedItems: [
      { name: "Colchão Hospitalar", slug: "colchao-hospitalar" },
      { name: "Colchão Anti-escaras", slug: "colchao-anti-escaras" },
      { name: "Cama Hospitalar", slug: "cama-hospitalar" },
      { name: "Almofada Ortopédica" },
      { name: "Almofada para Cóccix" },
      { name: "Assento Elevado" },
      { name: "Apoio Cervical" },
      { name: "Produtos para Acamados" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos para cuidados domiciliares.",
    featuredOnHome: true,
  },
  {
    slug: "aparelhos-de-saude",
    name: "Aparelhos de Saúde",
    h1: "Aparelhos de Saúde",
    title: "Aparelhos de Saúde | Pró-Saúde Itajubá",
    description:
      "Aparelhos de saúde na Pró-Saúde Itajubá: aparelho de pressão, oxímetro, termômetro, estetoscópio, balança digital e acessórios.",
    intro:
      "A Pró-Saúde Itajubá oferece aparelhos e acessórios para acompanhamento de saúde no dia a dia, como aparelho de pressão, oxímetro, termômetro, estetoscópio, balança digital e itens relacionados.",
    shortDescription:
      "Aparelhos de pressão, oxímetros, termômetros, estetoscópios, balanças e acessórios para acompanhamento de saúde.",
    relatedItems: [
      { name: "Aparelho de Pressão", slug: "aparelho-de-pressao" },
      { name: "Oxímetro", slug: "oximetro" },
      { name: "Termômetro" },
      { name: "Estetoscópio", slug: "estetoscopio" },
      { name: "Balança Digital", slug: "balanca-digital" },
      { name: "Braçadeira para Aparelho de Pressão" },
      { name: "Acessórios para Estetoscópio" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar aparelhos de saúde.",
    featuredOnHome: true,
  },
  {
    slug: "materiais-medicos",
    name: "Materiais Médicos",
    h1: "Materiais Médicos e Hospitalares",
    title: "Materiais Médicos e Hospitalares | Pró-Saúde Itajubá",
    description:
      "Materiais médicos e hospitalares na Pró-Saúde Itajubá: seringas, agulhas, sondas, cateteres, bolsas coletoras, instrumentais, campos e acessórios.",
    intro:
      "A Pró-Saúde Itajubá trabalha com materiais médicos e hospitalares para uso profissional, clínico e cuidados em geral. Consulte opções como seringas, agulhas, sondas, cateteres, bolsas coletoras, campos, instrumentais e acessórios.",
    shortDescription:
      "Seringas, agulhas, sondas, cateteres, bolsas coletoras, instrumentais, campos e materiais hospitalares.",
    relatedItems: [
      { name: "Seringas" },
      { name: "Agulhas" },
      { name: "Sondas" },
      { name: "Cateteres" },
      { name: "Bolsas Coletoras" },
      { name: "Lâminas de Bisturi" },
      { name: "Campos Estéreis" },
      { name: "Instrumentais" },
      { name: "Suporte para Soro" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar materiais médicos e hospitalares.",
    featuredOnHome: true,
  },
  {
    slug: "curativos",
    name: "Curativos",
    h1: "Curativos e Primeiros Cuidados",
    title: "Curativos e Primeiros Cuidados | Pró-Saúde Itajubá",
    description:
      "Curativos e primeiros cuidados na Pró-Saúde Itajubá: gaze, atadura, esparadrapo, algodão, fitas, compressas e curativos especiais.",
    intro:
      "Encontre produtos para curativos e primeiros cuidados, como gazes, ataduras, esparadrapos, algodão, compressas, fitas e outros materiais auxiliares. Consulte a disponibilidade na Pró-Saúde Itajubá.",
    shortDescription:
      "Gazes, ataduras, esparadrapos, algodão, compressas, fitas e curativos especiais.",
    relatedItems: [
      { name: "Gaze", slug: "gaze" },
      { name: "Atadura", slug: "atadura" },
      { name: "Esparadrapo", slug: "esparadrapo" },
      { name: "Algodão" },
      { name: "Compressa" },
      { name: "Fita Microporosa" },
      { name: "Curativos Especiais" },
      { name: "Bota de Unna" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos para curativos.",
    featuredOnHome: true,
  },
  {
    slug: "respiratorio",
    name: "Respiratório",
    h1: "Respiratório, Inalação e Oxigenoterapia",
    title: "Produtos Respiratórios e Oxigenoterapia | Pró-Saúde Itajubá",
    description:
      "Produtos respiratórios na Pró-Saúde Itajubá: itens para inalação, oxigênio, cateter tipo óculos, conectores, aspirador de secreção e acessórios.",
    intro:
      "A Pró-Saúde Itajubá oferece produtos e acessórios para cuidados respiratórios, inalação e oxigenoterapia, incluindo cateter tipo óculos, conectores, copos para inalador, aspirador de secreção e itens relacionados.",
    shortDescription:
      "Produtos para inalação, oxigenoterapia, cateter tipo óculos, conectores, aspiradores e acessórios.",
    relatedItems: [
      { name: "Inalador" },
      { name: "Cateter Tipo Óculos" },
      { name: "Cateter Nasal" },
      { name: "Conector para Oxigênio" },
      { name: "Aspirador de Secreção" },
      { name: "Copo para Inalador" },
      { name: "Máscara para Inalação" },
      { name: "Inalação e Oxigênio", slug: "inalacao-e-oxigenio" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos respiratórios.",
    featuredOnHome: true,
  },
  {
    slug: "higiene-e-antissepsia",
    name: "Higiene e Antissepsia",
    h1: "Higiene e Antissepsia",
    title: "Higiene e Antissepsia | Pró-Saúde Itajubá",
    description:
      "Produtos de higiene e antissepsia na Pró-Saúde Itajubá: álcool 70, álcool gel, clorexidina, água oxigenada, água destilada e almotolias.",
    intro:
      "A Pró-Saúde Itajubá trabalha com produtos de higiene, antissepsia e apoio à rotina de cuidados, como álcool 70, álcool gel, clorexidina, água oxigenada, água destilada, almotolias e itens relacionados.",
    shortDescription:
      "Álcool 70, álcool gel, clorexidina, água oxigenada, água destilada, almotolias e itens para rotina de higiene.",
    relatedItems: [
      { name: "Álcool 70", slug: "alcool-70" },
      { name: "Álcool Gel" },
      { name: "Clorexidina" },
      { name: "Água Oxigenada" },
      { name: "Água Destilada" },
      { name: "Almotolia" },
      { name: "Swab de Álcool" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos de higiene e antissepsia.",
    featuredOnHome: true,
  },
  {
    slug: "epis-e-descartaveis",
    name: "EPIs e Descartáveis",
    h1: "EPIs e Descartáveis",
    title: "EPIs e Descartáveis Hospitalares | Pró-Saúde Itajubá",
    description:
      "EPIs e descartáveis na Pró-Saúde Itajubá: aventais, luvas, máscaras, toucas, descartáveis hospitalares e itens para uso profissional.",
    intro:
      "Encontre EPIs e descartáveis para uso profissional, clínico, hospitalar e cuidados em geral. Consulte opções como aventais, luvas, máscaras, toucas e outros itens descartáveis na Pró-Saúde Itajubá.",
    shortDescription:
      "Aventais, luvas, máscaras, toucas, jalecos, descartáveis hospitalares e itens para uso profissional.",
    relatedItems: [
      { name: "Avental Descartável" },
      { name: "Luvas" },
      { name: "Máscaras" },
      { name: "Toucas" },
      { name: "Jalecos" },
      { name: "Descartáveis Hospitalares" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar EPIs e descartáveis.",
    featuredOnHome: true,
  },
  {
    slug: "fisioterapia-e-reabilitacao",
    name: "Fisioterapia e Reabilitação",
    h1: "Fisioterapia e Reabilitação",
    title: "Fisioterapia e Reabilitação | Pró-Saúde Itajubá",
    description:
      "Produtos para fisioterapia e reabilitação na Pró-Saúde Itajubá: bandagens, faixas elásticas, bolas, colchonetes e acessórios.",
    intro:
      "A Pró-Saúde Itajubá oferece produtos para fisioterapia, exercícios e reabilitação, como bandagens, faixas elásticas, bolas, colchonetes e acessórios relacionados.",
    shortDescription:
      "Bandagens, faixas elásticas, bolas, colchonetes, hand grip e acessórios para exercícios e reabilitação.",
    relatedItems: [
      { name: "Bandagem Elástica" },
      { name: "Faixa Elástica" },
      { name: "Bola para Exercício" },
      { name: "Colchonete" },
      { name: "Hand Grip" },
      { name: "Acessórios para Fisioterapia" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos para fisioterapia e reabilitação.",
    featuredOnHome: true,
  },
  {
    slug: "odontologicos",
    name: "Odontológicos",
    h1: "Produtos Odontológicos",
    title: "Produtos Odontológicos | Pró-Saúde Itajubá",
    description:
      "Produtos odontológicos na Pró-Saúde Itajubá. Consulte materiais disponíveis para uso profissional e rotina odontológica pelo WhatsApp.",
    intro:
      "A Pró-Saúde Itajubá possui itens relacionados à rotina odontológica e materiais de apoio profissional. Consulte a disponibilidade pelo WhatsApp antes de se deslocar até a loja.",
    shortDescription:
      "Materiais de apoio para rotina odontológica e uso profissional, com consulta de disponibilidade pelo WhatsApp.",
    relatedItems: [
      { name: "Materiais Odontológicos" },
      { name: "Descartáveis para uso profissional" },
      { name: "Itens de apoio clínico" },
    ],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos odontológicos.",
  },
]

export const categories: Category[] = categorySeeds.map((seed) => ({
  ...seed,
  image: {
    src: `/images/categories/${seed.slug}.webp`,
    alt: `Categoria ${seed.name} na Pró-Saúde Itajubá`,
    width: 1200,
    height: 1200,
  },
}))

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

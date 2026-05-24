import { servedRegions } from "./regions"

export type ProductFaq = {
  question: string
  answer: string
}

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
  faqs: ProductFaq[]
}

const regionAnswer = `Sim. A Pró-Saúde Itajubá atende clientes de Itajubá e região, incluindo ${servedRegions
  .slice(1)
  .join(", ")} e outras cidades da região.`

function productFaqs(productName: string, searchName = productName): ProductFaq[] {
  const lower = searchName.toLocaleLowerCase("pt-BR")

  return [
    {
      question: `Onde comprar ${lower} em Itajubá?`,
      answer: `A Pró-Saúde Itajubá trabalha com ${lower} e itens relacionados. Consulte a disponibilidade pelo WhatsApp ou visite a loja física em Itajubá-MG.`,
    },
    {
      question: `A Pró-Saúde vende ou aluga ${lower}?`,
      answer:
        "A Pró-Saúde trabalha com venda de produtos. Para confirmar modelos disponíveis, consulte a loja pelo WhatsApp.",
    },
    {
      question: "A loja atende cidades próximas?",
      answer: regionAnswer,
    },
  ]
}

const mobilidade = [
  "cadeira-de-rodas",
  "andador",
  "bengala",
  "muleta",
  "cadeira-de-banho",
  "barra-de-apoio",
]

const aparelhos = [
  "aparelho-de-pressao",
  "oximetro",
  "estetoscopio",
  "balanca-digital",
]

const domiciliares = [
  "colchao-hospitalar",
  "colchao-anti-escaras",
  "cama-hospitalar",
]

const ortopedicos = [
  "cinta-lombar",
  "bota-imobilizadora",
  "colar-cervical",
  "meia-de-compressao",
  "joelheira",
  "tornozeleira",
  "munhequeira",
  "tipoia",
]

const curativos = ["gaze", "atadura", "esparadrapo"]

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
    relatedProductSlugs: mobilidade.filter((slug) => slug !== "cadeira-de-rodas"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de cadeira de rodas.",
    faqs: productFaqs("Cadeira de Rodas"),
  },
  {
    slug: "andador",
    name: "Andador",
    categorySlug: "mobilidade-e-acessibilidade",
    title: "Andador em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte andador na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Andador",
    intro:
      "Na Pró-Saúde Itajubá, você pode consultar opções de andador e produtos de mobilidade relacionados. Fale pelo WhatsApp para confirmar disponibilidade e modelos.",
    relatedProductSlugs: mobilidade.filter((slug) => slug !== "andador"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de andador.",
    faqs: productFaqs("Andador"),
  },
  {
    slug: "bengala",
    name: "Bengala",
    categorySlug: "mobilidade-e-acessibilidade",
    title: "Bengala em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte bengala na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Bengala",
    intro:
      "A Pró-Saúde Itajubá oferece produtos de apoio à mobilidade, incluindo bengalas e acessórios relacionados. Consulte a disponibilidade pelo WhatsApp.",
    relatedProductSlugs: mobilidade.filter((slug) => slug !== "bengala"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de bengala.",
    faqs: productFaqs("Bengala"),
  },
  {
    slug: "muleta",
    name: "Muleta",
    categorySlug: "mobilidade-e-acessibilidade",
    title: "Muleta em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte muleta na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Muleta",
    intro:
      "Consulte opções de muletas e itens de apoio à mobilidade na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp para verificar disponibilidade.",
    relatedProductSlugs: mobilidade.filter((slug) => slug !== "muleta"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de muleta.",
    faqs: productFaqs("Muleta"),
  },
  {
    slug: "cadeira-de-banho",
    name: "Cadeira de Banho",
    categorySlug: "mobilidade-e-acessibilidade",
    title: "Cadeira de Banho em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte cadeira de banho na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Cadeira de Banho",
    intro:
      "A Pró-Saúde Itajubá trabalha com produtos para acessibilidade e cuidados em casa, incluindo cadeira de banho e acessórios relacionados. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: mobilidade.filter((slug) => slug !== "cadeira-de-banho"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de cadeira de banho.",
    faqs: productFaqs("Cadeira de Banho"),
  },
  {
    slug: "barra-de-apoio",
    name: "Barra de Apoio",
    categorySlug: "mobilidade-e-acessibilidade",
    title: "Barra de Apoio em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte barra de apoio na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Barra de Apoio",
    intro:
      "Consulte barras de apoio e produtos de acessibilidade na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar opções disponíveis.",
    relatedProductSlugs: mobilidade.filter((slug) => slug !== "barra-de-apoio"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de barra de apoio.",
    faqs: productFaqs("Barra de Apoio"),
  },
  {
    slug: "aparelho-de-pressao",
    name: "Aparelho de Pressão",
    categorySlug: "aparelhos-de-saude",
    title: "Aparelho de Pressão em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte aparelho de pressão na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Aparelho de Pressão",
    intro:
      "A Pró-Saúde Itajubá oferece aparelhos de pressão e acessórios relacionados para acompanhamento de saúde. Consulte modelos disponíveis pelo WhatsApp.",
    relatedProductSlugs: aparelhos.filter((slug) => slug !== "aparelho-de-pressao"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de aparelho de pressão.",
    faqs: productFaqs("Aparelho de Pressão"),
  },
  {
    slug: "oximetro",
    name: "Oxímetro",
    categorySlug: "aparelhos-de-saude",
    title: "Oxímetro em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte oxímetro na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Oxímetro",
    intro:
      "Consulte opções de oxímetro e aparelhos de saúde na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp para confirmar disponibilidade.",
    relatedProductSlugs: aparelhos.filter((slug) => slug !== "oximetro"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de oxímetro.",
    faqs: productFaqs("Oxímetro"),
  },
  {
    slug: "estetoscopio",
    name: "Estetoscópio",
    categorySlug: "aparelhos-de-saude",
    title: "Estetoscópio em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte estetoscópio na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Estetoscópio",
    intro:
      "A Pró-Saúde Itajubá trabalha com estetoscópios e acessórios relacionados para uso profissional e acadêmico. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: aparelhos.filter((slug) => slug !== "estetoscopio"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de estetoscópio.",
    faqs: productFaqs("Estetoscópio"),
  },
  {
    slug: "balanca-digital",
    name: "Balança Digital",
    categorySlug: "aparelhos-de-saude",
    title: "Balança Digital em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte balança digital na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Balança Digital",
    intro:
      "Consulte balanças digitais e aparelhos de saúde na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar opções disponíveis.",
    relatedProductSlugs: aparelhos.filter((slug) => slug !== "balanca-digital"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de balança digital.",
    faqs: productFaqs("Balança Digital"),
  },
  {
    slug: "colchao-hospitalar",
    name: "Colchão Hospitalar",
    categorySlug: "cuidados-domiciliares",
    title: "Colchão Hospitalar em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte colchão hospitalar na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Colchão Hospitalar",
    intro:
      "A Pró-Saúde Itajubá oferece produtos para cuidados domiciliares, incluindo colchão hospitalar e itens relacionados. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: domiciliares.filter((slug) => slug !== "colchao-hospitalar"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de colchão hospitalar.",
    faqs: productFaqs("Colchão Hospitalar"),
  },
  {
    slug: "colchao-anti-escaras",
    name: "Colchão Anti-escaras",
    categorySlug: "cuidados-domiciliares",
    title: "Colchão Anti-escaras em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte colchão anti-escaras na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Colchão Anti-escaras",
    intro:
      "Consulte opções de colchão anti-escaras e produtos para cuidados domiciliares na Pró-Saúde Itajubá. Fale pelo WhatsApp para confirmar disponibilidade.",
    relatedProductSlugs: domiciliares.filter((slug) => slug !== "colchao-anti-escaras"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de colchão anti-escaras.",
    faqs: productFaqs("Colchão Anti-escaras"),
  },
  {
    slug: "cama-hospitalar",
    name: "Cama Hospitalar",
    categorySlug: "cuidados-domiciliares",
    title: "Cama Hospitalar em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte cama hospitalar na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Cama Hospitalar",
    intro:
      "A Pró-Saúde Itajubá trabalha com produtos para cuidados domiciliares, incluindo cama hospitalar e acessórios relacionados. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: domiciliares.filter((slug) => slug !== "cama-hospitalar"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de cama hospitalar.",
    faqs: productFaqs("Cama Hospitalar"),
  },
  {
    slug: "cinta-lombar",
    name: "Cinta Lombar",
    categorySlug: "ortopedicos",
    title: "Cinta Lombar em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte cinta lombar na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Cinta Lombar",
    intro:
      "Consulte cintas lombares e produtos ortopédicos na Pró-Saúde Itajubá. Fale pelo WhatsApp para confirmar tamanhos, modelos e disponibilidade.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "cinta-lombar"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de cinta lombar.",
    faqs: productFaqs("Cinta Lombar"),
  },
  {
    slug: "bota-imobilizadora",
    name: "Bota Imobilizadora",
    categorySlug: "ortopedicos",
    title: "Bota Imobilizadora em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte bota imobilizadora na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Bota Imobilizadora",
    intro:
      "A Pró-Saúde Itajubá trabalha com produtos ortopédicos, incluindo bota imobilizadora e itens relacionados. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "bota-imobilizadora"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de bota imobilizadora.",
    faqs: productFaqs("Bota Imobilizadora"),
  },
  {
    slug: "colar-cervical",
    name: "Colar Cervical",
    categorySlug: "ortopedicos",
    title: "Colar Cervical em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte colar cervical na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Colar Cervical",
    intro:
      "Consulte colares cervicais e produtos ortopédicos na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp para verificar opções disponíveis.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "colar-cervical"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de colar cervical.",
    faqs: productFaqs("Colar Cervical"),
  },
  {
    slug: "meia-de-compressao",
    name: "Meia de Compressão",
    categorySlug: "ortopedicos",
    title: "Meia de Compressão em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte meia de compressão na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Meia de Compressão",
    intro:
      "A Pró-Saúde Itajubá trabalha com meias de compressão e produtos relacionados. Consulte disponibilidade, medidas e modelos pelo WhatsApp.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "meia-de-compressao"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de meia de compressão.",
    faqs: productFaqs("Meia de Compressão"),
  },
  {
    slug: "joelheira",
    name: "Joelheira",
    categorySlug: "ortopedicos",
    title: "Joelheira em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte joelheira na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Joelheira",
    intro:
      "Consulte joelheiras e produtos ortopédicos na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar tamanhos e disponibilidade.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "joelheira"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de joelheira.",
    faqs: productFaqs("Joelheira"),
  },
  {
    slug: "tornozeleira",
    name: "Tornozeleira",
    categorySlug: "ortopedicos",
    title: "Tornozeleira em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte tornozeleira na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Tornozeleira",
    intro:
      "A Pró-Saúde Itajubá oferece produtos ortopédicos como tornozeleiras e itens relacionados. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "tornozeleira"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de tornozeleira.",
    faqs: productFaqs("Tornozeleira"),
  },
  {
    slug: "munhequeira",
    name: "Munhequeira",
    categorySlug: "ortopedicos",
    title: "Munhequeira em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte munhequeira na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Munhequeira",
    intro:
      "Consulte munhequeiras e produtos ortopédicos na Pró-Saúde Itajubá. Fale com a loja para verificar opções disponíveis.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "munhequeira"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de munhequeira.",
    faqs: productFaqs("Munhequeira"),
  },
  {
    slug: "tipoia",
    name: "Tipoia",
    categorySlug: "ortopedicos",
    title: "Tipoia em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte tipoia na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Tipoia",
    intro:
      "A Pró-Saúde Itajubá trabalha com tipoias e produtos ortopédicos relacionados. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: ortopedicos.filter((slug) => slug !== "tipoia"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de tipoia.",
    faqs: productFaqs("Tipoia"),
  },
  {
    slug: "gaze",
    name: "Gaze",
    categorySlug: "curativos",
    title: "Gaze em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte gaze na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Gaze",
    intro:
      "Consulte gazes e materiais para curativos na Pró-Saúde Itajubá. Fale pelo WhatsApp para confirmar disponibilidade.",
    relatedProductSlugs: curativos.filter((slug) => slug !== "gaze"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de gaze.",
    faqs: productFaqs("Gaze"),
  },
  {
    slug: "atadura",
    name: "Atadura",
    categorySlug: "curativos",
    title: "Atadura em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte atadura na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Atadura",
    intro:
      "A Pró-Saúde Itajubá oferece ataduras e produtos para curativos e primeiros cuidados. Consulte opções disponíveis pelo WhatsApp.",
    relatedProductSlugs: curativos.filter((slug) => slug !== "atadura"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de atadura.",
    faqs: productFaqs("Atadura"),
  },
  {
    slug: "esparadrapo",
    name: "Esparadrapo",
    categorySlug: "curativos",
    title: "Esparadrapo em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte esparadrapo na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Esparadrapo",
    intro:
      "Consulte esparadrapos, fitas e materiais para curativos na Pró-Saúde Itajubá. Fale com a loja pelo WhatsApp.",
    relatedProductSlugs: curativos.filter((slug) => slug !== "esparadrapo"),
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de esparadrapo.",
    faqs: productFaqs("Esparadrapo"),
  },
  {
    slug: "alcool-70",
    name: "Álcool 70",
    categorySlug: "higiene-e-antissepsia",
    title: "Álcool 70 em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte álcool 70 na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp para clientes, cuidadores, clínicas e profissionais.",
    h1: "Álcool 70",
    intro:
      "A Pró-Saúde Itajubá trabalha com álcool 70 e produtos de higiene e antissepsia. Consulte disponibilidade pelo WhatsApp.",
    relatedProductSlugs: ["gaze", "atadura", "esparadrapo"],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de álcool 70.",
    faqs: productFaqs("Álcool 70"),
  },
  {
    slug: "inalacao-e-oxigenio",
    name: "Inalação e Oxigênio",
    categorySlug: "respiratorio",
    title: "Produtos para Inalação e Oxigênio em Itajubá | Pró-Saúde Itajubá",
    description:
      "Consulte produtos para inalação e oxigênio na Pró-Saúde Itajubá. Loja física em Itajubá-MG com atendimento pelo WhatsApp.",
    h1: "Inalação e Oxigênio",
    intro:
      "Consulte produtos para inalação, oxigenoterapia e acessórios respiratórios na Pró-Saúde Itajubá. Fale pelo WhatsApp para verificar disponibilidade.",
    relatedProductSlugs: ["oximetro", "aparelho-de-pressao", "estetoscopio"],
    whatsappMessage:
      "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de produtos para inalação e oxigênio.",
    faqs: productFaqs("Inalação e Oxigênio", "produtos para inalação e oxigênio"),
  },
]

export function getProductBySlug(slug: string) {
  return productPages.find((product) => product.slug === slug)
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is ProductPage => Boolean(product))
}

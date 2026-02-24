export interface Reference {
  id: number;
  type: "livro" | "artigo" | "atlas" | "site";
  title: string;
  authors: string;
  year: string;
  details: string;
  description: string;
}

export const references: Reference[] = [
  // LIVROS-TEXTO
  { id: 1, type: "livro", title: "Histologia Básica — Texto e Atlas", authors: "Junqueira LC, Carneiro J", year: "2023 (14ª ed.)", details: "Guanabara Koogan", description: "Principal livro-texto de histologia em língua portuguesa. Cobertura completa dos 4 tecidos fundamentais e histologia sistêmica com atlas fotográfico." },
  { id: 2, type: "livro", title: "Histology: A Text and Atlas — With Correlated Cell and Molecular Biology", authors: "Ross MH, Pawlina W", year: "2020 (8ª ed.)", details: "Wolters Kluwer", description: "Atlas de referência mundial com correlações entre microscopia óptica, eletrônica e biologia celular/molecular. Excelente iconografia." },
  { id: 3, type: "livro", title: "Wheater's Functional Histology: A Text and Colour Atlas", authors: "Young B, O'Dowd G, Woodford P", year: "2023 (7ª ed.)", details: "Elsevier", description: "Atlas funcional que integra estrutura e função dos tecidos, com fotografias de alta qualidade e correlações clínicas." },
  { id: 4, type: "livro", title: "Robbins & Cotran Pathologic Basis of Disease", authors: "Kumar V, Abbas AK, Aster JC", year: "2021 (10ª ed.)", details: "Elsevier", description: "Referência em patologia geral e sistêmica, com base histopatológica sólida. Essencial para correlações clínico-patológicas." },
  { id: 5, type: "livro", title: "Biologia Celular e Molecular", authors: "Alberts B, Hopkin K, Johnson A et al.", year: "2022 (7ª ed.)", details: "Artmed", description: "Base de biologia celular e molecular essencial para compreensão dos mecanismos histológicos: citoesqueleto, junções, sinalização e matriz extracelular." },
  { id: 6, type: "livro", title: "Tratado de Histologia em Cores", authors: "Gartner LP, Hiatt JL", year: "2017 (4ª ed.)", details: "Elsevier", description: "Texto didático com ênfase em correlações clínicas e imagens histológicas coloridas de alta qualidade." },
  { id: 7, type: "livro", title: "Di Fiore's Atlas of Histology with Functional Correlations", authors: "Eroschenko VP", year: "2017 (13ª ed.)", details: "Wolters Kluwer", description: "Atlas clássico com ilustrações esquemáticas e fotomicrografias correlacionadas a funções teciduais." },
  { id: 8, type: "livro", title: "Netter's Essential Histology", authors: "Ovalle WK, Nahirney PC", year: "2020 (3ª ed.)", details: "Elsevier", description: "Combina as ilustrações clássicas de Netter com fotomicrografias e correlações clínicas em formato conciso." },
  { id: 9, type: "livro", title: "Patologia — Processos Gerais", authors: "Brasileiro Filho G", year: "2022 (7ª ed.)", details: "Atheneu", description: "Referência brasileira em patologia geral com excelente base histopatológica e iconografia nacional." },
  { id: 10, type: "livro", title: "Embriologia Clínica", authors: "Moore KL, Persaud TVN, Torchia MG", year: "2020 (11ª ed.)", details: "Elsevier", description: "Embriologia correlacionada à formação dos tecidos, essencial para compreender origem e diferenciação tecidual." },

  // ARTIGOS CIENTÍFICOS DE REFERÊNCIA
  { id: 11, type: "artigo", title: "The Human Cell Atlas", authors: "Regev A, Teichmann SA, Lander ES et al.", year: "2017", details: "eLife 6:e27041", description: "Projeto internacional para mapear todos os tipos celulares humanos por scRNA-seq, base para novos atlas histológicos moleculares." },
  { id: 12, type: "artigo", title: "Hallmarks of Cancer: New Dimensions", authors: "Hanahan D", year: "2022", details: "Cancer Discovery 12(1):31-46", description: "Atualização dos hallmarks do câncer com novas dimensões incluindo microambiente tumoral, epigenética e senescência celular." },
  { id: 13, type: "artigo", title: "Organoids — New Models for Intestinal Biology", authors: "Sato T, Clevers H", year: "2013", details: "Science 340(6137):1190-1194", description: "Marco da tecnologia de organoides intestinais derivados de células-tronco Lgr5+, revolucionando o estudo histológico in vitro." },
  { id: 14, type: "artigo", title: "Spatial Transcriptomics and In Situ Sequencing", authors: "Ståhl PL et al.", year: "2016", details: "Science 353(6294):78-82", description: "Desenvolvimento da transcriptômica espacial, permitindo mapeamento da expressão gênica in situ em cortes histológicos." },
  { id: 15, type: "artigo", title: "Single-cell transcriptomics of 20 mouse organs creates a Tabula Muris", authors: "Tabula Muris Consortium", year: "2018", details: "Nature 562:367-372", description: "Atlas unicelular de 20 órgãos de camundongo, referência para classificação celular por transcriptômica." },
  { id: 16, type: "artigo", title: "The extracellular matrix: a dynamic niche in cancer progression", authors: "Lu P, Weaver VM, Werb Z", year: "2012", details: "J Cell Biol 196(4):395-406", description: "Revisão sobre o papel dinâmico da matriz extracelular na progressão tumoral e remodelação tecidual." },
  { id: 17, type: "artigo", title: "Mechanisms of wound healing and regeneration", authors: "Eming SA, Martin P, Tomic-Canic M", year: "2014", details: "Sci Transl Med 6(265):265sr6", description: "Revisão dos mecanismos moleculares e celulares de cicatrização tecidual e regeneração, com implicações clínicas." },
  { id: 18, type: "artigo", title: "Stem cells: a unified theory of aging", authors: "Oh J, Lee YD, Wagers AJ", year: "2014", details: "Nat Med 20(8):870-880", description: "Papel das células-tronco teciduais no envelhecimento e na manutenção da homeostase tecidual." },

  // ATLAS DIGITAIS E SITES
  { id: 19, type: "atlas", title: "Histology Guide — Virtual Histology Laboratory", authors: "University of Michigan", year: "2024", details: "histologyguide.com", description: "Atlas virtual gratuito com lâminas digitalizadas em alta resolução e guias de identificação estrutural." },
  { id: 20, type: "atlas", title: "Blue Histology — School of Anatomy and Human Biology", authors: "University of Western Australia", year: "2024", details: "lab.anhb.uwa.edu.au", description: "Recurso educacional online com descrições detalhadas e fotomicrografias organizadas por tecido e sistema." },
  { id: 21, type: "atlas", title: "PathologyOutlines.com", authors: "Nat Pernick et al.", year: "2024", details: "pathologyoutlines.com", description: "Maior recurso online gratuito de patologia e histopatologia, com milhares de imagens e diagnósticos comentados." },
  { id: 22, type: "site", title: "Wikimedia Commons — Histology Collection", authors: "Contribuidores Wikimedia", year: "2024", details: "commons.wikimedia.org", description: "Acervo de imagens histológicas em domínio público utilizadas como referência visual neste aplicativo." },
  { id: 23, type: "atlas", title: "SlidePath/Digital Slide Archive", authors: "Emory University", year: "2024", details: "cancer.digitalslidearchive.org", description: "Plataforma de lâminas digitais para estudo histopatológico, com coleções de patologia cirúrgica e citopatologia." },
  { id: 24, type: "site", title: "PubMed/MEDLINE", authors: "National Library of Medicine (NLM)", year: "2024", details: "pubmed.ncbi.nlm.nih.gov", description: "Base de dados bibliográfica primária para artigos científicos biomédicos. Fonte das atualizações científicas do aplicativo." },
  { id: 25, type: "site", title: "Human Protein Atlas", authors: "Uhlén M et al.", year: "2024", details: "proteinatlas.org", description: "Atlas de expressão proteica em tecidos humanos por imuno-histoquímica, com dados de scRNA-seq e patologia." },
];

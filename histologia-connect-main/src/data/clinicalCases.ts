export interface ClinicalCase {
  id: number;
  title: string;
  category: string;
  scenario: string;
  histologicalFindings: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  keyPoints: string[];
}

export const clinicalCases: ClinicalCase[] = [
  {
    id: 1,
    title: "Nódulo Tireoidiano — Carcinoma Papilífero",
    category: "Sistema Endócrino",
    scenario: "Paciente feminina, 42 anos, apresenta nódulo palpável em lobo direito da tireoide, detectado incidentalmente ao exame físico de rotina. Refere ser eutireoidiana. USG cervical mostra nódulo sólido hipoecogênico de 2,3 cm com microcalcificações e margens irregulares — TIRADS 5. Realizada punção aspirativa por agulha fina (PAAF) guiada por USG.",
    histologicalFindings: "A citologia mostra células epiteliais foliculares dispostas em papilas e arranjos sinciciais, com núcleos aumentados, claros (aspecto em 'vidro fosco' ou 'olhos da órfã Annie'), fendas nucleares longitudinais (grooves) e pseudo-inclusões nucleares intranucleares (invaginações citoplasmáticas). Corpos psamomatosos (calcificações laminares concêntricas) presentes.",
    questions: [
      { question: "Qual o diagnóstico histopatológico mais provável?", options: ["Bócio coloide multinodular", "Carcinoma papilífero da tireoide", "Adenoma folicular", "Tireoidite de Hashimoto"], correctIndex: 1, explanation: "As características nucleares (núcleos claros em 'vidro fosco', fendas longitudinais e pseudo-inclusões intranucleares) são patognomônicas do carcinoma papilífero, a neoplasia maligna mais comum da tireoide (80-85% dos carcinomas tireoidianos)." },
      { question: "Qual coloração especial ou técnica pode auxiliar na confirmação diagnóstica?", options: ["PAS (ácido periódico de Schiff)", "Imuno-histoquímica para tireoglobulina, TTF-1 e CK19", "Tricrômico de Masson", "Azul de toluidina"], correctIndex: 1, explanation: "A IHQ para tireoglobulina confirma origem folicular tireoidiana. TTF-1 (fator de transcrição tireoidiano) é marcador nuclear de diferenciação. CK19 apresenta positividade difusa no carcinoma papilífero, ao contrário do adenoma folicular (focal/negativo)." },
    ],
    keyPoints: ["O carcinoma papilífero é definido exclusivamente pelas características nucleares, não pela presença de arquitetura papilar — variante folicular do carcinoma papilífero possui padrão folicular mas com núcleos típicos", "Microcalcificações à USG correspondem histologicamente a corpos psamomatosos (calcificações concêntricas laminares)", "Disseminação principal por via linfática para linfonodos cervicais (metástases em 30-80% ao diagnóstico)", "É o carcinoma tireoidiano de melhor prognóstico — sobrevida em 10 anos >95% em estágios I/II", "Mutação BRAF V600E presente em ~45% dos casos, associada a comportamento mais agressivo"],
  },
  {
    id: 2,
    title: "Biópsia Renal em Síndrome Nefrótica Infantil",
    category: "Sistema Urinário",
    scenario: "Criança de 5 anos, sexo masculino, previamente hígida, apresenta edema palpebral matinal há 2 semanas, evoluindo para anasarca. Exames: proteinúria maciça de 4,2g/dia (proteinúria nefrótica), albumina sérica 1,8g/dL, colesterol total 380mg/dL. Complemento sérico normal. Anti-estreptolisina O negativa. Iniciada corticoterapia empírica com prednisona 2mg/kg/dia. Após 8 semanas sem resposta, realizada biópsia renal percutânea guiada por USG.",
    histologicalFindings: "Microscopia óptica: glomérulos com aspecto essencialmente normal, sem hipercelularidade, espessamento de membranas basais ou proliferação mesangial. Túbulos com gotas hialinas de reabsorção proteica nos túbulos proximais. Imunofluorescência: negativa para IgG, IgA, IgM, C3, C4, C1q. Microscopia eletrônica: apagamento difuso e extenso (>80%) dos pedicelos dos podócitos com microvilositação da superfície podocitária.",
    questions: [
      { question: "Qual a glomerulopatia mais provável?", options: ["Glomerulonefrite membranosa", "Doença de lesões mínimas (nefrose lipoide)", "Glomeruloesclerose segmentar e focal", "Nefropatia por IgA (doença de Berger)"], correctIndex: 1, explanation: "A doença de lesões mínimas é a causa mais comum de síndrome nefrótica em crianças (70-80% dos casos pediátricos). Glomérulos normais à microscopia óptica com imunofluorescência negativa e apagamento difuso dos pedicelos à microscopia eletrônica formam a tríade diagnóstica." },
      { question: "Por que a microscopia eletrônica é essencial neste caso?", options: ["Para identificar bactérias intraglomerulares", "Porque a microscopia óptica é completamente normal — apenas a ME revela a fusão dos pedicelos podocitários", "Para medir o diâmetro dos capilares glomerulares", "Para visualizar depósitos subepiteliais de IgA"], correctIndex: 1, explanation: "Na doença de lesões mínimas, a MO não mostra alterações glomerulares significativas. A fusão (apagamento) dos pedicelos dos podócitos é visível exclusivamente à ME, sendo a lesão ultraestrutural definidora da doença." },
    ],
    keyPoints: ["O apagamento dos pedicelos compromete a fenda de filtração e a barreira de carga, causando proteinúria seletiva (predominância de albumina)", "Resposta a corticoides ocorre em 90% dos casos pediátricos — a biópsia é indicada em corticorresistência, como neste caso", "A nefrina (proteína das fendas de filtração entre pedicelos) está funcionalmente comprometida na DLM", "Diagnóstico diferencial principal em caso de corticorresistência: glomeruloesclerose segmentar e focal (GESF)", "Gotas hialinas nos túbulos representam proteínas reabsorvidas e indicam proteinúria maciça, não são achado específico"],
  },
  {
    id: 3,
    title: "Lesão Hepática Crônica — Cirrose Alcoólica",
    category: "Sistema Digestório",
    scenario: "Homem de 55 anos, com história de etilismo pesado (>80g de etanol/dia por 25 anos), é admitido com ascite volumosa, icterícia (bilirrubinas totais 6,8mg/dL), esplenomegalia ao exame físico, varizes esofágicas à EDA e INR de 2,1. Albumina sérica 2,2g/dL. MELD 24. Biópsia hepática realizada por via transjugular (via percutânea contraindicada por coagulopatia e ascite).",
    histologicalFindings: "Arquitetura lobular completamente distorcida por septos fibrosos espessos porto-portais e porto-centrais que circunscrevem nódulos regenerativos de hepatócitos (nódulos < 3mm = micronodular, padrão típico da cirrose alcoólica). Infiltrado inflamatório linfoplasmocitário portal e periportal. Hepatócitos com esteatose macrovesicular residual. Tricrômico de Masson evidencia fibrose estágio 4 (cirrose) com intensa deposição de colágeno tipo I e III em ponte.",
    questions: [
      { question: "Qual o diagnóstico histopatológico?", options: ["Esteatose hepática simples (MASLD)", "Hepatite crônica ativa sem fibrose", "Cirrose hepática (estágio F4 de fibrose)", "Carcinoma hepatocelular"], correctIndex: 2, explanation: "A cirrose hepática é definida histologicamente pela presença de fibrose difusa com formação de nódulos regenerativos que distorcem completamente a arquitetura lobular normal. O padrão micronodular é característico da etiologia alcoólica." },
      { question: "Qual célula hepática é a principal produtora de colágeno na fibrogênese hepática?", options: ["Hepatócito", "Célula de Kupffer (macrófago hepático)", "Célula estrelada hepática (célula de Ito)", "Colangiócito (célula epitelial biliar)"], correctIndex: 2, explanation: "As células estreladas hepáticas (de Ito), localizadas no espaço de Disse, ativam-se sob estímulo de citocinas (TGF-β1, PDGF) e transdiferenciam-se em miofibroblastos, tornando-se as principais produtoras de colágeno tipos I e III na fibrose hepática." },
    ],
    keyPoints: ["O tricrômico de Masson cora colágeno em azul e é a coloração padrão-ouro para quantificação de fibrose hepática", "A cirrose é considerada irreversível quando estabelecida, representando o estágio terminal de hepatopatias crônicas", "A distorção da arquitetura vascular sinusoidal causa hipertensão portal → ascite, varizes esofágicas, esplenomegalia e encefalopatia", "Risco aumentado de carcinoma hepatocelular (CHC) no fígado cirrótico — necessário rastreamento semestral com USG e alfafetoproteína", "A classificação METAVIR utiliza escala F0-F4 para fibrose: F4 = cirrose"],
  },
  {
    id: 4,
    title: "Melanoma Maligno Cutâneo",
    category: "Pele e Anexos",
    scenario: "Paciente masculino, 68 anos, fototipo II, com história de exposição solar intensa ocupacional, apresenta lesão pigmentada no dorso há 2 anos, com crescimento recente, mudança de coloração e prurido. Exame dermatológico: lesão assimétrica de 1,5 cm com bordas irregulares, coloração heterogênea (castanho, preto, azul-acinzentado e áreas de regressão esbranquiçada). Dermatoscopia: rede atípica, véu azul-esbranquiçado, pontos irregulares e estrias radiadas. Realizada biópsia excisional com margem de 2mm.",
    histologicalFindings: "Proliferação assimétrica de melanócitos atípicos na junção dermoepidérmica e na derme, com ascensão pagetoide (melanócitos isolados ascendendo na epiderme). Melanócitos com pleomorfismo nuclear marcado, nucléolos proeminentes e mitoses atípicas (3 mitoses/mm²). Invasão até a derme reticular profunda com espessura de Breslow de 2,1mm e nível de Clark IV. Ulceração superficial presente. Regressão parcial com fibrose e melanófagos. IHQ: S-100 (+), HMB-45 (+), Melan-A/MART-1 (+), SOX-10 (+), Ki-67 elevado (25%).",
    questions: [
      { question: "Qual o diagnóstico?", options: ["Nevo melanocítico composto displásico", "Melanoma maligno de disseminação superficial", "Carcinoma basocelular pigmentado", "Queratose seborreica irritada"], correctIndex: 1, explanation: "A proliferação assimétrica de melanócitos atípicos com ascensão pagetoide, pleomorfismo nuclear, mitoses e invasão dérmica profunda, associada a positividade para marcadores melanocíticos (S-100, HMB-45, Melan-A), define melanoma maligno. O subtipo de disseminação superficial é o mais comum (70%)." },
      { question: "Qual o principal fator prognóstico histológico?", options: ["Localização anatômica da lesão", "Índice de Breslow (espessura máxima em mm)", "Idade do paciente", "Intensidade da pigmentação"], correctIndex: 1, explanation: "O índice de Breslow (espessura máxima em mm medida da camada granulosa à célula tumoral mais profunda) é o principal fator prognóstico independente do melanoma. Breslow >1mm indica biópsia de linfonodo sentinela. Outros fatores: ulceração, taxa mitótica, invasão linfovascular." },
    ],
    keyPoints: ["Regra ABCDE: Assimetria, Bordas irregulares, Cor heterogênea, Diâmetro >6mm, Evolução rápida", "IHQ com S-100 (mais sensível), HMB-45 (mais específico para melanócitos ativos), Melan-A e SOX-10 confirmam diferenciação melanocítica", "O índice de Breslow determina o estadiamento T e a conduta cirúrgica (margens ampliadas)", "Breslow ≤1mm: sobrevida em 5 anos ~95%; >4mm: sobrevida ~45%", "Mutação BRAF V600E em ~50% dos melanomas cutâneos — alvo terapêutico com vemurafenibe/dabrafenibe"],
  },
  {
    id: 5,
    title: "Doença Celíaca — Enteropatia Glúten-sensível",
    category: "Sistema Digestório",
    scenario: "Mulher de 32 anos, com queixa de diarreia crônica (4-6 evacuações pastosas/dia há 8 meses), distensão abdominal, perda ponderal de 7kg e fadiga. Laboratorialmente: hemoglobina 9,8g/dL com VCM 72fL (anemia ferropriva), ferritina 8ng/mL, anti-transglutaminase tecidual IgA 128 U/mL (ref <20), IgA sérica total normal (exclui deficiência de IgA). Endoscopia digestiva alta mostra mucosa duodenal com redução de pregas e aspecto em mosaico. Biópsias seriadas do bulbo e segunda porção duodenal realizadas.",
    histologicalFindings: "Atrofia vilositária subtotal (relação vilosidade:cripta invertida de 1:3, normal >3:1). Hiperplasia compensatória das criptas de Lieberkühn com aumento de mitoses. Intenso infiltrado linfocitário intraepitelial (>40 linfócitos T CD3+/100 enterócitos, predominantemente CD8+). Lâmina própria com plasmocitose e eosinófilos. Classificação de Marsh-Oberhuber 3b.",
    questions: [
      { question: "Qual alteração histológica é mais característica da doença celíaca?", options: ["Granulomas epitelioides não-caseosos", "Atrofia vilositária com linfocitose intraepitelial e hiperplasia críptica", "Metaplasia intestinal completa tipo III", "Ulceração transmural com fissuras profundas"], correctIndex: 1, explanation: "A tríade de atrofia vilositária, aumento de linfócitos intraepiteliais (>25/100 enterócitos) e hiperplasia críptica compensatória é a assinatura histológica da doença celíaca. A classificação de Marsh-Oberhuber gradua a gravidade dessas alterações." },
      { question: "Qual a classificação histológica utilizada para estadiar a gravidade das lesões?", options: ["Classificação TNM", "Classificação de Marsh-Oberhuber", "Classificação de Gleason", "Estadiamento de Ann Arbor"], correctIndex: 1, explanation: "A classificação de Marsh-Oberhuber gradua as lesões: Marsh 0 (normal) → Marsh 1 (linfocitose isolada) → Marsh 2 (linfocitose + hiperplasia críptica) → Marsh 3a-3c (atrofia vilositária parcial a total com as demais alterações)." },
    ],
    keyPoints: ["A atrofia das vilosidades reduz dramaticamente a superfície absortiva intestinal, causando má absorção generalizada (ferro, folato, cálcio, vitaminas lipossolúveis)", "Classificação de Marsh-Oberhuber: 1 (linfocitose >25/100) → 2 (+hiperplasia) → 3a (atrofia parcial) → 3b (subtotal) → 3c (total)", "Dieta estritamente livre de glúten leva à recuperação completa da arquitetura vilositária em 6-24 meses", "Anti-transglutaminase tecidual IgA é o melhor teste sorológico (sensibilidade/especificidade >95%)", "Complicações de longo prazo: linfoma T intestinal (EATL) e adenocarcinoma de intestino delgado"],
  },
  {
    id: 6,
    title: "Fibrose Pulmonar Idiopática — Padrão UIP",
    category: "Sistema Respiratório",
    scenario: "Paciente masculino, 63 anos, não tabagista, apresenta dispneia progressiva aos esforços há 3 anos, evoluindo para dispneia a pequenos esforços. Tosse seca persistente. Exame: crepitações tipo velcro bibasais, baqueteamento digital. TC de tórax de alta resolução: opacidades reticulares periféricas e basais, bronquiectasias de tração e faveolamento subpleural. Espirometria: CVF 58% do predito (padrão restritivo). DLCO 42% do predito. Biópsia pulmonar cirúrgica por VATS realizada para confirmação diagnóstica.",
    histologicalFindings: "Fibrose intersticial heterogênea com alternância espacial de áreas de parênquima normal, inflamação intersticial leve e fibrose densa cicatricial (heterogeneidade espacial). Focos fibroblásticos (agregados de fibroblastos/miofibroblastos em proliferação) na transição entre tecido normal e fibrótico (heterogeneidade temporal). Faveolamento: espaços císticos revestidos por epitélio bronquiolar metaplásico preenchidos com muco e neutrófilos. Destruição da arquitetura alveolar normal.",
    questions: [
      { question: "Qual o padrão histopatológico identificado?", options: ["Pneumonia em organização (OP)", "Pneumonia intersticial usual (UIP)", "Pneumonia intersticial não-específica (NSIP)", "Dano alveolar difuso (DAD)"], correctIndex: 1, explanation: "O padrão UIP é definido pela heterogeneidade temporal e espacial da fibrose (áreas normais adjacentes a áreas fibróticas densas), presença de focos fibroblásticos (fibrose ativa) e faveolamento (fibrose estabelecida). É o padrão histológico da fibrose pulmonar idiopática." },
    ],
    keyPoints: ["Focos fibroblásticos representam fibrose ativa e recente — sua abundância correlaciona-se com pior prognóstico", "Heterogeneidade espacial (áreas normais e fibróticas) e temporal (focos de idades diferentes) são essenciais para o diagnóstico de UIP", "Padrão UIP na biópsia + clínica + TC compatível = fibrose pulmonar idiopática (FPI)", "Prognóstico reservado — sobrevida mediana 3-5 anos; pirfenidona e nintedanib retardam progressão mas não curam", "Diagnóstico diferencial: NSIP (fibrose homogênea, sem faveolamento, melhor prognóstico)"],
  },
  {
    id: 7,
    title: "Infarto Agudo do Miocárdio — Evolução Histopatológica",
    category: "Sistema Cardiovascular",
    scenario: "Homem de 62 anos, hipertenso, diabético e tabagista, é admitido na emergência com dor torácica retroesternal em opressão, de forte intensidade, irradiando para membro superior esquerdo e mandíbula, há 6 horas. Sudorese, náusea e dispneia. ECG: supradesnivelamento do segmento ST em V1-V6 e D1-aVL (infarto anterior extenso). Troponina I: 15,8ng/mL (ref <0,04). Cineangiocoronariografia de urgência mostra oclusão trombótica da artéria descendente anterior proximal. Realizada angioplastia primária com stent. Fragmento miocárdico obtido durante cirurgia de revascularização complementar 72 horas após o evento.",
    histologicalFindings: "Necrose de coagulação extensa dos cardiomiócitos: citoplasma intensamente hipereosinofílico e homogêneo (bandas de contração), perda de estriações transversais e núcleos em picnose (condensação), cariorrexe (fragmentação) ou cariólise (dissolução). Intenso infiltrado neutrofílico intersticial e perivascular (fase inflamatória aguda, compatível com 48-72h de evolução). Edema intersticial marcado e hemorragia focal. Nas bordas da área infartada, início de proliferação de tecido de granulação com capilares neoformados.",
    questions: [
      { question: "Qual tipo de necrose ocorre no infarto do miocárdio?", options: ["Necrose caseosa (granulomatosa)", "Necrose de coagulação", "Necrose liquefativa", "Necrose gordurosa (esteatonecrose)"], correctIndex: 1, explanation: "O infarto do miocárdio causa necrose de coagulação, caracterizada por desnaturação proteica com manutenção transitória da arquitetura tecidual ('fantasma celular'). A exceção é o SNC, onde ocorre necrose liquefativa. As bandas de contração são achado específico de necrose miocárdica por reperfusão." },
      { question: "Em que momento os neutrófilos são mais proeminentes no tecido infartado?", options: ["Primeiras 4 horas (fase hiperaguda)", "12-72 horas (1-3 dias — fase inflamatória aguda)", "7-10 dias (fase de organização)", "Após 4-6 semanas (fase de cicatrização)"], correctIndex: 1, explanation: "O infiltrado neutrofílico é mais intenso entre 12-72 horas após o infarto, durante a fase inflamatória aguda, atraído por quimiocinas de necrose celular. Após 3-7 dias, macrófagos predominam (fagocitose de debris). Após 7-14 dias, tecido de granulação. Após 6+ semanas, cicatriz fibrosa densa." },
    ],
    keyPoints: ["Cronologia histopatológica: 0-4h (sem alterações à MO, apenas ME) → 4-12h (necrose ondulada) → 12-72h (necrose coagulativa + neutrófilos) → 3-7d (macrófagos) → 7-14d (tecido de granulação) → >6 semanas (cicatriz fibrosa)", "O músculo cardíaco tem capacidade regenerativa extremamente limitada — a área infartada é substituída por cicatriz fibrosa colágena", "Bandas de contração são achado histológico específico de necrose miocárdica com reperfusão (hipercontração dos sarcômeros)", "A troponina I e T são os biomarcadores mais sensíveis e específicos de necrose miocárdica"],
  },
  {
    id: 8,
    title: "Gastrite Crônica por Helicobacter pylori",
    category: "Sistema Digestório",
    scenario: "Homem de 48 anos com epigastralgia pós-prandial recorrente há 6 meses, pirose e empachamento. Teste respiratório com ureia marcada (¹³C) positivo para H. pylori. EDA: mucosa antral hiperemiada com erosões e nodularidade. Antro e corpo gástrico biopsiados segundo protocolo de Sydney atualizado (2 fragmentos do antro, 2 do corpo, 1 da incisura angular).",
    histologicalFindings: "Antro: infiltrado inflamatório crônico denso (linfócitos e plasmócitos) na lâmina própria com atividade (neutrófilos infiltrando glândulas e epitélio de superfície). Folículos linfoides reativos com centros germinativos proeminentes na lâmina própria (tecido MALT adquirido). Bactérias curvas basófilas na camada de muco sobre o epitélio foveolar (confirmadas por coloração de Giemsa modificada). Corpo: gastrite crônica leve sem atrofia.",
    questions: [
      { question: "Qual achado histológico é mais sugestivo de infecção ativa por H. pylori?", options: ["Metaplasia intestinal completa", "Folículos linfoides reativos na mucosa e neutrófilos infiltrando glândulas (atividade)", "Atrofia glandular isolada", "Displasia epitelial de baixo grau"], correctIndex: 1, explanation: "A formação de folículos linfoides organizados (tecido MALT adquirido) na mucosa gástrica é altamente específica de infecção por H. pylori. A presença de neutrófilos (atividade) indica agressão epitelial ativa pela bactéria." },
    ],
    keyPoints: ["H. pylori é bactéria gram-negativa espiralada que coloniza a camada de muco gástrico, causando gastrite crônica ativa", "Sequência de Correa: gastrite crônica → atrofia glandular → metaplasia intestinal → displasia → adenocarcinoma gástrico tipo intestinal", "O linfoma MALT gástrico é diretamente causado pela estimulação antigênica crônica por H. pylori — erradicação pode regredir linfoma de baixo grau", "Protocolo de Sydney: biópsias padronizadas para avaliação de inflamação, atividade, atrofia, metaplasia intestinal e H. pylori"],
  },
  {
    id: 9,
    title: "Carcinoma Basocelular Nodular",
    category: "Pele e Anexos",
    scenario: "Mulher de 72 anos, fototipo I, com lesão nodular perolada e brilhante de 8mm na asa nasal, com telangiectasias arboriformes na superfície e bordas elevadas translúcidas ('pérola'). Lesão indolor, de crescimento lento há aproximadamente 1 ano, com episódios de sangramento ao contato. Dermatoscopia: grandes ninhos ovoides azul-acinzentados, vasos arboriformes e ausência de rede pigmentar. Realizada biópsia excisional com margem de 4mm.",
    histologicalFindings: "Ninhos e cordões de células basaloides (núcleo oval hipercromático, citoplasma escasso) originando-se da epiderme e invadindo a derme. Paliçada periférica: células dispostas em arranjo paralelo organizado na periferia dos ninhos tumorais. Retração artefatual do estroma ao redor dos ninhos (fendas de retração). Estroma fibromixoide reativo. Ausência de atipias intensas ou invasão perineural.",
    questions: [
      { question: "Qual o diagnóstico histopatológico?", options: ["Carcinoma espinocelular bem diferenciado", "Carcinoma basocelular nodular", "Melanoma amelanótico", "Queratose actínica hipertrófica"], correctIndex: 1, explanation: "O carcinoma basocelular (CBC) é o tumor maligno cutâneo mais comum no mundo. A variante nodular é a mais frequente. Achados clássicos: ninhos de células basaloides com paliçada periférica e fendas de retração artefatuais." },
      { question: "Qual o comportamento biológico característico deste tumor?", options: ["Metástases hematogênicas frequentes e precoces", "Localmente invasivo e destrutivo, mas metástases são extremamente raras (<0,1%)", "Sempre comportamento benigno sem potencial destrutivo", "Disseminação linfática precoce para linfonodos regionais"], correctIndex: 1, explanation: "O CBC é localmente invasivo e pode ser destrutivo se negligenciado (ulcus rodens), porém metástases são raríssimas (<0,1%). A excisão cirúrgica com margens livres é curativa em >95% dos casos." },
    ],
    keyPoints: ["CBC é o tumor maligno mais comum em humanos — incidência crescente com envelhecimento e exposição UV cumulativa", "Origina-se de células basaloides da camada basal da epiderme ou do bulbo folicular", "Paliçada periférica e fendas de retração estromal são achados histológicos patognomônicos", "Via de sinalização Hedgehog (Hh) constitutivamente ativada na maioria dos CBCs — mutação PTCH1 ou SMO — alvo de vismodegib e sonidegib em casos avançados", "Subtipos de alto risco: micronodular, infiltrativo, esclerodermiforme e metatípico"],
  },
  {
    id: 10,
    title: "Glomerulonefrite Membranosa",
    category: "Sistema Urinário",
    scenario: "Homem de 50 anos apresenta edema progressivo de membros inferiores há 3 meses, com proteinúria de 8,2g/24h (nefrótica), albumina 2,0g/dL, hipercolesterolemia (colesterol 340mg/dL). Função renal preservada (creatinina 1,1mg/dL). Anti-PLA2R sérico fortemente positivo. Hepatites B e C negativas, FAN negativo. Biópsia renal percutânea realizada.",
    histologicalFindings: "Espessamento difuso e uniforme da membrana basal glomerular (MBG) sem hipercelularidade glomerular. Coloração pela prata (Jones metanamina) revela 'spikes' (espículas) perpendiculares à MBG, representando extensões da membrana basal entre e sobre os depósitos imunes. Imunofluorescência: depósito granular fino e difuso de IgG (predomínio de IgG4) e C3 ao longo das alças capilares glomerulares. ME: depósitos eletrodensos subepiteliais (entre podócitos e MBG), com expansão reativa da membrana basal ao redor e entre os depósitos (estágio III de Ehrenreich-Churg).",
    questions: [
      { question: "Onde estão localizados os depósitos imunes na glomerulonefrite membranosa?", options: ["Subendotelial (entre endotélio e MBG)", "Subepitelial (entre podócitos e MBG)", "Mesangial (na matriz mesangial)", "Intramembranoso (dentro da MBG)"], correctIndex: 1, explanation: "Na GN membranosa, os depósitos imunes são subepiteliais — formados pela ligação de anticorpos circulantes (anti-PLA2R) a antígenos podocitários in situ. A MBG reage depositando material ao redor dos depósitos, formando as espículas ('spikes') visíveis à coloração de prata." },
    ],
    keyPoints: ["Causa mais comum de síndrome nefrótica em adultos brancos (20-30% dos casos)", "Anti-PLA2R (receptor de fosfolipase A2) é biomarcador específico presente em 70-80% dos casos primários — permite monitorar atividade e resposta terapêutica", "'Spikes' na prata de Jones = extensões da MBG entre depósitos subepiteliais — patognomônicos", "Regra dos terços: ~1/3 remissão espontânea, ~1/3 proteinúria persistente estável, ~1/3 progressão para IRC", "Sempre excluir causas secundárias: hepatite B, LES, neoplasias sólidas, fármacos (AINEs, penicilamina)"],
  },
  {
    id: 11,
    title: "Doença de Crohn — Ileíte Terminal",
    category: "Sistema Digestório",
    scenario: "Jovem de 22 anos com dor no quadrante inferior direito, diarreia não-sanguinolenta (4-5 evacuações/dia), febre vespertina (38,2°C) e perda de 6kg em 3 meses. Calprotectina fecal 820μg/g (ref <50). PCR 45mg/L. Colonoscopia: úlceras aftosas e úlceras longitudinais profundas no íleo terminal com mucosa normal intercalada ('skip lesions'). Aspecto em 'pedra de calçamento' (cobblestone). Biópsia realizada.",
    histologicalFindings: "Inflamação transmural crônica ativa acometendo todas as camadas da parede intestinal (mucosa a serosa). Granulomas epitelioides não-caseosos com células gigantes multinucleadas de Langhans na submucosa e camada muscular. Agregados linfoides transmurais. Fissuras profundas na mucosa que podem estender-se até a serosa. Distorção focal da arquitetura críptica com metaplasia de células de Paneth no cólon.",
    questions: [
      { question: "Qual achado histológico diferencia a doença de Crohn da retocolite ulcerativa?", options: ["Inflamação limitada à mucosa", "Granulomas epitelioides não-caseosos e inflamação transmural", "Abscessos crípticos difusos", "Pseudopólipos inflamatórios"], correctIndex: 1, explanation: "Os granulomas epitelioides não-caseosos (presentes em 50-60% das biópsias) e a inflamação transmural (acometendo todas as camadas) são achados histológicos que distinguem a doença de Crohn da RCU, que se limita à mucosa e não forma granulomas." },
    ],
    keyPoints: ["Inflamação transmural (mucosa a serosa) na DC × inflamação limitada à mucosa na RCU", "Granulomas não-caseosos: presentes em 50-60% das biópsias na DC — quando identificados, são altamente sugestivos", "Distribuição saltatória ('skip lesions'): segmentos doentes alternando com mucosa macroscopicamente normal", "Complicações da inflamação transmural: fístulas (enteroentéricas, enterocutâneas, perianais), estenoses fibrosas e abscessos intra-abdominais", "O íleo terminal é o segmento mais comumente acometido (40% ileocólico, 30% colônico, 30% ileal isolado)"],
  },
  {
    id: 12,
    title: "Asma Brônquica — Remodelamento das Vias Aéreas",
    category: "Sistema Respiratório",
    scenario: "Mulher de 35 anos, asmática desde os 8 anos de idade, com dispneia, sibilância e opressão torácica persistentes apesar de tratamento com corticoide inalatório em dose alta e LABA. Espirometria: VEF1 62% do predito com resposta parcial ao broncodilatador. Broncoscopia com biópsia endobrônquica de brônquio segmentar realizada para avaliar a extensão do remodelamento brônquico e guiar terapia adicional.",
    histologicalFindings: "Espessamento marcado da membrana basal subepitelial (deposição de colágeno tipos I, III e V — fibrose subepitelial). Hiperplasia de células caliciformes (metaplasia mucosa) com aumento da razão caliciformes/ciliadas. Hipertrofia e hiperplasia do músculo liso brônquico (aumento de 2-3x na espessura da camada muscular). Infiltrado eosinofílico na lâmina própria com eosinófilos degranulados (liberação de proteína básica principal e proteína catiônica eosinofílica). Descamação epitelial focal com corpos de Creola (aglomerados de células epiteliais no escarro). Glândulas submucosas hiperplasiadas.",
    questions: [
      { question: "Qual célula inflamatória é a principal efetora na asma alérgica?", options: ["Neutrófilos", "Eosinófilos", "Linfócitos T CD8+ citotóxicos", "Macrófagos M1"], correctIndex: 1, explanation: "A asma alérgica é uma doença inflamatória crônica mediada por linfócitos Th2 (IL-4, IL-5, IL-13). Os eosinófilos são as células efetoras principais, recrutados pela IL-5 e liberando proteínas tóxicas (MBP, ECP) que causam dano epitelial e remodelamento." },
    ],
    keyPoints: ["Espessamento da membrana basal subepitelial é achado precoce e persistente do remodelamento — ocorre mesmo em asma leve", "Hiperplasia de células caliciformes → hipersecreção de muco → rolhas mucosas (causa de morte na crise asmática fatal)", "Hipertrofia do músculo liso brônquico → broncoconstrição exagerada e hiper-reatividade brônquica", "Cristais de Charcot-Leyden (fosfolipase de eosinófilos degranulados) e espirais de Curschmann (moldes mucosos de bronquíolos) no escarro são achados clássicos", "IL-5 é o principal alvo terapêutico biológico na asma eosinofílica grave (mepolizumabe, benralizumabe)"],
  },
  {
    id: 13,
    title: "Hiperplasia Prostática Benigna",
    category: "Sistema Reprodutor",
    scenario: "Homem de 68 anos com sintomas do trato urinário inferior (STUI) obstrutivos há 2 anos: jato urinário fraco, hesitação, noctúria 4x/noite, sensação de esvaziamento incompleto e gotejamento terminal. IPSS 24 (sintomas graves). Toque retal: próstata aumentada (60g estimados), fibroelástica, sem nódulos endurecidos. PSA: 4,2ng/mL. USG transretal: próstata heterogênea de 62cm³ com hiperplasia da zona de transição. Realizada ressecção transuretral de próstata (RTU-P). Material enviado: 28g de fragmentos.",
    histologicalFindings: "Hiperplasia glandular e estromal fibromuscular com formação de nódulos bem circunscritos. Glândulas de calibres variados com projeções papilares intraluminais e dilatações císticas. Epitélio bilaminado preservado: camada de células basais (p63+) contínua sobre células secretoras luminais. Estroma fibromuscular expandido entre nódulos glandulares. Secreção eosinofílica e corpora amylacea (concreções laminadas) nos lúmens glandulares. Ausência de atipia citológica ou invasão.",
    questions: [
      { question: "Qual componente histológico está hiperplasiado na HPB?", options: ["Apenas o componente glandular", "Apenas o componente estromal fibromuscular", "Ambos: glandular e estromal (fibromuscular) — hiperplasia nodular mista", "Exclusivamente o epitélio uretral prostático"], correctIndex: 2, explanation: "A HPB é uma hiperplasia nodular verdadeira que envolve tanto o componente glandular quanto o estromal (fibromuscular), sob influência da dihidrotestosterona (DHT). A proporção glandular/estromal varia entre nódulos. A HPB origina-se na zona de transição periuretral." },
    ],
    keyPoints: ["HPB origina-se na zona de transição (periuretral) — diferente do adenocarcinoma prostático (zona periférica)", "Regulada por DHT (convertida da testosterona pela 5α-redutase tipo 2) — alvo de finasterida e dutasterida", "HPB NÃO é lesão pré-neoplásica — HPB e adenocarcinoma são processos patológicos independentes que podem coexistir", "A camada de células basais (p63+, CK5/6+) está preservada e contínua — sua ausência indica carcinoma", "Corpora amylacea são concreções eosinofílicas laminadas benignas, comuns na HPB e próstata envelhecida"],
  },
  {
    id: 14,
    title: "Tireoidite de Hashimoto",
    category: "Sistema Endócrino",
    scenario: "Mulher de 38 anos com fadiga progressiva, ganho de peso de 8kg em 6 meses, constipação, pele seca e intolerância ao frio. Exame: bócio difuso indolor e firme, sem nódulos. TSH 45mUI/L (elevado), T4L 0,3ng/dL (baixo). Anti-TPO 1.200 UI/mL e anti-tireoglobulina 800 UI/mL (títulos muito elevados). Biópsia por PAAF guiada por USG realizada para avaliação citológica.",
    histologicalFindings: "Intenso infiltrado linfocitário difuso com formação de folículos linfoides com centros germinativos proeminentes (hiperplasia linfoide reativa). Destruição e rarefação dos folículos tireoidianos. Células foliculares remanescentes com metaplasia oxifílica (células de Hürthle/Askanazy/oncocíticas): citoplasma eosinofílico abundante e granular (repleto de mitocôndrias), núcleo vesiculoso com nucléolo proeminente. Fibrose intersticial variável.",
    questions: [
      { question: "Qual o significado histopatológico da metaplasia oxifílica (células de Hürthle)?", options: ["Indica transformação maligna iminente", "É resposta adaptativa (metaplásica) ao dano folicular crônico autoimune — acúmulo compensatório de mitocôndrias", "Indica hiperfunção tireoidiana descontrolada", "É precursora direta de carcinoma papilífero"], correctIndex: 1, explanation: "As células de Hürthle (oxifílicas/oncocíticas) representam metaplasia dos tireócitos em resposta ao dano autoimune crônico. O acúmulo maciço de mitocôndrias (responsável pelo aspecto granular eosinofílico) reflete um mecanismo adaptativo celular à agressão inflamatória." },
    ],
    keyPoints: ["Tireoidite de Hashimoto é a causa mais comum de hipotireoidismo em áreas iodo-suficientes", "Doença autoimune órgão-específica mediada por linfócitos T citotóxicos e anticorpos anti-TPO/anti-Tg", "Histologia: tríade de infiltrado linfoide com centros germinativos + destruição folicular + células de Hürthle", "Risco discretamente aumentado de linfoma MALT e linfoma difuso de grandes células B da tireoide (pelo estímulo antigênico crônico)", "Associada a outras doenças autoimunes: diabetes tipo 1, vitiligo, doença de Addison (síndromes poliglandulares)"],
  },
  {
    id: 15,
    title: "Distrofia Muscular de Duchenne",
    category: "Tecido Muscular",
    scenario: "Menino de 5 anos com fraqueza muscular proximal progressiva há 1 ano, com dificuldade para subir escadas e levantar-se do chão (sinal de Gowers positivo: escala sobre si mesmo). Pseudo-hipertrofia de panturrilhas bilateral. CPK sérica muito elevada (18.500 U/L, ref <200). Aldolase elevada. Mãe e tio materno sem sintomas (herança recessiva ligada ao X). Biópsia muscular do quadríceps femoral realizada para confirmação diagnóstica.",
    histologicalFindings: "Marcada variação no diâmetro das fibras musculares: fibras hipertróficas arredondadas alternando com fibras atróficas anguladas (variação >5x no diâmetro). Necrose ativa de fibras musculares com invasão por macrófagos (miofagocitose). Fibras em regeneração: fibras pequenas basófilas com núcleos centrais vesiculosos e nucléolos proeminentes. Substituição progressiva do endomísio e perimísio por tecido fibroso e adiposo (fibrose endomisial). IHQ: ausência completa de distrofina (proteína de 427kDa) no sarcolema de todas as fibras.",
    questions: [
      { question: "Qual proteína está ausente na distrofia muscular de Duchenne?", options: ["Cadeia pesada de miosina", "α-actina sarcomérica", "Distrofina", "Troponina I cardíaca"], correctIndex: 2, explanation: "A distrofia de Duchenne é causada por mutações no gene DMD no cromossomo Xp21.2, resultando em ausência completa da distrofina, proteína subsarcolemal de 427kDa que conecta o citoesqueleto de actina à matriz extracelular via complexo distroglicano-sarcoglicano." },
    ],
    keyPoints: ["Herança recessiva ligada ao X — afeta quase exclusivamente meninos (incidência 1:3.500-5.000 nascidos vivos masculinos)", "Distrofina ausente (Duchenne, grave, início <5 anos) versus distrofina reduzida/truncada (Becker, mais leve, início >10 anos)", "Ciclos repetidos de necrose-regeneração levam à exaustão das células satélites (células-tronco musculares) e substituição fibroadiposa progressiva", "CPK sérica muito elevada (>10.000 U/L) pela liberação contínua de enzimas das fibras lesadas — marcador sensível mas não específico", "Morte geralmente por insuficiência respiratória ou cardiomiopatia dilatada na 2ª-3ª década de vida"],
  },
  {
    id: 16,
    title: "Aterosclerose Coronariana — Placa Vulnerável",
    category: "Sistema Cardiovascular",
    scenario: "Homem de 58 anos, hipertenso e dislipidêmico, sofre morte súbita cardíaca. Autópsia revela trombose oclusiva da artéria coronária descendente anterior sobre placa ateromatosa rota. Análise histopatológica da placa e segmentos coronarianos realizada.",
    histologicalFindings: "Placa aterosclerótica excêntrica com grande núcleo lipídico-necrótico (>40% da área da placa) contendo cristais de colesterol, debris celulares e macrófagos espumosos. Capa fibrosa fina e rota (<65μm), com infiltrado denso de macrófagos e linfócitos T na zona de ruptura. Neovascularização intraplaca a partir dos vasa vasorum. Hemorragia intraplaca. Trombo mural fibrinoplaquetário na luz do vaso sobre o ponto de ruptura.",
    questions: [
      { question: "Qual característica histológica define uma placa aterosclerótica como 'vulnerável' (alto risco de ruptura)?", options: ["Calcificação extensa da placa", "Capa fibrosa fina com grande núcleo lipídico e infiltrado inflamatório denso", "Estenose luminal >90%", "Fibrose densa sem componente lipídico"], correctIndex: 1, explanation: "As placas vulneráveis possuem capa fibrosa fina (<65μm), grande núcleo lipídico-necrótico (>30-40% da área), intenso infiltrado de macrófagos (que secretam MMPs que degradam colágeno) e neovascularização. A ruptura expõe o núcleo trombogênico, causando trombose aguda." },
    ],
    keyPoints: ["Macrófagos espumosos (foam cells) são macrófagos que fagocitaram LDL oxidada via receptores scavenger (SR-A, CD36) — célula central da aterogênese", "A estria gordurosa (fatty streak) é a lesão inicial, já presente em adolescentes, composta por macrófagos espumosos subendoteliais", "MMPs (colagenases) secretadas por macrófagos degradam colágeno da capa fibrosa → vulnerabilidade à ruptura", "A maioria dos IAM ocorre em placas com estenose <50% que rompem — não nas estenoses críticas >90%", "Cristais de colesterol ativam o inflamassomo NLRP3 → IL-1β → amplificação inflamatória"],
  },
  {
    id: 17,
    title: "Carcinoma Espinocelular Cutâneo",
    category: "Pele e Anexos",
    scenario: "Homem de 75 anos, agricultor, com lesão ulcerovegetante no lábio inferior de 2cm, endurecida, com bordas elevadas e base granulosa, presente há 4 meses com crescimento progressivo. Linfonodo submandibular palpável de 1,5cm. Biópsia incisional realizada.",
    histologicalFindings: "Proliferação de queratinócitos atípicos originando-se da epiderme e invadindo a derme em cordões e ilhas irregulares. Células com citoplasma eosinofílico abundante (queratinização), núcleos vesiculosos pleomórficos com nucléolos proeminentes e mitoses atípicas. Pérolas córneas (queratinização central nos ninhos tumorais — diferenciação escamosa). Invasão perineural identificada. Reação estromal desmoplásica.",
    questions: [
      { question: "Qual achado histológico confirma diferenciação escamosa?", options: ["Paliçada periférica", "Pérolas córneas (queratinização central nos ninhos tumorais)", "Rosetas pseudopapilares", "Melanina citoplasmática"], correctIndex: 1, explanation: "As pérolas córneas são lâminas concêntricas de queratina no centro de ninhos tumorais, representando diferenciação escamosa madura. Junto com pontes intercelulares (desmossomos), são o marco histológico do CEC bem diferenciado." },
    ],
    keyPoints: ["CEC é o segundo tumor cutâneo maligno mais comum, depois do CBC", "Origina-se de queratinócitos do estrato espinhoso — fator de risco principal: UV cumulativo", "Diferenciação: bem diferenciado (pérolas córneas abundantes) → pouco diferenciado (escassas, pior prognóstico)", "Diferente do CBC, o CEC possui potencial metastático real (3-5%), especialmente labial, auricular e em imunossuprimidos", "Queratose actínica é a principal lesão precursora (CEC in situ superficial)"],
  },
  {
    id: 18,
    title: "Nefropatia por IgA (Doença de Berger)",
    category: "Sistema Urinário",
    scenario: "Jovem de 25 anos apresenta hematúria macroscópica (urina cor de coca-cola) 2 dias após infecção de vias aéreas superiores. Episódios semelhantes prévios. Creatinina 1,0mg/dL, proteinúria 1,2g/24h. Complemento sérico normal (C3, C4). Biópsia renal realizada.",
    histologicalFindings: "Expansão mesangial difusa com hipercelularidade mesangial focal e segmentar. Imunofluorescência: depósitos mesangiais granulares intensos de IgA (dominante), com co-depósitos de C3 e IgG. Microscopia eletrônica: depósitos eletrodensos mesangiais e paramesangiais.",
    questions: [
      { question: "Qual é o padrão de depósito imune que define esta glomerulopatia?", options: ["IgG subepitelial", "IgA mesangial dominante", "IgM subendotelial", "Depósitos lineares de IgG ao longo da MBG"], correctIndex: 1, explanation: "A nefropatia por IgA é definida pela deposição mesangial dominante de IgA1 polimérica (galactose-deficiente). É a glomerulopatia primária mais comum no mundo." },
    ],
    keyPoints: ["Glomerulopatia primária mais comum globalmente — pico em adultos jovens masculinos", "Hematúria sinfaringítica: hematúria macroscópica 1-3 dias após IVAS (diferente de GNPE: 1-3 semanas)", "IgA1 galactose-deficiente forma imunocomplexos que se depositam no mesângio", "Prognóstico variável: 20-40% evoluem para DRC em 20 anos", "Classificação de Oxford (MEST-C) define parâmetros prognósticos histológicos"],
  },
  {
    id: 19,
    title: "Adenocarcinoma Colorretal",
    category: "Sistema Digestório",
    scenario: "Homem de 65 anos, com história familiar de câncer colorretal (pai diagnosticado aos 55 anos), apresenta mudança do hábito intestinal (alternância diarreia/constipação), hematoquezia e perda de 5kg em 3 meses. Colonoscopia: lesão vegetante ulcerada de 4cm no cólon sigmoide com estenose parcial. Biópsia realizada.",
    histologicalFindings: "Adenocarcinoma moderadamente diferenciado: glândulas tubulares irregulares com células colunares atípicas, hipercromáticas, com estratificação nuclear e perda de polaridade. Mitoses frequentes. Invasão da muscular própria. Reação desmoplásica estromal intensa. Necrose suja (dirty necrosis) intraluminal.",
    questions: [
      { question: "Qual sequência de progressão neoplásica é clássica no adenocarcinoma colorretal?", options: ["Metaplasia → displasia → carcinoma", "Sequência adenoma-carcinoma (epitélio normal → adenoma → displasia → carcinoma invasivo)", "Infecção viral → transformação maligna direta", "Lesão benigna sem precursores"], correctIndex: 1, explanation: "A sequência adenoma-carcinoma (via clássica cromossômica) envolve: mucosa normal → pólipo adenomatoso → displasia de baixo → alto grau → adenocarcinoma invasivo, acumulando mutações em APC, KRAS, TP53 e via Wnt." },
    ],
    keyPoints: ["Sequência adenoma-carcinoma: APC → KRAS → SMAD4 → TP53 (acúmulo mutacional progressivo)", "Via alternativa: instabilidade de microssatélites (MSI-H) — Lynch/HNPCC e 15% dos esporádicos (metilação de MLH1)", "Dirty necrosis (necrose suja intraluminal) é achado histológico sugestivo de adenocarcinoma colorretal", "Estadiamento TNM pós-operatório é o principal fator prognóstico", "Rastreamento com colonoscopia a partir dos 45 anos (populações de risco médio)"],
  },
  {
    id: 20,
    title: "Tuberculose Pulmonar — Granuloma Caseoso",
    category: "Sistema Respiratório",
    scenario: "Homem de 40 anos, HIV-positivo (CD4 280 céls/mm³), com tosse produtiva há 6 semanas, febre vespertina, sudorese noturna e perda de 7kg. RX tórax: infiltrado em lobo superior direito com cavitação. Baciloscopia do escarro: BAAR (+). Biópsia transbrônquica realizada.",
    histologicalFindings: "Granulomas epitelioides com necrose caseosa central (material eosinofílico amorfo e acelular). Células gigantes multinucleadas de Langhans (núcleos em ferradura na periferia) e células epitelioides (macrófagos ativados com citoplasma róseo e abundante). Coroa de linfócitos T ao redor. Coloração de Ziehl-Neelsen: BAAR (bacilos álcool-ácido resistentes) na necrose caseosa.",
    questions: [
      { question: "Qual tipo de necrose é patognomônica da tuberculose?", options: ["Necrose de coagulação", "Necrose caseosa (granulomatosa)", "Necrose liquefativa", "Necrose fibrinoide"], correctIndex: 1, explanation: "A necrose caseosa (aspecto de 'queijo') é altamente sugestiva de tuberculose. É um padrão especial de necrose com destruição completa da arquitetura tecidual, formando material amorfo eosinofílico e acelular no centro do granuloma." },
    ],
    keyPoints: ["Granuloma caseoso = células epitelioides + células gigantes de Langhans + necrose caseosa central + coroa linfocitária", "A resposta granulomatosa é mediada por linfócitos T CD4+ Th1 (IFN-γ ativa macrófagos → células epitelioides)", "Ziehl-Neelsen cora BAAR em vermelho — sensibilidade limitada (5.000-10.000 bacilos/mL necessários)", "Diagnóstico diferencial de granuloma caseoso: tuberculose, fungos (paracoccidioidomicose, histoplasmose)", "Granulomas NÃO-caseosos: sarcoidose, doença de Crohn, reação a corpo estranho"],
  },
  {
    id: 21,
    title: "Linfoma de Hodgkin Clássico — Esclerose Nodular",
    category: "Sistema Linfático",
    scenario: "Mulher de 28 anos com linfonodomegalia cervical bilateral indolor há 2 meses, febre >38°C, sudorese noturna e perda de 8% do peso corporal (sintomas B). TC: massa mediastinal anterior volumosa. Biópsia excisional de linfonodo cervical realizada.",
    histologicalFindings: "Bandas de fibrose colágena dividem o linfonodo em nódulos. Células de Reed-Sternberg clássicas (células gigantes bi ou multinucleadas com nucléolos eosinofílicos proeminentes 'em olho de coruja') e variantes lacunares (artefato de formalina com citoplasma retraído). Background inflamatório rico: linfócitos T, eosinófilos, histiócitos e plasmócitos. IHQ: CD30 (+), CD15 (+), PAX5 fraco (+), CD20 (-/fraco), CD45 (-).",
    questions: [
      { question: "Qual célula neoplásica é diagnóstica do linfoma de Hodgkin?", options: ["Linfoblasto", "Célula de Reed-Sternberg", "Célula de Burkitt", "Centroblasto"], correctIndex: 1, explanation: "A célula de Reed-Sternberg (CRS) é a célula neoplásica patognomônica do linfoma de Hodgkin: célula gigante (20-50μm) bi/multinucleada com nucléolos proeminentes eosinofílicos (aspecto 'em olho de coruja'). Origina-se de linfócitos B do centro germinativo." },
    ],
    keyPoints: ["Esclerose nodular é o subtipo mais comum (60-70%), especialmente em mulheres jovens com massa mediastinal", "Célula de Reed-Sternberg representa <1-2% das células do tumor — background inflamatório reativo predomina", "IHQ: CD30+/CD15+ é o padrão clássico; CD20 geralmente negativo (diferencia de linfomas B)", "Disseminação por contiguidade linfonodal (diferente dos LNH que disseminam hematogênica e precocemente)", "Excelente prognóstico com quimioterapia (ABVD): cura em >85% dos casos"],
  },
  {
    id: 22,
    title: "Pancreatite Aguda — Necrose Gordurosa",
    category: "Sistema Digestório",
    scenario: "Homem de 45 anos, etilista, admitido com dor epigástrica intensa em faixa irradiando para dorso, náuseas e vômitos. Amilase 1.200 U/L, lipase 2.500 U/L. TC com contraste: pâncreas aumentado com áreas de necrose peripancreática e coleções líquidas. Evolui com falência orgânica múltipla. Necrosectomia realizada no 21° dia.",
    histologicalFindings: "Necrose gordurosa extensa do tecido adiposo peripancreático: adipócitos com contornos preservados mas sem núcleos (células-fantasma), com depósitos basófilos granulares de saponificação (sais de cálcio combinados com ácidos graxos liberados pela lipase). Necrose de coagulação do parênquima pancreático adjacente. Infiltrado inflamatório neutrofílico intenso. Trombose de vasos locais.",
    questions: [
      { question: "Qual é o mecanismo da necrose gordurosa na pancreatite?", options: ["Isquemia vascular simples", "Lipase pancreática liberada digere triglicerídeos dos adipócitos → ácidos graxos livres se combinam com cálcio (saponificação)", "Infecção bacteriana direta dos adipócitos", "Apoptose induzida por citocinas"], correctIndex: 1, explanation: "A necrose gordurosa (esteatonecrose) resulta da ação de lipases pancreáticas liberadas na autodigestão do órgão. Os ácidos graxos liberados dos triglicerídeos dos adipócitos reagem com cálcio extracelular, formando sabões de cálcio (saponificação) — depósitos basófilos granulares brancos ('pingos de vela')." },
    ],
    keyPoints: ["Necrose gordurosa é tipo de necrose específico, quase exclusivo da pancreatite", "Saponificação (Ca²⁺ + ácidos graxos) causa hipocalcemia sistêmica — sinal de mau prognóstico", "Lipase sérica é mais sensível e específica que amilase para diagnóstico de pancreatite aguda", "Depósitos basófilos de saponificação na histologia = 'pingos de vela' na macroscopia cirúrgica", "Causas mais comuns: litíase biliar (40%) e alcoolismo (30%)"],
  },
  {
    id: 23,
    title: "Endometriose — Implante Peritoneal",
    category: "Sistema Reprodutor",
    scenario: "Mulher de 30 anos com dismenorreia progressiva incapacitante há 3 anos, dispareunia profunda e infertilidade (2 anos de tentativas sem sucesso). Exame: dor à mobilização uterina e nodulação em fundo de saco posterior. RM pélvica: endometrioma ovariano bilateral e nódulos no septo retovaginal. Laparoscopia: implantes peritoneais vermelho-escuros e aderências pélvicas densas. Biópsia de implante peritoneal realizada.",
    histologicalFindings: "Glândulas endometriais (epitélio cilíndrico simples com reação decidual parcial) e estroma endometrial citogênico (células fusiformes com núcleos ovais e escasso citoplasma) em localização ectópica (superfície peritoneal). Hemossiderófagos (macrófagos com pigmento hemossiderínicos) indicando sangramento cíclico prévio. Fibrose e aderências ao redor dos implantes.",
    questions: [
      { question: "Qual é o critério histológico mínimo para diagnóstico de endometriose?", options: ["Apenas glândulas ectópicas", "Presença de pelo menos dois dos três: glândulas endometriais, estroma endometrial ou hemossiderófagos em localização extrauterina", "Apenas fibrose peritoneal", "Células deciduais isoladas"], correctIndex: 1, explanation: "O diagnóstico histológico de endometriose requer a identificação de componentes endometriais (glândulas e/ou estroma) fora do útero. Na prática, a presença de glândulas + estroma é ideal, mas estroma + hemossiderófagos ou glândulas isoladas com características típicas também são aceitos." },
    ],
    keyPoints: ["Endometriose: presença de glândulas e estroma endometrial fora da cavidade uterina", "Os implantes respondem aos hormônios do ciclo menstrual → sangramento cíclico → inflamação → fibrose → aderências → dor", "Hemossiderófagos são macrófagos que fagocitaram hemoglobina de sangramentos cíclicos — patognomônicos", "Teoria da menstruação retrógrada (Sampson) é a mais aceita para a patogênese", "Endometrioma ovariano ('cisto chocolate') contém líquido espesso achocolatado (sangue degradado)"],
  },
  {
    id: 24,
    title: "Amiloidose Renal — Depósito de Amiloide AA",
    category: "Sistema Urinário",
    scenario: "Paciente de 55 anos com artrite reumatoide de longa duração (20 anos), mal controlada, desenvolve proteinúria crescente (6g/24h) e edema. Creatinina 2,1mg/dL. Biópsia renal realizada para investigação de síndrome nefrótica em doença inflamatória crônica.",
    histologicalFindings: "Depósitos amorfos eosinofílicos (material amiloide) no mesângio glomerular, paredes de arteríolas e membranas basais tubulares. Coloração com Vermelho Congo: depósitos coram em vermelho-alaranjado e apresentam birrefringência verde-maçã sob luz polarizada. IHQ: proteína amiloide A (AA) positiva nos depósitos.",
    questions: [
      { question: "Qual coloração é diagnóstica para amiloide?", options: ["PAS", "Tricrômico de Masson", "Vermelho Congo com birrefringência verde-maçã sob luz polarizada", "Azul de toluidina"], correctIndex: 2, explanation: "O Vermelho Congo é a coloração padrão-ouro para amiloide. Os depósitos coram em vermelho-alaranjado à luz convencional e exibem birrefringência verde-maçã patognomônica sob luz polarizada, devido à estrutura em folhas β-pregueadas das fibrilas amiloides." },
    ],
    keyPoints: ["Amiloidose AA (secundária) ocorre em doenças inflamatórias crônicas — a proteína SAA (amiloide sérica A) é reagente de fase aguda", "Vermelho Congo + birrefringência verde-maçã sob luz polarizada = diagnóstico de amiloide", "Amiloidose AL (primária): cadeias leves de imunoglobulinas (mieloma, gamopatias)", "Os depósitos amiloides são fibrilas em conformação de folhas β-pregueadas cruzadas", "Rim é o órgão mais comumente afetado na amiloidose sistêmica"],
  },
  {
    id: 25,
    title: "Carcinoma Ductal Invasivo da Mama",
    category: "Sistema Reprodutor",
    scenario: "Mulher de 55 anos, pós-menopausa, detecta nódulo mamário esquerdo em autoexame. Mamografia: nódulo espiculado de 2,5cm em QSE com microcalcificações pleomórficas agrupadas (BI-RADS 5). Core biopsy (biópsia percutânea com agulha grossa) realizada.",
    histologicalFindings: "Proliferação de células epiteliais ductais atípicas formando cordões, ninhos e túbulos irregulares invadindo o estroma. Pleomorfismo nuclear marcado com nucléolos proeminentes. Mitoses frequentes (grau nuclear 3). Ausência de camada de células mioepiteliais ao redor dos ninhos invasivos (confirmada por IHQ: p63 e CK5/6 negativos na periferia tumoral). Reação desmoplásica estromal intensa. IHQ: RE (+, 90%), RP (+, 70%), HER2 (-), Ki-67 20%.",
    questions: [
      { question: "Qual achado histológico confirma que o carcinoma é invasivo e não in situ?", options: ["Presença de mitoses", "Ausência de camada de células mioepiteliais ao redor dos ninhos tumorais (invasão estromal)", "Pleomorfismo nuclear", "Presença de necrose comedônica"], correctIndex: 1, explanation: "A ausência da camada de células mioepiteliais (demonstrada por IHQ com p63, CK5/6 ou calponina negativos) ao redor dos ninhos tumorais confirma invasão estromal — diferenciando carcinoma invasivo do in situ, onde a camada mioepitelial está preservada." },
    ],
    keyPoints: ["Carcinoma ductal invasivo (CDI) é o tipo histológico mais comum (70-80% dos cânceres de mama)", "A perda da camada mioepitelial (p63-/CK5/6-) é o marcador de invasão estromal", "Classificação molecular: Luminal A (RE+/HER2-/Ki-67 baixo), Luminal B, HER2-enriched, Basal-like (triplo-negativo)", "Grau histológico de Nottingham (Elston-Ellis): formação tubular + pleomorfismo nuclear + contagem mitótica", "Espiculação mamográfica corresponde à reação desmoplásica estromal (fibrose induzida pelo tumor)"],
  },
];

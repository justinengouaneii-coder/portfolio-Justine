// =========================================================================
// i18n.js — versions française / italienne / anglaise du site
//
// - Le texte FRANÇAIS reste écrit directement dans index.html.
// - Le texte ITALIEN est dans TRANSLATIONS.it, l'ANGLAIS dans TRANSLATIONS.en.
// - Dans index.html, chaque élément traduit porte une clé :
//     data-i18n="cle"             -> remplace le contenu de l'élément
//     data-i18n-alt="cle"         -> remplace l'attribut alt (images)
//     data-i18n-aria-label="cle"  -> remplace l'attribut aria-label
//     data-i18n-content="cle"     -> remplace l'attribut content (balises meta)
//
// Pour modifier un texte italien ou anglais : changez sa valeur ci-dessous.
// Pour ajouter un texte : ajoutez data-i18n="nouvelle.cle" dans index.html
// puis "nouvelle.cle": "..." dans TRANSLATIONS.it ET TRANSLATIONS.en.
//
// Liens directs (à mettre sur un CV, LinkedIn...) :
//   https://portfolio-justine-zeta.vercel.app/?lang=it
//   https://portfolio-justine-zeta.vercel.app/?lang=en
//   https://portfolio-justine-zeta.vercel.app/?lang=it#projects
// =========================================================================

(function () {
  "use strict";

  const SUPPORTED = ["fr", "it", "en"];
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "portfolio-lang";

  const TRANSLATIONS = {
    // Textes générés par script.js (le reste du français est dans index.html)
    fr: {
      "form.sending": "Envoi en cours...",
      "form.success": "Message envoyé, merci ! Je vous réponds rapidement.",
      "form.error": "Une erreur est survenue. Réessayez ou écrivez-moi directement par email.",
    },

    it: {
      // --- En-tête de page (onglet du navigateur, Google, LinkedIn) ---
      "meta.title": "Justine Ngouane II Kenfack — Consulente BI &amp; Data Analyst Power BI | SQL Server, DAX",
      "meta.description": "Justine Ngouane II Kenfack, Consulente BI &amp; Data Analyst Power BI, specializzata in Power BI, SQL Server e DAX. Portfolio di progetti di business intelligence per aziende, PMI e ONG.",
      "meta.ogTitle": "Justine Ngouane II Kenfack — Consulente BI &amp; Data Analyst Power BI",
      "meta.ogDescription": "Portfolio di data analyst: Power BI, SQL Server, DAX e gestione di progetti di business intelligence.",

      // --- Navigation ---
      "nav.menu": "Apri il menu",
      "nav.about": "Chi sono",
      "nav.skills": "Competenze",
      "nav.projects": "Progetti",
      "nav.contact": "Contatti",

      // --- Hero ---
      "hero.eyebrow": "Consulente BI &amp; Data Analyst Power BI — disponibile per incarichi",
      "hero.tagline": "Realizzo dashboard Power BI affidabili a partire da dati consolidati in un unico punto di riferimento, perché i vostri comitati di direzione discutano di strategia e non di chi ha il numero giusto.",
      "hero.ctaProjects": "Vedi i miei progetti",
      "hero.ctaContact": "Contattami",

      // --- À propos ---
      "about.photoAlt": "Ritratto di Justine Ngouane II Kenfack, Data Analyst",
      "about.title": "Chi sono",
      "about.p1": "Consulente BI &amp; Data Analyst Power BI, con sede a Roma. Dopo una formazione giuridica (Laurea in Giurisprudenza e Laurea Magistrale in Diritto commerciale presso l'Università degli Studi di Roma La Sapienza), ha lavorato per sei anni come analista fiscale prima di riorientarsi verso la Business Intelligence, un percorso consolidato da una certificazione in BI conseguita nel giugno 2023.",
      "about.p2": "Dal 2023 ha affiancato Habentis Data Solution a Parigi, poi Ambra System a Roma, nella raccolta dei requisiti di business, nella redazione di specifiche funzionali e nello sviluppo di dashboard direzionali. La sua doppia competenza tecnica (SQL Server, SSAS, SSRS, DAX, Power BI Services) e metodologica (Agile, Scrum, UML) le permette di fare da ponte tra i team di business e i team tecnici. Trilingue (francese, italiano, inglese), è inoltre impegnata nel mondo associativo, in particolare come presidente dell'Associazione delle Donne Camerunesi in Italia (ASFECAI).",

      // --- Compétences ---
      "skills.title": "Competenze",
      "skills.bi": "Analisi &amp; reporting BI",
      "skills.db": "Database",
      "skills.prog": "Programmazione",
      "skills.method": "Metodologia &amp; gestione di progetto",
      "skills.ai": "IA applicata",
      "skills.automation": "Automazione",

      // --- Projets (cartes) ---
      "projects.title": "Progetti",
      "projects.details": "Vedi i dettagli",

      // --- Modales ---
      "modal.close": "Chiudi",
      "modal.problem": "Problema",
      "modal.method": "Metodo",
      "modal.result": "Risultato",

      // --- Projet 1 : CongoTopFashion ---
      "p1.alt": "Anteprima della dashboard CongoTopFashion: fatturato per negozio e segmentazione clienti",
      "p1.title": "Dashboard direzionale globale — CongoTopFashion",
      "p1.summary": "Progettazione di una dashboard che riunisce oltre 25 aree di business (clienti, prodotti, negozi, magazzino, marketing, logistica...) per unificare il controllo direzionale di CongoTopFashion in un'unica vista d'insieme per la direzione.",
      "p1.problem": "Questo progetto rientra nella modernizzazione del controllo direzionale di CongoTopFashion, un'azienda strutturata attorno a numerose entità operative: clienti, prodotti, categorie, sottocategorie, marchi, fornitori, dipendenti, negozi, ordini, scorte, promozioni, campagne marketing, obiettivi commerciali, consegne, resi, ecc. L'obiettivo era costruire una dashboard globale per la direzione, in grado di centralizzare e analizzare tutti i dati aziendali in una vista unificata. Il file sorgente contiene oltre 25 fogli tematici, ciascuno dedicato a un'area di business specifica (KPI globali, KPI annuali, analisi delle categorie, analisi dei negozi, analisi RFM dei clienti, analisi marketing, analisi logistica dei resi, analisi dei fornitori, analisi delle scorte, ecc.).",
      "p1.method": "Con Excel ho costruito indicatori di fatturato per negozio e per segmento, oltre a una ripartizione dei motivi di reso, a partire dagli oltre 25 fogli sorgente.",
      "p1.result": "L'analisi ha rivelato che il canale e-commerce genera il fatturato più alto di tutti i segmenti e che i problemi di taglia sono il principale motivo di reso: due evidenze che hanno orientato direttamente le priorità d'azione della direzione.",

      // --- Projet 2 : Centres de santé ---
      "p2.alt": "Anteprima della dashboard di monitoraggio delle scorte della rete di centri sanitari",
      "p2.title": "Monitoraggio delle scorte — Rete di centri sanitari",
      "p2.summary": "Controllo delle scorte di una rete di 5 centri sanitari (gennaio-marzo 2026), per dare alla direzione una visione chiara delle rotture di stock, dei rischi di carenza, delle eccedenze e della qualità dei dati inseriti.",
      "p2.problem": "Questo progetto riguarda il controllo delle scorte di una rete di 5 centri sanitari nel periodo da gennaio a marzo 2026. L'obiettivo era fornire alla direzione una visione chiara e affidabile dei consumi, delle rotture di stock, dei rischi di carenza, delle eccedenze e della qualità dei dati inseriti.",
      "p2.method": "Con Excel ho analizzato il consumo mensile delle scorte, il consumo totale per centro e la copertura delle scorte per centro, ho individuato il centro più a rischio e ho monitorato le rotture di stock dichiarate.",
      "p2.result": "L'analisi ha individuato il Centro 1 come il più a rischio, con scorte in calo continuo per tre mesi (85 → 72 → 37), segnalando una rottura di stock imminente prima ancora che si verificasse. Una rottura di stock confermata è stata inoltre registrata nel Centro 5 a febbraio, a conferma dell'affidabilità del monitoraggio messo in atto per anticipare questo tipo di incidente.",

      // --- Projet 3 : Gusto Events Catering ---
      "p3.alt": "Anteprima della dashboard di analisi dei margini di Gusto Events Catering",
      "p3.title": "Analisi e ottimizzazione dei margini — Gusto Events Catering",
      "p3.summary": "Analisi della redditività per segmento di attività (Corporate, Private, Institutional) per un'azienda di catering belga, al fine di individuare leve di ottimizzazione dei margini di fronte all'aumento del costo delle materie prime.",
      "p3.problem": "Gusto Events Catering è un attore di primo piano del catering in Belgio, attivo in tre segmenti: eventi aziendali (Corporate), matrimoni e feste private (Private) e consegna di pasti a istituzioni e scuole (Institutional). Di fronte a una concorrenza crescente nel 2025-2026 e all'aumento dei costi delle materie prime, la direzione voleva ottimizzare i margini senza peggiorare la soddisfazione dei clienti.",
      "p3.method": "Con Power BI ho analizzato il fatturato per regione, per cliente, per mese e per tipo di evento, poi ho confrontato il costo totale per tipo di evento per individuare i segmenti più redditizi e quelli che pesavano sul margine complessivo.",
      "p3.result": "L'analisi ha rivelato che gli eventi VIP, pur avendo i costi più alti dei tre segmenti, generano anche il fatturato più elevato, orientando la direzione verso una scelta mirata su questo segmento piuttosto che verso una riduzione uniforme dei costi.",

      // --- Projet 4 : Baraka Energies ---
      "p4.alt": "Anteprima della dashboard di performance commerciale di Baraka Energies: quattro indicatori e l'andamento mensile del fatturato con la sua media mobile",
      "p4.title": "Performance commerciale e obiettivi — Baraka Energies",
      "p4.summary": "Riprogettazione di un report Power BI sulle vendite di apparecchiature solari in una ventina di paesi africani: quattro KPI, titoli che traggono una conclusione e una sola informazione in evidenza per ogni visual, per leggere la performance in pochi secondi.",
      "p4.problem": "Baraka Energies distribuisce kit solari, batterie e apparecchi a bassa tensione in una ventina di paesi africani. Il suo report di vendita allineava una decina di indicatori su sfondo scuro, senza gerarchia né conclusioni: la direzione non riusciva a capire a colpo d'occhio se l'attività stesse crescendo, né dove intervenire.",
      "p4.method": "In Power BI (formato PBIP) ho ridotto la panoramica a quattro indicatori — fatturato, margine, percentuale di margine e crescita cumulata rispetto all'anno precedente — e a un unico grande visual: l'andamento mensile del fatturato con la media mobile a tre mesi. Ho creato un tema JSON con i colori del logo, reso grigio ogni visual lasciando a colori un solo elemento, riscritto ogni titolo come una frase che trae una conclusione e aggiunto la data dei dati a piè di pagina. Sul modello, ho scritto in DAX le misure di margine e di crescita cumulata e corretto le misure che mostravano −100% nei mesi senza vendite.",
      "p4.result": "Il report ora si legge in pochi secondi: il fatturato 2026 cresce del 21% in nove mesi, tre prodotti realizzano i due terzi delle vendite e la Nigeria pesa per il 16% del fatturato. Mostra inoltre che nessun paese raggiunge il proprio obiettivo (91% di raggiungimento complessivo, tra l'88% e il 93% a seconda del paese): uno scarto così omogeneo suggerisce obiettivi fissati troppo in alto ovunque, più che un problema specifico di un mercato.",

      // --- Projet 5 : BIG EVENTS ---
      "p5.alt": "Anteprima della dashboard BIG EVENTS: quattro indicatori chiave, andamento mensile del fatturato rispetto all'anno precedente, fatturato per regione e per tipo di evento e performance dei commerciali rispetto all'obiettivo",
      "p5.title": "Report di certificazione Power BI — BIG EVENTS Catering",
      "p5.summary": "Report di certificazione realizzato dall'inizio alla fine per un'azienda di catering per eventi presente in 5 regioni francesi: modello a stella, pulizia dei dati con Power Query, misure DAX, drill-through, tooltip personalizzato e titoli che traggono una conclusione.",
      "p5.problem": "Per la mia certificazione Power BI ho realizzato un progetto completo su BIG EVENTS, un'azienda di catering per eventi (organizzazione fittizia creata per questo progetto) attiva in 5 regioni e 18 città francesi: seminari, serate di gala, matrimoni, fiere. La direzione commerciale doveva monitorare il fatturato, il margine e il raggiungimento degli obiettivi di sei commerciali nel periodo 2023-2025, a partire da dati grezzi imperfetti (valori mancanti, duplicati, spazi superflui).",
      "p5.method": "Ho progettato un modello a stella (una tabella dei fatti di 3.600 vendite e sei dimensioni), pulito i dati in Power Query (tipi di dati, 45 duplicati, valori mancanti ricalcolati), creato una tabella Calendario contrassegnata come tabella date e scritto una ventina di misure DAX: fatturato, margine, scontrino medio, confronto con l'anno precedente, cumulato da inizio anno (YTD), raggiungimento dell'obiettivo ripartito pro rata e classifica dei clienti. Il report Power BI comprende una panoramica, una pagina di dettaglio commerciale accessibile tramite drill-through, un tooltip personalizzato per regione e titoli dinamici che enunciano la conclusione di ogni visual in base ai filtri.",
      "p5.result": "Il fatturato 2025 raggiunge 6,4 M€, in crescita del 10,8% rispetto al 2024, e cinque commerciali su sei superano il proprio obiettivo (109% complessivo). L'Île-de-France concentra il 47% del fatturato. Soprattutto, le serate di gala sono il primo tipo di evento per fatturato (1,68 M€) ma hanno il margine più basso (23,6% contro una media del 30,2%): una leva di prezzo prioritaria per la direzione.",

      // --- Contact ---
      "contact.title": "Contatti",
      "contact.intro": "Disponibile per incarichi freelance o per una posizione da data analyst: non esitate a contattarmi.",
      "form.name": "Nome",
      "form.message": "Messaggio",
      "form.send": "Invia",
      "form.sending": "Invio in corso...",
      "form.success": "Messaggio inviato, grazie! Vi risponderò al più presto.",
      "form.error": "Si è verificato un errore. Riprovate o scrivetemi direttamente via email.",

      // --- Footer ---
      "footer.rights": "Tutti i diritti riservati.",
      "footer.credit": "Sito creato con Claude Code",
    },

    en: {
      // --- Page header (browser tab, Google, LinkedIn) ---
      "meta.title": "Justine Ngouane II Kenfack — Data Analyst &amp; BI Business Consultant | Power BI, SQL Server, DAX",
      "meta.description": "Justine Ngouane II Kenfack, BI business consultant and Data Analyst specialising in Power BI, SQL Server and DAX. Portfolio of business intelligence projects for companies, SMEs and NGOs.",
      "meta.ogTitle": "Justine Ngouane II Kenfack — Data Analyst &amp; BI Business Consultant",
      "meta.ogDescription": "Data analyst portfolio: Power BI, SQL Server, DAX and business intelligence project management.",

      // --- Navigation ---
      "nav.menu": "Open the menu",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      // --- Hero ---
      "hero.eyebrow": "BI Business Consultant &amp; Data Analyst — available for assignments",
      "hero.tagline": "I build reliable Power BI dashboards from data consolidated into a single source of truth, so your leadership meetings discuss strategy, not who has the right number.",
      "hero.ctaProjects": "See my projects",
      "hero.ctaContact": "Get in touch",

      // --- About ---
      "about.photoAlt": "Portrait of Justine Ngouane II Kenfack, Data Analyst",
      "about.title": "About",
      "about.p1": "BI business consultant and Data Analyst specialising in Power BI, based in Rome. After a legal education (Bachelor's degree in Law and Master's degree in Business Law at the Università degli Studi di Roma La Sapienza), she first worked as a tax analyst for six years before moving into Business Intelligence, a transition consolidated by a BI certification obtained in June 2023.",
      "about.p2": "Since 2023, she has supported Habentis Data Solution in Paris, then Ambra System in Rome, gathering business requirements, writing functional specifications and developing management dashboards. Her combined technical (SQL Server, SSAS, SSRS, DAX, Power BI Services) and methodological (Agile, Scrum, UML) expertise lets her bridge business and technical teams. Trilingual (French, Italian, English), she is also active in community life, notably as president of the Association of Cameroonian Women in Italy (ASFECAI).",

      // --- Skills ---
      "skills.title": "Skills",
      "skills.bi": "BI analysis &amp; reporting",
      "skills.db": "Databases",
      "skills.prog": "Programming",
      "skills.method": "Methodology &amp; project management",
      "skills.ai": "Applied AI",
      "skills.automation": "Automation",

      // --- Projects (cards) ---
      "projects.title": "Projects",
      "projects.details": "View details",

      // --- Modals ---
      "modal.close": "Close",
      "modal.problem": "Problem",
      "modal.method": "Method",
      "modal.result": "Result",

      // --- Project 1: CongoTopFashion ---
      "p1.alt": "Preview of the CongoTopFashion dashboard: revenue by store and customer segmentation",
      "p1.title": "Company-wide management dashboard — CongoTopFashion",
      "p1.summary": "Design of a dashboard bringing together more than 25 business areas (customers, products, stores, inventory, marketing, logistics...) to unify CongoTopFashion's decision-making in a single overview for management.",
      "p1.problem": "This project was part of modernising CongoTopFashion's management reporting. The company is organised around many operational entities: customers, products, categories, subcategories, brands, suppliers, employees, stores, orders, inventory, promotions, marketing campaigns, sales targets, deliveries, returns, etc. The goal was to build a company-wide dashboard for management, able to centralise and analyse all of the company's data in a unified view. The source file contains more than 25 themed sheets, each dedicated to a specific business area (overall KPIs, annual KPIs, category analysis, store analysis, RFM customer analysis, marketing analysis, returns logistics analysis, supplier analysis, inventory analysis, etc.).",
      "p1.method": "Using Excel, I built revenue indicators by store and by segment, along with a breakdown of return reasons, from the more than 25 source sheets.",
      "p1.result": "The analysis showed that the e-commerce channel generates the highest revenue of all segments, and that sizing issues are the main reason for returns — two findings that directly shaped management's priorities for action.",

      // --- Project 2: Health centres ---
      "p2.alt": "Preview of the inventory monitoring dashboard for the network of health centres",
      "p2.title": "Inventory monitoring — Network of health centres",
      "p2.summary": "Inventory management for a network of 5 health centres (January–March 2026), giving management a clear view of stock-outs, shortage risks, overstock and the quality of the data entered.",
      "p2.problem": "This project covered inventory management for a network of 5 health centres from January to March 2026. The goal was to give management a clear and reliable view of consumption, stock-outs, shortage risks and overstock, as well as the quality of the data entered.",
      "p2.method": "Using Excel, I analysed monthly stock consumption, total consumption per centre and stock coverage per centre, identified the most at-risk centre and tracked reported stock-outs.",
      "p2.result": "The analysis identified Centre 1 as the most at risk, with stock falling steadily over three months (85 → 72 → 37), flagging an imminent stock-out before it even happened. A confirmed stock-out was also recorded at Centre 5 in February, confirming that the monitoring put in place reliably anticipates this kind of incident.",

      // --- Project 3: Gusto Events Catering ---
      "p3.alt": "Preview of the Gusto Events Catering margin analysis dashboard",
      "p3.title": "Margin analysis and optimisation — Gusto Events Catering",
      "p3.summary": "Profitability analysis by business segment (Corporate, Private, Institutional) for a Belgian caterer, to identify ways to improve margins in the face of rising food costs.",
      "p3.problem": "Gusto Events Catering is a major catering company in Belgium, active in three segments: corporate events (Corporate), weddings and private parties (Private), and meal delivery to institutions and schools (Institutional). Facing increased competition in 2025–2026 and rising raw material costs, management wanted to improve margins without hurting customer satisfaction.",
      "p3.method": "Using Power BI, I analysed revenue by region, customer, month and event type, then compared total cost by event type to identify the most profitable segments and those weighing on the overall margin.",
      "p3.result": "The analysis showed that VIP events, despite having the highest costs of the three segments, also generate the most revenue — steering management towards a targeted decision on this segment rather than across-the-board cost cuts.",

      // --- Project 4: Baraka Energies ---
      "p4.alt": "Preview of the Baraka Energies sales performance dashboard: four indicators and monthly revenue trend with its moving average",
      "p4.title": "Sales performance and targets — Baraka Energies",
      "p4.summary": "Redesign of a Power BI report on solar equipment sales across some twenty African countries: four KPIs, titles that state the conclusion and a single highlighted insight per visual, so performance can be read in seconds.",
      "p4.problem": "Baraka Energies distributes solar kits, batteries and low-voltage appliances in some twenty African countries. Its sales report lined up about ten indicators on a dark background, with no hierarchy and no conclusions: management could not see at a glance whether the business was growing, or where to act.",
      "p4.method": "In Power BI (PBIP format), I reduced the overview to four indicators — revenue, margin, margin rate and year-to-date growth vs the previous year — and a single large visual: monthly revenue with its three-month moving average. I created a JSON theme in the logo's colours, turned every visual grey except for one highlighted element, rewrote each title as a sentence that states the conclusion and added the data date in the footer. On the model side, I wrote the margin and cumulative growth measures in DAX and fixed the measures that showed −100% for months with no sales.",
      "p4.result": "The report can now be read in seconds: 2026 revenue is up 21% over nine months, three products account for two thirds of sales and Nigeria represents 16% of revenue. It also shows that no country reaches its target (91% achievement overall, between 88% and 93% depending on the country): such a uniform gap suggests targets were set too high everywhere, rather than a problem specific to one market.",

      // --- Project 5: BIG EVENTS ---
      "p5.alt": "Preview of the BIG EVENTS dashboard: four key indicators, monthly revenue vs previous year, revenue by region and by event type, and sales rep performance vs target",
      "p5.title": "Power BI certification report — BIG EVENTS Catering",
      "p5.summary": "End-to-end certification report for an event caterer operating in 5 French regions: star schema, Power Query data cleaning, DAX measures, drill-through, custom tooltip and titles that state the conclusion.",
      "p5.problem": "For my Power BI certification, I carried out a complete project for BIG EVENTS, an event caterer (a fictitious organisation created for this project) operating in 5 regions and 18 French cities: seminars, galas, weddings and trade shows. The sales department needed to track revenue, margin and target achievement for six sales reps over 2023–2025, from imperfect raw data (blank values, duplicates, stray spaces).",
      "p5.method": "I designed a star schema (a fact table of 3,600 sales and six dimensions), cleaned the data in Power Query (data types, 45 duplicates, recalculated blank values), created a Calendar table marked as a date table and wrote around twenty DAX measures: revenue, margin, average order value, year-over-year comparison, year-to-date totals, prorated target achievement and customer ranking. The Power BI report includes an overview page, a sales detail page reached through drill-through, a custom tooltip by region, and dynamic titles that state each visual's conclusion based on the filters.",
      "p5.result": "2025 revenue reaches €6.4M, up 10.8% on 2024, and five of the six sales reps exceed their target (109% overall). Île-de-France accounts for 47% of revenue. Above all, gala evenings are the top event type by revenue (€1.68M) but have the lowest margin (23.6% vs a 30.2% average): a priority pricing lever for management.",

      // --- Contact ---
      "contact.title": "Contact",
      "contact.intro": "Available for freelance assignments or a data analyst position — feel free to get in touch.",
      "form.name": "Name",
      "form.message": "Message",
      "form.send": "Send",
      "form.sending": "Sending...",
      "form.success": "Message sent, thank you! I'll get back to you shortly.",
      "form.error": "Something went wrong. Please try again or email me directly.",

      // --- Footer ---
      "footer.rights": "All rights reserved.",
      "footer.credit": "Site built with Claude Code",
    },
  };

  // Les attributs traduits, avec l'attribut HTML qu'ils remplacent
  const ATTRS = [
    ["data-i18n-alt", "alt"],
    ["data-i18n-aria-label", "aria-label"],
    ["data-i18n-content", "content"],
  ];

  // Mémorise le texte français d'origine écrit dans index.html
  function captureOriginals() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.dataset.i18nFr === undefined) el.dataset.i18nFr = el.innerHTML;
    });
    ATTRS.forEach(([keyAttr, target]) => {
      document.querySelectorAll(`[${keyAttr}]`).forEach((el) => {
        const store = `data-i18n-fr-${target}`;
        if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(target) || "");
      });
    });
  }

  let currentLang = DEFAULT_LANG;

  // Traduction d'une clé, avec repli sur le français si elle manque
  function t(key) {
    const dict = TRANSLATIONS[currentLang] || {};
    if (dict[key] !== undefined) return dict[key];
    return TRANSLATIONS.fr[key] !== undefined ? TRANSLATIONS.fr[key] : key;
  }

  // Applique le texte de la langue choisie (français : texte d'origine)
  function decode(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function apply(lang) {
    currentLang = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
    const dict = currentLang === DEFAULT_LANG ? {} : TRANSLATIONS[currentLang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      el.innerHTML = value !== undefined ? value : el.dataset.i18nFr;
    });

    ATTRS.forEach(([keyAttr, target]) => {
      document.querySelectorAll(`[${keyAttr}]`).forEach((el) => {
        const value = dict[el.getAttribute(keyAttr)];
        const original = el.getAttribute(`data-i18n-fr-${target}`);
        el.setAttribute(target, value !== undefined ? decode(value) : original);
      });
    });

    // L'onglet <title> contient du texte brut : on décode les &amp;
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = decode(titleEl.innerHTML);

    document.documentElement.lang = currentLang;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-current", active ? "true" : "false");
    });

    // Efface un éventuel message du formulaire resté dans l'autre langue
    const note = document.getElementById("formNote");
    if (note) note.textContent = "";
  }

  // Langue au chargement : ?lang= dans l'adresse > choix mémorisé >
  // langue du navigateur (italien ou anglais) > français
  function initialLang() {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl && SUPPORTED.includes(fromUrl)) return fromUrl;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible : on ignore */ }

    const browser = (navigator.language || "").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT_LANG;
  }

  function setLang(lang) {
    apply(lang);
    try { localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) { /* ignore */ }

    // Met l'adresse à jour (?lang=it) sans recharger, en gardant l'ancre #...
    const url = new URL(window.location.href);
    if (currentLang === DEFAULT_LANG) url.searchParams.delete("lang");
    else url.searchParams.set("lang", currentLang);
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function init() {
    captureOriginals();
    apply(initialLang());

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setLang(btn.dataset.lang);
      });
    });
  }

  // Accessible depuis script.js (messages du formulaire)
  window.i18n = { t, setLang, get lang() { return currentLang; } };

  // Le script est chargé en fin de <body> : la page est déjà prête,
  // on traduit tout de suite pour éviter un flash du texte français.
  init();
})();

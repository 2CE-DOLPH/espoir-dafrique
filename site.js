const S=SITE;
const pageName=document.body.dataset.page;
const root=document.querySelector('#app');
const number=value=>value.toLocaleString('fr-FR');
const image=(name,alt,className='')=>`<div class="im ${className}"><img src="assets/images/${name}" alt="${alt}" loading="lazy"></div>`;
const iconPaths={
book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>',
ball:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/>',
monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
lang:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>',
cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
pin:'<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
menu:'<path d="M4 7h16M4 12h16M4 17h16"/>'
};
const icon=name=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]}</svg>`;
const heading=(title,description='')=>`<div class="hd rv"><h2>${title}</h2>${description?`<p>${description}</p>`:''}</div>`;
const section=(content,className='')=>`<section class="sec ${className}"><div class="wrap">${content}</div></section>`;
const callToAction=()=>`<div class="wrap"><div class="cta rv"><p class="eyebrow">Un projet à imaginer ensemble</p><h2>Chaque parcours commence par une rencontre.</h2><p>Les inscriptions et les coordonnées seront précisées après validation du projet par l'établissement.</p><a class="btn" href="contact.html">Découvrir les étapes d'admission</a></div></div>`;

const pages={
home:()=>`<section class="hero"><div class="wrap hc">
<p class="eyebrow">Un projet éducatif à Dubréka</p>
<h1>${S.tagline}</h1>
<p class="hero-copy">${S.intro}</p>
<div class="btns"><a class="btn" href="ecole.html">Découvrir notre vision</a><a class="btn ghost" href="frais.html">Explorer les parcours</a></div>
<div class="art"><div class="blobframe"><img src="assets/images/${S.images.hero}" alt="Illustration d'un campus imaginé pour Espoir d'Afrique"></div><div class="medal"><img src="assets/images/${S.images.logo}" alt="Logo du Groupe Scolaire Espoir d'Afrique"></div><div class="chip">Travail · Discipline · Succès</div></div>
</div></section>
<div class="mq"><div>${Array(5).fill(S.motto.join(' <b>✦</b> ')+' <b>✦</b>').join(' ')}</div></div>
${section(`<div class="path"><div class="rv"><p class="eyebrow">Un chemin pour grandir</p><h2>De l'éveil aux grands projets.</h2><p class="muted">Des étapes adaptées à l'âge de l'enfant, de ses premières découvertes à la préparation de son avenir.</p><a class="text-link" href="ecole.html">Notre approche pédagogique →</a></div><div>${S.levels.map(level=>`<a class="row rv" href="frais.html#${level.id}"><span class="nm">${level.name}</span><span class="sb">${level.sub}</span></a>`).join('')}</div></div>`)}
${section(heading('Une école qui donne envie d’apprendre','Un projet centré sur la curiosité, la confiance et le plaisir de progresser.')+`<div class="grid">${S.atouts.map(item=>`<article class="card rv"><div class="ico">${icon(item[0])}</div><h3>${item[1]}</h3></article>`).join('')}</div>`,'soft')}
${section(heading('Apprendre autrement','Des idées d’ateliers à construire avec les élèves et les familles.')+`<div class="grid">${S.programmes.map(item=>`<article class="card program rv"><p class="eyebrow">${item[0]}</p><p>${item[1]}</p></article>`).join('')}</div>`)}
${callToAction()}`,

ecole:()=>`<div class="wrap page-intro"><p class="eyebrow rv">Notre projet d’école</p><h1 class="rv">Un cadre pour apprendre, essayer et s’épanouir.</h1><p class="rv">${S.intro}</p></div>
<div class="wrap"><figure class="rv">${image(S.images.about,'Illustration d’une classe claire et accueillante','wide')}</figure></div>
${section(`<div class="two"><div class="rv"><p class="eyebrow">Notre promesse</p><h2>Voir le potentiel avant les résultats.</h2><p class="muted">Espoir d'Afrique imagine une école où l'exigence va de pair avec l'encouragement : on apprend à faire des efforts, à demander de l'aide et à être fier de ses progrès.</p></div><ul class="facts rv"><li>${icon('cap')}Des parcours de l'éveil au lycée</li><li>${icon('lang')}Une ouverture sur les langues et les cultures</li><li>${icon('spark')}Des projets concrets et créatifs</li><li>${icon('users')}Une relation de confiance avec les familles</li></ul></div>`)}
${section(heading('Nos repères','Trois idées simples pour faire grandir une communauté scolaire.')+`<div class="vals">${S.pillars.map(item=>`<article class="rv"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div>`,'dark')}
${section(heading('Des espaces imaginés pour apprendre','Les lieux et équipements présentés sont des propositions visuelles, pas une description de locaux existants.')+`<div class="grid">${S.spaces.map(item=>`<article class="space-card rv">${image(item.image,item.alt)}<div class="cap">${icon(item.icon)}${item.name}</div></article>`).join('')}</div>`,'soft')}
${section(heading('Une tenue aux couleurs de l’école','Une idée de tenue proposée, à valider avec l’établissement.')+`<div class="uniform-note rv"><span class="uniform-swatch"></span><div><h3>Vert, clair et confortable</h3><p>Un polo clair avec une touche de vert : une proposition simple, pensée pour le quotidien des élèves.</p></div></div>`)}
${callToAction()}`,

equipe:()=>`<div class="wrap page-intro"><p class="eyebrow rv">Ensemble, pour chaque élève</p><h1 class="rv">Une équipe qui accompagne et encourage.</h1><p class="rv">Les fonctions et les personnes seront présentées après confirmation de l'équipe de l'établissement.</p></div>
${section(heading('La communauté éducative','Un projet ambitieux se construit avec des adultes présents, des familles partenaires et des élèves acteurs.')+`<div class="grid team-grid">${S.team.map((item,index)=>`<article class="card rv"><span class="team-number">0${index+1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div>`,'soft')}
${section(heading('Notre façon d’accompagner','Des engagements pédagogiques proposés pour le projet Espoir d’Afrique.')+`<div class="grid">${S.programmes.map(item=>`<article class="program rv"><div class="ico">${icon('spark')}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div>`)}
${callToAction()}`,

vie:()=>`<div class="wrap page-intro"><p class="eyebrow rv">Au quotidien</p><h1 class="rv">La vie scolaire, c’est aussi apprendre en dehors de la classe.</h1><p class="rv">Une vision de la vie d’école nourrie par la lecture, les expériences, le mouvement et les projets collectifs.</p></div>
${section(heading('Des espaces pour explorer','Illustrations de lieux souhaités pour la vie de l’école.')+`<div class="grid">${S.spaces.map(item=>`<article class="space-card rv">${image(item.image,item.alt)}<div class="cap">${icon(item.icon)}${item.name}</div></article>`).join('')}</div>`,'soft')}
${section(heading('La galerie des idées','Des images illustratives pour donner une première couleur au projet.')+`<div class="grid gallery">${S.images.gallery.map(item=>`<figure class="rv">${image(item.image,item.alt)}<figcaption>${item.title}</figcaption></figure>`).join('')}</div>`)}
${section(heading('Des activités à faire grandir','Des pistes à adapter au programme et aux moyens de l’école.')+`<div class="grid">${S.programmes.map(item=>`<article class="card rv"><div class="ico">${icon('spark')}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div>`,'soft')}
${callToAction()}`,

frais:()=>`<div class="wrap page-intro"><p class="eyebrow rv">Repères pour les familles</p><h1 class="rv">Des parcours et des tarifs faciles à comprendre.</h1><p class="rv">Les montants ci-dessous sont des estimations fictives, créées pour cette maquette. Ils ne constituent pas les tarifs officiels de l’établissement.</p></div>
${section(heading('Proposition de frais annuels','Montants indicatifs en francs guinéens (GNF), répartis en trois tranches.')+`<div class="grid fee-grid">${S.levels.map(level=>`<article class="card fee-card rv" id="${level.id}" style="--c:${level.color}"><p class="eyebrow">${level.ages}</p><h3>${level.name}</h3><p>${level.sub}</p><strong>${number(level.fee)} <small>GNF / an</small></strong><div class="fee-splits">${level.t.map((amount,index)=>`<span>${index+1}<sup>e</sup> tranche <b>${number(amount)}</b></span>`).join('')}</div><p class="uniform-copy">${level.uniform}</p></article>`).join('')}</div><p class="note rv">${S.notice}</p>`,'soft')}
${section(heading('Préparer la rentrée','Une proposition de démarche, à confirmer avec l’équipe éducative.')+`<div class="grid steps">${S.steps.map(step=>`<article class="card rv"><h3>${step}</h3></article>`).join('')}</div><div class="extras rv"><h3>Frais et matériel complémentaires</h3>${S.extras.map(item=>`<div><span>${item[0]}</span><b>${item[1]}</b></div>`).join('')}</div>`)}
${callToAction()}`,

contact:()=>`<div class="wrap page-intro"><p class="eyebrow rv">Parlons du projet</p><h1 class="rv">L’école se prépare avec vous.</h1><p class="rv">Avant d’ouvrir les inscriptions, les informations pratiques devront être confirmées par l'établissement.</p></div>
${section(`<div class="two contact-layout"><article class="card rv"><div class="ico">${icon('pin')}</div><p class="eyebrow">Implantation envisagée</p><h2>${S.address}</h2><p>${S.contactNote}</p><span class="status-tag">Informations à confirmer</span></article><article class="contact-panel rv"><p class="eyebrow">Prochaine étape</p><h2>Donner vie à Espoir d’Afrique.</h2><p>Confirmer l’adresse, les contacts de l’école, les niveaux ouverts, les tarifs et les modalités d’inscription avant toute diffusion publique.</p><a class="btn" href="ecole.html">Revoir le projet</a></article></div>`,'soft')}
${section(heading('Les étapes proposées')+`<div class="grid steps">${S.steps.map(step=>`<article class="card rv"><h3>${step}</h3></article>`).join('')}</div>`)}
`
};

const nav=[
['index','Accueil'],
['ecole','Notre vision'],
['equipe','Notre équipe'],
['vie','Vie scolaire'],
['frais','Parcours & tarifs'],
['contact','Admissions']
];
const current=location.pathname.split('/').pop().replace('.html','')||'index';
document.documentElement.style.setProperty('--p',S.colors.primary);
document.documentElement.style.setProperty('--a',S.colors.accent);
document.title=`${S.short} | ${S.name}`;

root.innerHTML=`<header class="nav"><a class="br" href="index.html"><img src="assets/images/${S.images.logo}" alt="">${S.short}</a><nav id="nv">${nav.map(item=>`<a href="${item[0]}.html" class="${item[0]===current?'on':''}">${item[1]}</a>`).join('')}</nav><a class="btn sm" href="contact.html">Le projet</a><button class="burger" aria-label="Ouvrir le menu" onclick="document.querySelector('#nv').classList.toggle('open')">${icon('menu')}</button></header><aside class="notice" role="note">${S.notice}</aside>${(pages[pageName]||pages.home)()}<footer><div class="wrap"><div><img src="assets/images/${S.images.logo}" alt=""><h3>${S.name}</h3><p>${S.motto.join(' · ')}</p></div><div><h3>Explorer</h3>${nav.map(item=>`<a href="${item[0]}.html">${item[1]}</a>`).join('')}</div><div><h3>Projet d’école</h3><p>${S.address}</p><p>${S.contactNote}</p></div></div><p class="cp">© ${new Date().getFullYear()} ${S.name} · Projet de présentation à valider</p></footer>`;

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('in');
observer.unobserve(entry.target);
}
}),{threshold:.12});
document.querySelectorAll('.rv').forEach((element,index)=>{
element.style.transitionDelay=`${index%4*80}ms`;
observer.observe(element);
});
const preloader=document.querySelector('#pre');
if(preloader)setTimeout(()=>preloader.classList.add('off'),1000);

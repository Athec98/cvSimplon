// Données dynamiques
const badjiProfile = {
  photo: "momo.jpg",
  nom: "Mamadou Lamine Badji",
  titre: "Développeur Multimédia | Passionné du Web et Numérique",
  contact: "Guédiawaye | +221 77 831 45 21 | badjimamadoulamine216@gmail.com",
  sections: [
    { titre: "À propos", contenu: ["Je suis développeur Multimédia, passionné par le web et les technologies numériques. Mon expertise me permet de mener à bien des projets créatifs et techniques."] },
    { titre: "Expériences professionnelles", contenu: ["Stagiaire Monteur Vidéo – Go Media (Juil. 2024 – Oct. 2024)", "Développeur Web Stagiaire – Jabba Groupe (Nov. 2021 – Mai 2022)", "Surveillant Permanent – UN-CHK (2025 - Présent)", "Commission d’Accueil – ENO Guédiawaye (2020 – 2023)"] },
    { titre: "Formations", contenu: ["Master Multimédia Communication Digitale – UN-CHK (2022 – 2023)", "Licence Dev Web/Mobile/Gaming – UN-CHK (2017 – 2021)", "Certificat Informatique & Internet – FORCE-N (Mars 2023)", "Formation Montage Vidéo – Kino Téranga (Oct. 2020)", "Baccalauréat L2 – Antoine de Padoue (2016 – 2017)"] },
    { titre: "Compétences", contenu: ["Développement Web et Mobile", "Community manager", "Montage vidéo et production multimédia", "Suite Microsoft Office / Google Suite", "Créativité et innovation interactive", "Gestion de projet"] },
    { titre: "Langues", contenu: ["Français – courant", "Wolof – courant", "Anglais – écrit"] },
    { titre: "Centres d’intérêt", contenu: ["Codage", "Sport", "Bénévolat"] }
  ]
};

// Injection header
const header = document.getElementById("badji-header");
header.innerHTML = `
  <div class="badji-header-left">
    <img src="${badjiProfile.photo}" alt="Photo de profil" class="badji-profil">
  </div>
  <div class="badji-header-right">
    <h1>${badjiProfile.nom}</h1>
    <h2>${badjiProfile.titre}</h2>
    <ul>
      <li>📍 ${badjiProfile.contact.split("|")[0].trim()}</li>
      <li>📞 ${badjiProfile.contact.split("|")[1].trim()}</li>
      <li>📧 ${badjiProfile.contact.split("|")[2].trim()}</li>
    </ul>
  </div>
`;

// Injection sections
const content = document.getElementById("badji-content");
badjiProfile.sections.forEach(section => {
  const sec = document.createElement("div");
  sec.classList.add("badji-section");
  sec.innerHTML = `
    <div class="badji-section-title">${section.titre}</div>
    <ul>${section.contenu.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
  content.appendChild(sec);
});

// Bouton mode clair/sombre avec suggestion
const themeBtn = document.getElementById("badji-theme-btn");
const suggestion = document.getElementById("badji-suggestion");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("badji-dark");
  document.body.classList.toggle("badji-light");

  if(document.body.classList.contains("badji-dark")){
    themeBtn.textContent = "🌙";
    suggestion.textContent = "Mode sombre activé";
  } else {
    themeBtn.textContent = "☀️";
    suggestion.textContent = "Mode clair activé";
  }

  suggestion.classList.add("show");
  setTimeout(() => suggestion.classList.remove("show"), 1200);
});

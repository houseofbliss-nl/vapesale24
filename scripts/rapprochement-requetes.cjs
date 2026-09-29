// Rapprochement requêtes Lituaniennes ↔ catalogue + pages VAPELT.
// Pour chaque requête réelle du marché LT, cherche les produits qui peuvent la
// capter (title/vendor/handle/description) et la page catégorie cible.
// Usage : node scripts/rapprochement-requetes.cjs  (> rapport à la racine)
const fs = require("fs");
const path = require("path");

const HERE = __dirname;
const data = JSON.parse(fs.readFileSync(path.join(HERE, "../src/data/products.json"), "utf-8"));
const products = data.products;
const categories = JSON.parse(fs.readFileSync(path.join(HERE, "../src/data/categories.json"), "utf-8"));

const REQUETES = [
  // Requêtes réelles GSC 90 j (pos indiquée)
  ["10mg vape juice", 3.0, ["10mg", "e-skystis", "10 mg"]],
  ["esco bar", 7.0, ["esco", "escobar"]],
  ["caliburn kapsule", 7.0, ["caliburn", "u well", "uwell"]],
  ["nikotino maišeliai", 19.5, ["nikotino maišeliai", "nicotine pouches", "pagalv"]],
  ["nikotino pagalveles", 11.0, ["pagalv", "maišeliai"]],
  ["15000 puffs", 5.0, ["15000", "15k", "mt15000"]],
  ["9000 blackberry", 68.0, ["9000", "blackberry", "gervuog", "berry"]],
  ["al fakher crown bar", 64.8, ["al fakher", "crown"]],
  // Requêtes marché LT à fort volume potentiel
  ["vienkartines cigaretes", null, ["vienkartin", "disposable"]],
  ["elf bar", null, ["elf bar", "elfbar", "elf-b", "elf"]],
  ["lost mary", null, ["lost mary", "lostmary"]],
  ["elektronine cigarete", null, ["elektronin", "cigaret"]],
  ["e-skystis pirkti", null, ["e-skysti", "e-liquid", "e-juice"]],
  ["nikotino pagalvėlės velo", null, ["velo", "pagalv"]],
  ["vape lietuva", null, ["vape"]],
  ["puff lietuva", null, ["puff"]],
  ["uzpildomi podai", null, ["pod", "uzpild", "refill"]],
  ["oxva xlim", null, ["oxva", "xlim"]],
  ["smok nord", null, ["smok", "nord"]],
  ["geek bar", null, ["geek", "geek bar"]],
  ["raz vape", null, ["raz"]],
  ["0 nikotino", null, ["0mg", "0 mg", "zero nicotine", "nicotine free"]],
];

function norm(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Index libre normalisé (sans accents) : title + vendor + handle + description courte.
const idx = products.map((p) => ({
  p,
  hay: norm(`${p.title} ${p.vendor} ${p.handle} ${(p.description || "").slice(0, 300)}`),
}));

console.log("# RAPPROCHEMENT REQUÊTES LT ↔ PRODUITS VAPELT");
console.log(`Catalogue : ${products.length} produits\n`);
const line = "─".repeat(100);
console.log(line);

const rows = [];
for (const [requete, pos, kws] of REQUETES) {
  const hits = [];
  for (const { p, hay } of idx) {
    if (kws.some((k) => hay.includes(norm(k)))) hits.push(p);
    if (hits.length >= 8) break;
  }
  const catIds = new Set();
  const catScore = new Map();
  for (const c of categories) {
    const n = hits.filter((h) => c.handles?.includes(h.handle)).length;
    if (n > 0) catScore.set(c.label, n);
  }
  rows.push({ requete, pos, n: hits.length, hits, catScore });
}

rows.forEach((r) => {
  console.log(`\n## ${r.requete}${r.pos ? `   (pos actuelle GSC : ${r.pos})` : ""}`);
  console.log(`Produits matchants : ${r.n}`);
  console.log("Top:", r.hits.slice(0, 4).map((p) => p.title.slice(0, 70)).join("\n     • "));
});

console.log(line);
console.log("\n## SYNTHÈSE : écarts à combler");
rows.forEach((r) => {
  if (r.n === 0) console.log(`🔴 AUCUN produit pour « ${r.requete} »`);
  else if (r.n < 3) console.log(`🟠 Faible couverture (${r.n}) pour « ${r.requete} »`);
});

// ── Fichier rapport
fs.writeFileSync(path.join(HERE, "rapprochement-requetes.md"),
  ["# Rapprochement requêtes LT ↔ produits VAPELT\n"].concat(
    rows.map((r) => `## ${r.requete} (couverture ${r.n})\n` +
      r.hits.slice(0, 6).map((p) => `- ${p.title}`).join("\n"))
  ).join("\n"));
console.log("\n→ rapport complet : scripts/rapprochement-requetes.md");
#!/usr/bin/env node
/**
 * Patch post-typegen : remplace les types Reference générés par sanity typegen
 * par les types complets correspondants.
 *
 * Pourquoi : sanity typegen génère XxxReference = { _ref, _type } (ref non-dépliée).
 * Mais dans les queries GROQ on utilise asset-> / items[]-> donc les données
 * sont toujours des objets complets. Ce patch aligne les types TS avec la réalité.
 *
 * Usage : node scripts/patch-sanity-types.js [chemin/vers/sanity.types.ts]
 */

const fs = require("fs");
const path = require("path");

// Liste des patches : [nom du type Reference, type complet de remplacement]
const PATCHES = [
  // Assets — toujours dépliés avec asset->
  ["SanityImageAssetReference", "SanityImageAsset"],
  ["SanityFileAssetReference", "SanityFileAsset"],
  ["MuxVideoAssetReference", "MuxVideoAsset"],
  // Documents — dépliés avec -> dans les modules list
  ["PageModulaireReference", "PageModulaire"],
  ["TagReference", "Tag"],
  ["TalentReference", "Talent"],
  ["HomeReference", "Home"],
];

const studioFile = path.resolve(__dirname, "../sanity.types.ts");
const webFile = path.resolve(__dirname, "../../web/app/types/sanity.types.ts");

// Copier le fichier studio vers web avant de patcher
if (fs.existsSync(studioFile)) {
  fs.copyFileSync(studioFile, webFile);
  console.log(`📋 Copié : ${studioFile} → ${webFile}`);
}

const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [studioFile, webFile];

for (const filePath of targets) {
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Fichier introuvable, ignoré : ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let patched = false;

  for (const [refType, fullType] of PATCHES) {
    const regex = new RegExp(
      `export type ${refType} = \\{[\\s\\S]*?\\};?\\n`
    );
    if (regex.test(content)) {
      content = content.replace(
        regex,
        `export type ${refType} = ${fullType}\n`
      );
      patched = true;
    } else {
      console.warn(`  ⚠️  ${refType} non trouvé dans ${path.basename(filePath)}`);
    }
  }

  if (patched) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Patché : ${filePath}`);
  }
}

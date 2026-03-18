---
name: sanity-typegen-patch-workflow
description: Workflow de patch post-typegen pour aligner les types TS avec les queries GROQ
type: project
---

Le nouveau `sanity typegen` génère des `XxxReference = { _ref, _type }` non-dépliés, alors que les queries GROQ utilisent `asset->` / `items[]->` et retournent les objets complets. L'ancien `sanity-codegen` générait `SanityReference<SanityImageAsset>` qui était déjà expanded.

**Solution mise en place** : script de patch post-typegen `studio/scripts/patch-sanity-types.js`

**Why:** Pas question de réécrire tous les composants existants — le patch aligne les types automatiquement.

**How to apply:** Après chaque `sanity typegen generate`, lancer `yarn typegen` dans le studio (script dans `studio/package.json`). Le script :
1. Copie `studio/sanity.types.ts` → `web/app/types/sanity.types.ts`
2. Patche les deux fichiers : remplace chaque `XxxReference = { _ref... }` par `XxxReference = XxxType`

**Patches actifs :**
- `SanityImageAssetReference` → `SanityImageAsset`
- `SanityFileAssetReference` → `SanityFileAsset`
- `MuxVideoAssetReference` → `MuxVideoAsset`
- `PageModulaireReference` → `PageModulaire`
- `TagReference` → `Tag`
- `TalentReference` → `Talent`
- `HomeReference` → `Home`

**Bug connu corrigé :** Le typegen génère sans `;` après `}` (ex: `}\n` pas `};\n`). Le regex du script utilise `};?\\n` pour gérer les deux formats.

**Si un nouveau type Reference apparaît** : ajouter une entrée dans le tableau `PATCHES` du script `studio/scripts/patch-sanity-types.js`.

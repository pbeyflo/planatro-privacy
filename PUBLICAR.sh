#!/usr/bin/env bash
# Publica la política de privacidad de Planatro en GitHub Pages.
# Uso: 1) gh auth login   2) bash PUBLICAR.sh
set -e
cd "$(dirname "$0")"

REPO="planatro-privacy"

# Identidad local del commit (solo para este repo)
git config user.email "pbeyer.flores@gmail.com"
git config user.name "Pedro Beyer"

git add -A
git commit -q -m "Política de privacidad de Planatro" || echo "(nada que commitear)"
git branch -M main

# Crea el repo en tu cuenta y sube el contenido
gh repo create "$REPO" --public --source . --remote origin --push

USER=$(gh api user --jq .login)

# Activa GitHub Pages sobre la rama main (raíz)
gh api -X POST "repos/$USER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" 2>/dev/null \
  || gh api -X PUT "repos/$USER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" 2>/dev/null \
  || true

echo ""
echo "================================================================"
echo " ✅ Publicado. Tu política de privacidad estará en:"
echo "     https://$USER.github.io/$REPO/"
echo " (GitHub Pages tarda 1-2 min en activarse la primera vez.)"
echo " Pega esa URL en Play Console → Política de privacidad."
echo "================================================================"

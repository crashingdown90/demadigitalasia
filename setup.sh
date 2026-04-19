#!/usr/bin/env bash
source ~/.zshrc 2>/dev/null
rm -f package.json
npx -y create-next-app@latest tmp-app --js --app --src-dir --import-alias "@/*" --no-tailwind --eslint --use-npm --yes
mv tmp-app/* .
mv tmp-app/.eslintrc.json .
mv tmp-app/.gitignore .
rm -rf tmp-app

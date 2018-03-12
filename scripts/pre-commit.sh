
set -o errexit #abort if any command fails

# Modified from the shell referenced in https://github.com/prettier/prettier
changedFiles=$(git diff --cached --name-only --diff-filter=ACM | grep '.\([tj]sx\?\|css\|graphql\)$' | tr '\n' ' ')
[ -z "$changedFiles" ] && exit 0

echo "Running prettier"
echo "$changedFiles" | xargs ./node_modules/.bin/prettier --write
prettierExitCode=$?

# Exit with bad code for the prettier
if [ $prettierExitCode -ne 0 ]
then
  exit $prettierExitCode
fi


echo "Re committing files"
echo "$changedFiles" | xargs git add

exit 0

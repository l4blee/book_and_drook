# Step 1
clear && echo '[Build | 1/4]: Moving Svelte files' && sleep 0.5

if [ -d './build' ]
then
    rm -rf './build'
fi
mkdir './build' && cp -r '../svelte/build' './front'

# Step 2
echo '[Build | 2/4]: Preparing for TypeScript compilation' && sleep 0.5

for f in $(find ./front -name '*.js')
do 
    echo "$(echo -n -e '// @ts-ignore\n'; cat $f)" > $f
done
cp -r './front' './build'
rm -rf './front'

# Step 3
echo '[Build | 3/4]: Compiling TypeScript...' && sleep 0.5

npx tsc

# End
echo '[Build 4/4]: Done!'
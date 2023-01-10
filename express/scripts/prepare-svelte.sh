if [ -d './front' ]
then
    rm -rf './front'
fi

cp -r '../svelte/build' './front'

for f in $(find ./front -name '*.js')
do
    echo "$(echo -n -e '// @ts-ignore\n'; cat $f)" > $f
done
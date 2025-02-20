npm install -g typescript
tsc -v
tsc --init

tsc --watch


"rootDir": "./src", /_ Specify the root folder within your source files. _/
"target": "ES6",  
 /_ Modules _/
"module": "commonjs",
"rootDir": "./src",  
 "outDir": "./out",  
 "removeComments": true,  
 //"noEmitOnError": true,

/_ -----------------------------------_/ /_ option shift a _/



** TypeScript, değişkenlere ve fonksiyonlara tip güvenliği ekler. Bu, hataları daha erken yakalamana yardımcı olur.

**TypeScript'te | işareti, union type (birleşim tipi) oluşturmak için kullanılır. Yani, bir değişkenin birden fazla türü alabileceğini belirtmek için kullanılır. Bu, bir değişkenin birkaç farklı türde değer kabul etmesini sağlar.
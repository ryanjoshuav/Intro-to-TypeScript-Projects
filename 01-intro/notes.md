<!-- *to compile main.ts to main.js -->

tsc main.ts

<!-- *to automatically compile every change -->

tsc main.ts -w

<!-- *editing the tsconfig -->

find:
"rootDir": "./"

edit it to:
"rootDir": "./src",

for output folder, find:
"outDir": "./",

edit it to:
"outDir": "./build/js",

then to watch for all modifications, use
tsc -w

<!-- *to make typescript compile the ts files which is on the src directory -->

at the end of tsconfig file, add: "include": ["src"]

...
/_ Completeness _/
// "skipDefaultLibCheck": true, /_ Skip type checking .d.ts files that are included with TypeScript. _/
"skipLibCheck": true /_ Skip type checking all .d.ts files. _/
},
"include": ["src"]
}

<!-- *to make typescript not compile if it has errors -->

enable:
"noEmitOnError": true,

or use:
tsc --noEmitOnError -w

<!-- *type vs interface -->

Functions:
-using type
type mathFunction =(a: number, b: number) => number

-using interface
interface mathFunction{
(a:number, b:number):number
}

<!--  -->

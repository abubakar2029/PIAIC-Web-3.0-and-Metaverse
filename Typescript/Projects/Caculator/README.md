npm i @types/inquirer -D (run this command in start)
Change in settings

tsconfig.json=>ES2022(line:14)
module=>"NodeNext"
add this one line after module
"moduleResolution":"NodeNext"

Then in pkg.json

add
"type":"module"
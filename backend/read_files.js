const testFolder = '__dirname/../public/exmpl_resumes';
const fs = require('fs');

let all_names = [];
let counter=0;
fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
  all_names[counter]=String(file);
  counter++;
});

let result={"rsmes_names":all_names};
fs.writeFileSync("src/pages/file_names.json", JSON.stringify(result));
const testFolder = '__dirname/../public/exmpl_resumes';
const fs = require('fs');

/**
 * obtain the text in file as one string object
 * @param  {string} fileName [directory of text file]
 * @return {string}          [contents of fileName]
 */
const extract_text = (fileName) => {
  // obtain the text in file as one string object
  const process = require('process');
  try
  {
      let data = fs.readFileSync("public/exmpl_resumes/"+fileName, 'utf8')
      return data;
  }
  catch (err)
  {
      console.error(err)
      return "?????"
  }
};

// obtain all resume file names
let all_names = [];
let counter=0;
fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
  all_names[counter]=String(file);
  counter++;
});

// read content of all resume files
let all_cntnt = [];
for(let i in all_names)
  all_cntnt[i]=extract_text(all_names[i]);

// put everything in 1 json
let result={"rsmes_names":all_names,"rsmes_cntnt":all_cntnt};
fs.writeFileSync("src/pages/file_names.json", JSON.stringify(result));
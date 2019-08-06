const fs = require('fs');

let solutionFiles = [];
fs.readdir('./javascript/', (err, files) => {
  if (err) throw err;
  const content = `---
home: true
heroImage: https://i.loli.net/2018/09/28/5bae311eae1a0.png
description: I've solved ${files.length} / 1138 problems
footer: MIT Licensed | Copyright © 2018-present Colafornia
---`
  solutionFiles = files;
  console.log('all solutions:', files);
  genHomeContent(content);
})

const genHomeContent = (content) => {
  fs.writeFile('docs/README.md', content, (err) => {
    if (err) throw err;
    console.log('docs/README.md has been saved!');
    genSolutionDocs();
  })
}

const genSolutionDocs = () => {
  solutionFiles.forEach((fileName) => {
    const content = `# ${fileName.slice(0, -3)}

<<< @/javascript/${fileName}{0}`
    fs.writeFile(`docs/source/${fileName.slice(0, -2) + 'md'}`, content, (err) => {
      if (err) throw err;
      console.log(`${fileName.slice(0, -2) + 'md'} has been saved!`);
    })
  })
}

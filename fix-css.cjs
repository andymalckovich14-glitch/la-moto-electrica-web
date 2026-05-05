const fs = require('fs');
const path = require('path');

function findAndProcess(dir) {
  let imports = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      imports = imports.concat(findAndProcess(fullPath));
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex = /import\s+['"](\.\/|\.\.\/)(.*\.css)['"];?\n/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const importPath = match[0];
        const relativeCssPath = match[1] + match[2];
        const absoluteCssPath = path.resolve(dir, relativeCssPath);
        
        const srcDir = path.join(__dirname, 'src');
        let relativeToSrc = path.relative(srcDir, absoluteCssPath).replace(/\\/g, '/');
        if (!relativeToSrc.startsWith('.')) {
          relativeToSrc = './' + relativeToSrc;
        }
        
        imports.push(`@import "${relativeToSrc}";`);
        content = content.replace(importPath, '');
      }
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
  return imports;
}

const newImports = findAndProcess(path.join(__dirname, 'src'));
if (newImports.length > 0) {
  const uniqueImports = [...new Set(newImports)];
  let indexCss = fs.readFileSync(path.join(__dirname, 'src', 'index.css'), 'utf8');
  const tailwindImport = '@import "tailwindcss";';
  if (indexCss.includes(tailwindImport)) {
    indexCss = indexCss.replace(tailwindImport, tailwindImport + '\n' + uniqueImports.join('\n') + '\n');
  } else {
    indexCss = uniqueImports.join('\n') + '\n' + indexCss;
  }
  fs.writeFileSync(path.join(__dirname, 'src', 'index.css'), indexCss, 'utf8');
  console.log('CSS imports moved to index.css successfully.');
} else {
  console.log('No CSS imports found.');
}

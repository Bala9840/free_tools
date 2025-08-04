const fs = require('fs');
const path = require('path');

// ✅ Your actual project directory
const targetDir = 'D:/_BJ/_Projects/web-tools-new/src';

function removeBOM(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) {
    fs.writeFileSync(filePath, content.slice(1), 'utf8');
    console.log(`✔ BOM removed from: ${filePath}`);
  }
}

function processDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (
      fullPath.endsWith('.tsx') ||
      fullPath.endsWith('.ts') ||
      fullPath.endsWith('.js') ||
      fullPath.endsWith('.jsx')
    ) {
      removeBOM(fullPath);
    }
  });
}

processDir(targetDir);

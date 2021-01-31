const fs = require('fs');
const path = require('path');

const str = `---\rsidebar: false\r---\r## 目录\r\r`;
fs.writeFileSync(path.resolve(__dirname, 'index.md'), str)

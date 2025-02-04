// place at : deploy/ghpages.js
// you can see more info at https://github.com/tschaub/gh-pages
import path from 'path';
import ghpages from 'gh-pages';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/ChiuAlfredo/seo_flyup_web.git',
    message: 'Auto-generated commit',
    dotfiles: true
};

const callback = err => {
    if (err) {
        console.error('部署失敗：', err);
        process.exit(1);
    }
    console.log('部署成功！');
};

// Use the project root directory to find the dist folder
ghpages.publish(path.resolve(__dirname, './dist'), options, callback);

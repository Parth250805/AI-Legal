import { readFileSync } from 'node:fs';

const configText = readFileSync(new URL('./config/.postcssrc.json', import.meta.url), 'utf8');

export default JSON.parse(configText);

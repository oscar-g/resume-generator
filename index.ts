import { writeFile } from 'fs';
import { renderFile } from 'pug';
import controller from './lib/controller';
import * as S from './lib/data-shape';
import data from './data';

const ctl = new controller(renderFile);
const output = ctl.render(data);

writeFile('./build/index.html', ctl.render(data), e => console.log);

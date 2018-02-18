import { renderFile } from 'pug';
import Controller from './lib/controller';
import * as S from './lib/data-shape';
import data from './data';

const ctl = new Controller(renderFile);
const output = ctl.render(data);

console.log("render output:", output);

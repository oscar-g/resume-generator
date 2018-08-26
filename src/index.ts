import { writeFile } from 'fs';
import { renderFile } from 'pug';
import { ControllerData as IResumeData } from './lib/data-shape';
import data from './../data';


export const generateHtml = (data: IResumeData): string => {
  return renderFile('./views/index.pug', data);
};

console.log(generateHtml(data));

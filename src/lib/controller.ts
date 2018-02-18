import * as S from './data-shape';

export default class Controller {
  tmplFn: (data: any) => string;

  constructor(fn: (a: string, b: any) => string) {
    // curry the template function
    this.tmplFn = (b: any) => fn(process.cwd() + `/index.pug`, b);

    return this;
  }

  render(data: S.ControllerData) {
    return this.tmplFn(data);
  }
}

import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // return component template
  toHtml() {
    return '';
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners();
  }
}

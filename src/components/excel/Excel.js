import {$} from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // // debug
      // if (component.name) {
      //   window['c' + component.name] = component;
      // }
      // // debug end
      $el.html(component.toHtml());
      $root.append($el);
      return component;
    })

    this.components.forEach((component) => component.init())

    return $root;
  }

  // eslint-disable-next-line no-tabs
  render() {
    // this.$el.insertAdjacentHTML('afterbegin', `<h1> test </h1>`)

    this.$el.append(this.getRoot())
  }
}

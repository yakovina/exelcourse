import {capitalize} from '@core/utils';


export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for domlistener')
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        // eslint-disable-next-line max-len
        throw new Error(
            `Method ${method} is not emplemented in ${this.name} Component`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method])
    })
  }

  // input => onInput

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      console.log(method)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

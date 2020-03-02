import Theme from './Theme';

class Light extends Theme {
  constructor() {
    super();
    if (!this.singletonInstance) {
      this.singletonInstance = this;
    }

    this.bgColor = '#FFF';
    this.textColor = '#333';
    this.fontFamily = 'Roboto, sans-serif';
    this.fontSize = '1.6rem';
    this.warning = '#ec9a29';
    this.error = '#a8201a';

    return this.singletonInstance;
  }
}

export default new Light();

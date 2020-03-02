import Theme from './Theme';

class Dark extends Theme {
  constructor() {
    super();
    if (!this.singletonInstance) {
      this.singletonInstance = this;
    }

    this.bgColor = '#333';
    this.textColor = '#FFF';
    this.fontFamily = 'Roboto, sans-serif';
    this.fontSize = '1.6rem';
    this.warning = '#ec9a29';
    this.error = '#a8201a';

    return this.singletonInstance;
  }
}

export default new Dark();

import Theme from './Theme';

class Dark extends Theme {
  constructor() {
    super();
    if (!this.singletonInstance) {
      this.singletonInstance = this;
    }

    this.bgColorPrimary = '#333';
    this.bgColorSecondary = 'blue';
    this.textColorPrimary = '#FFF';

    return this.singletonInstance;
  }
}

export default new Dark();

import Theme from './Theme';

class Light extends Theme {
  constructor() {
    super();
    if (!this.singletonInstance) {
      this.singletonInstance = this;
    }

    this.bgColorPrimary = '#FAFAFA';
    this.bgColorSecondary = 'yellow';
    this.textColorPrimary = '#333';

    return this.singletonInstance;
  }
}

export default new Light();

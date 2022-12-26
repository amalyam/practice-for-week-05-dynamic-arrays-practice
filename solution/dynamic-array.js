class DynamicArray extends Array {
  constructor(defaultSize = 4) {
    super();
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    this.length += 1;

    if (this.length === 1) {
      this.data[0] = val;
    } else {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
    }
  }
}

module.exports = DynamicArray;

const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  
  addLink(value = '') {
    const data = String(value);
    this.chain.push(`( ${data} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) ||position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    };
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const copy = [...this.chain];
    this.chain = [];
    return copy.join('~~');
  },
};

module.exports = {
  chainMaker,
};

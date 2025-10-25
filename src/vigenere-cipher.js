const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(behavior = true) {
    this.reverseMode = !behavior;
  }
  static values = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
  }
  encrypt(string, keyWord, option) {
    if (typeof string === 'undefined' || typeof keyWord === 'undefined') {
      throw new Error('Incorrect arguments!')
    };

    const str = String(string).toUpperCase();
    const key = String(keyWord).toUpperCase();
    let idx = 0;
    let res = '';
    const values = this.constructor.values;

    for (const char of str) {
      if (values[char] === undefined || values[key[idx]] === undefined) {
        res += char;
        continue;
        idx++
      }
      let cypheredChar = char.charCodeAt(0);
      if (option === undefined) {
        cypheredChar += values[key[idx]];
        if (cypheredChar > 90) cypheredChar -= 26;
      } else {
        cypheredChar -= values[key[idx]];
        if (cypheredChar < 65) cypheredChar += 26;
      }
      res += String.fromCharCode(cypheredChar);

      idx++;
      if (idx === key.length) idx = 0;
    }
    if (this.reverseMode) res = res.split('').reverse().join('');
    return res;
  }

  decrypt(string, keyWord) {
    return this.encrypt(string, keyWord, 1);
  }
}

const machine = new VigenereCipheringMachine();
console.log(machine.encrypt('abcde', 'b'));
console.log(machine.decrypt('bcdef', 'b'));

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

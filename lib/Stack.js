/**
 * Class => Stack
 * -----------------------------
 * Creates a stack data structure.
 *
 * A stack is a data structure that allows adding and removing elements in a particular order
 * Everytime an item is added, it goes to the top of the 'stack' Everytime an item is removed,
 * the item on the top of the stack is removed.  A stack is a LIFO (last in first out) structure.
 *
 * @private {object} _storage              Default value should be an empty object.
 * @private {number} _size                 Default value should be set 0.
 */
class Stack {
    constructor () {
        this._storage = {};
        this._size = 0;
    }
    size() {
        if (this._size === 0) {
            this._size = 0;
            return this._size;
        }
        else {
            return this._size;
        }

    }
    push(item) {
        let size = this._size;
        console.log('size', size);
        console.log('push size before', this._size);
        console.log('push item before', item);
        this._storage[size] = item;
        console.log('ts[ts]', this._storage[size]);
        this._size++;
        console.log('push ', this._storage);
        console.log('push size() after', this.size());
        console.log('');
        return this.size();
    }
    pop() {
        if (this._size > 0) {
            this._size--;
            let size = this._size;
            console.log('size', size);
            console.log('tsize', this._size);
            console.log('size()', this.size());
            console.log('ts[size]', this._storage[size]);
            let stor = this._storage[size];
            console.log('check ts[size]', this._storage[size]);
            let syze = this.size();
            console.log('pop ts before', this._storage)
            console.log('pop size before', this._size);
            console.log('syze', this._storage[syze]);
            delete this._storage[syze];
            console.log('pop storage after', this._storage)
            console.log('pop size after', this._size);
            console.log('stor', stor);
            console.log('');
            return stor;
        }
        else {
            return null;
        }
    }
}

  /**
   * Stack Class Method => size()
   * -----------------------------
   * Returns the size of the stack.
   *
   * @name size
   * @return {Number}
   */

  /**
   * Stack Class Method => push(item)
   * -----------------------------
   * Puts an item on top of the stack structure.
   *
   * @name push
   * @param item
   */

  /**
   * Stack Class Method => pop()
   * -----------------------------
   * Takes an item off the top of the stack and returns the item.
   *
   * @name pop
   * @return {Object}   Note that everything in javascript is an Object.
   */


module.exports = Stack;
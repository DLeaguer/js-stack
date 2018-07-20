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
    constructor (){
        this._storage = {};
        console.log('tstorage ', this._storage);
        this._size = 0;
        console.log('tsize ', this._size);
    }
    size() {
        return this._size;
    }
    push(item) {
        let size = this._size++;
        console.log('push size ', this._size );
        this._storage[size] = item;
        console.log('push storage ', this._storage);
    }
    pop() {
        console.log('pop size ', this._size);
        console.log('pop storage ', this._storage);
        if (this._size === 0) {
            return null;
        }
        else {
            delete this._storage[this._size];
            this._size--;
            console.log('delete pop ', this._storage[this._size]);
            return this._storage[this._size];
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
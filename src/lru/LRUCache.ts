import {LinkedNode} from './LinkedNode';

class LRUCache {
    #capacity: number;
    #head: LinkedNode;
    #tail: LinkedNode;
    #cache: Record<string, LinkedNode>;
    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#cache = {};
        this.#head = this.#tail = new LinkedNode({key: -1, value: -1});
    }

    get(key: number) {
      const node = this.#cache[key];
      if( !node ) return -1;

      this.update(key, node.value);
      return node.value;
    }

    put(key: number, value: number) {

      const node = this.#cache[key];

      if( node ) {
        return this.update(key, value);
      }

      if( !this.#capacity ){
        this.delete(this.#tail.previous);
      }

      const newNode = new LinkedNode({key, value});
      this.add(newNode);
    }

    add(node: LinkedNode) {
      node.next = this.#head;
      this.#head.previous = node;
      this.#head = node;
      this.#cache[node.key] =  node;
      this.#capacity--;
    }

    delete(node: LinkedNode) {

      node.next.previous = node.previous;

      if( node === this.#head ) {
        this.#head = node.next;
      } else {
        node.previous.next = node.next;
      }

      delete this.#cache[node.key];
      this.#capacity++;
      node.previous = null, node.next = null;
    }

    update(key: number, value: number) {
      const node = this.#cache[key];
      node.value = value;
      if( node === this.#head ) return;

      this.delete(node);
      this.add(node);
    }
}


const cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4

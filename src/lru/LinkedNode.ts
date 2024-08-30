export class LinkedNode {
  key: number;
  value: number;
  previous: LinkedNode | null;
  next: LinkedNode | null;
  constructor(args: {key: number, value: number}){
      this.key = args.key;
      this.value = args.value;
      this.previous = null;
      this.next = null;
  }
}

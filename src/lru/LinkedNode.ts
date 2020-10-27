export class LinkedNode {
  key: number;
  value: number;
  previous: LinkedNode;
  next: LinkedNode;
  constructor(args: {key: number, value: number}){
      this.key = args.key;
      this.value = args.value;
  }
}

import Array from "./Array";
import Item from "./Item";
import Iterator from "./Iterator";

class ArrayIterator implements Iterator<Item> {
    private index: number

    constructor(private array: Array) {
        this.index = -1 //의미가 없는 수자로 지정하고 있음.
    }

    next(): boolean {
        this.index++;
        return this.index < this.array.count
    }

    current(): Item {
        return this.array.getItem(this.index)
    }
}

export default ArrayIterator

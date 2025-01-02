// 동일한 항목의 데이터를 가지고 있는 집합을 컨테이너 또는 Aggregator라 한다. 
// Array, Linked List, Tree, Graph, Table...
// Aggregator의 종류에 따라서 데이터를 얻는 방법이 다른다. 
// 이를 하나의 통일된 방법으로 가져오기 위한 패턴이 iterator 패턴이다. 

import Array from "./Array"
import Item from "./Item"

const items = [
    new Item("쿠쿠다스", 2500),
    new Item("초코파이", 1800),
    new Item("새우깡", 1500),
    new Item("오예스", 2000)
]

const array = new Array(items)
const iter = array.iterator()

while(iter.next()) {
    const item = iter.current()

    const domItem = document.createElement("div")
    domItem.innerText = `${item.name} : ${item.cost}원`
    document.body.appendChild(domItem)

    domItem.classList.add("iterator-item")
}


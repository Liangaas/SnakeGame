const Node = (ele) => {
	this.ele = ele;
	this.next = null;
}

const Chain = () =>{
	let length = 0;
	let head = null;

	// 链表尾部增加一个Node (贪吃蛇吃到食物)
	this.append = (ele) =>{
		const node = new Node(ele);
		let current;
		if(head === null){
			head = node;
		}else{
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	}

	// 移除链表最后一个Node，链表头部增加一个新Node （贪吃蛇移动）
	this.move = (ele) => {
		// 在链表头增加一个Node
		const node = new Node(ele);
		let current;
		let prev;
		if(head === null){
			head = node;
			return;
		}else{
			current = head;
			node.next = head;
			head = node;
			while(current.next){
				prev= current;
				current = current.next;
			}
			prev.next = current.next;
		}
		// if(head === null){
		// 	head = node;
		// }else{
		// 	node.next = head;
		// 	head = node;
		// }
	}

	// 获取链表长度 （获取当前蛇身长度）
	this.getLength = () => {
		return length;
	}
}

export default Chain;
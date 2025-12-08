class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        if (!this.head) {
            return true;
        }
        return false;
    }
    append(data) {
        const newNode = new Node(data);
        let empty = this.isEmpty();
        if (empty) {
            this.head = newNode;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.previous = temp;
        }
        this.size++;
        return this;
    }
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let temp = this.head;
            temp.previous = newNode;
            newNode.next = temp;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            console.log(`Invalid input for position`);
            return;
        }
        if (position === 0) {
            return this.prepend(data);
        }
        if (position === this.size) {
            return this.append(data);
        }
        else {
            const newNode = new Node(data);
            let temp = this.head;
            let follower = null;
            for (let i = 0; i < position; i++) {
                follower = temp;
                temp = temp.next;
            }
            newNode.next = follower.next;
            newNode.previous = temp.previous;
            follower.next = newNode;
            temp.previous = newNode;
        }
        this.size++;
        return this;
    }
    toArray() {
        let empty = this.isEmpty();
        if (empty) {
            return [];
        }
        let temp = this.head;
        let storeValue = [];
        while (temp) {
            storeValue.push(temp.data);
            temp = temp.next;
        }
        return storeValue;
    }
    traverseForward() {
        let valueArray = this.toArray();
        if (valueArray.length === 0) {
            console.log(`The list is empty nothing to display`);
            return;
        }
        else {
            let display = `NULl<- - - `;
            valueArray.forEach((item, index) => {
                display += `${item} `;
                if (index !== valueArray.length - 1) {
                    display += `<= = => `
                }
            });
            display += ` - - ->NULL`;
            console.log(display);
        }
    }
    traverseBackward() {
        let valueArray = this.toArray();
        if (valueArray.length === 0) {
            console.log(`The list is empty nothing to display`);
            return;
        }
        else {
            let display = `NULL<- - - `;
            valueArray.reverse().forEach((item, index) => {
                display += `${item}`;
                if (index !== valueArray.length - 1) {
                    display += ` <= = => `;
                }
            });
            display += ` - - ->NULL`;
            console.log(display);
        }
    }
    removeFirst() {
        let empty = this.isEmpty();
        if (empty) {
            console.log(`The list is empty nothing to delete`);
            return;
        }
        let temp = this.head;
        this.head = temp.next;
        if (this.size !== 1) {
            this.head.previous = null;
        }
        temp.next = null;
        let value = temp.data;
        temp = null;
        this.size--;
        return value;
    }
    removeLast() {
        let empty = this.isEmpty();
        if (empty) {
            console.log(`The list is empty nothing to delete`);
            return;
        }
        let temp = this.head;
        let follower = null;
        while (temp.next) {
            follower = temp;
            temp = temp.next;
        }
        temp.previous = null;
        if (this.size !== 1) {
            follower.next = null;
        }
        if (this.size === 1) {
            this.head = null;
        }
        let value = temp.data;
        temp = null;
        this.size--;
        return value;
    }
    removeAt(position){
        let empty=this.isEmpty();
        if(empty){
            console.log(`The list is empty nothing to delete`);
            return;
        }
        if(position<0 || position>this.size-1){
            console.log(`Invalid input for position`);
            return;
        }
        if(position===0){
            return this.removeFirst();
        }
        else if(position===this.size-1){
            return this.removeLast();
        }
        else{
        let temp=this.head;
        let follower=null;
        for(let i=0; i<position; i++){
              follower=temp;
              temp=temp.next;
        }
        follower.next=temp.next;
        if(temp.next){
            let nextNode=temp.next;
            nextNode.previous=follower;
        }
        temp.next=null;
        temp.previous=null;
        let value=temp.data;
        temp=null;
        this.size--;
        return value;
    }
    }
    size(){
        return this.size;
    }
    linearSearch(target){
        let empty=this.isEmpty();
        if(empty){
            console.log('The list is empty');
            return;
        }
        let temp=this.head;
        while(temp){
            if(temp.data===target){
                return temp;
            }
            temp=temp.next;
        }
        return null;
    }
    insertionSort(){
        let empty=this.isEmpty();
        if(empty){
            console.log(`The list is empty`);
        }
        if(!this.head.next){
            return this;
        }
        let current=this.head.next;
        while(current){
            let key=current;
            let nextNode=current.next;
            let back=current.previous;
            while(back && back.data>key.data){
                back=back.previous;
            }
            if(back !== current){
                if(current.next){
                    current.next.previous=current.previous;
                }
                if(current.previous){
                    current.previous.next=current.next;
                }
                if(!back){
                    current.next=this.head;
                    this.head.previous=current;
                    current.previous=null;
                    this.head=current;
                }
                else{
                    current.next=back.next;
                    current.previous=back;
                    back.next.previous=current;
                    back.next=current;
                }
            }
            current=nextNode;
        }
        return this;
    }
     #getMiddle(start,end){
        let fast=start;
        let slow=start;
        while(fast!==end && fast.next!==end){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
     }
     binarySearch(target){
        this.insertionSort();
        let left=this.head;
        let right=null;
        while(left!==right){
            let mid=this.#getMiddle(left,right);
            if(mid.data===target){
                return mid;
            }
            else if(mid.data>target){
                right=mid;
            }
            else{
                left=mid.next;
            }
        }
        return null;
     }
}
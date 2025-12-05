class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.previous=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        if(!this.head){
            return true;
        }
        return false;
    }
}
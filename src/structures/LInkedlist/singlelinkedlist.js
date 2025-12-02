class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export class singlyLinkedList{
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
     append(data){
        const newNode=new Node(data);
        let empty=this.isEmpty();
        if(empty){
            this.head=newNode;
        }
        else{
            let temp=this.head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next=newNode;
        }
        this.size++;
        return this;
     }

}
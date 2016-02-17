Node InsertNth(Node head, int data, int position) {
    Node tmpHead = head;
    Node newNode = new Node();
    newNode.data = data;
    if (head == null) {
        newNode.next = null;
        return newNode;
    } else {
        if (position == 0) {
            newNode.next = tmpHead;
            return newNode;
        }
        for (int i = 0; i < position - 1 && tmpHead.next != null; i++) {
            tmpHead = tmpHead.next;
        }
        newNode.next = tmpHead.next;
        tmpHead.next = newNode;
        return head;
    }
}
Node Insert(Node head, int data) {
    if (head == null) {
        Node tmp = new Node();
        head = tmp;
        head.next = null;
        head.data = data;
        return head;
    } else {
        Node tmpHead = head;
        Node tail = new Node();
        tail.next = null;
        tail.data = data;
        while (head != null) {
            if (head.next == null) {
                head.next = tail;
                break;
            }
            head = head.next;
        }
        return tmpHead;
    }
}
Node Insert(Node head, int x) {
  if (head != null) {
    Node next = new Node();
    next.data = x;
    next.next = head;
    return next;
  } else {
    head = new Node();
    head.next = null;
    head.data = x;
    return head;
  }
}
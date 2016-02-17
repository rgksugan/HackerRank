Node Delete(Node head, int position) {
  if (head == null || head.next == null) {
    return null;
  } else {
    if (position == 0) {
      return head.next;
    }
    Node current = head.next;
    Node previous = head;
    int currentPosition = 1;
    while (current.next != null && currentPosition < position) {
      previous = current;
      current = current.next;
      currentPosition++;
    }
    previous.next = current.next;
    return head;
  }
}
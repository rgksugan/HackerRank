void Print(Node head) {
  while (head != null) {
    System.out.printf("%d\n", head.data);
    head = head.next;
  }
}
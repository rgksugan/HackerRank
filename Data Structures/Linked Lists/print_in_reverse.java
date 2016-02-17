void ReversePrint(Node head) {
    if (head != null){
        int a[]= new int[10];
        int i=0;
        while(head.next != null) {
            a[i] = head.data;
            head = head.next;
            i++;
        }
        a[i]=head.data;
        for(int j=i; j>=0; j--) {
            System.out.println(a[j]);
        }
    }
}
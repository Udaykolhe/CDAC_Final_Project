
public class QueueArray {
	int front;
	int rear;
	int max;
	int arr[];
	
	public QueueArray() {
		front=-1;
		rear=-1;
		max=10;
		arr=new int[max];
	}
	void Enqueue(int data) {
		if(rear==max-1) {
			System.out.println("List is full"); //Overflow case
		}else {
			rear++;
			arr[rear]=data;
			if(front==-1) {
				front=0;
			}
		}
	}
	public int Dequeue() {
		int val=0;
		if(front==-1) {
			System.out.println("Empty");
		}else {
			val=arr[front];
			arr[front]=0;
			if(front==rear) {
				front=rear=-1;
			}else {
				front++;
			}
			
		}
		return val;
	}
	void display()
	{
		if(front==-1)
		{
			System.out.println("queue empty");
		}
		else
		{
			System.out.println("Elements Are : ");
			for(int i=front;i<=rear;i++) {
				System.out.println(arr[i]);
			}
		}
	}

	public static void main(String[] args) {
		QueueArray qa=new QueueArray();
		qa.Enqueue(500);
		qa.Enqueue(600);
		qa.Enqueue(700);
		qa.Enqueue(800);
		qa.Enqueue(900);
		qa.display();
		System.out.println(qa.Dequeue() +" Deleted");
		System.out.println(qa.Dequeue() +" Deleted");
		System.out.println(qa.Dequeue() +" Deleted");
		qa.display();

	}

}

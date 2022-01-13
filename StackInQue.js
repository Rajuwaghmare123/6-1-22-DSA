 // Using 2 stacks implement a queue. 
 
 let stack1 = [];
 let stack2 = [];

 function enqueue(element) {
     stack1.push(element);
     console.log("Stack-1 elements are enqueue: ", stack1);
 }
 function dequeue() {
     if (stack2.length === 0) {
         while (stack1.length > 0) {
             let x = stack1.pop();
             stack2.push(x);
         }
     }
     console.log("Element after Dequeue: " + stack2.pop());
 }

 enqueue("a");
 enqueue("b");
 enqueue("c");
 dequeue();
 dequeue();
  
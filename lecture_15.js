//In this code we've 3 tasks Task-1 Task-2 Task-3 
//we'll console the 3 task normally for fist case of synchronus example

//in below example the Task-1 Task-2 and then  Task-3 run which is in sequence
// console.log(' Task-1')
// console.log(' Task-2')
// console.log(' Task-3')


//in below example the  Task-2 will need 2 seconds extra to complete so the  Task-1 and  Task-3
// will run first and then  Task-2 run which is the example of asynchronous program
// means task-1 and task-3 not waited for the complete of task-2

console.log(' Task-1')
setTimeout(()=>{
    console.log(' Task-2')

})
console.log(' Task-3')



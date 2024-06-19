
/*
*let todoList = [];

let inputValue = prompt('Enter your choice: \n1. Show all list\n2. Add task\n3. Delete task\n4. Quit app');

while(true){
    if(inputValue === 4){
        console.log('App has been quit');
        break;
    }
    if(inputValue === 1){
        console.log('<--- ****** --->');
        for(let i = 0; i < todoList.length; i++){
            console.log(i, todoList[i]);
        }
        console.log('<--- ****** --->');
    }else if(inputValue === 2){
        let addTask = prompt('Enter your task: ');
        todoList.push(addTask);
        console.log('Task added successfully.');
    }else if(inputValue === 3){
        let deleteIndex = prompt('Enter the task to delete: ');
        todoList.slice(deleteIndex, 1);
        console.log('Task removed successfully.');
    }

    console.log('Enter your choice: \n1. Show all list\n2. Add task\n3. Delete task\n4. Quit app');
}
*/
let todoList = [];
let insertInput = prompt('1. Show all\n2. Add\n3. Delete\n4. Quit');

while(true){
    if(insertInput == '4'){
        console.log('Quiting App!');
        break;
    }

    if(insertInput == '1'){
        console.log('---***---***---***---***---');
        for(let i = 0; i < todoList.length; i++){
            console.log(i, todoList[i]);
        }
    }else if(insertInput == '2'){
        console.log('---***---***---***---***---');
        let addTask = prompt('Enter todo list!');
        todoList.push(addTask);
        console.log('Task has been added!');
    }else if(insertInput == '3'){
        console.log('---***---***---***---');
        let deleteTask = prompt('Enter what to delete!');
        todoList.slice(deleteTask, 1);
        console.log('Task has been removed!');
    }

    insertInput = prompt('1. Show all\n2. Add\n3. Delete\n4. Quit');
}
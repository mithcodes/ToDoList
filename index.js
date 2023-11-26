// const item=document.querySelector("#item");
// const todobox=document.querySelector("#to-do-list")

// item.addEventListener(
//     "keyup",
//     function(event){
//         if(event.key==="Enter"){
//           addToDo(this.value);
//           this.value='';  
//         }
//     }
// )

// const addToDo=(item)=>{
//     const listItem=document.createElement('li');
//     listItem.innerHTML=`
// ${item}
// <i class="fas fa-items"></i>

//     `;
//     todobox.appendChild(listItem)
// }

// const item = document.querySelector("#item");
// const toDoBox = document.querySelector("#to-do-box");

// item.addEventListener(
//     "keyup",
//     function(event){
//         if(event.key==="Enter"){
//           addToDo(this.value);
//           this.value='';  
//         }
//     }
// )

// const addToDo = (itemText) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         ${itemText}
//         <i class="fas fa-times">
//             <button>remove</button>
//         </i>
//     `;
//     toDoBox.appendChild(listItem);

//     const removeButton = listItem.querySelector("button");
//     removeButton.addEventListener("click", function () {
//         removeToDoItem(listItem);
//     });
// };

// const removeToDoItem = (item) => {
//     item.remove();
// };


// const item = document.querySelector("#item");
// const toDoBox = document.querySelector("#to-do-box");

// item.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         addToDo(this.value);
//         this.value = '';
//     }
// });

// const addToDo = (itemText) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         ${itemText}
//         <button class="remove-button">remove</button>
//     `;
//     toDoBox.appendChild(listItem);

//     const removeButton = listItem.querySelector(".remove-button");
//     removeButton.addEventListener("click", function () {
//         removeToDoItem(listItem);
//     });
// };

// const removeToDoItem = (item) => {
//     item.remove();
// };


const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addToDo(this.value);
        this.value = '';
    }
});

const addToDo = (itemText) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${itemText}
        <button class="remove-button">remove</button>
    `;
    toDoBox.appendChild(listItem);

    const removeButton = listItem.querySelector(".remove-button");
    removeButton.addEventListener("click", function () {
        removeToDoItem(listItem);
    });
};

const removeToDoItem = (item) => {
    // Remove the "remove-button" class from the list item
    item.querySelector("button").classList.remove("remove-button");
    item.remove();
};

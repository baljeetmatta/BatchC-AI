// const listItems=document.querySelector("#listItems");
// const item=document.querySelector("#item");
// const addBtn=document.querySelector("#addBtn");

// addBtn.addEventListener("click",function(){

//    let liItem= document.createElement("li");
//     //<li></li>
//     liItem.innerText=item.value;

//     listItems.appendChild(liItem);


// })
let tasks = [];
let taskid = 1;

const taskname = document.querySelector("#taskname");
const taskContainer = document.querySelector("#taskContainer");
const addBtn = document.querySelector("#addBtn");

taskname.addEventListener("keyup", function (e) {
    //console.log("H");
    //console.log(e);

    if (e.key == "Enter") {
        //tasks.push(taskname.value);
        let task = {
            id: taskid,
            title: taskname.value,
            status: "Pending"
        }
        taskid++;
        tasks.push(task);

        addDom(task);
        taskname.value = "";
    }


})
addBtn.addEventListener("click", function () {
    addDom();

})

function addDom(task) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id",task.id);


    let spanTitle = document.createElement("span");
    spanTitle.innerText = task.title;
    mainDiv.appendChild(spanTitle);


    let chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox");
    mainDiv.appendChild(chkbox);

    chkbox.addEventListener("click", function () {
        //console.log(chkbox.checked);
        if (chkbox.checked) {
            task.status = "Completed";
            spanTitle.style.textDecoration = "line-through";
        }
        else {
            task.status = "Pending";
            spanTitle.style.textDecoration = "none";
        }


        console.log(tasks);


    })

    let delBtn = document.createElement("button");
    delBtn.innerText = "del";
    // delBtn.addEventListener("click", function () {
    //     mainDiv.remove();
    //     tasks = tasks.filter(function (item) {
    //         if (item.id != task.id)
    //             return true;
    //     })
    //     console.log(tasks);


    // })
    delBtn.addEventListener("click",delHandler)

    mainDiv.appendChild(delBtn);


    taskContainer.appendChild(mainDiv);
    console.log(tasks);

}
function delHandler(evt)
{
  //  console.log(evt.target.parentNode)
  let id=evt.target.parentNode.getAttribute("id");

  evt.target.parentNode.remove();
   tasks = tasks.filter(function (item) {
            if (item.id != id)
                return true;
        })
        console.log(tasks);

}
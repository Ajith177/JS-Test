let complete_task=document.querySelector('#complete_task');
console.log(complete_task.childNodes);
complete_task.childNodes[1].oninput = () => {
    complete_task.childNodes[3].innerHTML =complete_task.childNodes[1].value;
}
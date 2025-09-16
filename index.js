


// FOR MODALS
const modalBtn = document.querySelector("#open_modal")

const dialogs = document.querySelector("#my_modal")

const closeBtn = document.getElementById("close")

modalBtn.addEventListener("click", function(){
    dialogs.showModal()
})

closeBtn.addEventListener("click", ()=>
    dialogs.close()
)


// OR Use this below:

// modalBtn.addEventListener("click", function(){
//     dialogs.close()
// })







// FOR ALERTS

const show = document.querySelector(".alert")


// const user = "Sam";

// show.addEventListener("click", function(){
//     alert(
// `THANK YOU
// We shall be in Touch ${user}.`)
// })
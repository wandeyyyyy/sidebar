 const bars = document.querySelector(".fa-bars");
 const times = document.querySelector(".fa-times");
 const sidebar = document.querySelector(".sidebar");


 bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
 })
 times.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
 })
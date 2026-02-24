const totalJob = document.getElementById("total-cart-list");
const allJob = document.getElementById('all-job')
const deletedBtns = document.querySelectorAll(".delete-btn");
const jobCart = document.querySelector("delete-job");
deletedBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.closest(".delete-job").classList.add("hidden");
    const totalJobValue = Number(totalJob.innerText);
    const setValue = totalJobValue - 1;
    totalJob.innerText = setValue;

    const totalAllJob = Number(allJob.innerText)
    allJob.innerText = totalAllJob - 1
  });
});


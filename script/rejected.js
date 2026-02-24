const rejectedCount = document.getElementById("interview-rejected");
const interviewCounts = document.getElementById("interview-selected");
const targetRejected = document.getElementById("rejected-section");
const targetInterviews = document.getElementById("interview-section");

document.querySelectorAll(".btn-rejected").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".child");

    // set inverview collection and increase count when click the interview btn
    const status = card.querySelector(".not-applied");
    if (status) {
      status.innerText = "REJECTED";
      status.classList =
        "w-35 px-3 py-3 text-center rounded-lg bg-red-400 text-white applied";

      // Add another card
      const copyCode = card.cloneNode(true);
      targetRejected.appendChild(copyCode);

      // count
      let rejectedValue = Number(rejectedCount.innerText);
      rejectedCount.innerText = rejectedValue + 1;
    }

    const jobCart = document.getElementById("rejected-job-cart");
    jobCart.classList.add("hidden");

    document
      .getElementById("rejected-section")
      .addEventListener("click", function (e) {
        const card = e.target.closest(".child");
        if (!card) return;

        const status = card.querySelector(".not-applied, .applied");
        if (e.target.classList.contains("btn-rejected")) {
          if (status) {
            status.innerText = "REJECTED";
            status.classList =
              "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white ";
          }
          targetRejected.appendChild(card);
        }
        if (e.target.classList.contains("btn-interview")) {
          if (status) {
            status.innerText = "INTERVIEW";
            status.classList =
              "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white ";
          }
          target.appendChild(card);

          // job card count 
          let interviewValue = Number((interviewCount.innerText) +1);
          interviewCount.innerText = interviewValue;

          let rejectedValue = Number((rejectedCount.innerText) -1);
          rejectedCount.innerText = rejectedValue;

          // hide and show empty job list card
          const targetInterview = document.getElementById("rejected-section");
          const jobCart = document.getElementById("rejected-job-cart");

          if (targetInterview.querySelector(".child")) {
            jobCart.classList.add("hidden");
          } else {
            jobCart.classList.remove("hidden");
          }
        }
      });
    document
      .getElementById("interview-section")
      .addEventListener("click", function (e) {
        const card = e.target.closest(".child");
        if (!card) return;

        const status = card.querySelector(".not-applied, .applied");
        if (e.target.classList.contains("btn-rejected")) {
          if (status) {
            status.innerText = "REJECTED";
            status.classList =
              "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white ";
          }

          targetRejected.appendChild(card);

          // job card count 
          let interviewValues = Number((interviewCounts.innerText) -1);
          interviewCounts.innerText = interviewValues;

          let rejectedValue = Number((rejectedCount.innerText) + 1);
          rejectedCount.innerText = rejectedValue;

          const targetInterview = document.getElementById("interview-section");
          const jobCart = document.getElementById("interview-job-cart");

          if (targetInterview.querySelector(".child")) {
            jobCart.classList.add("hidden");
          } else {
            jobCart.classList.remove("hidden");
          }
        }
      });
  });
});

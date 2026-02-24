const interviewCount = document.getElementById("interview-selected");
const rejectedTarget = document.getElementById("rejected-section");
const target = document.getElementById("interview-section");
const targetInterview = document.getElementById("interview-section");

document.getElementById("all-section").addEventListener("click", function (e) {
  const card = e.target.closest(".child");
  // set inverview collection and increase count when click the interview btn
  const interviewStatus = card.querySelector(".not-applied");
  if (interviewStatus) {
    interviewStatus.innerText = "INTERVIEW";
    interviewStatus.classList =
      "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white applied";
    // Add another card

    const copyCode = card.cloneNode(true);
    target.appendChild(copyCode);
    // count
    const interviewValue = Number(interviewCount.innerText) + 1;
    interviewCount.innerText = interviewValue;
  }
  const jobCart = document.getElementById("interview-job-cart");
  jobCart.classList.add("hidden");

  document
    .getElementById("interview-section")
    .addEventListener("click", function (e) {
      const card = e.target.closest(".child");

      if (!card) {
        return;
      }

      const status = card.querySelector(".not-applied, .applied");

      if (e.target.classList.contains("btn-rejected")) {
        if (status) {
          status.innerText = "REJECTED";
          status.classList =
            "w-35 px-3 py-3 text-center rounded-lg bg-red-400 text-white applied";
        }

        rejectedTarget.appendChild(card);
        // const totalJobs = getElementById('all-job')
        // if(targetInterview){
        //     console.log(totalJobs.innerText = targetInterview.children.length)
        // }
        if (status) {
          let rejectedValue = Number(rejectedCount.innerText) + 1;
          rejectedCount.innerText = rejectedValue;

          interviewCount.innerText = Number(interviewCount.innerText) - 1;
          //   console.log(interviewValues, status);
        }

        const targetInterview = document.getElementById("interview-section");
        const jobCart = document.getElementById("interview-job-cart");

        if (targetInterview.querySelector(".child")) {
          jobCart.classList.add("hidden");
        } else {
          jobCart.classList.remove("hidden");
        }
       
        
      }
    });
  document
    .getElementById("rejected-section")
    .addEventListener("click", function (e) {
      const card = e.target.closest(".child");
      if (!card) return;

      const status = card.querySelector(".not-applied, .applied");

      if (e.target.classList.contains("btn-interview")) {
        console.log(status, card);
        if (status) {
          status.innerText = "INTERVIEW";
          status.classList =
            "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white not-applied";
        }
        target.appendChild(card);

        const interviewValue = Number(interviewCount.innerText) + 1;
        interviewCount.innerText = interviewValue;

        let rejectedValue = Number(rejectedCount.innerText) - 1;
        rejectedCount.innerText = rejectedValue;

        const targetInterview = document.getElementById("rejected-section");
        const jobCart = document.getElementById("rejected-job-cart");

        if (targetInterview.querySelector(".child")) {
          jobCart.classList.add("hidden");
        } else {
          jobCart.classList.remove("hidden");
        }
      }
    });
});

// get id from dashboard count
const rejectedCount = document.getElementById("interview-rejected");

const prevInterviewCounted = document.getElementById("interview-selected");

let totalRejected = 0;
function handleRejected() {
    // increase Rejected count
  let rejectedValue = Number(rejectedCount.innerText);
  rejectedCount.innerText = rejectedValue + 1;

  //   decrease Interview count
  let interviewValue = Number(prevInterviewCounted.innerText);
  if (interviewValue > 0) {
    prevInterviewCounted.innerText = interviewValue - 1;
  }
  // set inverview collection and increase count when click the interview btn
  const stasusElement = document.querySelector(".not-applied", ".applied");
  
  const newP = document.createElement("p");
  newP.innerText = "REJECTED";
  newP.classList =
    "w-35 px-3 py-3 text-center rounded-lg bg-red-400 text-white applied";
  stasusElement.replaceWith(newP);
  
  const rejectedSection = document.getElementById("rejected-section");
  const newRejetedCollection = document.createElement("div");
  newRejetedCollection.innerHTML = `
    <div class="bg-[#ffffff] p-4 mt-4 rounded-lg">
          <div class="my-5 flex justify-between items-center">
            <div>
              <h1 class="text-[18px] font-semibold text-[#002C5C]">
                Mobile First Corp
              </h1>
              <p class="text-[16px] text-[#64748B]">React Native Developer</p>
            </div>
            <div>
              <span
                class="material-symbols-outlined shadow rounded-full p-2 cursor-pointer active:scale-75"
              >
                delete
              </span>
            </div>
          </div>
          <p class="text-[14px] text-[#64748B] mb-4">
            Remote • Full-time • $130,000 - $175,000
          </p>
          <p
            class="w-35 px-3 py-3 text-center rounded-lg bg-red-400 not-applied"
          >
            REJECTED
          </p>
          <p class="text-[14px] text-[#323B49] mb-5 mt-2">
            Build cross-platform mobile applications using React Native. Work on
            products used by millions of users worldwide.
          </p>
          <button
            onclick="handleIncreaseInterview()"
            class="btn text-green-400 border-green-400 hover:bg-[#e2e2e2] btn-interview"
          >
            INTERVIEW
          </button>
          <button
            onclick="handleRejected()"
            class="btn text-red-400 border-red-400 hover:bg-[#e2e2e2]"
          >
            REJECTED
          </button>
        </div>
  `;
  rejectedSection.appendChild(newRejetedCollection);
}

// // get id from dashboard count
// const interviewCount = document.getElementById("interview-selected");
// const interviewValue = Number(interviewCount.innerText);

// let count = 0;
// function handleInterviewBtn() {
// //   if (interviewCount == 0) {
// //     alert("count limited");
// //     return;
// //   }
//   count++;
//   interviewCount.innerText = count;

//   // set inverview collection and increase count when click the interview btn
//   const notApplied = document.querySelector(".not-applied");
//   const newP = document.createElement("p");
//   newP.innerText = "INTERVIEW";
//   newP.classList =
//     "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white applied";
//   notApplied.replaceWith(newP);

// //   const interviewSection = document.querySelectorAll("#all-section");
// const interviewSection = document.querySelectorAll('.child')
// const target = document.getElementById('interview-section')

// //   interviewSection.addEventListener('click', function(e) {
// //     if(e.target.tagName === 'BUTTON'){
// //         const childSection = e.target.closest('.child')
// //         target.appendChild(childSection)
// //         // console.log(childSection)
// //     }
// //   })
//   console.log(interviewSection)

// //   const newInterviewCollection = document.createElement("div");
// //   newInterviewCollection.innerHTML = `
// //     <div class="bg-[#ffffff] p-4 mt-4 rounded-lg">
// //           <div class="my-5 flex justify-between items-center">
// //             <div>
// //               <h1 class="text-[18px] font-semibold text-[#002C5C]">
// //                 Mobile First Corp
// //               </h1>
// //               <p class="text-[16px] text-[#64748B]">React Native Developer</p>
// //             </div>
// //             <div>
// //               <span
// //                 class="material-symbols-outlined shadow rounded-full p-2 cursor-pointer active:scale-75"
// //               >
// //                 delete
// //               </span>
// //             </div>
// //           </div>
// //           <p class="text-[14px] text-[#64748B] mb-4">
// //             Remote • Full-time • $130,000 - $175,000
// //           </p>
// //           <p
// //             class="w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white applied"
// //           >
// //            INTERVIEW
// //           </p>
// //           <p class="text-[14px] text-[#323B49] mb-5 mt-2">
// //             Build cross-platform mobile applications using React Native. Work on
// //             products used by millions of users worldwide.
// //           </p>
// //           <button
// //             onclick="handleIncreaseInterview()"
// //             class="btn text-green-400 border-green-400 hover:bg-[#e2e2e2] btn-interview"
// //           >
// //             INTERVIEW
// //           </button>
// //           <button
// //           onclick="handleRejected()"
// //           class="btn text-red-400 border-red-400 hover:bg-[#e2e2e2]">
// //             REJECTED
// //           </button>
// //         </div>
// //   `;
// //   interviewSection.appendChild(newInterviewCollection);
// }

// // // toggle
// // function handleRejected() {
// //     console.log(interviewCount)
// //   if (interviewCount > 0) {
// //     count--;
// //   }
// //   const notApplied = document.querySelector(".not-applied");
// //   const newP = document.createElement("p");
// //   newP.innerText = "REJECTED";
// //   newP.classList =
// //     "w-35 px-3 py-3 text-center rounded-lg bg-red-400 text-white ";
// //   notApplied.replaceWith(newP);
// // }

const interviewCount = document.getElementById("interview-selected");

const target = document.getElementById("interview-section");
document.querySelectorAll(".btn-interview").forEach((btn) => {
  btn.addEventListener("click", function () {

    // set inverview collection and increase count when click the interview btn
    const notApplied = document.querySelector(".not-applied");
    const newP = document.createElement("p");
    newP.innerText = "INTERVIEW";
    newP.classList =
      "w-35 px-3 py-3 text-center rounded-lg bg-green-400 text-white applied";
    notApplied.replaceWith(newP);

    // Add another card
    const card = this.closest(".child");
    const copyCode = card.cloneNode(true);
    target.appendChild(copyCode);

    // count
    const interviewValue = Number(interviewCount.innerText);
    interviewCount.innerText = interviewValue + 1;

    const jobCart = document.getElementById('interview-job-cart')
    jobCart.classList.add('hidden')

  });
});

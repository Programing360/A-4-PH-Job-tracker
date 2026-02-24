function showAllSection(id) {
  // get all section id
  const allSection = document.getElementById("all-section");
  // hide all section
  allSection.classList.add("hidden");

  const InterviewSection = document.getElementById("interview-section");
  // hide all section
  InterviewSection.classList.add("hidden");

  const RejectedSection = document.getElementById("rejected-section");
  // hide all section
  RejectedSection.classList.add("hidden");

  // show particular id
  const showAllSection = document.getElementById(id);
  showAllSection.classList.remove("hidden");

  // set bg-color
  const allBtn = document.getElementById("all-btn");
  allBtn.classList.add("bg-[#3B82F6]", "text-white");
  // remove bg-color
  const rejectedBtn = document.getElementById("rejected-btn");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");
  const interviewBtn = document.getElementById("interview-btn");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  // console.log('click-all')
}
// const allJob = document.getElementById('all-job')
function showInterviewSection(id) {
  // get all section id
  const allSection = document.getElementById("all-section");
  // hide all section
  allSection.classList.add("hidden");

  const InterviewSection = document.getElementById("interview-section");
  // hide all section
  InterviewSection.classList.add("hidden");

  const RejectedSection = document.getElementById("rejected-section");
  // hide all section
  RejectedSection.classList.add("hidden");

  // show particular id
  const showInterviewSection = document.getElementById(id);
  showInterviewSection.classList.remove("hidden");

  // set bg-color
  const interviewBtn = document.getElementById("interview-btn");
  interviewBtn.classList.add("bg-[#3B82F6]", "text-white");
  // remove bg-color
  const allBtn = document.getElementById("all-btn");
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  const rejectedBtn = document.getElementById("rejected-btn");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");
  // console.log('click-all')'

  //   remove empty job card
  const targetInterview = document.getElementById("interview-section");
  const jobCart = document.getElementById("interview-job-cart");

  if (targetInterview.querySelector(".child")) {
    jobCart.classList.add("hidden");
  } else {
    jobCart.classList.remove("hidden");
  }
  
  
}

function showRejectedSection(id) {
  // get all section id
  const allSection = document.getElementById("all-section");
  // hide all section
  allSection.classList.add("hidden");

  const InterviewSection = document.getElementById("interview-section");
  // hide all section
  InterviewSection.classList.add("hidden");

  const RejectedSection = document.getElementById("rejected-section");
  // hide all section
  RejectedSection.classList.add("hidden");

  // show particular id
  const showRejectedSection = document.getElementById(id);
  showRejectedSection.classList.remove("hidden");

  // set bg-color
  const rejectedBtn = document.getElementById("rejected-btn");
  rejectedBtn.classList.add("bg-[#3B82F6]", "text-white");
  // remove bg-color
  const allBtn = document.getElementById("all-btn");
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  const interviewBtn = document.getElementById("interview-btn");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  //   remove empty job card
  const rejectedJobCart = document.getElementById("rejected-job-cart");
  rejectedJobCart.classList.remove("hidden");

  const targetInterview = document.getElementById("rejected-section");
  if (targetInterview.children[1]) {
    const jobCart = document.getElementById("rejected-job-cart");
    jobCart.classList.add("hidden");
  }
}

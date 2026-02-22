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
  // console.log('click-all')
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
  // console.log('click-all')
}

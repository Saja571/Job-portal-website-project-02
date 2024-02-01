function showApplyForm(jobId) {
    var applyForm = document.getElementById(`apply-form-${jobId}`);
    if (applyForm.style.display === 'block') {
      applyForm.style.display = 'none';
    } else {
      applyForm.style.display = 'block';
    }
  }
  
  function submitForm(jobId) {
    var successMessage = document.getElementById(`success-message-${jobId}`);
    successMessage.style.display = 'block';
    // Additional logic to handle form submission (send data to server, etc.)
    // This example simply shows the success message without actual form submission.
  }
  
  // Your existing JS code

// Function to calculate and display the job posting date
function calculatePostedDays(jobId) {
  var currentDate = new Date();
  var postedDate = new Date(); // Replace this with the actual job posting date
  var daysDiff = Math.floor((currentDate - postedDate) / (1000 * 60 * 60 * 24));

  var postedDaysElement = document.getElementById("posted-days-" + jobId);
  if (postedDaysElement) {
      postedDaysElement.textContent = "Job posted " + daysDiff + " days ago";
  }
}

// Call this function for each job
calculatePostedDays(1);
calculatePostedDays(2);
// ... (Call for Job 3, 4, 5, and 6)
// Function to calculate and display the job posting date
function calculatePostedDays(jobId) {
  var currentDate = new Date();
  var postedDate = new Date(); // Replace this with the actual job posting date
  var daysDiff = Math.floor((currentDate - postedDate) / (1000 * 60 * 60 * 24));

  var postedDaysElement = document.getElementById("posted-days-" + jobId);
  if (postedDaysElement) {
      postedDaysElement.textContent = "Job posted " + daysDiff + " days ago";
  }
}

// Call this function for each job
calculatePostedDays(1);
calculatePostedDays(2);
// ... (Call for Job 3, 4, 5, and 6)

// Function to show the apply form
function showApplyForm(jobId) {
  var applyForm = document.getElementById("apply-form-" + jobId);
  if (applyForm) {
      applyForm.style.display = "block";
  }
}

// Function to submit the form
function submitForm(jobId) {
  // Add your form submission logic here
  // For demonstration purposes, just showing a success message
  var successMessage = document.getElementById("success-message-" + jobId);
  if (successMessage) {
      successMessage.style.display = "block";
  }
}


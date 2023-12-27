// // scripts/index.js
// document.addEventListener("DOMContentLoaded", function () {
//   const sendButton = document.getElementById("sendButton");

//   sendButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Check if all required fields are filled
//     const subject = document.getElementById("subject").value;
//     const from = document.getElementById("from").value;
//     const to = document.getElementById("to").value;
//     const emailBody = document.getElementById("emailBody").value;

//     if (subject && from && to && emailBody) {
//       // Check if an attachment is provided (you may customize this based on your actual implementation)
//       const attachment = document.getElementById("attachment").files[0];

//       if (attachment) {
//         // Perform the send email functionality
//         sendEmail();

//         // Show a success alert
//         alert("Email sent successfully!");
//       } else {
//         // Show an error alert if no attachment is provided
//         alert("Error: Please attach a file before sending.");
//       }
//     } else {
//       // Show an error alert if any required field is empty
//       alert("Error: Please fill in all required fields.");
//     }
//   });

//   // Function to simulate sending an email
//   function sendEmail() {
//     // Implement the actual sending logic here
//     // For now, let's just log the email details
//     const subject = document.getElementById("subject").value;
//     const from = document.getElementById("from").value;
//     const to = document.getElementById("to").value;
//     const emailBody = document.getElementById("emailBody").value;

//     console.log("Email sent:");
//     console.log("Subject:", subject);
//     console.log("From:", from);
//     console.log("To:", to);
//     console.log("Email Body:", emailBody);
//   }
// });

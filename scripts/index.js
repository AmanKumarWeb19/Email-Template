// // scripts/index.js
// document.addEventListener("DOMContentLoaded", function () {
//   const sendButton = document.getElementById("sendButton");
//   const importantCheckbox = document.getElementById("importantCheckbox");
//   const sentEmailList = document.getElementById("sentEmailList");

//   // Load sent emails and important emails from localStorage on page load
//   const sentEmails = JSON.parse(localStorage.getItem("sentEmails")) || [];
//   const importantEmails =
//     JSON.parse(localStorage.getItem("importantEmails")) || [];

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
//         // Save the sent email to localStorage
//         const sentEmail = {
//           subject: subject,
//           from: from,
//           to: to,
//           emailBody: emailBody,
//           attachment: attachment.name,
//         };

//         sentEmails.push(sentEmail);
//         localStorage.setItem("sentEmails", JSON.stringify(sentEmails));

//         // Check if the email should be marked as important
//         if (importantCheckbox.checked) {
//           // Save the email to the important folder in localStorage
//           importantEmails.push(sentEmail);
//           localStorage.setItem(
//             "importantEmails",
//             JSON.stringify(importantEmails)
//           );
//         }

//         // Perform the send email functionality
//         sendEmail();

//         // Show a success alert
//         alert("Email sent successfully!");

//         // Update the UI with the sent emails
//         updateSentEmailsUI();
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

//   // Function to update the UI with sent emails
//   function updateSentEmailsUI() {
//     sentEmailList.innerHTML = ""; // Clear the existing list

//     sentEmails.forEach(function (email) {
//       const listItem = document.createElement("li");
//       listItem.textContent = `To: ${email.to}, Subject: ${email.subject}, Body: ${email.emailBody}`;
//       sentEmailList.appendChild(listItem);
//     });
//   }

//   // Initial update of the UI with sent emails on page load
//   updateSentEmailsUI();
// });

// function x(){
//   let v=10
//   function z(){
//     console.log(v)
//   }
//   z()
// }
// x()

function x() {
  let b = 10;
  function y() {
    console.log(b);
  }
  y();
}
x();

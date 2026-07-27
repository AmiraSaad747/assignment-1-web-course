let studentname=prompt("Enter your name");
let attendance=Number(prompt("Enter attendance precentage"));
let midterm=Number(prompt("Enter midterm score"));
let finalexam=Number(prompt("Enter final exam score "));
let assignment=Number(prompt("Enter assignment score"));
let tuitionstatus = prompt("Is Tuition Paid? (yes/no)");

if (tuitionstatus.toLowerCase() !== "yes") {
    console.log("You cannot view your results because tuition fees are unpaid.");
} else if (attendance < 75) {
    console.log("Student: " + studentName);
    console.log("Status: Failed due to low attendance.");
} else {
let total=midterm+finalexam+assignment;
let grade="";
 if (total >= 90) {
        grade = "A";
    } else if (total >= 80) {
        grade = "B";
    } else if (total >= 70) {
        grade = "C";
    } else if (total >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status;

    if (grade === "F") {
        status = "Failed";
    } else {
        status = "Passed";
    }
     console.log("========== Student Result ==========");
    console.log("Student Name: " + studentname);
    console.log("Attendance: " + attendance + "%");
    console.log("Total Score: " + total);
    console.log("Grade: " + grade);
    console.log("Academic Status: " + status);

    if (grade === "A") {
        console.log("Congratulations! You are eligible for a scholarship.");
    }
}
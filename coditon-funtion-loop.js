

/*1. Function to check if a student passed (JAMB-style):**/

function checkPass(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}


/*2. Function to check voting eligibility:*/

function checkEligibility(age) {
    return age >= 18 ? "You are eligible to vote" : "Not eligible";
}


/*3. Function to categorize score:*/


function categorizeScore(name, score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Fail";
    }
}


/*4. Function to check access based on boolean values:**/


function checkAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
}


/*5. Loop through student scores and print "Pass" or "Fail":*/


const scores = [45, 90, 55, 30, 80];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i] > 50 ? "Pass" : "Fail");
}

/*6. Arrow function to check if a student passed both Math and English:**/


const checkBothPass = (mathScore, englishScore) => (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";


/*7. Function to check if a user has an email or phone number before signing up:*/

function checkContact(email, phoneNumber) {
    return email || phoneNumber ? "Sign-up successful" : "Please provide an email or phone number";
}


/*8. Function to validate username and password:*/


function validateInput(username, password) {
    return username && password ? "Valid input" : "Invalid input";
}


/*9. Function to check full-time or part-time based on hours worked:*/


function checkWorkType(hoursWorked) {
    return hoursWorked >= 40 ? "Full-time" : "Part-time";
}

/*10. Arrow function to return the larger of two numbers:*/


const findLarger = (num1, num2) => num1 > num2 ? num1 : num2;

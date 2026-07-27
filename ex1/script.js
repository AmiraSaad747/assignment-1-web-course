let userPin = "1234";
let balance = 5000;
let attempts = 0;

let enteredPin = prompt("Enter your PIN:");

while (enteredPin !== userPin) {
    attempts++;

    if (attempts === 3) {
        alert("Account Locked!");
        throw new Error("Too many incorrect attempts");
    }

    enteredPin = prompt("Wrong PIN! Try Again:");
}

let operation = prompt(
`Choose Operation:
1- Withdraw
2- Deposit
3- Check Balance
4- Change PIN`
);

switch (operation) {

    case "1":
        let withdrawAmount = Number(prompt("Enter amount to withdraw:"));

        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            alert("Withdrawal Successful\nCurrent Balance = " + balance);
        } else {
            alert("Insufficient Balance");
        }
        break;

    case "2":
        let depositAmount = Number(prompt("Enter amount to deposit:"));

        if (depositAmount > 0) {
            balance += depositAmount;
            alert("Deposit Successful\nCurrent Balance = " + balance);
        } else {
            alert("Invalid Deposit Amount");
        }
        break;

    case "3":
        alert("Current Balance = " + balance);
        break;

    case "4":
        let newPin = prompt("Enter New 4-Digit PIN:");

        if (newPin.length === 4 && !isNaN(newPin)) {
            userPin = newPin;
            alert("PIN Changed Successfully");
        } else {
            alert("PIN Must Be Exactly 4 Digits");
        }
        break;

    default:
        alert("Invalid Operation");
}
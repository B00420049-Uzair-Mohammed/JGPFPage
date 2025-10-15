document.getElementById("printhere").
innerHTML = "Hello World!"; 

function dateTime() {
document.getElementById("dateTime")
.innerHTML = Date();
}

function showAlert() {
    alert("ALERT! OOPS! ERROR OCCURRED!");
}

// Function to display the current date and time
function dateTime() {
    const currentDateTime = new Date();
    document.getElementById("datetime").innerHTML = currentDateTime;
}

function calculateDiscount() {
    // Individual item prices
    const apples = 2.00;   // 6 apples
    const grapes = 3.00;   // bunch of grapes
    const oranges = 3.00;  // 12 oranges

    // Total before discount
    const total = apples + grapes + oranges;

    // Apply 25% discount
    const discountRate = 0.25;
    const discountAmount = total * discountRate;
    const finalPrice = total - discountAmount;

    // Display result with 2 decimal places
    document.getElementById("finalPrice").innerHTML = 
        `Final Price after 25% discount: £${finalPrice.toFixed(2)}`;
}

// Put the classes inside variables
const menuToggle = document.querySelector(".toggle");
const sections = document.querySelector(".sections");
const buttons = document.querySelectorAll(".button");
const signUp = document.querySelector(".signup");

// When the toggle element is clicked, active classes will be enabled for these elements
menuToggle.onclick = function(){
    menuToggle.classList.toggle("active");
    sections.classList.toggle("active");
    signUp.classList.toggle("active");
    buttons.forEach(button => {
        button.classList.toggle('active');
        // When any button is clicked, the toggle button will close
        button.addEventListener("click", function() {
            menuToggle.click();
        });
        // signUp.addEventListener("click", function() {
        //     menuToggle.click();
        // }); THIS LINE BREAKS THE PROGRAM
    });
}

// For Sign Up button click functionality
const form = document.querySelector(".sign-up-form");
const remove = document.querySelector(".remove");
signUp.onclick = function() {
    form.classList.toggle("active");
};
remove.addEventListener("click", function() {
    signUp.click();
})

// This code section makes the table1 dynamic by adding interaction to the challenges buttons
// Buttons
const k5 = document.getElementById("5k");
const k10 = document.getElementById("10k");
const k20 = document.getElementById("20k");
const k50 = document.getElementById("50k");
const k100 = document.getElementById("100k");
const k200 = document.getElementById("200k");
const k300 = document.getElementById("300k");

// Dynamic cells in table1
const dl1 = document.getElementById("daily-loss-1");
const dl2 = document.getElementById("daily-loss-2");
const dl3 = document.getElementById("daily-loss-3");
const tl1 = document.getElementById("total-loss-1");
const tl2 = document.getElementById("total-loss-2");
const tl3 = document.getElementById("total-loss-3");
const profit1 = document.getElementById("profit-1");
const profit2 = document.getElementById("profit-2");
const fee = document.getElementById("fee");

// Buttons action
k5.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$250";
    tl1.textContent = tl2.textContent = tl3.textContent = "$600";
    profit1.textContent = "$400";
    profit2.textContent = "$250";
    fee.textContent = "$49"
})

k10.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$500";
    tl1.textContent = tl2.textContent = tl3.textContent = "$1,200";
    profit1.textContent = "$800";
    profit2.textContent = "$500";
    fee.textContent = "$89";
})

k20.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$1,000";
    tl1.textContent = tl2.textContent = tl3.textContent = "$2,400";
    profit1.textContent = "$1,600";
    profit2.textContent = "$1,000";
    fee.textContent = "$139";
})

k50.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$2,500";
    tl1.textContent = tl2.textContent = tl3.textContent = "$6,000";
    profit1.textContent = "$4,000";
    profit2.textContent = "$2,500";
    fee.textContent = "$299";
})

k100.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$5,000";
    tl1.textContent = tl2.textContent = tl3.textContent = "$12,000";
    profit1.textContent = "$8,000";
    profit2.textContent = "$5,000";
    fee.textContent = "$499";
})

k200.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$10,000";
    tl1.textContent = tl2.textContent = tl3.textContent = "$24,000";
    profit1.textContent = "$16,000";
    profit2.textContent = "$10,000";
    fee.textContent = "$979";
})

k300.addEventListener("click", function() {
    dl1.textContent = dl2.textContent = dl3.textContent = "$15,000";
    tl1.textContent = tl2.textContent = tl3.textContent = "$36,000";
    profit1.textContent = "$24,000";
    profit2.textContent = "$15,000";
    fee.textContent = "$1,389";
})

// Comparison button functionality
const comparison = document.getElementById("comparison");
const tableSingle = document.getElementById("table-single");
const selectButtons = document.getElementById("select-buttons");
const balance = document.getElementById("balance");
const tableSection = document.getElementById("table-section");

comparison.addEventListener("click", function() {
    tableSingle.classList.toggle("active");
    selectButtons.classList.toggle("active");
    balance.classList.toggle("active");
    tableSection.classList.toggle("active");
});
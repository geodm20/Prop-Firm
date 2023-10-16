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


//This section is the swiper library

window.onload = function() { //window.onload used to start this function only after DOM elements are uploaded
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
}

// Create 6 divs with classes "swiper-slide" and appendChild to div "swiper-wrapper"

let swiperWrapper = document.querySelector(".swiper-wrapper")
for (let i = 0; i < 6; i++) {
let swiperSlide = document.createElement("div")
swiperSlide.className = "swiper-slide"
swiperWrapper.appendChild(swiperSlide)
}

// Create another divs inside with class "pair-container"

let swiperSlides = document.querySelectorAll(".swiper-slide")
swiperSlides.forEach((slide) => {
let slides = document.createElement("div")
slides.className = "pair-container"
slide.appendChild(slides)
})

// Add img and both spans to the pair-container 

let pairContainers = document.querySelectorAll(".pair-container")
pairContainers.forEach((pair) => {
let imgPairs = document.createElement("img")
imgPairs.className = "pair-img"
pair.appendChild(imgPairs)
let firstSpan = document.createElement("span")
let secSpan = document.createElement("span")
firstSpan.className = "first-span"
secSpan.className = "sec-span"
pair.appendChild(firstSpan)
pair.appendChild(secSpan)
})

// Arrays with img sources, fistSpan names and secSpan properties

const imgSources = [
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-eurusd.img.svg",
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-gbpusd.img.svg",
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-usdcad.img.svg",
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-audusd.img.svg",
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-nzdusd.img.svg",
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-usdchf.img.svg",
"https://cfcdn-plus.olymptrade.com/fe/312_231012180945/bundle/images/pair-icon-usdjpy.img.svg"
]

const firstSpanNames = ["EURUSD", "GBPUSD", "USDCAD", "AUDUSD", "NZDUSD", "USDCHF", "USDJPY"]

const secSpanNames = ["EUR", "GBP", "CAD", "AUD", "NZD", "CHF", "JPY"]

// Add imgSources to pair-imgs

let imgPairs = document.querySelectorAll(".pair-img")
imgPairs.forEach((img, index) => {
img.src = imgSources[index]
})

// Add names to firstSpans

let firstSpans = document.querySelectorAll(".first-span")
firstSpans.forEach((span, index) => {
span.textContent = firstSpanNames[index]
})

// API CALL

async function fetchCurrencyData() {
    try {
        const apiKey = '6156e80e6e5148c2bc6480ecf27a4b9f';
        const endpoint = 'https://api.currencyfreaks.com/v2.0/rates/latest';

        // Define the parameters for the API request
        const params = new URLSearchParams({
            apikey: apiKey,
        });

        // Construct the full URL with parameters
        const apiUrl = `${endpoint}?${params.toString()}`;

        // Make a GET request to the CurrencyLayer API
        const response = await fetch(apiUrl);

        if (response.ok) {
            const data = await response.json();
            // Add data from API to secSpans
            // Numbers from API come as a string, so they are converted to number with parseFloat
            let secSpans = document.querySelectorAll(".sec-span")
            secSpans.forEach((span, index) => {
            span.textContent = parseFloat(data.rates[secSpanNames[index]]).toFixed(5)
            })

        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
}

fetchCurrencyData(); // Call the function just once (everytime the page renders)
let venuePrices = {
    "Banquet Hall": 21000,
    "Outdoor Lawn": 20000,
    "Indoor Studio": 17000,
    "Beach Side": 21000
};

let categoryPrices = {
    "Birthday": 7000,
    "Farewell": 7000,
    "Marriage": 15000,
    "Naming Ceremony": 7000
};

let themePrices = {
    "Classic": 5000,
    "Modern": 5500,
    "Royal": 5000,
    "Kids Fun": 5000
};

let addonPrices = {
    "Catering": 10000,
    "Photography": 15000,
    "Decorations": 10000,
    "Music & DJ": 15000
};

function goToVenues() {
    window.location.href = "venues.html";
}

function addVenue(name) {

    // saving selected venue
    localStorage.setItem("venue", name);
    localStorage.setItem("venuePrice", venuePrices[name]);

    // simple popup
    alert("Venue Selected!");

    // go to next page
    window.location.href = "categories.html";
}

function addCategory(name) {
    localStorage.setItem("category", name);
    localStorage.setItem("categoryPrice", categoryPrices[name]);
    window.location.href = "themes.html";
}

function addTheme(name) {
    localStorage.setItem("theme", name);
    localStorage.setItem("themePrice", themePrices[name]);
    window.location.href = "addons.html";
}

function saveAddons() {

    let addons = [];
    let total = 0;

    // check which addons are selected
    let boxes = document.querySelectorAll("input[type='checkbox']");

    boxes.forEach(box => {
        if (box.checked) {
            addons.push(box.value);
            total += addonPrices[box.value];
        }
    });

    // save data
    localStorage.setItem("addons", JSON.stringify(addons));
    localStorage.setItem("addonPrice", total);

    window.location.href = "summary.html";
}

function loadSummary() {

    let venue = localStorage.getItem("venue");
    let venuePrice = Number(localStorage.getItem("venuePrice"));

    let category = localStorage.getItem("category");
    let categoryPrice = Number(localStorage.getItem("categoryPrice"));

    let theme = localStorage.getItem("theme");
    let themePrice = Number(localStorage.getItem("themePrice"));

    let addons = JSON.parse(localStorage.getItem("addons"));
    let addonPrice = Number(localStorage.getItem("addonPrice"));

    let totalCost = venuePrice + categoryPrice + themePrice + addonPrice;

    // fill values in summary page
    document.getElementById("sumVenue").innerText = venue + " (₹" + venuePrice + ")";
    document.getElementById("sumCategory").innerText = category + " (₹" + categoryPrice + ")";
    document.getElementById("sumTheme").innerText = theme + " (₹" + themePrice + ")";

    document.getElementById("sumAddons").innerText =
        addons.length > 0 ? addons.join(", ") + " (₹" + addonPrice + ")" : "None";

    document.getElementById("sumTotal").innerText = "₹ " + totalCost;
}

function confirmBooking() {
    alert("Booking Confirmed!");
    localStorage.clear();
    window.location.href = "thankyou.html";
}

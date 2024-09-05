// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the buy button click
    function handleBuyClick(productName) {
        alert(`You have clicked to buy ${productName}!`);
        // Here, you would typically redirect to an affiliate link
    }

    // Attach event listeners to all buttons
    document.querySelectorAll('#product-list button').forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = this.closest('li').querySelector('h2').textContent;
            handleBuyClick(productName);
        });
    });
});

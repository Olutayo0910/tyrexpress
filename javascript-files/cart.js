function calculateTotal() {
    let totalHtml = '';
    var quantityInput = document.querySelector('.js-inputQuantity');
    var quantity = quantityInput.value;
    var pricePerTire = 160000; // Set the price per tire here
    var total = quantity * pricePerTire;

    let html = `
    <p>
        Total: ${total}
    </p> 
    `;
    totalHtml = html;
    /*
    var totalElement = document.getElementById('total');
    totalElement.textContent = '$' + total;
    */
   document.querySelector('.js-total').innerHTML = totalHtml;
}
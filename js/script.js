document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
    });
});

document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantityElement.textContent = quantity - 1;
            updateTotalPrice();
        }
    });
});

document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.card-body').remove();
        updateTotalPrice();
    });
});

document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.card-body').forEach(item => {
        let price = parseFloat(item.querySelector('.unit-price').textContent.replace('$', ''));
        let quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    document.querySelector('.total').textContent = `${total.toFixed(2)} $`;
}

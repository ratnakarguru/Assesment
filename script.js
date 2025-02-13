document.querySelectorAll('.sizes label').forEach(label => {
    label.addEventListener('click', () => {
        document.querySelectorAll('.sizes label').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
    });
});

document.querySelectorAll('.colors div').forEach(div => {
    div.addEventListener('click', () => {
        document.querySelectorAll('.colors div').forEach(d => d.classList.remove('selected'));
        div.classList.add('selected');
    });
});

function incrementQuantity() {
    const quantityInput = document.getElementById('quantity-input');
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity-input');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
}

function changeImage(element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = element.src;
    document.querySelectorAll('.thumbnail-images img').forEach(img => img.classList.remove('selected'));
    element.classList.add('selected');
}

function addToCart() {
    const popupMessage = document.getElementById('popup-message');
    popupMessage.style.display = 'block';
    setTimeout(() => {
        popupMessage.style.display = 'none';
    }, 2000);
}
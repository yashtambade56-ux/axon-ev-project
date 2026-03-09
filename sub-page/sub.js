// Navigation
function showStep1() {
    document.querySelectorAll('.step-content').forEach(s => s.style.display = 'none');
    document.getElementById('step1').style.display = 'block';
    window.scrollTo(0, 0);
}

function showStep2() {
    document.querySelectorAll('.step-content').forEach(s => s.style.display = 'none');
    document.getElementById('step2').style.display = 'block';
    window.scrollTo(0, 0);
}

function showStep3() {
    const selectedCard = document.querySelector('.plan-card:has(input:checked)');
    if (!selectedCard) {
        alert("Please select a plan.");
        return;
    }

    const planName = selectedCard.querySelector('.plan-name').innerText;
    const priceText = selectedCard.querySelector('.price').innerText;
    const priceValue = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;

    const gst = Math.round(priceValue * 0.18);
    const total = priceValue + gst;

    document.getElementById('selected-plan-name').innerText = planName + " Plan";
    document.getElementById('selected-plan-price').innerText = "₹" + priceValue.toLocaleString('en-IN');
    document.getElementById('summary-gst').innerText = "₹" + gst.toLocaleString('en-IN');
    document.getElementById('summary-total').innerText = "₹" + total.toLocaleString('en-IN');

    document.querySelectorAll('.step-content').forEach(s => s.style.display = 'none');
    document.getElementById('step3').style.display = 'block';
    window.scrollTo(0, 0);
}

// Payment Toggling
function switchPayment(method) {
    const cardFields = document.getElementById('card-fields');
    const upiFields = document.getElementById('upi-fields');
    const cardBtn = document.getElementById('method-card');
    const upiBtn = document.getElementById('method-upi');

    if (method === 'upi') {
        cardFields.style.display = 'none';
        upiFields.style.display = 'block';
        upiBtn.classList.add('active');
        cardBtn.classList.remove('active');
    } else {
        cardFields.style.display = 'block';
        upiFields.style.display = 'none';
        cardBtn.classList.add('active');
        upiBtn.classList.remove('active');
    }
}

// Logic for Custom Builder
document.addEventListener('DOMContentLoaded', () => {
    const addons = document.querySelectorAll('.addon-check');
    const customRadio = document.getElementById('plan-custom');

    function updateCustomPrice() {
        let total = 0;
        addons.forEach(addon => {
            if (addon.checked) total += parseInt(addon.value);
        });
        document.getElementById('totalPriceDisplay').innerHTML = `₹${total.toLocaleString('en-IN')}<span>/mo</span>`;
        if (total > 0) customRadio.checked = true;
    }

    addons.forEach(addon => addon.addEventListener('change', updateCustomPrice));
});

function completePayment() {
    alert("Transaction Successful! Welcome to AXON EV.");
}
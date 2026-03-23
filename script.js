const tradeTabs = document.querySelectorAll('.trade-tab');
const tradeDetails = document.querySelectorAll('.trade-detail');

tradeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.target;

        tradeTabs.forEach((item) => {
            item.classList.remove('is-active');
            item.setAttribute('aria-pressed', 'false');
        });

        tradeDetails.forEach((panel) => {
            const isTarget = panel.id === targetId;
            panel.hidden = !isTarget;
            panel.classList.toggle('is-visible', isTarget);
        });

        tab.classList.add('is-active');
        tab.setAttribute('aria-pressed', 'true');
    });
});

const calculatorForm = document.getElementById('calculator-form');
const salePriceInput = document.getElementById('sale-price');
const feeValue = document.getElementById('fee-value');
const netValue = document.getElementById('net-value');

const formatCurrency = (value) => `${value.toFixed(2)} ₴`;

const updateCalculator = () => {
    const rawValue = Number.parseFloat(salePriceInput.value) || 0;
    const fee = rawValue * 0.15;
    const net = rawValue - fee;

    feeValue.textContent = formatCurrency(fee);
    netValue.textContent = formatCurrency(net);
};

calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateCalculator();
});

salePriceInput.addEventListener('input', updateCalculator);
updateCalculator();

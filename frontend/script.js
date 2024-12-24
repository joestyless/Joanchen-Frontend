// scripts.js

// Example JavaScript to make dropdowns interact dynamically
const brandDropdown = document.querySelector('select:nth-child(1)');
const seriesDropdown = document.querySelector('select:nth-child(2)');
const modelDropdown = document.querySelector('select:nth-child(3)');

brandDropdown.addEventListener('change', () => {
    const brand = brandDropdown.value;

    // Clear previous options in series and model dropdowns
    seriesDropdown.innerHTML = '<option value="">2. Printer Series</option>';
    modelDropdown.innerHTML = '<option value="">3. Printer Model</option>';

    // Dynamically populate series based on selected brand
    if (brand === 'hp') {
        seriesDropdown.innerHTML += '<option value="envy">Envy</option>';
        seriesDropdown.innerHTML += '<option value="deskjet">DeskJet</option>';
    } else if (brand === 'canon') {
        seriesDropdown.innerHTML += '<option value="pixma">Pixma</option>';
        seriesDropdown.innerHTML += '<option value="imageclass">ImageClass</option>';
    }
});

seriesDropdown.addEventListener('change', () => {
    const series = seriesDropdown.value;

    // Clear previous options in model dropdown
    modelDropdown.innerHTML = '<option value="">3. Printer Model</option>';

    // Dynamically populate models based on selected series
    if (series === 'envy') {
        modelDropdown.innerHTML += '<option value="4500">4500</option>';
        modelDropdown.innerHTML += '<option value="5055">5055</option>';
    } else if (series === 'pixma') {
        modelDropdown.innerHTML += '<option value="mg3620">MG3620</option>';
        modelDropdown.innerHTML += '<option value="ts9120">TS9120</option>';
    }
});

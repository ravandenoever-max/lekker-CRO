let subscribers = {}
function subscribe(eventName, callback) {
  if (subscribers[eventName] === undefined) { subscribers[eventName] = [] }
  subscribers[eventName] = [...subscribers[eventName], callback];
  return function unsubscribe() {
    subscribers[eventName] = subscribers[eventName].filter((cb) => { return cb !== callback });
  }
};

class VariantSelects extends HTMLElement {
  constructor() {
    super();
    this.onVariantChange = this.onVariantChange.bind(this);
    this.addEventListener('change', this.onVariantChange);
  }

  updatePriceDisplay() {
    if (!this.currentVariant) return;
    const priceElement = document.getElementById(`price-${this.dataset.section}`);
    if (!priceElement) return;
    // Format price in your currency
    const price = (this.currentVariant.price / 100).toFixed(2);
    const formattedPrice = `€${price}`; // or `$${price}` depending on store
    priceElement.textContent = formattedPrice;
    // Optional: compare at price
    const compareElement = document.getElementById(`compare-price-${this.dataset.section}`);
    if (compareElement) {
      if (this.currentVariant.compare_at_price && this.currentVariant.compare_at_price > this.currentVariant.price) {
        const compare = (this.currentVariant.compare_at_price / 100).toFixed(2);
        compareElement.textContent = `€${compare}`;
        compareElement.classList.remove('visibility-hidden');
      } else {
        compareElement.classList.add('visibility-hidden');
      }
    }
  }

  SetLoader() {
    cl('MAIN {SetLoader}');
    //$('.product__info-inner').addClass('js-ajax-loading-content');
    //$('.product__info-inner').addClass('no-pe no-se');
    $('.product-form__buttons button.theme-button').addClass('theme-button__disabled disabled no-pe no-se');
    $('.product-form__buttons').addClass('cursor-disabled');
  }
  UnsetLoader() {
    cl('MAIN {UnsetLoader}');
    $('.product__info-inner').removeClass('js-ajax-loading-content');
    $('.product__info-inner').removeClass('no-pe no-se');
    $('.product-form__buttons button.theme-button').removeClass('theme-button__disabled disabled no-pe no-se');
    $('.product-form__buttons').removeClass('cursor-disabled');
  }
  onVariantChange() {
    cl('MAIN {onVariantChange}');
    this.SetLoader();
    this.updateOptions();
    this.updateMasterId();

    if (!this.currentVariant) {
      cl('{onVariantChange} !this.currentVariant '+this.currentVariant);
      this.setUnavailable();
      this.UnsetLoader();
    } else {
      //this.updatePriceDisplay();
      this.renderProductInfo();
      this.updateURL();
      //this.updateShareUrl();
    }
  }
  updateOptions() {
    cl('MAIN [product-variants.js] updateOptions #57');    
    this.options = Array.from(
      this.querySelectorAll('select[name^="options"]')
    ).map(select => select.value);
  }

  updateMasterId() {
    cl('MAIN {updateMasterId}');
    this.currentVariant = this.getVariantData().find(variant => {
      return variant.options.every((option, index) => {
        return this.options[index] === option;
      });
    });
    if (!this.currentVariant) return;
    const form = this.closest('form');
    const idInput = form.querySelector('input[name="id"]');
    if (idInput) {
      idInput.value = this.currentVariant.id;
    }
    // keep pickup availability in sync
    const pickupAvailability = document.querySelector('pickup-availability');
    if (pickupAvailability) {
      pickupAvailability.dataset.variantId = this.currentVariant.id;
    }
  }

  updateURL() {
    cl('MAIN [product-variants.js] updateURL');
    if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
    var product_url = this.dataset.url;
    if (product_url != undefined && product_url !== 'false') {
      window.history.replaceState({ }, '', `${product_url}?variant=${this.currentVariant.id}`);
    }
  }
  updateShareUrl() {
    cl('MAIN [product-variants.js] updateShareUrl');
    const shareButton = document.getElementById(`Share-${this.dataset.section}`);
    if (!shareButton || !shareButton.updateUrl) return;
    shareButton.updateUrl(`${window.shopUrl}${this.dataset.url}?variant=${this.currentVariant.id}`);
  }
  setInputAvailability(listOfOptions, listOfAvailableOptions) {
    cl('MAIN[product-variants.js] setInputAvailability');
    listOfOptions.forEach(input => {
      if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
        input.innerText = input.getAttribute('value');
      } else {
        input.innerText = window.variantStrings.unavailable_with_option.replace('[value]', input.getAttribute('value'));
      }
    });
  }
  renderProductInfo() {
    cl('MAIN {renderProductInfo}');
    const requestedVariantId = this.currentVariant.id;
    const sectionId = this.dataset.originalSection ? this.dataset.originalSection : this.dataset.section;  
    var product_url = this.dataset.url;
    const get_url = `${product_url}?variant=${requestedVariantId}&section_id=${sectionId}`;
    cl('[product-variants-bundles.js] {renderProductInfo} get_url'+get_url);
    fetch(get_url)
      .then((response) => response.text())
      .then((responseText) => {
        /* prevent unnecessary ui changes from abandoned selections */
        if (this.currentVariant.id !== requestedVariantId) return;
        const response_html = new DOMParser().parseFromString(responseText, 'text/html');;
        
        var swap_element = `.product__price_buttons`;
        var html_source = response_html.querySelector(swap_element);
        var html_destination = document.querySelector(swap_element);
        if (html_source && html_destination) {
          html_destination.innerHTML = html_source.innerHTML;
          html_destination.classList.toggle('visibility-hidden', html_source.innerText === '');
        }           

/*        
        var swap_element = `.price-quantity-wrapper-col-left`;
        var html_source = response_html.querySelector(swap_element);
        var html_destination = document.querySelector(swap_element);
        if (html_source && html_destination) {
          html_destination.innerHTML = html_source.innerHTML;
          html_destination.classList.toggle('visibility-hidden', html_source.innerText === '');
        }   
*/          

        InitAddToCartButtons();
        InitProductAddCartSubmit();
        this.UnsetLoader();
      });
  }
  toggleAddButton(disable = true, text, modifyClass = true) {
    const productForm = document.getElementById(`ProductForm-${this.dataset.section}`);
    if (!productForm) return;
    const addButton = productForm.querySelector('[name="add"]');
    const addButtonText = productForm.querySelector('[name="add"] > span');
    if (!addButton) return;
    if (disable) {
      addButton.setAttribute('disabled', 'disabled');
      if (text) addButtonText.textContent = text;
    } else {
      addButton.removeAttribute('disabled');
      addButtonText.textContent = window.variantStrings.addToCart;
    }
    if (!modifyClass) return;
  }
  setUnavailable() {
    const button = document.getElementById(`ProductForm-${this.dataset.section}`);
    const addButton = button.querySelector('[name="add"]');
    const addButtonText = button.querySelector('[name="add"] > span');
    const price = document.getElementById(`price-${this.dataset.section}`);
    const inventory = document.getElementById(`Inventory-${this.dataset.section}`);
    const sku = document.getElementById(`Sku-${this.dataset.section}`);
    if (!addButton) return;
    addButtonText.textContent = window.variantStrings.unavailable;
    if (price) price.classList.add('visibility-hidden');
    if (inventory) inventory.classList.add('visibility-hidden');
    if (sku) sku.classList.add('visibility-hidden');
  }
  getVariantData() {
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }
}
if ( $('variant-selects').length ) { customElements.define('variant-selects', VariantSelects); }


class VariantRadios extends VariantSelects {
constructor() {
    super();
    // Remove the parent's generic listener
    this.removeEventListener('change', this.onVariantChange);
    // Only trigger once on radio change
    this.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', () => this.onVariantChange());
    });
  }
  updateOptions() {
    cl('RADIO [updateOptions]');
    // Collect checked radio values
    this.options = Array.from(
      this.querySelectorAll('fieldset')
    ).map(fieldset => {
      const checked = fieldset.querySelector('input[type="radio"]:checked');
      return checked ? checked.value : null;
    });
    console.log('[RADIO options]', this.options);
  }
  updateMasterId() {
    cl('RADIO {updateMasterId}');
    const variantData = this.getVariantData();
    this.currentVariant = variantData.find(variant => {
      return variant.options.every((option, index) => {
        return this.options[index] === option;
      });
    });
    if (!this.currentVariant) return;
    const form = this.closest('form');
    const idInput = form.querySelector('input[name="id"]');
    if (idInput) idInput.value = this.currentVariant.id;
    // Sync pickup availability
    const pickup = document.querySelector('pickup-availability');
    if (pickup) pickup.dataset.variantId = this.currentVariant.id;
  }
  updateURL() {
    cl('RADIO [updateURL]');
    if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
    const product_url = this.dataset.url;
    if (product_url && product_url !== 'false') {
      const newUrl = `${product_url}?variant=${this.currentVariant.id}`;
      window.history.replaceState({}, '', newUrl);
      console.log('URL updated to', newUrl);
    }
  }
  getVariantData() {
    cl('RADIO {getVariantData}');
    if (!this.variantData) {
      this.variantData = JSON.parse(
        this.querySelector('script[type="application/json"]').textContent
      );
    }
    return this.variantData;
  }
}
if ( $('variant-radios-bundle').length ) { customElements.define('variant-radios-bundle', VariantRadios); }

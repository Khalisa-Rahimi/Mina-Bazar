function generateStarsHTML(stars) {
  var html = '';
  for (var i = 0; i < 5; i++) {
    if (stars >= i + 1) html += '<i class="fas fa-star"></i>';
    else if (stars >= i + 0.5) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

function renderOptions(product) {
  if (!product.options || product.options.length === 0) {
    var html = '<div class="product-quantity-container"><select class="quantity-selector-' + product.id + '">';
    for (var i = 1; i <= 10; i++) html += '<option value="' + i + '">' + i + '</option>';
    html += '</select></div>';
    return html;
  }
  var html = '<div class="product-options-container">';
  for (var i = 0; i < product.options.length; i++) {
    var opt = product.options[i];
    html += '<div class="product-option-group"><span class="option-label">' + opt.label + ':</span>';
    html += '<select class="product-option-select" data-product-id="' + product.id + '" data-option-label="' + opt.label + '">';
    for (var j = 0; j < opt.values.length; j++) html += '<option value="' + opt.values[j] + '">' + opt.values[j] + '</option>';
    html += '</select></div>';
  }
  html += '</div>';
  return html;
}

function attachAddToCartEvents() {
  var buttons = document.querySelectorAll('.js-add-to-cart');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      var btn = e.currentTarget;
      var productId = btn.dataset.productId;
      var options = {};
      var selects = document.querySelectorAll('.product-option-select[data-product-id="' + productId + '"]');
      for (var j = 0; j < selects.length; j++) {
        var select = selects[j];
        options[select.dataset.optionLabel] = select.value;
      }
      var qtySel = document.querySelector('.quantity-selector-' + productId);
      var qty = qtySel ? parseInt(qtySel.value) : 1;
      addToCart(productId, options, qty);
      var msg = document.querySelector('.added-to-cart-' + productId);
      if (msg) {
        msg.style.opacity = '1';
        setTimeout(function() { msg.style.opacity = '0'; }, 2000);
      }
    });
  }
}

function renderProducts(productsToRender) {
  var grid = document.querySelector('.products-grid');
  if (!grid) return;
  productsToRender = productsToRender || products;
  var html = '';
  for (var i = 0; i < productsToRender.length; i++) {
    var p = productsToRender[i];
    html += '<div class="product-container">' +
      '<div class="product-image-container"><img class="product-image" src="' + p.image + '" onerror="this.src=\'https://via.placeholder.com/200x150?text=محصول\';"></div>' +
      '<div class="product-name limit-text-to-2-lines">' + p.name + '</div>' +
      '<div class="product-specs">' + (p.specs || '') + '</div>' +
      '<div class="product-rating-container"><div class="product-rating-stars">' + generateStarsHTML(p.rating.stars) + '</div>' +
      '<div class="product-rating-count link-primary">(' + p.rating.count.toLocaleString('fa-IR') + ' نظر)</div></div>' +
      '<div class="product-price">' + formatPrice(p.priceCents) + '</div>' +
      renderOptions(p) +
      '<div class="product-spacer"></div>' +
      '<div class="added-to-cart added-to-cart-' + p.id + '" style="opacity:0;"><i class="fas fa-check-circle" style="color: #0670a8;"></i> افزوده شد</div>' +
      '<button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="' + p.id + '">افزودن به سبد خرید</button>' +
      '</div>';
  }
  grid.innerHTML = html;
  updateCartQuantity();
  attachAddToCartEvents();
}

function initSearch() {
  var searchInput = document.querySelector('.search-bar');
  if (!searchInput) return;
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  document.querySelector('.search-button').addEventListener('click', performSearch);

  function performSearch() {
    var term = searchInput.value.trim().toLowerCase();
    if (term === '') {
      renderProducts(products);
    } else {
      var filtered = products.filter(function(p) {
        return p.name.toLowerCase().includes(term) || (p.specs && p.specs.toLowerCase().includes(term));
      });
      if (filtered.length === 0) {
        alert('این محصول موجود نیست');
      }
      renderProducts(filtered);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { renderProducts(); initSearch(); });
} else { renderProducts(); initSearch(); }




var discountApplied = false;
var DISCOUNT_CODE = 'MINA5';
var selectedShipping = []; 


function calculateShipping() {
  var total = 0;
  for (var i = 0; i < selectedShipping.length; i++) {
    total += selectedShipping[i].shipping;
  }
  return total;
}


function renderCheckout() {
  var orderSummary = document.querySelector('.order-summary');
  var paymentSummary = document.querySelector('.payment-summary');
  if (!orderSummary) return;

  var subtotal = 0;
  var itemsHtml = '';


  for (var c = 0; c < cart.length; c++) {
    var item = cart[c];
    var product = null;
    for (var p = 0; p < products.length; p++) {
      if (products[p].id === item.productId) { product = products[p]; break; }
    }
    if (!product) continue;

    subtotal += product.priceCents * item.quantity;

    var optionsHtml = '';
    for (var key in item.options) {
      optionsHtml += '<div><strong>' + key + ':</strong> ' + item.options[key] + '</div>';
    }

   
    var shippingIndex = selectedShipping.findIndex(s => s.productId === product.id && JSON.stringify(s.options) === JSON.stringify(item.options));
    var checkedStandard = '';
    var checkedExpress = '';
    var checkedPremium = '';
    if (shippingIndex === -1) {
     
      checkedStandard = 'checked';
      selectedShipping.push({ productId: product.id, options: item.options, shipping: 0, days: 3 });
    } else {
      var ship = selectedShipping[shippingIndex];
      if (ship.shipping === 0) checkedStandard = 'checked';
      else if (ship.shipping === 25000) checkedExpress = 'checked';
      else if (ship.shipping === 50000) checkedPremium = 'checked';
    }

    itemsHtml += '<div class="cart-item-container" data-product-id="' + product.id + '" data-options=\'' + JSON.stringify(item.options) + '\'>' +
      '<div class="delivery-date">تاریخ تحویل: <span class="delivery-date-span" data-product-id="' + product.id + '" data-options=\'' + JSON.stringify(item.options) + '\'></span></div>' +
      '<div class="cart-item-details-grid">' +
      '<img class="product-image" src="' + product.image + '" onerror="this.src=\'https://via.placeholder.com/200x150?text=محصول\';">' +
      '<div class="cart-item-details">' +
      '<div class="product-name">' + product.name + '</div>' +
      '<div class="product-price">' + formatPrice(product.priceCents) + '</div>' +
      (optionsHtml ? '<div class="product-options-selected">' + optionsHtml + '</div>' : '') +
      '<div class="product-quantity">تعداد: <span class="quantity-label js-quantity-label-' + product.id + '">' + item.quantity.toLocaleString('fa-IR') + '</span> ' +
      '<a class="update-quantity-link link-primary js-update-link" data-product-id="' + product.id + '" data-options=\'' + JSON.stringify(item.options) + '\'>ویرایش</a> ' +
      '<a class="delete-quantity-link link-primary js-delete-link" data-product-id="' + product.id + '" data-options=\'' + JSON.stringify(item.options) + '\'>حذف</a></div>' +
      '</div>' +
      '<div class="delivery-options">' +
      '<div class="delivery-options-title">انتخاب روش تحویل:</div>' +
      '<div class="delivery-option"><input type="radio" class="delivery-option-input" name="delivery-' + product.id + '-' + c + '" value="standard" ' + checkedStandard + ' data-shipping="0" data-days="3"><div><div class="delivery-option-date">' + getDeliveryDate(3) + '</div><div class="delivery-option-price">ارسال رایگان</div></div></div>' +
      '<div class="delivery-option"><input type="radio" class="delivery-option-input" name="delivery-' + product.id + '-' + c + '" value="express" ' + checkedExpress + ' data-shipping="250" data-days="1"><div><div class="delivery-option-date">' + getDeliveryDate(1) + '</div><div class="delivery-option-price">۲۵۰۰۰ افغانی - ارسال سریع</div></div></div>' +
      '<div class="delivery-option"><input type="radio" class="delivery-option-input" name="delivery-' + product.id + '-' + c + '" value="premium" ' + checkedPremium + ' data-shipping="500" data-days="0.5"><div><div class="delivery-option-date">' + getDeliveryDate(0) + '</div><div class="delivery-option-price">۵۰۰۰۰ افغانی - ارسال ویژه (فردا)</div></div></div>' +
      '</div></div></div>';
  }

  orderSummary.innerHTML = itemsHtml;

 
  for (var i = 0; i < selectedShipping.length; i++) {
    var ship = selectedShipping[i];
    var dateSpan = document.querySelector('.delivery-date-span[data-product-id="' + ship.productId + '"][data-options=\'' + JSON.stringify(ship.options) + '\']');
    if (dateSpan) {
      dateSpan.textContent = getDeliveryDate(ship.days);
    }
  }

  
  var totalShipping = calculateShipping();
  var totalBeforeTax = subtotal + totalShipping;
  var discountAmount = discountApplied ? Math.round(totalBeforeTax * 0.05) : 0;
  var afterDiscount = totalBeforeTax - discountAmount;
  var tax = Math.round(afterDiscount * 0.1);
  var total = afterDiscount + tax;

 
  var paymentHtml = 
    '<div class="payment-summary-title">خلاصه سفارش</div>' +
    '<div class="coupon-section"><div style="font-weight: bold; color: #0066c0;"><i class="fas fa-tag"></i> کد تخفیف</div>' +
    '<div style="font-size: 14px; color: #666; margin-bottom: 10px;">کد "MINA5" = ۵٪ تخفیف</div>' +
    '<div class="coupon-input"><input type="text" id="coupon-code" placeholder="کد تخفیف"><button id="apply-coupon">اعمال</button></div></div>' +
    '<div class="payment-summary-row"><div>جمع کالاها (' + cart.length + ' قلم):</div><div class="payment-summary-money">' + formatPrice(subtotal) + '</div></div>' +
    '<div class="payment-summary-row"><div>هزینه ارسال:</div><div class="payment-summary-money" id="shipping-cost">' + formatPrice(totalShipping) + '</div></div>' +
    (discountApplied ? '<div class="payment-summary-row discount-row" style="color: #007600;"><div>تخفیف (۵٪):</div><div class="payment-summary-money">- ' + formatPrice(discountAmount) + '</div></div>' +
    '<div class="payment-summary-row"><div>مبلغ پس از تخفیف:</div><div class="payment-summary-money">' + formatPrice(afterDiscount) + '</div></div>' : '') +
    '<div class="payment-summary-row subtotal-row"><div>مالیات (۱۰٪):</div><div class="payment-summary-money">' + formatPrice(tax) + '</div></div>' +
    '<div class="payment-summary-row total-row"><div>مبلغ قابل پرداخت:</div><div class="payment-summary-money">' + formatPrice(total) + '</div></div>' +
    '<button class="place-order-button button-primary js-place-order"><i class="fas fa-shopping-bag"></i> ثبت نهایی سفارش</button>';

  paymentSummary.innerHTML = paymentHtml;

  
  document.querySelectorAll('.delivery-option-input').forEach(function(radio) {
    radio.addEventListener('change', function(e) {
      var input = e.currentTarget;
      var container = input.closest('.cart-item-container');
      var productId = container.dataset.productId;
      var options = JSON.parse(container.dataset.options || '{}');
      var shipping = parseInt(input.dataset.shipping);
      var days = parseFloat(input.dataset.days);
      
     
      var index = selectedShipping.findIndex(s => s.productId === productId && JSON.stringify(s.options) === JSON.stringify(options));
      if (index !== -1) {
        selectedShipping[index].shipping = shipping;
        selectedShipping[index].days = days;
      } else {
        selectedShipping.push({ productId: productId, options: options, shipping: shipping, days: days });
      }
      
 
      renderCheckout();
    });
  });


  document.querySelectorAll('.js-delete-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var productId = e.currentTarget.dataset.productId;
      var options = JSON.parse(e.currentTarget.dataset.options || '{}');
      
      
      selectedShipping = selectedShipping.filter(s => !(s.productId === productId && JSON.stringify(s.options) === JSON.stringify(options)));
      
      removeFromCart(productId, options);
      renderCheckout();
    });
  });


  document.querySelectorAll('.js-update-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var productId = e.currentTarget.dataset.productId;
      var options = JSON.parse(e.currentTarget.dataset.options || '{}');
      var currentQty = document.querySelector('.js-quantity-label-' + productId).textContent.replace(/,/g, '');
      var newQty = prompt('تعداد جدید را وارد کنید:', currentQty);
      if (newQty && !isNaN(newQty) && Number(newQty) > 0) {
        updateQuantity(productId, options, Number(newQty));
        renderCheckout();
      }
    });
  });

  
  var applyBtn = document.getElementById('apply-coupon');
  if (applyBtn) {
    applyBtn.onclick = function() {
      var code = document.getElementById('coupon-code').value.trim().toUpperCase();
      if (code === DISCOUNT_CODE) {
        discountApplied = true;
        renderCheckout();
        alert('کد تخفیف با موفقیت اعمال شد!');
      } else {
        alert('کد تخفیف نامعتبر است.');
      }
    };
  }

 
  var placeBtn = document.querySelector('.js-place-order');
  if (placeBtn) {
    placeBtn.onclick = function() {
      var firstName = document.getElementById('first-name');
      var lastName = document.getElementById('last-name');
      var phone = document.getElementById('phone');
      var address = document.getElementById('address');
      if (!firstName || !lastName || !phone || !address || !firstName.value || !lastName.value || !phone.value || !address.value) {
        alert('لطفاً تمام فیلدهای اجباری را پر کنید.');
        return;
      }

      var orders = JSON.parse(localStorage.getItem('orders')) || [];
      var newOrder = {
        id: 'MB-' + Date.now().toString().slice(-6),
        date: getDeliveryDate(0),
        total: total,
        items: cart.map(function(item) {
          var p = products.find(function(pr) { return pr.id === item.productId; });
          return {
            productId: item.productId,
            name: p ? p.name : 'محصول نامشخص',
            image: p ? p.image : '',
            quantity: item.quantity,
            options: item.options,
            deliveryDate: getDeliveryDate(3)
          };
        }),
        customer: {
          firstName: firstName.value,
          lastName: lastName.value,
          phone: phone.value,
          address: address.value
        },
        shippingCost: totalShipping,
        discount: discountAmount,
        tax: tax,
        status: 'shipping' 
      };
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));

      
      var trackingInfo = {
        items: newOrder.items.map(function(item) {
          return {
            productName: item.name,
            quantity: item.quantity,
            deliveryDate: item.deliveryDate
          };
        }),
        status: newOrder.status
      };
      localStorage.setItem('lastTrackedOrder', JSON.stringify(trackingInfo));

    
      localStorage.removeItem('cart');
      cart = [];
      updateCartQuantity();

      alert('سفارش شما با موفقیت ثبت شد!\nکد پیگیری: ' + newOrder.id);
      window.location.href = 'orders.html';
    };
  }
}


function saveCustomerInfo() {
  var customer = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value
  };
  localStorage.setItem('customerInfo', JSON.stringify(customer));
  alert('اطلاعات با موفقیت ذخیره شد.');
}

function loadSavedCustomerInfo() {
  var saved = JSON.parse(localStorage.getItem('customerInfo')) || {};
  if (saved.firstName) document.getElementById('first-name').value = saved.firstName;
  if (saved.lastName) document.getElementById('last-name').value = saved.lastName;
  if (saved.phone) document.getElementById('phone').value = saved.phone;
  if (saved.address) document.getElementById('address').value = saved.address;
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    renderCheckout();
    loadSavedCustomerInfo();

   
    var saveBtn = document.getElementById('saveCustomerInfo');
    if (saveBtn) {
      saveBtn.addEventListener('click', saveCustomerInfo);
    }
  });
} else {
  renderCheckout();
  loadSavedCustomerInfo();
  var saveBtn = document.getElementById('saveCustomerInfo');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveCustomerInfo);
  }
}
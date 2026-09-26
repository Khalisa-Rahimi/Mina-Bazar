function renderTracking() {
  
  var lastOrder = JSON.parse(localStorage.getItem('lastTrackedOrder')) || {
    items: [
      { productName: 'دریشی مردانه', quantity: 1, deliveryDate: getDeliveryDate(1) }
    ],
    status: 'shipping'
  };

  
  var container = document.getElementById('track-items-container');
  if (container) {
    var html = '';
    for (var i = 0; i < lastOrder.items.length; i++) {
      var item = lastOrder.items[i];
      html += '<div class="product-info"><strong>محصول:</strong> ' + item.productName + '</div>';
      html += '<div class="product-info"><strong>تعداد:</strong> ' + item.quantity + '</div>';
      html += '<div class="product-info"><strong>تحویل:</strong> ' + item.deliveryDate + '</div>';
      if (i < lastOrder.items.length - 1) {
        html += '<hr class="item-separator">';
      }
    }
    container.innerHTML = html;
  }

  
  var progressBar = document.getElementById('progress-bar');
  var preparingLabel = document.getElementById('status-preparing');
  var shippingLabel = document.getElementById('status-shipping');
  var deliveredLabel = document.getElementById('status-delivered');

 
  if (preparingLabel) preparingLabel.classList.remove('current-status');
  if (shippingLabel) shippingLabel.classList.remove('current-status');
  if (deliveredLabel) deliveredLabel.classList.remove('current-status');

  if (lastOrder.status === 'preparing') {
    if (progressBar) progressBar.style.width = '25%';
    if (preparingLabel) preparingLabel.classList.add('current-status');
  } else if (lastOrder.status === 'shipping') {
    if (progressBar) progressBar.style.width = '50%';
    if (shippingLabel) shippingLabel.classList.add('current-status');
  } else if (lastOrder.status === 'delivered') {
    if (progressBar) progressBar.style.width = '100%';
    if (deliveredLabel) deliveredLabel.classList.add('current-status');
  } else {
   
    if (progressBar) progressBar.style.width = '50%';
    if (shippingLabel) shippingLabel.classList.add('current-status');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderTracking);
} else {
  renderTracking();
}
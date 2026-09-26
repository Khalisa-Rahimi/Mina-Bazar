function renderOrders(ordersToRender) {
  var grid = document.querySelector('.orders-grid');
  if (!grid) return;

  var allOrders = JSON.parse(localStorage.getItem('orders')) || [
    
    {
      id: 'MB-789012',
      date: '۱۰ حمل ۱۴۰۳',
      total: 98000,
      items: [
        { productId: '1', name: 'جوراب نخی مردانه', image: 'images/socks.jfif', quantity: 2, options: {'تعداد جفت': '۸'}, deliveryDate: '۱۲ حمل ۱۴۰۳' }
      ],
      customer: { firstName: 'علی', lastName: 'احمدی', phone: '۰۷۸۶۱۲۳۴۵۶', address: 'کابل، کارته سه، خیابان ۱' },
      status: 'shipping'
    },
    {
      id: 'MB-345678',
      date: '۳۰ قوس ۱۴۰۲',
      total: 35000,
      items: [
        { productId: '6', name: 'درّاع افغانی مردانه', image: 'images/دراع-افغانی.jpg', quantity: 2, options: {'سایز': 'L'}, deliveryDate: '۱ جدی ۱۴۰۲' }
      ],
      customer: { firstName: 'مریم', lastName: 'کریمی', phone: '۰۷۸۶۵۵۴۳۲۱', address: 'هرات، جاده وحدت' },
      status: 'delivered'
    }
  ];

  ordersToRender = ordersToRender || allOrders;

  var html = '';
  for (var o = 0; o < ordersToRender.length; o++) {
    var order = ordersToRender[o];
    var itemsHtml = '';
    for (var i = 0; i < order.items.length; i++) {
      var item = order.items[i];
      var opts = '';
      for (var key in item.options) {
        opts += '<div style="font-size:12px; color:#555;">' + key + ': ' + item.options[key] + '</div>';
      }
      itemsHtml += '<div class="order-details-grid">' +
        '<div class="product-image-container"><img class="product-image" src="' + item.image + '" onerror="this.src=\'https://via.placeholder.com/100?text=محصول\';"></div>' +
        '<div class="product-details">' +
        '<div class="product-name">' + item.name + '</div>' + opts +
        '<div class="product-delivery-date">تاریخ دریافت: ' + item.deliveryDate + '</div>' +
        '<div class="product-quantity">تعداد: ' + item.quantity + '</div>' +
        '<button class="buy-again-button button-primary" data-product-id="' + item.productId + '" data-options=\'' + JSON.stringify(item.options || {}) + '\'><i class="fas fa-redo-alt"></i> خرید مجدد</button>' +
        '</div>' +
        '<div class="product-actions"><a href="tracking.html"><button class="track-package-button button-secondary"><i class="fas fa-truck"></i> پیگیری</button></a></div>' +
        '</div>';
    }
    var customerHtml = order.customer ? 
      '<div class="order-customer-info"><i class="fas fa-user"></i> <strong>' + order.customer.firstName + ' ' + order.customer.lastName + '</strong><br><i class="fas fa-phone"></i> ' + order.customer.phone + '<br><i class="fas fa-map-marker-alt"></i> ' + order.customer.address + '</div>' : '';
    html += '<div class="order-container">' +
      '<div class="order-header">' +
      '<div class="order-header-left-section"><div class="order-date"><span class="order-header-label">تاریخ سفارش:</span> ' + order.date + '</div>' +
      '<div class="order-total"><span class="order-header-label">مجموع مبلغ:</span> ' + formatPrice(order.total) + '</div></div>' +
      '<div class="order-header-right-section"><span class="order-header-label">کد سفارش:</span> ' + order.id + '</div>' +
      '</div>' + customerHtml + itemsHtml + '</div>';
  }
  grid.innerHTML = html;


  var buyBtns = document.querySelectorAll('.buy-again-button');
  for (var b = 0; b < buyBtns.length; b++) {
    buyBtns[b].addEventListener('click', function(e) {
      var btn = e.currentTarget;
      var productId = btn.dataset.productId;
      var options = JSON.parse(btn.dataset.options || '{}');
      addToCart(productId, options, 1);
      alert('محصول به سبد خرید اضافه شد.');
    });
  }
}

function initOrderSearch() {
  var searchInput = document.getElementById('order-search');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      var term = e.target.value.toLowerCase();
      var allOrders = JSON.parse(localStorage.getItem('orders')) || [];
      var filtered = allOrders.filter(function(order) {
        return order.id.toLowerCase().includes(term) ||
          order.items.some(function(item) { return item.name.toLowerCase().includes(term); }) ||
          (order.customer && (order.customer.firstName + ' ' + order.customer.lastName).toLowerCase().includes(term));
      });
      renderOrders(filtered);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { renderOrders(); initOrderSearch(); });
} else { renderOrders(); initOrderSearch(); }
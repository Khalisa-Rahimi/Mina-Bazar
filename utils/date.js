function getDeliveryDate(daysFromNow = 3) {
  var date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  var months = ['حمل','ثور','جوزا','سرطان','اسد','سنبله','میزان','عقرب','قوس','جدی','دلو','حوت'];
  return date.getDate() + ' ' + months[date.getMonth()] + ' ' + (date.getFullYear() - 621);
}
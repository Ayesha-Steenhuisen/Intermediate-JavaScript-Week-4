/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function copyTextValue(bf) {
  var text1 = bf.checked ? document.getElementById("shippingName").value : "";
  document.getElementById("billingName").value = text1;
  var text2 = bf.checked ? document.getElementById("shippingZip").value : "";
  document.getElementById("billingZip").value = text2;
}

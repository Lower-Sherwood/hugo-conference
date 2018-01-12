window.onload = function () {
    var query = $(location).attr('href');
    if (query.indexOf('utm_source=paypal-return') !== -1) {
        alert("Thank you for your payment!");
    };
};

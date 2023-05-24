(function countdown(start, callback) {
    if (start > 0) {
      setTimeout(function() {
        document.getElementById('countdown').textContent = start;
        countdown(start - 1, callback);
      }, 1000);
    } else {
      setTimeout(callback, 1000);
    }
  })(10, function() {
    document.getElementById('countdown').textContent = 'Happy Independence Day';
  });
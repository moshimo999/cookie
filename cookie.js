window.cookieconsent.initialise({
  'palette': {
    'popup': {
      'background': '#000'
    },
    'button': {
      'background': '#f1d600'
    }
  },
  'autoOpen': true,
  'type': 'opt-in',
  'content': {
    'message': 'Cookieの使用について説明',
    'allow': '許可',
    'deny': '拒否'
  },
  onPopupOpen: function() {
    if (! this.hasConsented()) {
      const buttons = document.querySelectorAll('input[type="submit"]');
      Array.prototype.forEach.call(buttons, function(button) {
        button.disabled = true;
      });
    }
  },
  onStatusChange: function(status) {
    if (status === 'allow') {
      const buttons = document.querySelectorAll('input[type="submit"]');
      Array.prototype.forEach.call(buttons, function(button) {
        button.disabled = false;
      });
    }

    if (status === 'deny') {
      document.cookie = 'cookieconsent_status=; expires=0';
      location.href = 'https://www.tokiomarine-nichido.co.jp/';
    }
  }
});

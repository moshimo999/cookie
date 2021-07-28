window.cookieconsent.initialise({
  'palette': {
    'popup': {
      'background': '#000'
    },
    'button': {
      'background': '#f1d600'
    }
  },
  'position': 'top',
  'static': true,
  'type': 'opt-out',
  'content': {
    'message': 'This website uses cookies to ensure you get the best experience on our website.',
    'link': 'Learn more',
    'href': 'https://www.cookiesandyou.com/',
    'allow': '許可',
    'deny': '拒否'
  },
  'autoOpen': true,
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
      document.cookie = 'cookieconsent_status=; expires=0; path=/';
      location.href = 'https://www.tokiomarine-nichido.co.jp/';
    }
  }
});

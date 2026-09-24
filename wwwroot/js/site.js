window.contactHelper = {
  copyAndOpenZalo: async function (message, url) {
    window.open(url, '_blank', 'noopener');
    try {
      await navigator.clipboard.writeText(message);
    } catch (e) {
      console.warn('Không thể sao chép tự động:', e);
    }
  }
};

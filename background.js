
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.url) return;

  const url = new URL(tab.url);

  chrome.cookies.getAll({}, (cookies) => {
    cookies.forEach((cookie) => {
      const isSameDomain = cookie.domain.replace(/^\./, '') === url.hostname;
      const isSameHost = url.hostname.endsWith(cookie.domain.replace(/^\./, ''));

      if (isSameDomain || isSameHost) {
        const cookieUrl = `${cookie.secure ? 'https:' : 'http:'}//${cookie.domain.replace(/^\./, '')}${cookie.path}`;

        chrome.cookies.remove({
          url: cookieUrl,
          name: cookie.name,
          storeId: cookie.storeId
        });
      }
    });

    chrome.storage.sync.get("autoRefresh", (data) => {
      const refresh = data.autoRefresh !== false; // default to true
      const delay = refresh ? 1100 : null;

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (delay) => {
          const toast = document.createElement("div");
          toast.innerText = "🍪 Cookies cleared";
          toast.style.cssText = `
            position: fixed;
            top: 24px;
            right: 24px;
            background: #323232;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            z-index: 99999;
            font-family: sans-serif;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
          `;
          document.body.appendChild(toast);
          setTimeout(() => (toast.style.opacity = "1"), 50);
          setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 200);
          }, 1000);
          if (delay) {
            setTimeout(() => {
              location.reload(true);
            }, delay);
          }
        },
        args: [delay]
      });
    });
  });
});

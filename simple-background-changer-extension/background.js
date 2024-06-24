chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.startsWith('chrome://') && !tab.url.startsWith('chrome-extension://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changeBackgroundColor
      });
    } else {
      console.warn('Cannot change background color on chrome:// or chrome-extension:// pages');
    }
  });
  
  function changeBackgroundColor() {
    // Placeholder function; actual color will be passed from the popup
  }
  
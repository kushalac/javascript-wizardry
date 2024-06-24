document.getElementById('changeColor').addEventListener('click', () => {
    const selectedColor = document.getElementById('colorPicker').value;
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      if (!activeTab.url.startsWith('chrome://') && !activeTab.url.startsWith('chrome-extension://')) {
        // here we are sending a message to the content script
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: changeBackgroundColor,
          args: [selectedColor]
        });
      } else {
        console.warn('Cannot change background color on chrome:// or chrome-extension:// pages');
      }
    });
  });
  // this function will set the background color of the current page
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
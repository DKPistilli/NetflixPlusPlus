
// Add a listener so background knows when a tab has changed.
// You need 'tabs' persmission, that's why we added it to manifest file.
chrome.tabs.onUpdated.addListener(showNetflixAction);

// input specified by chrome.tabs.onUpdated.addListener reqs
// adds page_button to all tabs containing netflix url
function showNetflixAction(tabId, changeInfo, tab) {
  if (tab.url.indexOf('http://www.guimp.com/') > -1) {
    // Show icon for page action in the current tab.
    chrome.pageAction.show(tabId);
  }
};
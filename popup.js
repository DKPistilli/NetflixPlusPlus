
// Add a listener so background knows when a tab has changed.
// Requires 'tabs' persmission
chrome.tabs.onUpdated.addListener(showNetflixAction);

// input specified by the chrome.tabs.onUpdated.addListener requirements
// adds page_button to all tabs containing netflix url
function showNetflixAction(tabId, changeInfo, tab) {
    // if the given string is found in the url
  if (tab.url.indexOf('http://www.netflix.com/') > -1) {
    // Show icon for page action in the current tab.
    chrome.pageAction.show(tabId);
  }
};
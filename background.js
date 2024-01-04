chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        files: ["script.js"],
        target: { tabId: tab.id },
    });
});
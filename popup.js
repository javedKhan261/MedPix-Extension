document.addEventListener('DOMContentLoaded', function () {
  var fig1Button = document.getElementById('showMarkersForFig1ButtonCurofyExtensionPopup');
  if (fig1Button) {
    fig1Button.addEventListener('click', showMarkersFig1);
  }

function showMarkersFig1() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'injectButtonOnFigure1Page' });
    });
  }
});



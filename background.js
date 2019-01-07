chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

//chrome.browserAction.onClicked.addListener(function(tab) {
//  chrome.tabs.executeScript(null, { file: "myscript.js" }, function() {
//    chrome.tabs.executeScript(null, { file: "myscript.js" });
//  });
//});
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

  // No tabs or host permissions needed!
  //console.log('Turning ' + tab.url + ' red!');
  //chrome.tabs.executeScript({
    //code: 'document.body.style.backgroundColor="red"',
    //code: 'var l = document.getElementsByClassName("question-item-meta")'
	
//  });
  /*
  chrome.tabs.executeScript({
    var l = document.getElementsByClassName("question-item-meta");
    int i = 0;
	for (i = 0; i < l.length; i++)
	{
		l[i].innerHTML() += "<span class='zg-bull zu-autohide'>•</span>举报"
	}
  });*/
//});

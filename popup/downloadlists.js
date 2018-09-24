/**
*时间: 18-9-21
*作者: zwssd <349705141@qq.com>
*版权: GPL v2
*/

"use strict";

function onStartedDownload(id) {
    console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
    console.log(`Download failed: ${error}`);
}

function handleChanged(delta) {
    if (delta.state && delta.state.current === "complete") {
        console.log(`Download ${delta.id} has completed.`);
    }
}

function startDownload(url) {
    var downloading = browser.downloads.download({
        url: url,
        conflictAction: 'uniquify'
    });

    downloading.onChanged.addListener(handleChanged);

    downloading.then(onStartedDownload, onFailed);
}

/*document.addEventListener("click", (e) => {
    if (e.target.id == 'startDownload') {
        var downloadUrl = document.getElementById("downloadurl").value;
        alert(downloadUrl);
        startDownload(downloadUrl)
    }
});*/

var startBtn = document.querySelector('#startBtn');
startBtn.onclick = function(){
    var downloadUrl = document.querySelector('#downloadurl').value;
    startDownload(downloadUrl);
}

var showBtn = document.querySelector('#show');

showBtn.onclick = function() {
    browser.downloads.showDefaultFolder();
}

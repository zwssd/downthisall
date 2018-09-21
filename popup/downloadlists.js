/**
*时间: 18-9-21
*作者: zwssd <349705141@qq.com>
*版权: GPL v2
*/

function onStartedDownload(id) {
    console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
    console.log(`Download failed: ${error}`);
}

function startDownload(url) {
    alert('aaa');
    alert(url);
    var downloading = browser.downloads.download({
        url: url,
        conflictAction: 'uniquify'
    });

    downloading.then(onStartedDownload, onFailed);
}

document.addEventListener("click", (e) => {
    if (e.target.id == 'startDownload') {
        var downloadUrl = document.getElementById("downloadurl").value;
        alert(downloadUrl);
        startDownload(downloadUrl)
    }
});

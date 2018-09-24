/**
 *时间: 18-9-20
 *作者: zwssd <349705141@qq.com>
 *版权: GPL v2
 */

"use strict";

var createActionsMenuItems = function () {
    var actionHtml = '';
    var items = [];
    var action = document.getElementById("action");

    items.push({name: '<div id="button" class="run-tasks"><i class="fa fa-info"></i>&nbsp;&nbsp;没有运行中的任务</div>'});
    items.push({name: '<div id="button" class="add-tasks"><i class="fa fa-plus-square"></i>&nbsp;添加任务</div>'});
    items.push({name: 'HR', image: ''});
    items.push({name: '<div id="button" class="welcome-donations"><i class="fa fa-heart red"></i>&nbsp;欢迎捐助</div>'});
    items.push({name: 'HR', image: ''});
    items.push({name: '<div id="button" class="management-panel"><i class="fa fa-cog blue"></i>&nbsp;管理面板</div>'});
    items.push({name: '<div id="button" class="help-update-log"><i class="fa fa-info-circle blue"></i>&nbsp;帮助&nbsp;|&nbsp;更新日志</div>'});
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == 'HR') {
            actionHtml += '<hr>';
        } else {
            actionHtml += '<tr><td>' + items[i].name + '</td></tr>';
        }
    }
    action.innerHTML = actionHtml;
}
//createActionsMenuItems();


document.addEventListener("click", (e) => {
    function beastNameToURL(beastName) {
        switch (beastName) {
            case "add-tasks":
                return browser.extension.getURL("popup/downloadlists.html");
            case "welcome-donations":
                return browser.extension.getURL("images/info.png");
            case "management-panel":
                return browser.extension.getURL("images/info.png");
            case "help-update-log":
                return browser.extension.getURL("images/info.png");
        }
    }

    /**
     * Get the new tab,
     */
    if (e.target.classList.contains("button")) {
        let url = beastNameToURL(e.target.id);
        browser.tabs.create({url: url});
    }
});

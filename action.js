/**
*时间: 18-9-20
*作者: zwssd <349705141@qq.com>
*版权: GPL v2
*/

var createActionsMenuItems = function () {
    var actionHtml = '';
    var items = [];
    var action = document.getElementById("action");

    items.push({ name: '<span class="fa fa-info"></span>没有运行中的任务'});
    items.push({ name: '<div id="button" class="add-tasks"><span class="fa fa-plus-square"></span>添加任务</div>'});
    items.push({ name: 'HR', image: ''});
    items.push({ name: '<div id="button" class="welcome-donations"><span class="fa fa-heart"></span>欢迎捐助</div>'});
    items.push({ name: 'HR', image: ''});
    items.push({ name: '<div id="button" class="management-panel"><span class="fa fa-cog blue"></span>管理面板</div>'});
    items.push({ name: '<div id="button" class="help-update-log"><span class="fa fa-info-circle blue"></span>帮助&nbsp;|&nbsp;更新日志</div>'});
    for(var i=0;i<items.length;i++){
        if(items[i].name=='HR'){
            actionHtml += '<hr>';
        }else{
            actionHtml += '<tr><td>'+items[i].name+'</td></tr><br>';
        }
    }
    action.innerHTML = actionHtml;
}


const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

function listenForClicks() {
    document.addEventListener("click", (e) => {

        /**
         * Given the name of a beast, get the URL to the corresponding image.
         */
        function beastNameToURL(beastName) {
            alert(beastName);
            switch (beastName) {
                case "add-tasks":
                    alert('button');
                    return browser.extension.getURL("images/info.png");
                case "welcome-donations":
                    return browser.extension.getURL("images/info.png");
                case "management-panel":
                    return browser.extension.getURL("images/info.png");
                case "help-update-log":
                    return browser.extension.getURL("images/info.png");
            }
        }


        /**
         * Get the active tab,
         * then call "add-tasks" or "welcome-donations" or "management-panel" or "help-update-log" as appropriate.
         */
        if (e.target.id == "button") {
            alert('a');
            let url = beastNameToURL(e.target.className);
            alert('ab');
            browser.tabs.create({url: url});
        }
    });
}

createActionsMenuItems();
listenForClicks();

/**
*时间: 18-9-20
*作者: zwssd <349705141@qq.com>
*版权: GPL v2
*/

var createActionsMenuItems = function () {
    var actionHtml = '';
    var items = [];
    var action = document.getElementById("action");

    items.push({ name: '没有运行中的任务', image: '<span class="fa fa-info"></span>'});
    items.push({ name: '添加任务', image: '<span class="fa fa-plus-square"></span>'});
    items.push({ name: 'HR', image: ''});
    items.push({ name: '欢迎捐助', image: '<span class="fa fa-heart"></span>'});
    items.push({ name: 'HR', image: ''});
    items.push({ name: '管理面板', image: '<span class="fa fa-cog blue"></span>'});
    items.push({ name: '帮助|更新日志', image: '<span class="fa fa-info-circle blue"></span>'});
    for(var i=0;i<items.length;i++){
        if(items[i].name=='HR'){
            actionHtml += '<hr>';
        }else{
            actionHtml += '<tr><td>'+items[i].image+'&nbsp;'+items[i].name+'</td></tr><br>';
        }
    }
    action.innerHTML = actionHtml;
}

createActionsMenuItems();

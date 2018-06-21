function Paging(index) {
    var RankInfo = document.getElementById('record');
    var totalPage = RankInfo.rows.length; //总条数
    var pageSize = 5;//每页显示条数
    var pageNumber = Math.ceil(totalPage / pageSize); //总页数
    var currentPage = index;//当前页数
    var start_row = (currentPage - 1) * pageSize;//开始显示的行
    var end_row = currentPage * pageSize;//结束显示的行
    end_row = (end_row > totalPage) ? totalPage : end_row;
    for (var i = 0; i < totalPage; i++) {
        var irow = RankInfo.rows[i];
        if (i >= start_row && i < end_row) {
            irow.style.display = 'table-row';
        } else {
            irow.style.display = 'none';
        }
    }
    var pageHTML = '';
    pageHTML += "<a class='p_first' href=\"javascript:Paging(1)\" title=\"首页\">首页</a>";
    var up = parseInt(currentPage) - 1;
    if (up < 1) {
        up = 1;
    }
    pageHTML += "<a class='p_prev' href=\"javascript:Paging(" + up + ")\" title=\"上一页\">上一页</a>";
    pageHTML += "<span>" + currentPage + "/" + pageNumber + "</span>";

    var next = parseInt(currentPage) + 1;
    if (next > pageNumber) {
        next = pageNumber;
    }
    pageHTML += "<a class='p_next js_page' href=\"javascript:Paging(" + next + ")\" title=\"下一页\">下一页</a>";
    pageHTML += "<a  class='p_last js_page' href=\"javascript:Paging(" + pageNumber + ")\" title=\"尾页\">尾页</a>";
    if (totalPage == 0) {
        $("#page").html('');
    } else {
        $("#page").html(pageHTML);
    }
}
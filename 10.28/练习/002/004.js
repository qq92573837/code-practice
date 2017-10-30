;
(function () {
    'use strict';

    // //这个是点击页面
    // var link_list = document.querySelectorAll('[data-list]');
    // //这个是跳转到的页面
    // var page_list = document.querySelectorAll('[data-page]')

    // function init() {
    //     render('admin_product')
    //     link_list.forEach(function (link) {
    //         link.addEventListener('click', function () {
            
    //             render(link.dataset.link)
    //         })
    //     })
    // }





    // function render(page) {
    //     page_list.forEach(function (page) {
    //         page.hidden = true;

    //         if (page.dataset.page = page) {
    //             page.hidden = false;
    //         }
    //     })
    // }





  /*找到文档中所有的链接*/
  var link_list = document.querySelectorAll('[data-link]');
  /*找到文档中所有的页面*/
  var page_list = document.querySelectorAll('[data-page]');

  init();

  function init() {
    render_page('admin_product');

    /*给所有的链接绑定点击事件*/
    link_list.forEach(function (link) {
      link.addEventListener('click', function () {
        /*当链接被点击，开始渲染跟链接地址相对应的页面*/
        render_page(link.dataset.link);
      });
    });
  }


  /*渲染页面
  * @param String page_name 页面名称（地址）
  * */
  function render_page(page_name) {
    /*迭代并隐藏所有页面*/
    page_list.forEach(function (page) {
      page.hidden = true;

      /*只显示传入的页面*/
      if (page.dataset.page === page_name) {
        page.hidden = false;
      }
    });
  }













})();
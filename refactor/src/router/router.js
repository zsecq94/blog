$(document).ready(() => {
  const router = () => {
    let route = window.location.hash.slice(2).split("/");
    let path = route.length === 1 ? `/src/pages/main.html` : `/src/pages/${route[0]}/index.html`;
    let selector = `.${route[0]}-con`;

    const loadPage = () => {
      let filePath = `/src/pages/${route[0]}/${route[1]}.html`;
      $.get(filePath, (data) => {
        $(selector).html(data);
      });
    };

    const loadDetail = () => {
      console.log("게시판");
    };

    $.get(path, (data) => {
      $("main").html(data);
      window.scrollTo(0, 0);

      if (route.length === 2) {
        loadPage();
      } else if (route.length === 3) {
        loadDetail();
      }
    });
  };

  $(window).on("hashchange", router);
  router();
});

// 캐시 활용 고민

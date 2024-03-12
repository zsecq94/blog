$(document).ready(() => {
  const router = () => {
    let route = window.location.hash.slice(2).split("/");

    let mainFilePath = route.length === 1 ? "src/pages/home.html" : `/src/pages/${route[0]}.html`;
    let subFilePath = `/src/pages/${route[0]}/${route[1]}.html`;

    let selector = `.${route[0]}-route`;

    const loadPage = () => {
      $.get(subFilePath, (data) => {
        console.log(selector);
        $(selector).html(data);
      });
    };

    $.get(mainFilePath, (data) => {
      $("main").html(data);
      window.scrollTo(0, 0);

      route.length > 1 && loadPage();
    });
  };

  $(window).on("hashchange", router);
  router();
});

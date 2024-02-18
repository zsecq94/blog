$(document).ready(() => {
  const router = () => {
    let route = window.location.hash.substr(2);
    if (route == "") route = "main";
    let fileName = route.split("/");
    let selector = `#${fileName[0]}-content`;
    let filePath = `pages/${fileName[0]}/`;

    const loadContent = (selector, filePath, fileName) => {
      $.get(`${filePath}${fileName}.html`, (data) => {
        $(selector).html(data);
      });
    };

    $.get(`pages/${fileName[0]}.html`, (data) => {
      $("#app").html(data);
      window.scrollTo(0, 0);

      if (fileName[0] === "ir" && fileName[1] === "investment") {
        $("#ir-content").css({
          backgroundColor: "#fbfbfb",
          padding: 0,
        });
      }

      if (fileName.length > 1) {
        loadContent(selector, filePath, fileName[1]);
      }
    });
  };

  $(window).on("hashchange", router);
  router();
});

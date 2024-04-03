const loadTranslations = (url, lang) => {
  $.getJSON(jsonPath, (data) => {
    let translations = data[lang] || {};

    translations.header
      .forEach((item, index) => {
        let categoryKey = Object.keys(item)[0];
        $("header > article > .gnb-con > ul > li").eq(index).find("> a").text(item[categoryKey]);

        item.subMenu.forEach((subItem, subIndex) => {
          let subKeys = Object.keys(subItem);
          $("header > article > .gnb-con > ul > li")
            .eq(index)
            .find(".lnb > li")
            .eq(subIndex)
            .find("a")
            .text(subItem[subKeys[0]]);
        });
      })
      .fail(() => {
        console.log("Translation 을 로드하지 못했습니다.");
      });

    $langBoxP.text(lang.toUpperCase());
  });
};

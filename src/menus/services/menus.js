const { models } = require("../../_shared/config/config-db");
const { titleBuilder } = require("../../_shared/utilities/string-helper");

const findAndGroupRoutes = async () => {
  try {
    const findMenus = await models.menus.findAll({
      where: { is_active: 1 },
      raw: true,
      order: ["menidx"],
    });

    const modifiedFindMenus = findMenus.map((menu) => {
      return menu;
      // return {...menu, menprg:titleBuilder(menu.mencap || "")}
    });

    const mainMenus = modifiedFindMenus.filter((menu) => menu.mengrp === "01");
    const mainWithSubmenus = mainMenus.map((menu) => {
      let subMenus = [];

      if (menu.mensub) {
        subMenus = modifiedFindMenus.filter(
          (subMenu) => subMenu.mengrp === menu.mensub
        );
      }

      const subMenusWithSuperSub = subMenus.map((subMenu) => {
        let superSubmenus = [];
        if (subMenu.mensub) {
          superSubmenus = modifiedFindMenus.filter(
            (superSubmenu) => subMenu.mensub === superSubmenu.mengrp
          );
        }
        return { ...subMenu, superSubmenus };
      });

      return { ...menu, subMenus: subMenusWithSuperSub };
    });

    return mainWithSubmenus;
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = { findAndGroupRoutes };

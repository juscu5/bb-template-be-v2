const { models } = require("../../_shared/config/config-db");

const getAndGroupUserMenus = async (usrcde) => {
  try {
    const findMenus = await models.user_menus.findAll({
      where: { is_active: 1, usrcde: usrcde },
      raw: true,
      order: ["menidx"],
    });

    if (!usrcde) {
      return false;
    }

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

const deleteUserMenus = async (usrcde) => {
  try {
    if (!usrcde) {
      throw new Error("Can't delete user menus without user code");
    }

    const deletedRows = await models.user_menus.destroy({
      where: { usrcde: usrcde },
    });

    if (deletedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const createUserMenus = async (body) => {
  try {
    if (Array.isArray(body)) {
      const createdUserMenus = await Promise.all(
        body.map(async (item) => {
          const createdUserMenus = await models.user_menus.create(item);
          return createdUserMenus;
        })
      );
      return createdUserMenus;
    } else {
      const createdUserMenus = await models.user_menus.create(body);
      return createdUserMenus;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAndGroupUserMenus,
  deleteUserMenus,
  createUserMenus,
};

const menuItemMapper = ([id, href, label]) => ({ id, href, label })
export const defaultMenuList = [
  [1, "/", "Collections"],
  [2, "/", "Products"],
  [3, "/find-store", "Find Stores"],
].map(menuItemMapper)

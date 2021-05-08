const menuItemMapper = ([id, href, label]) => ({ id, href, label })
export const defaultMenuList = [
  [1, "/", "Collections"],
  [2, "/", "Flavors"],
  [3, "/find-store", "Find Stores"],
].map(menuItemMapper)

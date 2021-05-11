const menuItemMapper = ([id, href, label]) => ({ id, href, label })
export const defaultMenuList = [
  [0, "/", "Home"],
  [1, "/collections", "Collections"],
  [2, "/flavors", "Flavors"],
  [3, "/find-store", "Find Stores"],
].map(menuItemMapper)

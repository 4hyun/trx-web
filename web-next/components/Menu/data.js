const menuItemMapper = ([href, label]) => ({ href, label });
export const defaultMenuList = [
  ["/", "Collections"],
  ["/", "Products"],
  ["/", "Find Stores"],
].map(menuItemMapper);

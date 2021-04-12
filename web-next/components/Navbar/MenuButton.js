import React from "react";
import { TRXMenuIconClose, TRXMenuIconOpen } from "components/Icons";

const MenuButton = ({ menuOpen }) =>
  menuOpen ? (
    <TRXMenuIconOpen></TRXMenuIconOpen>
  ) : (
    <TRXMenuIconClose></TRXMenuIconClose>
  );

export default MenuButton;

import React from "react";
import { TRXMenuIconClose, TRXMenuIconOpen } from "components/Icons";

export const DesktopMenuButton = ({ menuOpen }) =>
  menuOpen ? (
    <TRXMenuIconOpen></TRXMenuIconOpen>
  ) : (
    <TRXMenuIconClose></TRXMenuIconClose>
  );

export default DesktopMenuButton;

import React from "react";
import { TRXMenuIconClose, TRXMenuIconOpen } from "components/Icons";

export const DesktopMenuButton = ({ menuOpen }) =>
  menuOpen ? (
    <TRXMenuIconOpen />
  ) : (
    <TRXMenuIconClose />
  );

export default DesktopMenuButton;

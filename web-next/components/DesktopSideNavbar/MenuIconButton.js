import React from 'react'
import { TRXMenuIconClose, TRXMenuIconOpen } from 'components/Icons'

const MenuIconButton = ({ menuOpen }) =>
  menuOpen ? <TRXMenuIconOpen /> : <TRXMenuIconClose />

export default MenuIconButton

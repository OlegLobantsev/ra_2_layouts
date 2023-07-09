import React, { ReactNode } from 'react'

const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => {
  return (
    <span 
      className="material-icons"
      onClick={onSwitch}
    >
      {icon}
    </span>
  )
}

export default IconSwitch

type IconSwitchProps = {
  icon: ReactNode,
  onSwitch: () => void
}
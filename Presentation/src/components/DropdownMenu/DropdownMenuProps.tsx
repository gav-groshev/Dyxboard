import type React from 'react';

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: React.ReactNode;
  buttonClassName?: string;
  menuClassName?: string;
  rootClassName?: string;
}

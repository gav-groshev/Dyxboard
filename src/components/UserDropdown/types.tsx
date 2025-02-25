import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { DropdownItemProps } from "../ui/dropdown/types";

export interface UserDropdownContentProps {
  onClose: () => void;
  dropdownItemStyles: string;
  dropdownItems: {
    icon: IconDefinition;
    text: string;
    href: string;
}[];
};

export interface UserDropdownMenuProps {
  onClose: () => void;
  dropdownItemStyles: string;
  dropdownItems: {
    icon: IconDefinition;
    text: string;
    href: string;
}[];
}
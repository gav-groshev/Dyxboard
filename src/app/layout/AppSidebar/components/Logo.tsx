import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo/logo.png";
import { LogoProps } from "../types";

export const Logo = ({ isExpanded, isHovered, isMobileOpen }: LogoProps) => {
  const isLargeLogo = isExpanded || isHovered || isMobileOpen;
  const logoSize = isLargeLogo ? { width: 40, height: 40 } : { width: 32, height: 32 };

  return (
    <Link to="/">
      <img
        src={logo}
        alt="Logo"
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
};
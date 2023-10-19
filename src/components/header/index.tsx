import HeaderLogo from "./header-logo";
import HeaderCenterNavigation from "./header-center-navigation";
import HeaderMobileDropdown from "./header-mobile-dropdown";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <div>
          <HeaderLogo />
        </div>
        <div className="hidden md:inline">
          <HeaderCenterNavigation />
        </div>
        <div>
          <div className="md:hidden">
            <HeaderMobileDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
}

import { FaBars } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import HeaderContactButton from "../header-contact-button";

export default function HeaderMobileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>ArtWorks</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Tattoo</DropdownMenuItem>
        <DropdownMenuItem>Street</DropdownMenuItem>
        <DropdownMenuItem>Designs</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>
          <HeaderContactButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

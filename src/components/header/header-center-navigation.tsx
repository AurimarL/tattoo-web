"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default function HeaderCenterNavigation() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sobre Nos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>ArtWork</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-2 m-2 ">
                <div className="h-36 w-36 bg-black" />
                <div className="flex flex-col gap-4 justify-center ">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <div>
                        <h1 className="text-md">Tattoo</h1>
                        <p>Alguma Texto relacionado a galeria de tatuagem</p>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <div>
                        <h1 className="text-md">Street</h1>
                        <p>
                          Alguma Texto relacionado a galeria de Artes de rua
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <div>
                        <h1 className="text-md">Designs</h1>
                        <p>Alguma Texto relacionado a galeria de Desgins</p>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contactar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

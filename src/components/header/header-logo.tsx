import Link from "next/link";
import { Button } from "../ui/button";

export default function HeaderLogo() {
  return (
    <div>
      <Link href={"/"}>
        <Button className="border rounded-md" variant={"ghost"}>
          Logo
        </Button>
      </Link>
    </div>
  );
}

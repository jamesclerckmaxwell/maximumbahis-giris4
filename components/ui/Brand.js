import Link from "next/link";
import { Oleo_Script_700 } from "../layout";

const Brand = () => (
  <h1 className="-space-y-1">
    <Link
      className={`text-3xl lg:text-4xl text-primary ${Oleo_Script_700.className} `}
      href={"/"}
    >
      maXimumbahis
    </Link>
    <p className="text-gray-500 text-xs lg:text-sm">
      <strong>Maximum bahis </strong>Giriş ve Üyelik
    </p>
  </h1>
);

export default Brand;

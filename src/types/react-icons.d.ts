// This forces TypeScript to accept any icon from react-icons
declare module "react-icons/fa" {
  import { FC, SVGAttributes } from "react";
  export const FaConnectdevelop: FC<SVGAttributes<SVGElement>>;
  // Add other icons you use in the same format
  export const FaHome: FC<SVGAttributes<SVGElement>>;
  // ...etc
}

import Image from "next/image";

interface LogoProps {
    CssWidth: string;
}
export const Logo = ({CssWidth} : LogoProps) => {
    return (
        <Image src={"/logo/logo2.png"} alt={"logo"} width={228} height={32} className={CssWidth}/>
    )
}
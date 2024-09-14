import Image from "next/image"
import Link from "next/link"

const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (

      <div className="header-box">
            <div className="header-box-container">
      <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
        <div className="w-32 h-32 max-xl:w-24 max-xl:h-24 p-0 m-0 inline-block header-logo">
          <Image
            src="/icons/fairyglowlogo.svg"
            width={128}
            height={128}
            alt="FairyGlow logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
        <h1 className="header-box-title">
          {title}
          {type === 'greeting' && user && (
            <span className="text-bankGradient">
              &nbsp;{user}
            </span>
          )}
        </h1>
        {subtext && <p className="header-box-subtext">{subtext}</p>}
      </div>
    </div>
  );
};

export default HeaderBox;
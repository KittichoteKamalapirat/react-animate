import React from "react";

interface Props {}

const FooterSection = ({}: Props) => {
  return (
    <footer>
      <div className="bg-primary-100 px-4 py-6 md:flex md:items-center md:justify-between w-screen text-center">
        <div className="mx-auto w-full max-w-screen-xl">
          <span className="text-sm sm:text-center">
            Looking forward to meeting all the guests 👰🏻🤵🏻
          </span>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;

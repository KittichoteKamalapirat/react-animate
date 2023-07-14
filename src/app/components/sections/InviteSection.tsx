import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const InviteSection = ({}: Props) => {
  return (
    <SectionWrapper>
      <div className="shadow rounded-sm max-w-sm bg-white py-12 px-6 text-gray-800">
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut debitis
          aliquam, in cum reprehenderit deleniti odio placeat hic corrupti
          consequatur molestiae, explicabo quasi optio eligendi nam sunt porro
          laudantium consectetur?{" "}
        </p>
        <p className="mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut debitis
          aliquam, in cum reprehenderit deleniti odio placeat hic corrupti
          consequatur molestiae, explicabo quasi optio eligendi nam sunt porro
          laudantium consectetur?{" "}
        </p>
      </div>
    </SectionWrapper>
  );
};
export default InviteSection;

import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const InviteSection = ({}: Props) => {
  return (
    <SectionWrapper>
      <div className="rounded-md max-w-sm bg-white py-12 px-6 text-gray-800 shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]">
        <p className="">
          มีความยินดีขอเรียนเชิญท่าน เพื่อเป็นเกียรติในงานเลี้ยงฉลอง
          เนื่องในพิธีมงคลสมรส ระหว่าง{" "}
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

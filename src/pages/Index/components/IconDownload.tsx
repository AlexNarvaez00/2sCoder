import Download from "@/components/icons/Download";
import "./Select.css";
import {HTMLProps, memo} from "react";

function IconDownload( {onClick}: HTMLProps<HTMLDivElement> ) {
  return (
    <div className="select h-full cursor-pointer" onClick={onClick}>
      <span className="py-3 md:py-0 mx-auto">
      <Download />
      </span>
    </div>
  )
}

export default memo(IconDownload);

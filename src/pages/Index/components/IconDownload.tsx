import Download from "@/components/icons/Download";
import "./Select.css";
import {HTMLProps, memo} from "react";

function IconDownload( {onClick}: HTMLProps<HTMLDivElement> ) {
  return (
    <div className="select h-full cursor-pointer" onClick={onClick}><Download /></div>
  )
}

export default memo(IconDownload);

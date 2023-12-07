import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import "../scss/header.scss"

export default function Header() {
  return (
    <>
      <div className='headerAll'>
        <div className="headerLinks">
          <div><a href="/Achieve">制作実績</a></div>
          <div><a href="/">依頼詳細</a></div>
          <div><a href="/Myself">その他</a></div>
        </div>
        <div className='headerIcons'>
          <div><a href="https://x.com/HIIRAGI_MV?s=20"><FaSquareXTwitter size={40} /></a></div>
          <div><a href="https://youtube.com/playlist?list=PL9RF1Bly0GN117-1DIbtW5RD7T08fHBxi&si=wKY80Q64CtBkFLh8"><FaYoutube size={40} /></a></div>
        </div>
      </div>
    </>
  );
}
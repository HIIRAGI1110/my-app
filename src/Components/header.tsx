import { Link } from "react-router-dom"

const header = () => {
  return (
    <>
        <div className="headerTitle">hiiragi</div>
        <ul className="headerContents">
            <li><Link to={"/"} className="Product">制作実績</Link></li>
            <li><Link to={"/Info"} className="Infomation">依頼詳細</Link></li>
            <li><Link to={"/Myself"} className="Myself">自己紹介</Link></li>
        </ul>
    </>
  )
}

export default header
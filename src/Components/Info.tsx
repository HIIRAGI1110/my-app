import "../scss/Info.scss"

const Info = () => {
    return (
      <>
        <div className="title">依頼詳細</div>
        <div className="infoCont">
          <iframe width="320" height="180" src="https://www.youtube.com/embed/oXzZL6iHovg?si=Fvp6whtXvZ9NYA6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="infoText">
            <div className="infoContTitle">依頼料:3000円</div>
            <div className="InfoInfo">文字つけ・多少のエフェクト</div>
          </div>
        </div>
      </>
    )
  }
  
  export default Info
import './Simpson.css'
export function Simpson({sName, sSurname, sAge, sInfo, sPhoto}) {
    return (
        <div className={'simpson'}>
           <div className={'d-flex'}> <h2>{sName}</h2>&nbsp;&nbsp;
               <h2> {sSurname}</h2></div>
            <h3>Age: {sAge}</h3>
            <p>{sInfo}</p>
            <img src={sPhoto} alt="photo"/>
        </div>
    )
}
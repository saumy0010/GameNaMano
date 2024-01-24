import '../Background.css'

interface BtnType {
    buttontype: string;

}
const TryBtn = (props: BtnType)=>{
    return (
        <div className="btn1 dfc">
            {props.buttontype}
        </div>
    )
}

export default TryBtn;
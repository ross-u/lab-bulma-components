import "bulma/css/bulma.css";

function CoolButton(props){
    return (
        <button className={props.isSuccess? "button is-success" : "button"}>{props.children}</button>

    )
}

export default CoolButton
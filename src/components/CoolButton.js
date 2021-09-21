import "bulma/css/bulma.css";

export default function CoolButton(props) {
    return (
        <button className={props.isSuccess? "button is-success" : "button"}>{props.children}
        </button>
    )
}
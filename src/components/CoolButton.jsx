function CoolButton(props) {
  const classNameButton =
    props.isSuccess === true ? "button is-success" : "button";

  return <button className={classNameButton}>{props.children}</button>;
}

export default CoolButton;

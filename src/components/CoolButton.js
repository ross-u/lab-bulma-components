export default function CoolButton(props) {
  //   const propNames = {
  //     isCentered: "is-centered",
  //     isActive: "is-active",
  //     isBlack: "is-black",
  //     isDanger: "is-danger",
  //     isDark: "is-dark",
  //     isFocused: "is-focused",
  //     isGrouped: "is-grouped",
  //     isHovered: "is-hovered",
  //     isInfo: "is-info",
  //     isInverted: "is-inverted",
  //     isLarge: "is-large",
  //     isLight: "is-light",
  //     isLink: "is-link",
  //     isLoading: "is-loading",
  //     isMedium: "is-medium",
  //     isOutlined: "is-outlined",
  //     isPrimary: "is-primary",
  //     isRight: "is-right",
  //     isRounded: "is-rounded",
  //     isSelected: "is-selected",
  //     isSmall: "is-small",
  //     isStatic: "is-static",
  //     isSuccess: "is-success",
  //     isText: "is-text",
  //     isWarning: "is-warning",
  //     isWhite: "is-white",
  //   };

  //   function existingProp() {
  //     for (const elem of propNames) {
  //       console.log(elem);
  //       //   const propName = elem;
  //       // const propValue =
  //       if (elem) {
  //         return (
  //           <button className={`button ${props.propName}`}>
  //             {props.children}
  //           </button>
  //         );
  //       } else {
  //         return <button className="button">{props.children}</button>;
  //       }
  //     }
  //   }
  //   //   const existingProp = propNames.map((elem) => {
  //   //     console.log(elem);
  //   //     return (
  //   //       <button className={props.elem ? `button ${props.elem}` : "button"}>
  //   //         {props.children}
  //   //       </button>
  //   //     );
  //   //   });

  return (
    <div>
      <button className={props.isSuccess ? "button is-success" : "button"}>
        {props.children}
      </button>
    </div>
  );
}

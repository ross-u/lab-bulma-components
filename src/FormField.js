import 'bulma/css/bulma.css'

function FormField(props) {
 return(
  <div class="field">
  <label class={props.label}>{props.head}</label>
  <div class="control">
    <input class="input" type={props.type} placeholder={props.placeholder}/>
  </div>
</div>
 )
}

export default FormField
import "./style.scss"
import H2 from "../../atoms/H2/H2"
import H4 from "../../atoms/H4/H4"

const FormTitle = ({ title, text }: { title: string, text: string }) => {
  return (
    <div className="form-title">
      <H2 text={title} />
      <H4 text={text} />
    </div>
  )
}

export default FormTitle
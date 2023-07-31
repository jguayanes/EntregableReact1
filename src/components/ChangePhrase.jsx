import "./changePhrase.css"


const ChangePhrase = ({phrases, author}) => {
  return (
    <section className="sentence">
        <p>{phrases}</p>
        <p> <b>Fuente:</b>{author}</p>
    </section>
  )
}

export default ChangePhrase
import "./changePhrase.css"


const ChangePhrase = ({phrases, author}) => {
  return (
    <article className="contenedor">
    <section className="sentence">
        <p>{phrases}</p>
        <p> <b>Fuente:</b>{author}</p>
    </section>
    </article>
  )
}

export default ChangePhrase
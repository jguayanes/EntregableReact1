import "./buton.css"

const Buton = ({handleChange}) => {
  return (
    <section>
        <button className="button__swicht" onClick={handleChange}>
        <i className="fa-solid fa-arrow-rotate-right"></i>
        </button>
    </section>
  )
}

export default Buton
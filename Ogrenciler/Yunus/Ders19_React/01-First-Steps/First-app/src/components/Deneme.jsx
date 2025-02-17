// const Deneme = (props) tüm propsları alır props.age mesela olarak alır
// ya da böyle ayrı ayrı alabiliriz

// import PropTypes from 'prop-types'

const Deneme = ({isim, yas, jobs}) => {
  return (
    <>
        <div>
            İsim: {isim}
        </div>
        <div>
            Yaş: {yas}
        </div>
        <div>
            İş: {jobs}
        </div>
    </>
  )
}


// react 19la şutlandı çünkü typescriptte yapılıyor
// Deneme.propTypes ={
//     isim: PropTypes.string.isRequired,
//     yas: PropTypes.number.isRequired,
//     jobs: PropTypes.string
// }

export default Deneme // default varsa parantezsiz çekilir yoksa parantezli
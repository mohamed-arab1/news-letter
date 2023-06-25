import PropTypes from 'prop-types';
import "../style/imageSideStyle.css"
 

function ImageSide({Image}) {
  return (
    <div className='box-image'>
      <img src={Image} alt="illustration-sign-up" />
    </div>
  )
}

ImageSide.propTypes = {
  Image: PropTypes.string.isRequired
}

export default ImageSide
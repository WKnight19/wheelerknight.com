import PropTypes from 'prop-types'

const VideoPreview = ({ children }) => {
  return (
    <div className="absolute-center size-64 cursor-pointer overflow-hidden rounded-lg">
      {children}
    </div>
  )
}

VideoPreview.propTypes = {
  children: PropTypes.node.isRequired,
}

export default VideoPreview

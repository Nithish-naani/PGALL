// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbNailClassName = isActive ? 'thumbnail Active' : 'thumbnail'

  const onClickThumbNail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbNail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbNailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

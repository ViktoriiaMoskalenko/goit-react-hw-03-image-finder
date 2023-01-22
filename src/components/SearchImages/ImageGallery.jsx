import { ImageGalleryItem } from './ImageGalleryItem'
import styles from './SearchImages.module.css'

export const ImageGallery = ({data, onModal}) => {
    return (
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem data={data} onModal = {onModal} />
</ul>
    )
}
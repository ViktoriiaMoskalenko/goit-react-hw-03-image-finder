import { nanoid } from 'nanoid'
import styles from './SearchImages.module.css'
export const ImageGalleryItem = ({ data, onModal }) => {
    return (
        
        data.map(({id, webformatURL, largeImageURL, tags}) => 
        <li className={styles.ImageGalleryItem} id={id} key = {nanoid()} onClick = {() => onModal(largeImageURL)    }>
                <img src={webformatURL} alt={tags} className={ styles.ImageGalleryItem_image } />
</li>)
    )
}
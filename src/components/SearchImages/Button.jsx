import styles from './SearchImages.module.css'

export const Button = ({onLoadMore}) => {
    return (
        <button type="button" className={styles.Button} onClick = {onLoadMore}>
            Load more
        </button>
    )
}
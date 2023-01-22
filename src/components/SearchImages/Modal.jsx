import { Component } from 'react'
import styles from './SearchImages.module.css'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
                console.log(event.code)
                this.props.onClose()
            }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    }

    render() {
        return (
        <div className={styles.Overlay} onClick = {this.handleBackdropClick}>
  <div className={styles.Modal}>
    <img src={this.props.img} alt="" />
  </div>
</div>
    )
    }
}
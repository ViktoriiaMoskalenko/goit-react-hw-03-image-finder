import { Component } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Searchbar} from './SearchImages/Searchbar'
import * as API from './API/api'
import { ImageGallery } from './SearchImages/ImageGallery'
import { Modal } from './SearchImages/Modal'
import { Button } from './SearchImages/Button'
import styles from './SearchImages/SearchImages.module.css'


export class App extends Component {
  state = {
    data: [],
    isActive: false,
    largeImage: '',
    page: 1,
    value: '',
    loader: false
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
       this.setState({ loader: true })
      const dataImg = API.addImages(this.state.value, this.state.page)
      dataImg.then(data => {
        if (this.state.data.length === data.totalHits) {
          this.setState({ loader: false })
          return this.setState({ data: this.state.data.concat(data.hits), btnActive: false })
        
          
        }
        this.setState({ data: this.state.data.concat(data.hits) })
        this.setState({ loader: false })
      }).catch(error => console.log(error))
    }
  }

  addImages = async (valueInput) => {
    const dataImg = await API.addImages(valueInput)
    this.setState({ data: dataImg.hits, value: valueInput, page: 1, btnActive: true })

  }

  onModal = (largeImageURL) => {
    this.setState(({ largeImage: largeImageURL, isActive: true, loader: false }))


  }

  onClose = () => {
  this.setState(({isActive: false}))

  }

  onLoadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  render() {
 return (
   <div align = 'center'>
     <Searchbar onSubmit={this.addImages} />
     <ImageGallery data={this.state.data} onModal={this.onModal} />
     {this.state.isActive && <Modal img={this.state.largeImage} onClose={ this.onClose } />}
     {this.state.loader &&
       <div className={styles.Loader}>
       <ThreeDots
height="80" 
width="80" 
radius="9"
color="orange" 
       ariaLabel="three-dots-loading"
       wrapperClass='Loader'
       wrapperStyle={{
       }}
visible={true}
 /></div>}
     {this.state.btnActive && <Button onLoadMore={this.onLoadMore} />}
   </div>
  ); 
}
};

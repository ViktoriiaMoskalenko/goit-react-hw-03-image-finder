import { Formik, Field, Form } from 'formik'
import styles from './SearchImages.module.css'



export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (values, actions) => {
        onSubmit(values.name)
         
        actions.resetForm()

    }
    return (
            <header className={styles.Searchbar}>
            <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
                <Form className= {styles.SearchForm}>
                     <button type="submit" className={styles.SearchForm_button}>
                         <span className={styles.SearchForm_button_label}>Search</span>
                     </button>
                    <Field name = "name" placeholder="Search images and photos" type="text" autoFocus className = {styles.SearchForm_input}/>
                </Form>
            </Formik>
            </header>
        )
}
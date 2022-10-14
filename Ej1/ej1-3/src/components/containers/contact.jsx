import React from 'react'
import ContactComponent from '../contactComponent'
import { ContactClass } from '../../models/contact.class';

const Contact = () => {
  

const defaultContact = new ContactClass(
  "Giovanni",
  "Landaburo Del Arco",
  "glanda@gmail.com",
  false
)
  return (
    <div>
    <h1>User:</h1>
    <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  )
}


export default Contact
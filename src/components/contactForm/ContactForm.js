import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Field,
  FormLabel,
  ErrorMessage,
  ButtonSubmit,
} from './ContactForm.styled';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        onSubmitForm(name, number);
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel>
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import {
//   AddContactsForm,
//   Field,
//   Label,
//   ButtonSubmit,
// } from './ContactForm.styled';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeName = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleChangeNumber = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     this.props.onSubmit(name, number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <AddContactsForm onSubmit={this.handleSubmit}>
//         <Label>
//           Name
//           <Field
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChangeName}
//             value={this.state.name}
//           />
//         </Label>
//         <Label>
//           Number
//           <Field
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChangeNumber}
//             value={this.state.number}
//           />
//         </Label>
//         <ButtonSubmit type="submit">Add contact</ButtonSubmit>
//       </AddContactsForm>
//     );
//   }
// }

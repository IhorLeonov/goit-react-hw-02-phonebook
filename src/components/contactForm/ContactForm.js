import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AddContactsForm,
  Field,
  Label,
  ButtonSubmit,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <AddContactsForm onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeName}
            value={this.state.name}
          />
        </Label>
        <Label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChangeNumber}
            value={this.state.number}
          />
        </Label>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </AddContactsForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

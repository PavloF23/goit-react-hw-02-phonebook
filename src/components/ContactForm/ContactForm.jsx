import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Span, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // функція(патер) для нобновленія стейта;
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  // функція для сабміта форми та передачі данних в Аpp;
  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
    }
    this.props.onSubmit(newContact);
    this.reset();
  }

  //Функція для очистки форми через очищення стейта;
  reset = () => {
    this.setState({ name: '', number: ''});
  }

  render() {
   
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>          
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Span>Name</Span>
        </Label>
        <Label>         
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <Span> Number</Span>
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

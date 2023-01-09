import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input, Span } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <Container>
    <Label>        
      <Input type="text" name="filter" value={value} onChange={onChange} placeholder=" " />
      <Span>Find contacts by name</Span>
    </Label>
    </Container>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
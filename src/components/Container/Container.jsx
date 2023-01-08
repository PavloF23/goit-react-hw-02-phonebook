import PropTypes from 'prop-types';
import { Contain } from './Container.styled';

export function Container({ children }) {
  return <Contain>{children}</Contain>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};


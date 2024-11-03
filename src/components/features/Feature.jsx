import PropTypes, { object } from 'prop-types';
import { FiCheck } from 'react-icons/fi';

const Feature = ({feature}) => {
  return (
    <div className='m-3'>
      <p className='flex items-center '><FiCheck className='bg-green-900 rounded-xl mr-2'></FiCheck> {feature}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;

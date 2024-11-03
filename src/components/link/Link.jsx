
import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <div>
      <li className='mr-10 px-6 hover:bg-rose-500'>
        <a href={route.path}> { route.name}</a>
      </li>
    </div>
  );
};

Link.propType = {
  route: PropTypes.object
}
export default Link;
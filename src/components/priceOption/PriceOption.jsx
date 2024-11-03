import PropTypes, { object } from 'prop-types'
import Feature from '../features/Feature';

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="p-3 bg-violet-800 flex flex-col  text-white rounded-xl m-4">
      <h2 className="text-center">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-3xl ">/Month</span>
      </h2>
      <p className="text-xl text-center font-semibold">{name}</p>
      <hr />
      <div className="pl-3 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-600 hover:bg-green-900 font-semibold w-full mt-4 pl-3 py-3 rounded-xl">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option:PropTypes.object
}
export default PriceOption;
import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;

      return (
        <div className='pokemon'>
          <div>
            <p> { name } </p>
            <p> { type } </p>
            <p> {`averageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
          </div>
          <img src={ image } alt={ `${name} sprite`}></img>
          </div>
      );
    }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }).isRequired

  })

}


export default Pokemon;

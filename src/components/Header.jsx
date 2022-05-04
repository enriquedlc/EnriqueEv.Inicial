import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (                        
    <div className='header'>
      <h1 className='title'>{title}</h1>                                  
    </div>
    );
  };

Header.propTypes = {
    title: PropTypes.string.isRequired
}  

export default Header;
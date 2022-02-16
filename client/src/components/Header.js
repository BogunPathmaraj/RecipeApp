import PropTypes from 'prop-types'



const Header = ({title}) => {

  return (
  <header className='titlebar'>
  <h1>{title}</h1>
</header>
  )

}
 
  Header.propTypes = {

    title: PropTypes.string
  }

export default Header;

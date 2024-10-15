import Logo from './Logo'
import NavLinks from './NavLinks'
import "./Header.css"

const HeaderSection = () => {
    return (
        <div className='header-section' >
            <Logo />
            <NavLinks />
        </div>
    )
}

export default HeaderSection

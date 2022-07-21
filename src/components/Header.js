// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Gabrael EL" />

            <div className='header__content'>
                <h1>Hi, I'm Gabrael EL</h1>
                <p>Blockchain Developer</p>
                <p>Blockchain As A Service Consultant</p>
                <a href="mailto:gabraelel@gmail.com?subject=just-a-subject" target="_blank" className="button">For Hire</a>
            </div>
        </section>
    );
}

export default Header;

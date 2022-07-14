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
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;

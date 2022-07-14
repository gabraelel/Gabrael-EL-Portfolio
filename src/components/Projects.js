// Import Assets
import turfinlp from '../assets/turfinlp.png';
import gsunft from '../assets/gsunft.png';
import turfintoken from '../assets/turfintoken.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Turfin LP</h3>
                    <img src={turfinlp} alt="Turfin Swap Page" />
                    <p>The new social dance token $TURFIN and be apart of our 1st ever film “Taking Up Room On The Floor” INITIAL FILM OFFERING #IFO. Join our Liquidity Pool.
                    </p>

                    <a href="https://ipfs.fleek.co/ipfs/QmUtccdrchGPJhWLbUzbMZAAPhetJgDDZyz1k2F2UkCpM8/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/gabraelel/TurfinToken-Defi-Pool/tree/master/frontend" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Gsu NFT</h3>
                    <img src={gsunft} alt="Gsu NFT Landing Page" />
                    <p>This is the 1st "OFFICIAL" HBCU NFT for Grambling State University. Designed by GSU Class of 2021 Alumni Gabrael EL CEO of DECENTRALIZED ENTERTAINMENT


                    </p>

                    <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/49819270520075860789987157212194219752724289714938253375178471315940644487169/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/gabraelel/Grambling-State-University-NFT" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>TurfinToken</h3>
                    <img src={turfintoken} alt="Turfintoken Landing Page" />
                    <p>This my Solidity Smart Contract that I coded for my trademark and brand "TURFIN". The new social dance token $TURFINTOKEN cryptocurrency.
                    </p>

                    <a href="https://etherscan.io/address/0xc3ce2b49f31d3702acadcfde05c9e1afc29b40ad#code" target="_blank" className="button">Site</a>
                    <a href="https://github.com/gabraelel/TurfinToken-Crypto" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
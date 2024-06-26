import * as S from './styles'

import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <S.Footer>
            <div className='containerUp'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <ul className='footerList'>
                    <li><S.FooterLink to={'/'}>Previsão</S.FooterLink></li>
                    <li><S.FooterLink to={'/sobre'}>Sobre nós</S.FooterLink></li>
                </ul>
                <div className="logo footer-empty"></div>
            </div>

            <S.Center>
                <div className='suport'>
                    <span className='footer-email-title'>E-mail</span>
                    <span className='footer-email'>suporte@alfateam.com.br</span>
                </div>
                <ul className='social-links'>
                    <li>
                        <a href="#">
                            <img src="https://placehold.it/30x29" alt="Ícone de mídia social" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.it/30x29" alt="Ícone de mídia social" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.it/30x29" alt="Ícone de mídia social" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.it/30x29" alt="Ícone de mídia social" />
                        </a>
                    </li>
                </ul>
            </S.Center>

            <S.Low>
                <span>© ALFA, TEAM  2024</span>
                <span>Apoio: EBAC </span>
            </S.Low>
        </S.Footer>
    )
}
export default Footer

import FacebookIcon from "../images/facebook_icon.png"
import InstagramIcon from "../images/instagram_icon.png"
import LinkedinIcon from "../images/linkedin_icon.png"

export default function Footer() {
    return (
        <footer className="--footer">
            <a href="https://www.facebook.com/JaoPedroDev/" target="_blank">
                <img src={FacebookIcon} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/jaopedrodev/" target="_blank">
                <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/joao-pedro-dev/" target="_blank">
                <img src={LinkedinIcon} alt="linkedin" />
            </a>
        </footer>
    )
}
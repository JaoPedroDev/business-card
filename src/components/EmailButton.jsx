import emailIcon from "../images/email_icon.png"

export default function EmailButton() {
    return (
        <button onClick={(e) => {
            window.location = "mailto:joaopedropessoal.15@gmail.com";
            e.preventDefault();
        }} className="--emailButton">
            <img src={emailIcon} alt="email" />E-mail
        </button>
    )
}
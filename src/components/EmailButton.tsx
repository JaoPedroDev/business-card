import emailIcon from "../images/email_icon.png"

export default function EmailButton() {
  function emailLink() {
    window.open("mailto:joaopedropessoal.15@gmail.com", "_blank")
  }
  return (
    <button type="button" onClick={emailLink} className="--emailButton">
      <img src={emailIcon} alt="email" />E-mail
    </button>
  )
}

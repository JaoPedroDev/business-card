import ProfileImage from "../images/profile_picture.jpg";

export default function Profile() {
    return (
        <div className="--profile">
            <img src={ProfileImage} alt="João Pedro's profile" />
            <h1>João Pedro</h1>
            <h2>Desenvolvedor</h2>
        </div>
    )
}
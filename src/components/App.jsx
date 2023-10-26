import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Interests from "./Interests.jsx";
import Footer from "./Footer.jsx";
import EmailButton from "./EmailButton.jsx"

export default function Main() {
  return (
    <main className="--main">
      <Profile />
      <div className="--content">
        <EmailButton />
        <About />
        <Interests />
      </div>
      <Footer />
    </main>
  )
}
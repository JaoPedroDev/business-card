import Profile from "./Profile";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import EmailButton from "./EmailButton"

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

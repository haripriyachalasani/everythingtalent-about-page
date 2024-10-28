import Header from '../app/sections/header';
import OurStory from '../app/sections/ourStory';
import OurValue from '../app/sections/ourvalue';
import OurExpertTeam from '../app/sections/ourexpertteam';
import OurJourney from '../app/sections/ourjourney';
import Footer from '../app/sections/footer';


export default function Home() {
  return (
    <div>
      <Header />
      <OurStory />
      <OurValue />
      <OurExpertTeam />
      <OurJourney />
      <Footer />
    </div>
  );
}
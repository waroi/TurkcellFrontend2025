import Header from '../Header';
import Faq from './Faq';
import Peek from './Peek';
import Stats from './Stats';
import WhoAreWe from './WhoAreWe';

function MidContent() {
  return (
    <section className='mid-content'>
      <Stats />
      <WhoAreWe />
      <Faq />
      <Peek />
    </section>
  );
}

export default MidContent;

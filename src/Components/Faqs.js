import { Accordion, Container } from 'react-bootstrap';
function Faqs() {
  return (
    <div className='align-items-center my-3'>
      <h2 className="text-center mb-4 bg-white w-100 py-3 mt-4 align-content-center">Frequently Asked Questions</h2>
      <Accordion className='mx-4'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Netflix Lite</Accordion.Header>
          <Accordion.Body>
            Netflix Lite is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How much does Netflix Lite Cost?</Accordion.Header>
          <Accordion.Body>
            Its completeley free.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Where can i watch</Accordion.Header>
          <Accordion.Body>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I cancel?</Accordion.Header>
          <Accordion.Body>
            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>What can I watch on Netflix Lite?</Accordion.Header>
          <Accordion.Body>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Is Netflix Lite good for kids?</Accordion.Header>
          <Accordion.Body>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     </div>
  );
}

export default Faqs;
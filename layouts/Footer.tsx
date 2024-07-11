import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'siteData';

export default function Footer({ blog }) {
  return (
    <footer className="bg-gray-800 border-t border-white py-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-10">
          <div className="text-white text-md font-bold">
            {siteData?.author}
          </div>
          <p className="text-white text-base font-medium text-center md:text-left">
            © All rights reserved for Phill Nascimento
          </p>
          <div className="flex items-center space-x-4">
            <Socials />
          </div>
        </div>
      </Container>
    </footer>
  )
}

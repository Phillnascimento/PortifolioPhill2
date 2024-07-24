import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'siteData';

export default function Footer({ blog }) {
  return (
    <footer className="bg-gray-800 border-t border-white py-4">
      <Container className="px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 w-full">
          <div className="lg:flex-1 text-white text-md font-bold lg:text-left text-center">
            {siteData?.author}
          </div>
          <div className="lg:flex-1 text-center">
            <p className="text-white text-base font-medium">
              © All rights reserved for Phill Nascimento
            </p>
          </div>
          <div className="lg:flex-1 flex justify-center lg:justify-end items-center space-x-4">
            <Socials />
          </div>
        </div>
      </Container>
    </footer>
  );
}

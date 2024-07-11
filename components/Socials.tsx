import siteData from 'siteData';
import Image from 'next/image';

export default function Socials() {
  const socials = [
    {
      name: 'whatsapp',
      href: siteData?.whatsapp,
      icon: '/socials/whatsapp.svg'
    },
    {
      name: 'LinkedIn',
      href: siteData?.linkedin,
      icon: '/socials/linkedin.svg'
    }
  ];

  return (
    <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 py-2">
      {socials.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 transform hover:text-[#333] filter hover:contrast-0 transition-colors duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            width={24}
            height={24}
            objectFit="cover"
          />
        </a>
      ))}
    </div>
  );
}
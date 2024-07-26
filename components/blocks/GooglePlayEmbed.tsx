import React from 'react';

const GooglePlayEmbed = ({ appUrl, appName, appIcon, appImage }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-lg">
      <img src={appIcon} alt={`${appName} icon`} className="w-16 h-16 mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{appName}</h3>
        <a href={appUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver no Google Play
        </a>
      </div>
      <div className="ml-auto">
        <img src={appImage} alt={appName} className="w-32 h-32 object-cover" />
      </div>
    </div>
  );
};

export default GooglePlayEmbed;

import React from 'react';

function ShareButton() {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Title of the shared content',
          text: 'Description of the shared content',
          url: 'https://example.com',
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.error('Web Share API is not supported');
    }
  };

  return (
    <button className='text-dark w-100' onClick={share}>Share</button>
  );
}

export default ShareButton;

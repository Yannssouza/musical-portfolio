// WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = ({ message, sendMessage }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511950526804";
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    sendMessage();
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-green-500 drop-shadow-md hover:stroke-white"
    >
      Enviar WhatsApp
    </button>
  );
};

export default WhatsAppButton;

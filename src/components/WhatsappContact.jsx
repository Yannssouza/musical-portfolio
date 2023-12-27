import React, { useState } from "react";
import Title from "./Title";
import WhatsAppButton from "./WhatsAppButton";

function Contact() {
  const [message, setMessage] = useState("");

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log(`Sending message: ${message}`);
  };

  return (
    <div className="flex flex-col mb-10 mx-auto my-20">
      <div className="flex justify-center items-center">
        <form className="flex flex-col w-full md:w-7/12">
          <Title>Contato</Title>
          <textarea
            name="message"
            value={message}
            onChange={handleTextareaChange}
            placeholder="Mensagem"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <WhatsAppButton message={message} sendMessage={handleSendMessage} />
        </form>
      </div>
    </div>
  );
}

export default Contact;

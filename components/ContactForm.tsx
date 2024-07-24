import React, { useState, FormEvent } from 'react';

interface ContactFormProps {
  onSubmit: (data: { email: string; subject: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (!email || !subject || !message) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Mensagem enviada com sucesso!');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError('Falha ao enviar mensagem.');
      }
    } catch (error) {
      setError('Falha ao enviar mensagem.');
    }

    setError(null);
  };

  return (
    <div className="bg-gray-800 py-16 px-4 sm:px-8 md:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto"> {/* Container centralizado com largura máxima */}
        <div className="relative bg-gray-800 p-12 md:flex md:space-x-10">
          <div className="relative z-10 mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-white text-3xl font-bold mb-4">Entre em contato</h2>
            <p className="text-gray-300 text-lg">
              Se você tem alguma dúvida sobre meus projetos ou gostaria de solicitar um orçamento, não hesite em me enviar uma mensagem! <br /><br /> Estou sempre à disposição para discutir novas ideias, responder suas perguntas e explorar como podemos colaborar para criar algo incrível juntos. Preencha o formulário e retornarei o mais rápido possível.
            </p>
          </div>
          <form className="bg-gray-200 relative z-10 flex flex-col md:w-1/2 shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-700 block mb-2 text-sm font-medium">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-700 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Seu@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-gray-700 block text-sm mb-2 font-medium">
                Assunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-700 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Proposta de..."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-gray-700 block text-sm mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-700 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Olá, meu nome é..."
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

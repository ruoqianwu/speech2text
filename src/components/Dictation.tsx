import React from "react";
import { FiMic } from "react-icons/fi";

const Dictation = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [text, setText] = React.useState("");

  let recognition: SpeechRecognition | undefined = undefined;

  React.useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const speechRecognitionConstructor =
        window.SpeechRecognition ?? window.webkitSpeechRecognition;
      recognition = new speechRecognitionConstructor();
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        console.log(event);
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setText((prevTranscript) => prevTranscript + transcript);
          } else {
            interimTranscript += transcript;
          }
        }
      };

      recognition.onerror = (event) => {
        console.error("Error in recognition:", event.error);
      };

      handleListen();
    }
  }, []);

  const handleListen = () => {
    if (isListening) {
      recognition?.stop();
      setIsListening(false);
    } else {
      recognition?.start();
      setIsListening(true);
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <button
        onClick={handleListen}
        title="start recording"
        type="button"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        <FiMic />
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <div className="mt-6 border-2 border-solid w-1/2 h-1/2">{text}</div>
    </div>
  );
};

export default Dictation;

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../PageData/data';

function FAQ_Con() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div id="faq" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Frequently Asked Questions</h2>
      <div className="border-t border-teal-800 w-16 mx-auto mb-8"></div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-bold text-teal-800 hover:bg-teal-50 transition"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0">
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ_Con
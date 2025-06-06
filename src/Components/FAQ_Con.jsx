import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ_Con() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I donate to Road2Jannah Foundation?",
      answer: "You can donate by clicking the 'Donate Now' button on our website. We accept contributions via mobile money, bank transfers, and online payment platforms. Your support helps us provide iftar meals, educational resources, and healthcare to those in need."
    },
    {
      question: "What programs does the foundation run?",
      answer: "We focus on education for rural youth, economic empowerment through initiatives like Medwuma Pa, and community support projects such as Ramadan iftar campaigns and healthcare camps for underserved families."
    },
    {
      question: "Can I volunteer with Road2Jannah Foundation?",
      answer: "Yes! We welcome volunteers for our community outreach programs, educational workshops, and healthcare camps. Please contact us through our website to learn about upcoming opportunities and how you can get involved."
    },
    {
      question: "How is my donation used?",
      answer: "Your donation directly supports our initiatives: providing iftar meals to over 1,000 families during Ramadan, supplying educational materials to rural youth, and funding healthcare camps to offer medical checkups and medicines to underserved communities."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Tax deductions depend on your country’s regulations. We provide donation receipts that you can use for tax purposes. Please consult with your local tax authority to confirm eligibility."
    }
  ];

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
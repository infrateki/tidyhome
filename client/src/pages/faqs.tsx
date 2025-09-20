import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQs() {
  const { t } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const faqs = [
    {
      id: 1,
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 weeks in advance to ensure availability. Peak season runs September through March, so during these months, we suggest booking 4-6 weeks ahead for the best scheduling options.'
    },
    {
      id: 2,
      question: 'How do you charge for your services?',
      answer: 'We begin by preparing an initial estimate based on the information you share through our project request form. After our consultation, where we learn more about your space, needs, and scope, we refine the details and provide a customized proposal with transparent pricing.'
    },
    {
      id: 3,
      question: 'How do I get started?',
      answer: 'Simply visit our Connect With Us page and choose the service that best fits your needs. Once you submit your request, you\'ll be able to schedule your consultation so we can discuss your project in more detail.'
    },
    {
      id: 4,
      question: 'What areas do you serve?',
      answer: 'We proudly serve Dorado, San Juan, Carolina, and Bayamón with no additional travel fees. Projects outside these areas are also welcome, with travel costs discussed during your consultation.'
    },
    {
      id: 5,
      question: 'Do you provide the organizing products?',
      answer: 'Yes! We handle all product sourcing as part of our service. During the planning phase, we create a customized product list based on your space and budget, and we take care of all the shopping for you.'
    },
    {
      id: 6,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope. A single room organization typically takes 6-8 hours, while whole-home projects may span multiple days. We provide a detailed timeline in your project proposal.'
    },
    {
      id: 7,
      question: 'Do I need to be present during the project?',
      answer: 'While we love working alongside our clients, it\'s not required. Many clients prefer to return to a fully transformed space. We\'ll discuss your preference during the consultation.'
    },
    {
      id: 8,
      question: 'What happens to items I no longer want?',
      answer: 'We can coordinate donation pickups, arrange for recycling, or disposal as needed. We work with local charities and ensure items are handled responsibly.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3EE' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#3C3C3C' }}
              data-testid="faq-title"
            >
              Looking to Get Started?
            </h1>
            <p 
              className="text-xl"
              style={{ color: '#4A4A4A' }}
              data-testid="faq-subtitle"
            >
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="rounded-lg overflow-hidden shadow-md transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF' }}
                data-testid={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors"
                  style={{ 
                    backgroundColor: openQuestion === faq.id ? '#8B9574' : '#FFFFFF',
                    color: openQuestion === faq.id ? '#F5F3EE' : '#3C3C3C'
                  }}
                  data-testid={`faq-question-${faq.id}`}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openQuestion === faq.id ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openQuestion === faq.id && (
                  <div 
                    className="px-6 py-4"
                    style={{ backgroundColor: '#FAF9F7', color: '#4A4A4A' }}
                    data-testid={`faq-answer-${faq.id}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div 
              className="rounded-xl p-8 shadow-lg"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <h2 
                className="text-2xl font-heading mb-4"
                style={{ color: '#3C3C3C' }}
                data-testid="questions-section-title"
              >
                Still have questions?
              </h2>
              <p 
                className="mb-8"
                style={{ color: '#4A4A4A' }}
                data-testid="questions-section-text"
              >
                For any additional questions, complete the form below and a member of our team will be in touch with you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-2 font-medium"
                    style={{ color: '#3C3C3C' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#E8E4DB' }}
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 font-medium"
                    style={{ color: '#3C3C3C' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#E8E4DB' }}
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="question" 
                    className="block mb-2 font-medium"
                    style={{ color: '#3C3C3C' }}
                  >
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#E8E4DB' }}
                    data-testid="input-question"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: '#8B9574',
                    color: '#F5F3EE'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B7459'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B9574'}
                  data-testid="button-submit"
                >
                  Send Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
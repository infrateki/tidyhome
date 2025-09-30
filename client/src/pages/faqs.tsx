import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendlyButton } from '../components/CalendlyButton';
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
      question: t('faqs.faq1.question'),
      answer: t('faqs.faq1.answer')
    },
    {
      id: 2,
      question: t('faqs.faq2.question'),
      answer: t('faqs.faq2.answer')
    },
    {
      id: 3,
      question: t('faqs.faq3.question'),
      answer: t('faqs.faq3.answer')
    },
    {
      id: 4,
      question: t('faqs.faq4.question'),
      answer: t('faqs.faq4.answer')
    },
    {
      id: 5,
      question: t('faqs.faq5.question'),
      answer: t('faqs.faq5.answer')
    },
    {
      id: 6,
      question: t('faqs.faq6.question'),
      answer: t('faqs.faq6.answer')
    },
    {
      id: 7,
      question: t('faqs.faq7.question'),
      answer: t('faqs.faq7.answer')
    },
    {
      id: 8,
      question: t('faqs.faq8.question'),
      answer: t('faqs.faq8.answer')
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eeeae1' }}>
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-heading mb-6"
              style={{ color: '#555843' }}
              data-testid="faq-title"
            >
              {t('faqs.page.title')}
            </h1>
            <p
              className="text-xl font-body"
              style={{ color: '#555843' }}
              data-testid="faq-subtitle"
            >
              {t('faqs.page.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="rounded-lg overflow-hidden shadow-md transition-all duration-300"
                style={{ backgroundColor: '#eeeae1' }}
                data-testid={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors"
                  style={{ 
                    backgroundColor: openQuestion === faq.id ? '#c06446' : '#eeeae1',
                    color: openQuestion === faq.id ? '#eeeae1' : '#555843'
                  }}
                  data-testid={`faq-question-${faq.id}`}
                >
                  <span className="font-medium text-lg font-body">{faq.question}</span>
                  {openQuestion === faq.id ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openQuestion === faq.id && (
                  <div 
                    className="px-6 py-4"
                    style={{ backgroundColor: '#FAF9F7', color: '#555843' }}
                    data-testid={`faq-answer-${faq.id}`}
                  >
                    <p className="font-body">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div 
              className="rounded-xl p-8 shadow-lg"
              style={{ backgroundColor: '#eeeae1' }}
            >
              <h2 
                className="text-2xl font-heading mb-4"
                style={{ color: '#555843' }}
                data-testid="questions-section-title"
              >
                {t('faqs.still_questions')}
              </h2>
              <p
                className="mb-8 font-body"
                style={{ color: '#555843' }}
                data-testid="questions-section-text"
              >
                {t('faqs.still_questions_text')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium font-body"
                    style={{ color: '#555843' }}
                  >
                    {t('faqs.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#eeeae1' }}
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium font-body"
                    style={{ color: '#555843' }}
                  >
                    {t('faqs.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#eeeae1' }}
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="question"
                    className="block mb-2 font-medium font-body"
                    style={{ color: '#555843' }}
                  >
                    {t('faqs.form.question')}
                  </label>
                  <textarea
                    id="question"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#eeeae1' }}
                    data-testid="input-question"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: '#c06446',
                    color: '#eeeae1'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5e432c'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c06446'}
                  data-testid="button-submit"
                >
                  {t('faqs.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CalendlyButton />
    </div>
  );
}
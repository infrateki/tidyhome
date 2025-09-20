import React from 'react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ig1Url from '@assets/542808275_18032455307695682_2185238791464639187_nfull_1757452360530.webp';
import ig2Url from '@assets/539105426_18031350800695682_2644044832869472776_nfull_1757452360530.webp';
import ig3Url from '@assets/530841115_18029953709695682_8719123475487043815_nfull_1757452360530.webp';
import ig4Url from '@assets/527453841_18029039912695682_7593587430856325733_nfull_1757452360530.webp';

export function InstagramFeed() {
  const { t } = useLanguage();
  const instagramPosts = [
    {
      id: 1,
      image: ig1Url,
      caption: 'The first month of school (or post-summer vacay life) can feel like a whirlwind! New schedules, fresh commitments, and endless to-do lists… We know how crazy it can feel! Now that the dust is settling, it\'s the perfect moment to fine-tune your routine and set yourself up for a calmer, more balanced season ahead. ✨ Let Tidy Home give your spaces the extra love they need.',
      alt: 'Instagram post - INS & OUTS - ROUTINE RESET EDITION'
    },
    {
      id: 2,
      image: ig2Url,
      caption: '✨ From cluttered to calming, this laundry room is now as functional as it is beautiful. A space that makes even chores feel lighter. 🧺',
      alt: 'Instagram post - organized laundry room'
    },
    {
      id: 3,
      image: ig3Url,
      caption: '✨ Our Process, Your Peace of Mind ✨ From the first bin we label to the final drawer we close, our system is designed to work and to last. 🗂️💡 1️⃣ Edit – We sort, declutter, and help you decide what stays. 2️⃣ Plan – Every item gets a home that makes sense for your lifestyle. 3️⃣ Style & Label – Systems that are as beautiful as they are functional. 4️⃣ Maintain – Easy to keep up, so the calm stays long after we leave.',
      alt: 'Instagram post - OUR ORGANIZING PROCESS (Step-by-Step)'
    },
    {
      id: 4,
      image: ig4Url,
      caption: 'Finally… a kitchen that works as good as it looks. We organized this space with the family\'s daily flow in mind, making meal prep quicker, cleaner, and more enjoyable. Because the secret to delicious everyday meals? A smart system tailored to your lifestyle. 👩‍🍳✨',
      alt: 'Instagram post - modern kitchen organization'
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="instagram-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4" data-testid="instagram-title">
            {t('instagram.title')}
          </h2>
          <p className="text-xl text-sage" data-testid="instagram-handle">
            {t('instagram.handle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative group">
              <img 
                src={post.image} 
                alt={post.alt} 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-full aspect-square object-cover"
                data-testid={`instagram-post-${post.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end p-4">
                <p className="text-white text-sm line-clamp-3">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/tidyhomepr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sage hover:text-sage-dark transition-colors font-medium"
            data-testid="instagram-follow-link"
          >
            <Instagram className="w-5 h-5" />
            <span>{t('instagram.follow')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

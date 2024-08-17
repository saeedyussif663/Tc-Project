export interface Benefits {
  heading: string;
  text: string;
  icon_name: string;
}

export interface FAQs {
  question: string;
  answer: string;
}

export const benefits: Benefits[] = [
  {
    heading: 'Browse upcoming and view event details',
    text: 'Users can browse through upcoming events and also view the event details.',
    icon_name: 'calendar.svg',
  },
  {
    heading: 'Search for events',
    text: 'Users are able to search for events based on their locations, date, and categories',
    icon_name: 'search.svg',
  },
  {
    heading: 'Purchase ticket for an events',
    text: 'Users can purchase for events tickets in the comforts of their homes with our seamless payment system.',
    icon_name: 'payment.svg',
  },
];

export const faqs: FAQs[] = [
  {
    question: 'What is Tc Ticket?',
    answer:
      'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.',
  },
  {
    question: 'How do I create an event?',
    answer:
      'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.',
  },
  {
    question: 'What is the difference between UX and UI design?',
    answer:
      'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.',
  },
  {
    question: 'What is a wireframe?',
    answer:
      'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.',
  },
];

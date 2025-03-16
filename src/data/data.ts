const portfolioImage = 'https://res.cloudinary.com/mofey/image/upload/v1742122756/portfolio-pix_xvn1qx.jpg';

const projects = [
  {
    title: 'Customer Segmentation using K-Means',
    description:
      'Implemented unsupervised learning to identify distinct customer segments for targeted marketing strategies.',
    tags: ['Python', 'Scikit-learn', 'Unsupervised Learning'],
    github: 'https://github.com/Mofey/unsupervised_learning',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Image Classification using CNNs',
    description:
      'Deep learning model for accurate image classification using Convolutional Neural Networks.',
    tags: ['Python', 'TensorFlow', 'Deep Learning'],
    github: 'https://github.com/Mofey/deep_learning',
    image:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Loan Approval Prediction',
    description:
      'Decision tree model to predict loan approval probability based on customer data.',
    tags: ['Python', 'Decision Trees', 'Supervised Learning'],
    github: 'https://github.com/Mofey/supervised_learning',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'House Price Prediction',
    description:
      'SQL-based machine learning project combining database operations with linear regression.',
    tags: ['Python', 'SQL', 'Linear Regression'],
    github: 'https://github.com/Mofey/linear_regression',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  }
];

const tagToUrlMap: { [key: string]: string } = {
  'Python': 'https://www.python.org/',
  'Scikit-learn': 'https://scikit-learn.org/',
  'Supervised Learning': 'https://en.wikipedia.org/wiki/Supervised_learning',
  'Unsupervised Learning': 'https://en.wikipedia.org/wiki/Unsupervised_learning',
  'TensorFlow': 'https://www.tensorflow.org/',
  'Deep Learning': 'https://en.wikipedia.org/wiki/Deep_learning',
  'Decision Trees': 'https://scikit-learn.org/stable/auto_examples/tree/index.html',
  'SQL': 'https://www.postgresql.org/',
  'Linear Regression': 'https://en.wikipedia.org/wiki/Linear_regression'
};

const skills = [
  'Python', 'JavaScript/TypeScript', 'React', 'Node.js',
  'Machine Learning', 'SQL', 'Financial Analysis', 'Data Visualization'
];

const skillToUrlMap: { [key: string]: string } = {
  'Python': 'https://www.python.org/',
  'JavaScript/TypeScript': 'https://www.typescriptlang.org/',
  'React': 'https://reactjs.org/',
  'Node.js': 'https://nodejs.org/',
  'Machine Learning': 'https://en.wikipedia.org/wiki/Machine_learning',
  'SQL': 'https://www.postgresql.org/',
  'Financial Analysis': 'https://en.wikipedia.org/wiki/Financial_analysis',
  'Data Visualization': 'https://en.wikipedia.org/wiki/Data_visualization'
};

export { portfolioImage, projects, tagToUrlMap, skills, skillToUrlMap };
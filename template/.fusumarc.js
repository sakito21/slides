const base = require('../../.fusumarc');

module.exports = {
  meta: {
    ...base.meta,
    title: '',
    description: '',
    thumbnail: ''
  },
  slide: {
    showIndex: true,
    code: {
      languages: ['json', 'markdown', 'javascript', 'css']
    }
  },
  extends: {
    css: 'style.css'
  }
};

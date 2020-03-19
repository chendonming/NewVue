/**
 * Verifier
 */
export default {
  mobile: (vue) => (rule, value, callback) => {
    if (!/^1[0-9]{10}$/.test(value)) {
      callback(new Error(`${vue.$t('mobileError')}`));
    } else {
      callback();
    }
  },

  email: (vue) => (rule, value, callback) => {
    if (!/[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
      callback(new Error(`${vue.$t('emailError')}`));
    } else {
      callback();
    }
  },
};

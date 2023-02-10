/* eslint-disable import/prefer-default-export */
// ALL THE CONFIGURATIONS OF FRONTEND WILL BE PLACED IN THIS FILE

export const apiUrl = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:5000'
  : 'https://krazyg.cyclic.app';
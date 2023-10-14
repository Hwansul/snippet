const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');

removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'

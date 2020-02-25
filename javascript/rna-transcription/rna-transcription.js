//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  let RNA = '';
  let nucleotides = DNA.split('');
  nucleotides.forEach(nucleotide => {
    switch (nucleotide) {
      case 'G':
        RNA += 'C';
        break;
      case 'C':
        RNA +=  'G';
        break;
      case 'T':
        RNA += 'A';
        break;
      case 'A':
        RNA += 'U';
        break;
      default:
        RNA += '';
        break;
    }
  });

  return RNA;
};

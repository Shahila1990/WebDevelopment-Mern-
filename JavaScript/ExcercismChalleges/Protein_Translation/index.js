const codonTable = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP'
};

export const translate = (rna = '') => {
    const proteins = []

    for(let i = 0; i < rna.length; i += 3){
        const codon = rna.slice(i , i+3)

        if (!codonTable.hasOwnProperty(codon)){
            throw new Error('Invalid Codon')
        }

        const protein = codonTable[codon]
        if (protein === 'STOP'){
            break
        }
        proteins.push(protein)
    }

    return proteins
}

console.log(translate("AUGUUUUCUUAAAUG"));
console.log(translate('AAA'));


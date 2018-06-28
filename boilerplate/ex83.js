// JavaScript source code
let tableau = {
    prof : [
        { prenom: 'Han', nom: 'Solo' },
        { prenom: 'Chew', nom: 'Bacca' }
    ],
    eleves : [
    { prenom: 'Marty', nom: 'McFly' },
    { prenom: 'Doc', nom: 'Brown' }
    ]

};

console.log(tableau['eleves'][0]['prenom']);
console.log(tableau.eleves[0].prenom);

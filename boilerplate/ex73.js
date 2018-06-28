// JavaScript source code
const dt = new Date();

console.log(dt.toLocaleDateString('fr-FR', {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
}
));
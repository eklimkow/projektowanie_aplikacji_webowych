window.onload = function() {

    let liczbaWierszyInput = document.getElementById('liczbaWierszy');
    let liczbaKolumnInput = document.getElementById('liczbaKolumn');

    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        })

    function liczbaWierszy() {
    let liczbaWierszy = true;
        if (liczbaWierszyInput > 0) {
        liczbaWierszy = true;
        } else {
            setErrorText('Wprowadź liczbę większą od 0');
        }
        return liczbaWierszyInput
    }

    function liczbaKolumn() {
        let liczbaKolumn = true;
        if (liczbaKolumnInput > 0) {
            liczbaKolumn = true;
        } else {
            setErrorText('Wprowadź liczbę większą od 0');
        }
        return liczbaWierszyInput
    }




}
let buttonEl = document.getElementById("res");

buttonEl.addEventListener('click',() =>{
    let age = document.getElementById("age");
    let heartDeseases = document.getElementById('heartDeseases');
    let endocrineDeceases = document.getElementById('endocrineDeceases');
    let lungDeseases = document.getElementById('lungDeseases');
    let otherDeceases = document.getElementById('otherDeceases');
    let oncoDeseases = document.getElementById('oncoDeseases')
    let sex = document.getElementById('sex')
    let hightSeverity = document.getElementById('hightSeverity');
    let fever = document.getElementById('fever');
    let tasteLoss = document.getElementById('tasteLoss');
    let rhinitis = document.getElementById("rhinitis");
    let dyspnea = document.getElementById("dyspnea");
    let clinic = document.getElementById("clinic");
    let hospital = document.getElementById("hospital");
    let covContact = document.getElementById("covContact");
    let resEl = document.getElementById("result")

    let coeffz = -1.010 + hightSeverity.value + 0.403 * oncoDeseases.value + 0.406 * otherDeceases.value + 0.423 * dyspnea.value + 0.397 * hospital.value + 0.453 * endocrineDeceases.value + 0.228 * sex.value + 0.407 * heartDeseases.value + 0.364 * lungDeseases.value + 0.012 * age.value + 0.355 * fever.value - 0.512 * rhinitis.value - 0.377 * tasteLoss.value - 0.377 * covContact.value - 1.352 * clinic.value;
    let res = CalculateProbability(coeffz);
    resEl.innerHTML += `<p>${res}</p>`
    if (res < 0.669) {
        resEl.innerHTML += `<p>Низкий риск госпитализации</p>`
    } else if (res > 0.669) {
        resEl.innerHTML += `<p>Высокий риск госпитализации</p>`
    } else {
        resEl.innerHTML += `<p>Ошибка</p>`
    }
})

function CalculateProbability(z) {
    return 1 / (1 + Math.pow(Math.E, -z));
}

let buttonEl = document.getElementById("res");
let buttonEl2 = document.getElementById("res2")
buttonEl2.addEventListener('click',() => {
    let xage = document.getElementById("Xвозраст");
    let xsp02 = document.getElementById("XSpO2%");
    let xelit = document.getElementById("Xэритр");
    let xdayhosp = document.getElementById("Xденьгосп");
    let xchdd = document.getElementById("XЧДД");
    let xchcc = document.getElementById("XЧСС");
    let xleik = document.getElementById("Xлейк");
    let xtromb = document.getElementById("Xтромб");
    let xlimp = document.getElementById("Xлимф");
    let xferritin = document.getElementById("Xферритин");
    let xcp = document.getElementById("XСр");
    let xddimmer = document.getElementById("XDдимер");
    let xfibirin = document.getElementById("Xфибрин");
    let xkt = document.getElementById("XКТ");
    let res = 0.023*xage.value -0.351*xchdd.value +0.066*xchcc.value -0.198*xsp02.value -0.469*xelit.value +0.163*xleik.value -0.003*xtromb.value + 0.028*xlimp.value +0.002*xferritin.value +0.005*xcp.value +0.513*xddimmer.value -0.223*xfibirin.value +1.124*xkt.value -0.155*xdayhosp.value +17.857;
    let resel2 = document.getElementById('result2')
    resel2.innerHTML += `<p>${res}</p>`
    if (res > 0.4435) {
        resel2.innerHTML += `<p>Высокий Риск летального исхода</p>`
    } else if (res < 0.4435) {
        resel2.innerHTML += `<p>низкий риск летального исхода</p>`
    }

})
buttonEl.addEventListener('click',() =>{
    let age = document.getElementById("age");
    let heartDeseases = document.getElementById('heartDeseases');
    let endocrineDeceases = document.getElementById('endocrineDeceases');
    let lungDeseases = document.getElementById('lungDeseases');
    let otherDeceases = document.getElementById('otherDeceases');
    let oncoDeseases = document.getElementById('oncoDeseases')
    let sex = document.getElementById('sex')
    let hightSeverity = document.getElementById('hightSeverity');
    let midleSeveruty = document.getElementById("midleSeveruty");
    let fever = document.getElementById('fever');
    let tasteLoss = document.getElementById('tasteLoss');
    let rhinitis = document.getElementById("rhinitis");
    let dyspnea = document.getElementById("dyspnea");
    let clinic = document.getElementById("clinic");
    let hospital = document.getElementById("hospital");
    let covContact = document.getElementById("covContact");
    let resEl = document.getElementById("result")

    let coeffz = -1.010 + 4.224 * hightSeverity.value + 2.123 * midleSeveruty.value + 0.403 * oncoDeseases.value + 0.406 * otherDeceases.value + 0.423 * dyspnea.value + 0.397 * hospital.value + 0.453 * endocrineDeceases.value + 0.228 * sex.value + 0.407 * heartDeseases.value + 0.364 * lungDeseases.value + 0.012 * age.value + 0.355 * fever.value - 0.512 * rhinitis.value - 0.377 * tasteLoss.value - 0.377 * covContact.value - 1.352 * clinic.value;
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

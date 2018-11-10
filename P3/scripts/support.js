let support = () => {
    let navn = document.getElementById('supportnavn').value
    let epost = document.getElementById('supportepost').value
    let melding =  document.getElementById('supportmelding').value
    alert('Brukeren med dette navnet: ' + navn +
     ', og denne eposten: ' + epost +
     ', sendte denne meldingen: \n' +  melding)
}
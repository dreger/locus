var riskOfHarm;
var functionalStatus;
var coMorbidity;
var recoveryEnvironmentStres;
var recoveryEnvironmentSupport;
var resiliencyAndTreatmentHistory;
var acceptanceAndEngagementChildAdolescent;
var acceptanceAndEngagementParentPrimary;
var compositeScore = 0; 



function updateScore() {
  riskOfHarm = parseInt(document.querySelector('input[name="riskOfHarm"]:checked').value);
  functionalStatus = parseInt(document.querySelector('input[name="functionalStatus"]:checked').value);
  coMorbidity = parseInt(document.querySelector('input[name="coMorbidity"]:checked').value);
  recoveryEnvironmentStress = parseInt(document.querySelector('input[name="recoveryEnvironmentStress"]:checked').value);
  recoveryEnvironmentSupport = parseInt(document.querySelector('input[name="recoveryEnvironmentSupport"]:checked').value);
  resiliencyAndTreatmentHistory = parseInt(document.querySelector('input[name="resiliencyAndTreatmentHistory"]:checked').value);
  acceptanceAndEngagementChildAdolescent = parseInt(document.querySelector('input[name="acceptanceAndEngagementChildAdolescent"]:checked').value);
  acceptanceAndEngagementParentPrimary = parseInt(document.querySelector('input[name="acceptanceAndEngagementParentPrimary"]:checked').value);

  updateComposite(); 
  updateLevelOfCare(); 
}

function updateLevelOfCare() {
  var levelsOfCare = document.querySelectorAll(".level-of-care");
  [].forEach.call(levelsOfCare, function(el) {
      el.classList.remove("level-of-care--active");
  });


  if (compositeScore >= 10 && compositeScore <= 13) {
    document.querySelector(".level-of-care-1").classList.add('level-of-care--active');
  } else if (compositeScore >= 14 && compositeScore <= 16) {
    document.querySelector(".level-of-care-2").classList.add('level-of-care--active');
  } else if (compositeScore >= 17 && compositeScore <= 19) {
    document.querySelector(".level-of-care-3").classList.add('level-of-care--active');
  } else if (compositeScore >= 20 && compositeScore <= 22) {
    document.querySelector(".level-of-care-4").classList.add('level-of-care--active');
  } else if (compositeScore >= 23 && compositeScore <= 27) {
    document.querySelector(".level-of-care-5").classList.add('level-of-care--active');
  } else if (compositeScore >= 28) {
    document.querySelector(".level-of-care-6").classList.add('level-of-care--active');
  } else {
    document.querySelector(".level-of-care-0").classList.add('level-of-care--active');
  }
}

function updateComposite() {
  let compositeScoreDom = document.querySelector('#compositeScore'); 
  compositeScore = riskOfHarm + 
                      functionalStatus + 
                      coMorbidity + 
                      recoveryEnvironmentStress + 
                      recoveryEnvironmentSupport + 
                      resiliencyAndTreatmentHistory + 
                      acceptanceAndEngagementChildAdolescent + 
                      acceptanceAndEngagementParentPrimary; 
  compositeScoreDom.innerHTML = compositeScore;
}

document.addEventListener('click', function (event) {
  if (!event.target.matches('.radio input')) return;
  updateScore(); 
}, false);
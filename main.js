//sound model to indentify whistle clap background noise and bang- https://teachablemachine.withgoogle.com/models/bIZS13dQQ/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bIZS13dQQ/',  modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
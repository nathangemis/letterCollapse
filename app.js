let letters = ["D", "E", "S", "I", "G", "N"];
let root = document.body;
let letterClass = document.body.querySelector(".letter");
let content = document.body.querySelector(".content");
let intervalTime = 1000;
displayInterval = setInterval(displayLetter, intervalTime);
let divSize = 150;
let fontSize = 5;
let totalCollapse = divSize;
root.style.setProperty("--font-size", `${fontSize}em`)
root.style.setProperty("--size", `${divSize}px`);
let letterIndex = 0;
function displayLetter() {
    let wordCompleted = document.body.querySelector('.resume');
    if (wordCompleted) {
        wordCompleted.remove();
    }
    letterClass.textContent = `${letters[letterIndex]}`;
    letterComplete();
    letterIndex++
    if (letterIndex == letters.length) {
        letterIndex = 0;
    }
    totalWidth = divSize + (divSize * resumeContent.length);
    root.style.setProperty('--show-w', `${totalWidth}px`);
};
function letterComplete() {
    let resume = document.createElement('div');
    resume.classList.add('resume')
    content.appendChild(resume);
    if (letters[letterIndex] == "D") {
        resumeContent = "ESIGN";
    } else if (letters[letterIndex] == "E") {
        resumeContent = "LEGANT";
    } else if (letters[letterIndex] == "S") {
        resumeContent = "IMPLE"
    } else if (letters[letterIndex] == "I") {
        resumeContent = "NNOVATIVE"
    } else if (letters[letterIndex] == "G") {
        resumeContent = "REAT"
    } else if (letters[letterIndex] == "N") {
        resumeContent = "EW"
    }
    let resumeTab = resumeContent.split('');
    for (let index = 0; index < resumeTab.length; index++) {
        let block = document.createElement('div');
        block.classList.add('wordComplete');
        resume.appendChild(block);
        block.textContent = `${resumeTab[index]}`;
    }

}
content.addEventListener("mouseenter", function () {
    totalCollapse = divSize;
    startTimeOut = setTimeout(startInterval, 1000);

    function startInterval() {
        collapseInterval = setInterval(collapse, 1);
    }

    function collapse() {
        collapseTime = totalWidth / 100;
        if (totalCollapse < totalWidth) {
            totalCollapse = totalCollapse + collapseTime;

        } else {
            totalCollapse = totalWidth;
            clearInterval(collapseInterval);
        }
        root.style.setProperty('--collapse', `${totalCollapse}px`);
        console.log(totalCollapse);
    }


    clearInterval(displayInterval);
    wordCompleted = document.body.querySelector('.resume')
    wordCompleted.style.display = 'flex';
    content.classList.remove("hideResume");
});
content.addEventListener("mouseleave", function () {
    clearTimeout(startTimeOut)
    clearInterval(collapseInterval);
    totalCollapse = 0;
    displayInterval = setInterval(displayLetter, 1000);
    content.classList.add('hideResume');
});



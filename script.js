// script.js
let currentScenario = 0;

const scenarios = [
  {
    scenario: "You're in a smart home in 2035, and you're in the living room when the oven begins to overheat. Which device would you use to send an emergency alert and turn off the oven remotely?",
    choices: ["Smart Landline", "Mobile Phone", "Other Device"],
    correctChoice: 0, // Smart Landline
    feedback: "Correct! The smart landline integrates with your home automation system, allowing you to send alerts and control appliances remotely, even without a mobile connection."
  },
  {
    scenario: "You're at home and suddenly feel unwell. You want to alert medical professionals quickly and have your health monitored remotely. Which device is best for the situation?",
    choices: ["Smart Landline", "Mobile Phone", "Other Device"],
    correctChoice: 0, // Smart Landline
    feedback: "Correct! The smart landline can monitor health metrics like heart rate, blood pressure, and alert healthcare providers immediately, providing faster response times."
  },
  {
    scenario: "During a family dinner, the doorbell rings and a package is delivered. You’re in the middle of eating, but you want to interact with the delivery person. What tool would you use to communicate without leaving the table?",
    choices: ["Smart Landline", "Mobile Phone", "Other Device"],
    correctChoice: 0, // Smart Landline
    feedback: "Correct! The smart landline can be integrated with video calling and smart doorbell systems, enabling you to communicate without needing to pick up a mobile device."
  },
  {
    scenario: "You're on a business trip in a foreign country, and you need to reach your family immediately. What tool would you use to make an international call while ensuring the highest level of security?",
    choices: ["Smart Landline", "Mobile Phone", "Other Device"],
    correctChoice: 0, // Smart Landline
    feedback: "Correct! The smart landline offers encrypted calling features, ensuring your communication is secure, even during international calls."
  },
  {
    scenario: "In 2035, you're a senior living independently. You experience a fall and are unable to reach your phone. Which device would automatically alert emergency services without you having to do anything?",
    choices: ["Smart Landline", "Mobile Phone", "Other Device"],
    correctChoice: 0, // Smart Landline
    feedback: "Correct! The smart landline has fall detection and automatic emergency alert features that can notify loved ones and emergency responders without requiring any action from you."
  }
];

function loadScenario() {
  const scenario = scenarios[currentScenario];
  document.getElementById("scenario-text").innerText = scenario.scenario;
  const choiceButtons = document.querySelectorAll(".choice-button");
  choiceButtons.forEach((button, index) => {
    button.innerText = scenario.choices[index];
  });
  document.getElementById("result").innerText = "";
  document.getElementById("next-button").style.display = "none";
}

function makeChoice(choiceIndex) {
  const scenario = scenarios[currentScenario];
  const resultText = document.getElementById("result");
  
  if (choiceIndex === scenario.correctChoice) {
    resultText.innerText = "Correct! " + scenario.feedback;
    resultText.style.color = "green";
  } else {
    resultText.innerText = "Incorrect! " + scenario.feedback;
    resultText.style.color = "red";
  }

  document.getElementById("next-button").style.display = "inline-block";
}

function nextScenario() {
  currentScenario++;
  if (currentScenario < scenarios.length) {
    loadScenario();
  } else {
    document.getElementById("scenario").innerHTML = "<h2>You've completed the game!</h2>";
    document.getElementById("next-button").style.display = "none";
  }
}

loadScenario();
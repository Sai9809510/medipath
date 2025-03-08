const diseaseToTests = {
    fever: ["Complete Blood Count (CBC)", "Malaria Test", "Typhoid Test"],
    cough: ["Chest X-ray", "Sputum Test", "COVID-19 Test"],
    "stomach pain": ["Ultrasound", "Liver Function Test (LFT)", "Urine Routine"],
    headache: ["MRI Scan", "CT Scan", "Eye Test"],
    weakness: ["Vitamin Deficiency Panel", "Thyroid Function Test", "Diabetes Test"],
    "chest pain": ["ECG (Electrocardiogram)", "Cardiac Enzyme Test", "Chest CT"],
    cold: ["Nasal Swab", "Influenza Test", "Complete Blood Count (CBC)"],
    diarrhea: ["Stool Routine Examination", "Electrolyte Test", "Culture and Sensitivity Test"],
    vomiting: ["Electrolyte Test", "Liver Function Test (LFT)", "Ultrasound"],
    rash: ["Allergy Test", "Skin Biopsy", "Blood Test"],
    fatigue: ["Thyroid Function Test", "Diabetes Test", "Vitamin D and B12 Levels"],
    "sore throat": ["Throat Swab Test", "Strep Test", "Complete Blood Count (CBC)"],
    dizziness: ["Blood Pressure Check", "MRI Scan", "Blood Sugar Test"],
    "back pain": ["X-ray", "MRI Scan", "Physiotherapy Assessment"],
    asthma: ["Pulmonary Function Test", "Chest X-ray", "Allergy Test"],
    anemia: ["Complete Blood Count (CBC)", "Iron Levels Test", "Vitamin B12 Test"],
    hypertension: ["Blood Pressure Monitoring", "Lipid Profile", "Kidney Function Test"],
    arthritis: ["Rheumatoid Factor Test", "X-ray", "CRP (C-Reactive Protein) Test"],
    obesity: ["BMI Analysis", "Lipid Profile", "Thyroid Function Test"],
    depression: ["Psychological Assessment", "Thyroid Function Test", "Vitamin D Levels"]
};

// Form submission handler
document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const illness = document.getElementById("illness").value.toLowerCase();

    let tests;

    if (age < 12) {
        tests = ["Consult a Pediatrician for further advice."];
        if (illness === "fever") tests.push("Pediatric CBC", "Dengue Test");
        else if (illness === "cough") tests.push("Pediatric Chest X-ray", "RSV Test");
        else if (illness === "stomach pain") tests.push("Pediatric Ultrasound", "Stool Test");
        else if (illness === "weakness") tests.push("Growth Hormone Test", "Iron Levels Test");
    } else if (age > 60) {
        tests = ["Consult a Geriatric Specialist for further advice."];
        if (illness === "fever") tests.push("Blood Culture", "Inflammatory Markers Test");
        else if (illness === "cough") tests.push("Pulmonary Function Test", "Chest CT Scan");
        else if (illness === "weakness") tests.push("Electrolyte Panel", "Cardiac Assessment", "Bone Density Test");
        else if (illness === "dizziness") tests.push("ECG", "Cognitive Function Test");
        else if (illness === "arthritis") tests.push("Bone Density Test", "Inflammation Marker Test");
        else if (illness === "hypertension") tests.push("Cardiac Stress Test", "Kidney Function Test");
    } else {
        tests = diseaseToTests[illness] || ["Consult a General Physician for further advice."];
        if (gender.toLowerCase() === "female") {
            if (illness === "weakness") tests.push("Iron Deficiency Test", "Hormonal Panel");
            else if (illness === "stomach pain") tests.push("Pelvic Ultrasound", "Hormone Levels Test");
            else if (illness === "fatigue") tests.push("Anemia Test", "Calcium Deficiency Test");
            else if (illness === "chest pain") tests.push("Mammogram", "Cardiac Stress Test");
            else if (illness === "dizziness") tests.push("Thyroid Test", "Bone Density Test");
            else if (illness === "obesity") tests.push("Hormone Panel", "PCOS Test");
        }
    }

    // Display results
    document.getElementById("result").style.display = "block";
    document.getElementById("patientDetails").innerHTML = `
      <b>Full Name:</b> ${name}<br>
      <b>Age:</b> ${age}<br>
      <b>Gender:</b> ${gender}<br>
      <b>Illness/Symptoms:</b> ${illness}
    `;

    // Populate test list
    const testList = document.getElementById("testList");
    testList.innerHTML = ""; // Clear previous results
    tests.forEach(test => {
        const li = document.createElement("li");
        li.textContent = test;
        testList.appendChild(li);
    });

    // Reset the form
    this.reset();
});
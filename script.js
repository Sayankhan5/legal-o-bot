document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const disclosingName = document.getElementById("disclosingName").value;
  const disclosingAddress = document.getElementById("disclosingAddress").value;
  const receivingName = document.getElementById("receivingName").value;
  const receivingAddress = document.getElementById("receivingAddress").value;
  const effectiveDate = document.getElementById("effectiveDate").value;

  const ndaText = `
    <h2>NON-DISCLOSURE AGREEMENT (NDA)</h2>
    <p>This Nondisclosure Agreement ("Agreement") is made and entered into on <strong>${effectiveDate}</strong> by and between:</p>
    <p><strong>Disclosing Party:</strong> ${disclosingName}, located at ${disclosingAddress}</p>
    <p><strong>Receiving Party:</strong> ${receivingName}, located at ${receivingAddress}</p>
    <p>For the purpose of preventing the unauthorized disclosure of Confidential Information...</p>

    <h3>1. Definition of Confidential Information</h3>
    <p>...Confidential Information includes all material with commercial value or other utility...</p>

    <h3>2. Exclusions</h3>
    <p>...Publicly known, independently discovered, disclosed with written permission...</p>

    <h3>3. Obligations of Receiving Party</h3>
    <p>...Maintain strictest confidence, not use for personal gain, return all materials on request...</p>

    <h3>4. Term</h3>
    <p>...This NDA remains in effect until the confidential information becomes public, or the disclosing party releases the receiving party in writing...</p>

    <h3>5. Miscellaneous</h3>
    <ul>
      <li>This Agreement does not constitute partnership.</li>
      <li>If any part is invalid, the rest stays valid.</li>
      <li>Modifications must be in writing and signed by both parties.</li>
    </ul>

    <h3>Signatures</h3>
    <p><strong>Disclosing Party:</strong><br>
    Name: ${disclosingName}<br>
    Signature: _______________________<br>
    Date: _______________________</p>

    <p><strong>Receiving Party:</strong><br>
    Name: ${receivingName}<br>
    Signature: _______________________<br>
    Date: _______________________</p>
  `;

  document.getElementById("ndaOutput").innerHTML = ndaText;
});


  document.getElementById("ndaOutput").textContent = ndaContent;
});

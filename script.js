document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const disclosingName = document.getElementById("disclosingName").value;
  const disclosingAddress = document.getElementById("disclosingAddress").value;
  const receivingName = document.getElementById("receivingName").value;
  const receivingAddress = document.getElementById("receivingAddress").value;
  const effectiveDate = document.getElementById("effectiveDate").value;
  const purpose = document.getElementById("purpose").value;

  const ndaContent = `
    <h2 style="text-align:center;">NON-DISCLOSURE AGREEMENT (NDA)</h2>
    <p>This Non-Disclosure Agreement ("Agreement") is made and entered into on <strong>${effectiveDate}</strong> by and between:</p>

    <p><strong>Disclosing Party:</strong> ${disclosingName}, located at ${disclosingAddress}</p>
    <p><strong>Receiving Party:</strong> ${receivingName}, located at ${receivingAddress}</p>

    <p><strong>WHEREAS</strong>, the parties wish to enter into a confidential relationship to protect certain proprietary and confidential information for the following purpose:</p>
    <p><em>"${purpose}"</em></p>

    <p><strong>NOW, THEREFORE</strong>, the parties agree as follows:</p>

    <h3>1. Definition of Confidential Information</h3>
    <p>Confidential Information includes all written, electronic, or oral information that has commercial value or other utility in the business, including but not limited to trade secrets, technical data, know-how, and other proprietary information disclosed by the Disclosing Party.</p>

    <h3>2. Exclusions</h3>
    <p>The obligations of this Agreement shall not apply to information that: (a) is already known to the Receiving Party without restriction; (b) becomes publicly available through no fault of the Receiving Party; (c) is disclosed with prior written approval from the Disclosing Party.</p>

    <h3>3. Obligations of Receiving Party</h3>
    <p>The Receiving Party shall: (a) maintain the confidentiality of the information; (b) not use the information for any purpose other than as permitted under this Agreement; (c) not disclose the information to any third party without written permission.</p>

    <h3>4. Term</h3>
    <p>This Agreement shall remain in effect until such time as the Confidential Information no longer qualifies as confidential or until released in writing by the Disclosing Party.</p>

    <h3>5. Miscellaneous</h3>
    <ul>
      <li>This Agreement shall not be construed as creating any joint venture or partnership between the parties.</li>
      <li>If any provision of this Agreement is found invalid, the remaining provisions shall continue to be valid and enforceable.</li>
      <li>This Agreement may be amended only by written agreement signed by both parties.</li>
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

  document.getElementById("ndaOutput").innerHTML = ndaContent;
});

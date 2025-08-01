document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const partyA = document.getElementById("partyA").value;
  const partyB = document.getElementById("partyB").value;
  const purpose = document.getElementById("purpose").value;
  const duration = document.getElementById("duration").value;
  const jurisdiction = document.getElementById("jurisdiction").value;
  const today = new Date().toLocaleDateString();

  const ndaContent = `
    <h2>NON-DISCLOSURE AGREEMENT</h2>
    <p>This Non-Disclosure Agreement ("Agreement") is entered into on this ${today} ("Effective Date"), by and between:</p>

    <ol>
      <li><strong>${partyA}</strong>, a company incorporated under the laws of India, having its registered office at [Insert Address] (hereinafter referred to as the “Disclosing Party”);</li>
      <li><strong>${partyB}</strong>, having its principal place of business/residence at [Insert Address] (hereinafter referred to as the “Receiving Party”).</li>
    </ol>

    <p><strong>1. Purpose:</strong> The Disclosing Party intends to disclose certain confidential and proprietary information to the Receiving Party for the purpose of ${purpose}.</p>

    <p><strong>2. Confidential Information:</strong> Includes all non-public information disclosed orally, visually, or in writing, including technical data, trade secrets, business plans, financials, source code, and designs.</p>

    <p><strong>3. Obligation of Confidentiality:</strong> The Receiving Party shall maintain strict confidentiality and shall not disclose or use any part of the Confidential Information except as required for the Purpose.</p>

    <p><strong>4. Third-Party Developers:</strong> The Receiving Party shall ensure that any third-party developer or contractor engaged shall be bound by similar confidentiality obligations and shall not use or disclose confidential data.</p>

    <p><strong>5. Cloud Storage:</strong> Any Confidential Information stored on cloud platforms (e.g., AWS, GCP, Azure) must be secured using encryption, restricted access, and industry best practices.</p>

    <p><strong>6. Cross-border Data Transfer:</strong> Any transfer of data across borders must comply with applicable data protection laws including GDPR, and with prior written consent of the Disclosing Party.</p>

    <p><strong>7. Duration:</strong> This Agreement shall remain in effect for ${duration} year(s) from the Effective Date, or until such Confidential Information becomes publicly known through no fault of the Receiving Party.</p>

    <p><strong>8. Liquidated Damages:</strong> In the event of a breach, the Disclosing Party shall be entitled to claim liquidated damages of INR 5,00,000 or actual damages suffered, whichever is higher, along with legal expenses.</p>

    <p><strong>9. Governing Law & Jurisdiction:</strong> This Agreement shall be governed by the laws of India and subject to exclusive jurisdiction of the courts of ${jurisdiction}.</p>

    <p><strong>10. Entire Agreement:</strong> This Agreement constitutes the entire understanding between the Parties and supersedes all prior discussions or communications.</p>

    <h3>IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date:</h3>

    <p><strong>Disclosing Party:</strong><br>
    Signature: _______________________<br>
    Name: ___________________________<br>
    Designation: ____________________<br>
    Date: ${today}</p>

    <p><strong>Receiving Party:</strong><br>
    Signature: _______________________<br>
    Name: ___________________________<br>
    Designation: ____________________<br>
    Date: ${today}</p>
  `;

  document.getElementById("ndaOutput").innerHTML = ndaContent;
});

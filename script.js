document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const disclosingName = document.getElementById("disclosingName").value;
  const disclosingAddress = document.getElementById("disclosingAddress").value;
  const receivingName = document.getElementById("receivingName").value;
  const receivingAddress = document.getElementById("receivingAddress").value;
  const purpose = document.getElementById("purpose").value;
  const duration = document.getElementById("duration").value;
  const jurisdiction = document.getElementById("jurisdiction").value;
  const damages = document.getElementById("damages").value;

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  const ndaText = `
  <h3 style="text-align:center;">NON-DISCLOSURE AGREEMENT</h3>
  <p>This Non-Disclosure Agreement ("Agreement") is entered into on this ${day} day of ${month}, ${year} (“Effective Date”), by and between:</p>
  <ol>
    <li>${disclosingName}, a company incorporated under the laws of India, having its registered office at ${disclosingAddress} (hereinafter referred to as the “Disclosing Party”);</li>
    <li>${receivingName}, having its principal place of business/residence at ${receivingAddress} (hereinafter referred to as the “Receiving Party”).</li>
  </ol>

  <p>The Disclosing Party and the Receiving Party may collectively be referred to as the “Parties” and individually as a “Party.”</p>

  <h4>1. Definition of Confidential Information</h4>
  <p>... [Include full clause content]</p>

  <h4>2. Obligations of Receiving Party</h4>
  <p>... [Include full clause content]</p>

  <h4>3. Permitted Disclosures</h4>
  <p>... [Include full clause content]</p>

  <h4>4. Exclusions</h4>
  <p>... [Include full clause content]</p>

  <h4>5. Third-Party Developers Clause</h4>
  <p>... [Include full clause content]</p>

  <h4>6. Cloud Storage Clause</h4>
  <p>... [Include full clause content]</p>

  <h4>7. Cross-Border Data Transfer Clause</h4>
  <p>... [Include full clause content]</p>

  <h4>8. Intellectual Property</h4>
  <p>All Confidential Information, including intellectual property, shall remain the sole property of the Disclosing Party. No license or rights, express or implied, are granted under this Agreement.</p>

  <h4>9. Return or Destruction</h4>
  <p>Upon termination of this Agreement or upon written request, the Receiving Party shall promptly return or destroy all Confidential Information and provide written certification of such destruction.</p>

  <h4>10. Penalty for Breach / Liquidated Damages Clause</h4>
  <p>In the event of breach of this Agreement, including unauthorized disclosure or misuse of Confidential Information, the Receiving Party shall be liable to:
    <ul>
      <li>Compensate the Disclosing Party by way of liquidated damages amounting to INR ${damages} (or actual damages, whichever is higher),</li>
      <li>Indemnify against all losses, expenses, or liabilities arising from such breach,</li>
      <li>Face injunctive relief to prevent further damage.</li>
    </ul>
  </p>

  <h4>11. Term</h4>
  <p>This Agreement shall commence on the Effective Date and remain in effect for a period of ${duration} year(s) or until terminated by either party with thirty (30) days written notice. However, obligations concerning Confidential Information shall survive termination for a period of five (5) years.</p>

  <h4>12. Governing Law & Jurisdiction</h4>
  <p>This Agreement shall be governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts at ${jurisdiction}, India.</p>

  <h4>13. Entire Agreement</h4>
  <p>This Agreement constitutes the entire understanding between the Parties and supersedes all prior discussions, negotiations, or agreements, written or oral.</p>

  <h4>14. Severability</h4>
  <p>If any provision of this Agreement is held to be invalid or unenforceable, the remainder shall remain in full force and effect.</p>

  <br><br>
  <p><strong>IN WITNESS WHEREOF</strong>, the Parties have executed this Agreement as of the date first written above.</p>

  <p><strong>Disclosing Party</strong><br>
  Signature: _____________________<br>
  Name:<br>
  Designation:<br>
  Date:</p>

  <p><strong>Receiving Party</strong><br>
  Signature: _____________________<br>
  Name:<br>
  Designation:<br>
  Date:</p>
  `;

  document.getElementById("ndaOutput").innerHTML = ndaText;
});

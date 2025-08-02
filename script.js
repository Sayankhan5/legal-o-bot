// This script handles the form submission and dynamically generates the NDA document.
document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Section A - Common Metadata
  const effectiveDate = document.getElementById("effectiveDate").value;
  const term = document.getElementById("term").value;
  const survival = document.getElementById("survival").value;
  const purpose = document.getElementById("purpose").value;

  // Section B - Disclosing Party
  const dEntity = document.getElementById("dEntity").value;
  const dName = document.getElementById("dName").value;
  const dCIN = document.getElementById("dCIN").value;
  const dSec8 = document.getElementById("dSec8").value;
  const dAddress = document.getElementById("dAddress").value;
  const dSign = document.getElementById("dSign").value;
  const dSignDesig = document.getElementById("dSignDesig").value;
  const dPAN = document.getElementById("dPAN").value;
  const dAadhaar = document.getElementById("dAadhaar").value;

  // Section C - Receiving Party
  const rEntity = document.getElementById("rEntity").value;
  const rName = document.getElementById("rName").value;
  const rCIN = document.getElementById("rCIN").value;
  const rSec8 = document.getElementById("rSec8").value;
  const rAddress = document.getElementById("rAddress").value;
  const rSign = document.getElementById("rSign").value;
  const rSignDesig = document.getElementById("rSignDesig").value;
  const rPAN = document.getElementById("rPAN").value;
  const rAadhaar = document.getElementById("rAadhaar").value;

  // Section D - Legal
  const lawLocation = document.getElementById("lawLocation").value;
  const jurisdiction = document.getElementById("jurisdiction").value;
  const arbitration = document.getElementById("arbitration").value;

  // Section E - Witness
  const w1Name = document.getElementById("w1Name").value;
  const w1Address = document.getElementById("w1Address").value;
  const w2Name = document.getElementById("w2Name").value;
  const w2Address = document.getElementById("w2Address").value;

  // Construct the NDA text with Tailwind-styled classes
  const ndaText = `
    <h2 class="text-2xl font-bold text-center mb-6">NON-DISCLOSURE AGREEMENT</h2>
    <p class="mb-4">This Non-Disclosure Agreement ("Agreement") is entered into on <strong>${effectiveDate}</strong>, by and between:</p>
    <p class="mb-4"><strong>Disclosing Party:</strong> ${dName}, a ${dEntity}${dCIN ? ` (CIN: ${dCIN})` : ""}${dSec8 ? `, Section 8: ${dSec8}` : ""}, having its registered office at ${dAddress}, represented by ${dSign} (${dSignDesig}), PAN: ${dPAN}, Aadhaar: ${dAadhaar}.</p>
    <p class="mb-4"><strong>Receiving Party:</strong> ${rName}, a ${rEntity}${rCIN ? ` (CIN: ${rCIN})` : ""}${rSec8 ? `, Section 8: ${rSec8}` : ""}, having its principal address at ${rAddress}, represented by ${rSign} (${rSignDesig}), PAN: ${rPAN}, Aadhaar: ${rAadhaar}.</p>

    <p class="mb-4"><strong>WHEREAS</strong>, the parties wish to enter into a confidential relationship for the purpose of: <strong>${purpose}</strong>.</p>
    <p class="mb-6"><strong>NOW, THEREFORE</strong>, the parties agree as follows:</p>

    <h3 class="text-xl font-bold mt-4 mb-2">1. Definition of Confidential Information</h3>
    <p class="mb-4">Confidential Information includes all technical, financial, legal, and business information disclosed by either party in any form, which is designated as confidential or should reasonably be understood to be confidential.</p>

    <h3 class="text-xl font-bold mt-4 mb-2">2. Exclusions</h3>
    <p class="mb-4">Confidential Information does not include information that is publicly known, rightfully received from a third party, independently developed without access to the confidential information, or disclosed with prior written consent.</p>

    <h3 class="text-xl font-bold mt-4 mb-2">3. Obligations</h3>
    <p class="mb-4">The Receiving Party shall keep all Confidential Information strictly confidential and shall not disclose, use, or exploit it for any purpose other than the Purpose. The Receiving Party shall return or destroy all materials upon request.</p>

    <h3 class="text-xl font-bold mt-4 mb-2">4. Term & Survival</h3>
    <p class="mb-4">This Agreement shall remain in effect for <strong>${term} years</strong> from the Effective Date. The obligations of confidentiality shall survive for <strong>${survival} years</strong> beyond the termination.</p>

    <h3 class="text-xl font-bold mt-4 mb-2">5. Legal Jurisdiction</h3>
    <ul class="list-disc list-inside mb-4 ml-4">
      <li>This Agreement shall be governed by the laws of <strong>${lawLocation}</strong>.</li>
      <li>All disputes shall be subject to the jurisdiction of courts at <strong>${jurisdiction}</strong>.</li>
      <li>Any arbitration shall take place in <strong>${arbitration}</strong>.</li>
    </ul>

    <h3 class="text-xl font-bold mt-8 mb-2">6. Signatures</h3>
    <div class="grid md:grid-cols-2 gap-8 text-sm">
      <div>
        <p class="font-bold">Disclosing Party:</p>
        <p>Name: ${dSign}</p>
        <p>Designation: ${dSignDesig}</p>
        <p>Signature: ____________________</p>
        <p>Date: ____________________</p>
      </div>
      <div>
        <p class="font-bold">Receiving Party:</p>
        <p>Name: ${rSign}</p>
        <p>Designation: ${rSignDesig}</p>
        <p>Signature: ____________________</p>
        <p>Date: ____________________</p>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-8 mb-2">7. Witnesses</h3>
    <div class="grid md:grid-cols-2 gap-8 text-sm">
      <div>
        <p><strong>Witness 1:</strong> ${w1Name}</p>
        <p>Address: ${w1Address}</p>
      </div>
      <div>
        <p><strong>Witness 2:</strong> ${w2Name}</p>
        <p>Address: ${w2Address}</p>
      </div>
    </div>
  `;

  document.getElementById("ndaOutput").innerHTML = ndaText;
});

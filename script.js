// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get all necessary elements from the HTML
  const form = document.getElementById("ndaForm");
  const ndaOutput = document.getElementById("ndaOutput");
  const copyButton = document.getElementById("copyButton");
  const copyMessage = document.getElementById("copyMessage");
  const outputContainer = document.getElementById("outputContainer");

  // Add a submit event listener to the form
  form.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Gather all form data into a single object for a cleaner approach
    const formData = {
      // Section A - Common Metadata
      effectiveDate: document.getElementById("effectiveDate").value,
      term: document.getElementById("term").value,
      survival: document.getElementById("survival").value,
      purpose: document.getElementById("purpose").value,

      // Section B - Disclosing Party
      dEntity: document.getElementById("dEntity").value,
      dName: document.getElementById("dName").value,
      dCIN: document.getElementById("dCIN").value,
      dSec8: document.getElementById("dSec8").value,
      dAddress: document.getElementById("dAddress").value,
      dSign: document.getElementById("dSign").value,
      dSignDesig: document.getElementById("dSignDesig").value,
      dPAN: document.getElementById("dPAN").value,
      dAadhaar: document.getElementById("dAadhaar").value,

      // Section C - Receiving Party
      rEntity: document.getElementById("rEntity").value,
      rName: document.getElementById("rName").value,
      rCIN: document.getElementById("rCIN").value,
      rSec8: document.getElementById("rSec8").value,
      rAddress: document.getElementById("rAddress").value,
      rSign: document.getElementById("rSign").value,
      rSignDesig: document.getElementById("rSignDesig").value,
      rPAN: document.getElementById("rPAN").value,
      rAadhaar: document.getElementById("rAadhaar").value,

      // Section D - Legal
      lawLocation: document.getElementById("lawLocation").value,
      jurisdiction: document.getElementById("jurisdiction").value,
      arbitration: document.getElementById("arbitration").value,

      // Section E - Witness
      w1Name: document.getElementById("w1Name").value,
      w1Address: document.getElementById("w1Address").value,
      w2Name: document.getElementById("w2Name").value,
      w2Address: document.getElementById("w2Address").value,
    };

    // Use a template literal to construct the NDA HTML, using the gathered data
    const ndaTemplate = `
      <h2 class="text-2xl font-bold text-center mb-6">NON-DISCLOSURE AGREEMENT</h2>
      <p class="mb-4">This Non-Disclosure Agreement ("Agreement") is entered into on <strong>${formData.effectiveDate}</strong>, by and between:</p>
      <p class="mb-4"><strong>Disclosing Party:</strong> ${formData.dName}, a ${formData.dEntity}${formData.dCIN ? ` (CIN: ${formData.dCIN})` : ""}${formData.dSec8 ? `, Section 8: ${formData.dSec8}` : ""}, having its registered office at ${formData.dAddress}, represented by ${formData.dSign} (${formData.dSignDesig}), PAN: ${formData.dPAN}, Aadhaar: ${formData.dAadhaar}.</p>
      <p class="mb-4"><strong>Receiving Party:</strong> ${formData.rName}, a ${formData.rEntity}${formData.rCIN ? ` (CIN: ${formData.rCIN})` : ""}${formData.rSec8 ? `, Section 8: ${formData.rSec8}` : ""}, having its principal address at ${formData.rAddress}, represented by ${formData.rSign} (${formData.rSignDesig}), PAN: ${formData.rPAN}, Aadhaar: ${formData.rAadhaar}.</p>

      <p class="mb-4"><strong>WHEREAS</strong>, the parties wish to enter into a confidential relationship for the purpose of: <strong>${formData.purpose}</strong>.</p>
      <p class="mb-6"><strong>NOW, THEREFORE</strong>, the parties agree as follows:</p>

      <h3 class="text-xl font-bold mt-4 mb-2">1. Definition of Confidential Information</h3>
      <p class="mb-4">Confidential Information includes all technical, financial, legal, and business information disclosed by either party in any form, which is designated as confidential or should reasonably be understood to be confidential.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">2. Exclusions</h3>
      <p class="mb-4">Confidential Information does not include information that is publicly known, rightfully received from a third party, independently developed without access to the confidential information, or disclosed with prior written consent.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">3. Obligations</h3>
      <p class="mb-4">The Receiving Party shall keep all Confidential Information strictly confidential and shall not disclose, use, or exploit it for any purpose other than the Purpose. The Receiving Party shall return or destroy all materials upon request.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">4. Term & Survival</h3>
      <p class="mb-4">This Agreement shall remain in effect for <strong>${formData.term} years</strong> from the Effective Date. The obligations of confidentiality shall survive for <strong>${formData.survival} years</strong> beyond the termination.</p>

      <h3 class="text-xl font-bold mt-4 mb-2">5. Legal Jurisdiction</h3>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>This Agreement shall be governed by the laws of <strong>${formData.lawLocation}</strong>.</li>
        <li>All disputes shall be subject to the jurisdiction of courts at <strong>${formData.jurisdiction}</strong>.</li>
        <li>Any arbitration shall take place in <strong>${formData.arbitration}</strong>.</li>
      </ul>

      <h3 class="text-xl font-bold mt-8 mb-2">6. Signatures</h3>
      <div class="grid md:grid-cols-2 gap-8 text-sm">
        <div>
          <p class="font-bold">Disclosing Party:</p>
          <p>Name: ${formData.dSign}</p>
          <p>Designation: ${formData.dSignDesig}</p>
          <p>Signature: ____________________</p>
          <p>Date: ____________________</p>
        </div>
        <div>
          <p class="font-bold">Receiving Party:</p>
          <p>Name: ${formData.rSign}</p>
          <p>Designation: ${formData.rSignDesig}</p>
          <p>Signature: ____________________</p>
          <p>Date: ____________________</p>
        </div>
      </div>

      <h3 class="text-xl font-bold mt-8 mb-2">7. Witnesses</h3>
      <div class="grid md:grid-cols-2 gap-8 text-sm">
        <div>
          <p><strong>Witness 1:</strong> ${formData.w1Name}</p>
          <p>Address: ${formData.w1Address}</p>
        </div>
        <div>
          <p><strong>Witness 2:</strong> ${formData.w2Name}</p>
          <p>Address: ${formData.w2Address}</p>
        </div>
      </div>
    `;

    // Insert the generated NDA template into the output area
    ndaOutput.innerHTML = ndaTemplate;

    // Show the copy button and add its hover effect
    copyButton.style.display = 'block';
    // Add a class to transition the opacity from 0 to 1
    setTimeout(() => {
        copyButton.style.opacity = '1';
    }, 10);
  });

  // Add a click event listener to the copy button
  copyButton.addEventListener("click", () => {
    // Select the content of the NDA output element
    const textToCopy = ndaOutput.innerText;

    // Use the older `document.execCommand` method for broader support within iframes
    try {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Show the success message and hide it after a few seconds
      copyMessage.classList.remove('hidden');
      setTimeout(() => {
        copyMessage.classList.add('hidden');
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });

  // Hide copy button when the output is empty
  const observer = new MutationObserver(() => {
    if (ndaOutput.innerHTML.includes("Your generated NDA will appear here")) {
      copyButton.style.display = 'none';
      copyButton.style.opacity = '0';
    } else {
      copyButton.style.display = 'block';
      copyButton.style.opacity = '1';
    }
  });
  observer.observe(ndaOutput, { childList: true, subtree: true });
});

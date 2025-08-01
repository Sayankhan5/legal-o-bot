document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const disclosingName = document.getElementById("disclosingName").value;
  const disclosingAddress = document.getElementById("disclosingAddress").value;
  const receivingName = document.getElementById("receivingName").value;
  const receivingAddress = document.getElementById("receivingAddress").value;
  const effectiveDate = document.getElementById("effectiveDate").value;

  const ndaContent = `
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into on this ${effectiveDate} ("Effective Date"), by and between:

1. ${disclosingName}, a company incorporated under the laws of India, having its registered office at ${disclosingAddress} (hereinafter referred to as the “Disclosing Party”);
AND
2. ${receivingName}, having its principal place of business/residence at ${receivingAddress} (hereinafter referred to as the “Receiving Party”).

WHEREAS, the parties intend to engage in discussions regarding a potential business relationship and, in connection with this, certain confidential information may be disclosed;

NOW, THEREFORE, in consideration of the mutual covenants herein contained, the parties agree as follows:

1. **Definition of Confidential Information**: Confidential Information includes but is not limited to all technical and non-technical information disclosed in any form.

2. **Obligations of Receiving Party**:
   - Maintain confidentiality using reasonable care.
   - Do not disclose to any third party without written consent.
   - Use only for purposes of the business relationship.

3. **Exclusions**: Confidential Information does not include information that is public, disclosed with permission, or independently developed.

4. **Term**: This Agreement shall be valid for 2 years from the Effective Date.

5. **Third-Party Developers**: If the Receiving Party engages third-party developers, they shall be bound by similar confidentiality terms.

6. **Cloud Storage**: Any confidential data stored on cloud services (e.g., AWS, Azure, GCP) shall be encrypted and protected per industry standards.

7. **Cross-Border Transfer**: Any cross-border data transfer must comply with applicable data protection laws.

8. **Breach and Remedies**: In the event of breach, the Disclosing Party shall be entitled to seek legal remedy, including liquidated damages of INR 5,00,000 or actual damages, whichever is higher.

9. **Governing Law**: This Agreement shall be governed by the laws of India.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

Disclosing Party
Signature: _____________________
Name: ${disclosingName}
Designation:
Date: ${effectiveDate}

Receiving Party
Signature: _____________________
Name: ${receivingName}
Designation:
Date: ${effectiveDate}
`;

  document.getElementById("ndaOutput").textContent = ndaContent;
});

document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form values
  const disclosingParty = document.getElementById("disclosingParty").value;
  const receivingParty = document.getElementById("receivingParty").value;
  const agreementDate = document.getElementById("agreementDate").value;
  const duration = document.getElementById("duration").value;
  const governingLaw = document.getElementById("governingLaw").value;
  const developerInvolved = document.getElementById("thirdPartyDev").checked;
  const cloudStorage = document.getElementById("cloudStorage").value;
  const crossBorder = document.getElementById("crossBorder").checked;
  const penaltyAmount = document.getElementById("penalty").value;

  // Build NDA content
  let ndaText = `NON-DISCLOSURE AGREEMENT (NDA)\n\n`;

  ndaText += `This Agreement is made on ${agreementDate} between:\n`;
  ndaText += `1. ${disclosingParty} ("Disclosing Party")\n`;
  ndaText += `2. ${receivingParty} ("Receiving Party")\n\n`;

  ndaText += `WHEREAS, the Disclosing Party possesses certain confidential information and wishes to disclose such information to the Receiving Party for business purposes, subject to the terms and conditions herein.\n\n`;

  ndaText += `1. **Definition of Confidential Information**\nAll non-public, proprietary, or confidential information, in any form, disclosed by the Disclosing Party to the Receiving Party.\n\n`;

  ndaText += `2. **Obligations of Receiving Party**\nThe Receiving Party shall not disclose, publish, or disseminate Confidential Information to any third party and shall take all reasonable precautions to protect it.\n\n`;

  ndaText += `3. **Term**\nThis Agreement shall remain in effect for a period of ${duration} years from the date of signing.\n\n`;

  ndaText += `4. **Return or Destruction**\nUpon termination, all confidential materials shall be returned or destroyed immediately upon request.\n\n`;

  if (developerInvolved) {
    ndaText += `5. **Third-Party Developers**\nThe Receiving Party shall ensure any third-party developers involved are bound by written confidentiality obligations not less protective than those in this Agreement.\n\n`;
  }

  if (cloudStorage !== "none") {
    ndaText += `6. **Cloud Storage**\nThe Receiving Party may store confidential data only on secured and encrypted servers belonging to ${cloudStorage}, subject to compliance with their data protection terms.\n\n`;
  }

  if (crossBorder) {
    ndaText += `7. **Cross-border Data Transfer**\nThe Parties agree that if any data is transferred outside of the jurisdiction, it shall be in compliance with applicable data protection and cross-border transfer laws.\n\n`;
  }

  if (penaltyAmount) {
    ndaText += `8. **Liquidated Damages**\nAny breach of this NDA shall render the Receiving Party liable for liquidated damages of ₹${penaltyAmount} and other remedies available under law.\n\n`;
  }

  ndaText += `9. **Governing Law**\nThis Agreement shall be governed by and construed in accordance with the laws of ${governingLaw}.\n\n`;

  ndaText += `IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.\n\n`;
  ndaText += `_____________________________\n${disclosingParty}\n(Disclosing Party)\n\n`;
  ndaText += `_____________________________\n${receivingParty}\n(Receiving Party)\n`;

  // Display result
  document.getElementById("output").innerText = ndaText;
});

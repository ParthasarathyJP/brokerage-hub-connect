import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PestInsuranceClaimForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    claimNumber: "",
    claimDate: "",
    farmerName: "",
    farmerId: "",
    aadharNumber: "",
    contactNumber: "",
    email: "",
    address: "",
    village: "",
    district: "",
    state: "",
    policyNumber: "",
    policyProvider: "",
    policyType: "",
    sumInsured: "",
    premiumPaid: "",
    policyStartDate: "",
    policyEndDate: "",
    surveyNumber: "",
    cropType: "",
    cropVariety: "",
    sowingDate: "",
    expectedHarvestDate: "",
    cropArea: "",
    pestOutbreakDate: "",
    pestType: "",
    treatmentApplied: "",
    treatmentDate: "",
    vendorName: "",
    treatmentCost: "",
    damageExtent: "",
    estimatedLoss: "",
    actualYield: "",
    expectedYield: "",
    yieldLoss: "",
    claimAmount: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    witnessName: "",
    witnessContact: "",
    additionalInfo: ""
  });

  const [documents, setDocuments] = useState({
    policyDocument: false,
    landRecords: false,
    sowingCertificate: false,
    treatmentReceipts: false,
    damagePhotos: false,
    yieldStatement: false,
    bankDetails: false
  });

  const [declarations, setDeclarations] = useState({
    infoCorrect: false,
    noDuplicateClaim: false,
    cooperateInvestigation: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarations.infoCorrect || !declarations.cooperateInvestigation) {
      toast({
        title: "Declaration Required",
        description: "Please accept all required declarations before submitting.",
        variant: "destructive"
      });
      return;
    }
    console.log("Pest Insurance Claim:", { ...formData, documents, declarations });
    toast({
      title: "Claim Submitted",
      description: "Your insurance claim has been submitted. A surveyor will be assigned shortly."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Insurance Claim Form - Crop Loss Due to Pest Outbreak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Claim Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Claim Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="claimNumber">Claim Reference Number</Label>
                <Input
                  id="claimNumber"
                  placeholder="Auto-generated"
                  value={formData.claimNumber}
                  onChange={(e) => handleChange("claimNumber", e.target.value)}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="claimDate">Claim Date *</Label>
                <Input
                  id="claimDate"
                  type="date"
                  value={formData.claimDate}
                  onChange={(e) => handleChange("claimDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Farmer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farmer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer Name (as per policy) *</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => handleChange("farmerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerId">Farmer ID</Label>
                <Input
                  id="farmerId"
                  value={formData.farmerId}
                  onChange={(e) => handleChange("farmerId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                <Input
                  id="aadharNumber"
                  maxLength={12}
                  value={formData.aadharNumber}
                  onChange={(e) => handleChange("aadharNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => handleChange("contactNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleChange("village", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleChange("district", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Policy Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Insurance Policy Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="policyNumber">Policy Number *</Label>
                <Input
                  id="policyNumber"
                  value={formData.policyNumber}
                  onChange={(e) => handleChange("policyNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyProvider">Insurance Provider *</Label>
                <Input
                  id="policyProvider"
                  value={formData.policyProvider}
                  onChange={(e) => handleChange("policyProvider", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyType">Policy Type *</Label>
                <Select onValueChange={(value) => handleChange("policyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select policy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pmfby">PMFBY</SelectItem>
                    <SelectItem value="rwbcis">RWBCIS</SelectItem>
                    <SelectItem value="private">Private Crop Insurance</SelectItem>
                    <SelectItem value="state">State Insurance Scheme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sumInsured">Sum Insured (₹) *</Label>
                <Input
                  id="sumInsured"
                  type="number"
                  value={formData.sumInsured}
                  onChange={(e) => handleChange("sumInsured", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="premiumPaid">Premium Paid (₹)</Label>
                <Input
                  id="premiumPaid"
                  type="number"
                  value={formData.premiumPaid}
                  onChange={(e) => handleChange("premiumPaid", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyStartDate">Policy Start Date</Label>
                <Input
                  id="policyStartDate"
                  type="date"
                  value={formData.policyStartDate}
                  onChange={(e) => handleChange("policyStartDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyEndDate">Policy End Date</Label>
                <Input
                  id="policyEndDate"
                  type="date"
                  value={formData.policyEndDate}
                  onChange={(e) => handleChange("policyEndDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Crop & Land Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Crop & Land Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="surveyNumber">Survey/Khasra Number *</Label>
                <Input
                  id="surveyNumber"
                  value={formData.surveyNumber}
                  onChange={(e) => handleChange("surveyNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropVariety">Crop Variety</Label>
                <Input
                  id="cropVariety"
                  value={formData.cropVariety}
                  onChange={(e) => handleChange("cropVariety", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropArea">Crop Area (hectares) *</Label>
                <Input
                  id="cropArea"
                  type="number"
                  step="0.01"
                  value={formData.cropArea}
                  onChange={(e) => handleChange("cropArea", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sowingDate">Sowing Date *</Label>
                <Input
                  id="sowingDate"
                  type="date"
                  value={formData.sowingDate}
                  onChange={(e) => handleChange("sowingDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedHarvestDate">Expected Harvest Date</Label>
                <Input
                  id="expectedHarvestDate"
                  type="date"
                  value={formData.expectedHarvestDate}
                  onChange={(e) => handleChange("expectedHarvestDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Pest Outbreak & Treatment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pest Outbreak & Treatment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pestOutbreakDate">Pest Outbreak Date *</Label>
                <Input
                  id="pestOutbreakDate"
                  type="date"
                  value={formData.pestOutbreakDate}
                  onChange={(e) => handleChange("pestOutbreakDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestType">Pest Type *</Label>
                <Input
                  id="pestType"
                  placeholder="e.g., Bollworm, Aphids, Blast"
                  value={formData.pestType}
                  onChange={(e) => handleChange("pestType", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatmentApplied">Treatment Applied</Label>
                <Input
                  id="treatmentApplied"
                  placeholder="e.g., Chemical spray, Biological control"
                  value={formData.treatmentApplied}
                  onChange={(e) => handleChange("treatmentApplied", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatmentDate">Treatment Date</Label>
                <Input
                  id="treatmentDate"
                  type="date"
                  value={formData.treatmentDate}
                  onChange={(e) => handleChange("treatmentDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorName">Vendor/Service Provider</Label>
                <Input
                  id="vendorName"
                  value={formData.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatmentCost">Treatment Cost (₹)</Label>
                <Input
                  id="treatmentCost"
                  type="number"
                  value={formData.treatmentCost}
                  onChange={(e) => handleChange("treatmentCost", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Damage & Loss Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Damage & Loss Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="damageExtent">Damage Extent *</Label>
                <Select onValueChange={(value) => handleChange("damageExtent", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select extent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partial-minor">Partial - Minor (&lt;25%)</SelectItem>
                    <SelectItem value="partial-moderate">Partial - Moderate (25-50%)</SelectItem>
                    <SelectItem value="partial-severe">Partial - Severe (50-75%)</SelectItem>
                    <SelectItem value="total">Total Loss (&gt;75%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedLoss">Estimated Loss (₹) *</Label>
                <Input
                  id="estimatedLoss"
                  type="number"
                  value={formData.estimatedLoss}
                  onChange={(e) => handleChange("estimatedLoss", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedYield">Expected Yield (quintals)</Label>
                <Input
                  id="expectedYield"
                  type="number"
                  step="0.01"
                  value={formData.expectedYield}
                  onChange={(e) => handleChange("expectedYield", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="actualYield">Actual/Salvaged Yield (quintals)</Label>
                <Input
                  id="actualYield"
                  type="number"
                  step="0.01"
                  value={formData.actualYield}
                  onChange={(e) => handleChange("actualYield", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yieldLoss">Yield Loss (%)</Label>
                <Input
                  id="yieldLoss"
                  type="number"
                  value={formData.yieldLoss}
                  onChange={(e) => handleChange("yieldLoss", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="claimAmount">Claim Amount Requested (₹) *</Label>
                <Input
                  id="claimAmount"
                  type="number"
                  value={formData.claimAmount}
                  onChange={(e) => handleChange("claimAmount", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Bank Account for Claim Settlement</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name *</Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => handleChange("bankName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => handleChange("accountNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code *</Label>
                <Input
                  id="ifscCode"
                  value={formData.ifscCode}
                  onChange={(e) => handleChange("ifscCode", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Insurance Policy Document *</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="policyDocument"
                    checked={documents.policyDocument}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, policyDocument: !!checked }))}
                  />
                  <Label htmlFor="policyDocument" className="text-xs">Uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Land Records (7/12, Patta) *</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="landRecords"
                    checked={documents.landRecords}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, landRecords: !!checked }))}
                  />
                  <Label htmlFor="landRecords" className="text-xs">Uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Sowing Certificate</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="sowingCertificate"
                    checked={documents.sowingCertificate}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, sowingCertificate: !!checked }))}
                  />
                  <Label htmlFor="sowingCertificate" className="text-xs">Uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Treatment Receipts/Bills</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="treatmentReceipts"
                    checked={documents.treatmentReceipts}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, treatmentReceipts: !!checked }))}
                  />
                  <Label htmlFor="treatmentReceipts" className="text-xs">Uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Damage Photos *</Label>
                <Input type="file" accept=".jpg,.jpeg,.png" multiple />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="damagePhotos"
                    checked={documents.damagePhotos}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, damagePhotos: !!checked }))}
                  />
                  <Label htmlFor="damagePhotos" className="text-xs">Uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bank Passbook/Cancelled Cheque *</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="bankDetails"
                    checked={documents.bankDetails}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, bankDetails: !!checked }))}
                  />
                  <Label htmlFor="bankDetails" className="text-xs">Uploaded</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Witness */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Witness Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="witnessName">Witness Name</Label>
                <Input
                  id="witnessName"
                  value={formData.witnessName}
                  onChange={(e) => handleChange("witnessName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="witnessContact">Witness Contact</Label>
                <Input
                  id="witnessContact"
                  value={formData.witnessContact}
                  onChange={(e) => handleChange("witnessContact", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Declarations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Declarations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="infoCorrect"
                  checked={declarations.infoCorrect}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, infoCorrect: !!checked }))}
                />
                <Label htmlFor="infoCorrect" className="text-sm">
                  I declare that all information provided is true and correct to the best of my knowledge *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="noDuplicateClaim"
                  checked={declarations.noDuplicateClaim}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, noDuplicateClaim: !!checked }))}
                />
                <Label htmlFor="noDuplicateClaim" className="text-sm">
                  I have not filed any duplicate claim for the same loss under any other policy
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="cooperateInvestigation"
                  checked={declarations.cooperateInvestigation}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, cooperateInvestigation: !!checked }))}
                />
                <Label htmlFor="cooperateInvestigation" className="text-sm">
                  I agree to cooperate fully with the surveyor and insurance company during investigation *
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any additional information relevant to the claim..."
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              rows={2}
            />
          </div>

          <Button type="submit" className="w-full">Submit Insurance Claim</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestInsuranceClaimForm;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const IrrigationInsuranceClaimForm = () => {
  const [formData, setFormData] = useState({
    claimNumber: "",
    policyNumber: "",
    insurerName: "",
    claimantName: "",
    aadharNumber: "",
    phone: "",
    email: "",
    address: "",
    landSurveyNumber: "",
    landSize: "",
    landUnit: "acres",
    cropType: "",
    cropSeason: "",
    sowingDate: "",
    expectedHarvest: "",
    incidentDate: "",
    incidentType: "",
    failureType: "",
    equipmentAffected: "",
    damageDescription: "",
    areaAffected: "",
    estimatedLoss: "",
    claimAmount: "",
    weatherConditions: "",
    witnessName: "",
    witnessPhone: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    previousClaims: "",
    additionalInfo: "",
  });

  const [documents, setDocuments] = useState({
    policyDocument: false,
    landRecords: false,
    aadharCard: false,
    sowingCertificate: false,
    damagePhotos: false,
    weatherReport: false,
    bankDetails: false,
    farmInspectionReport: false,
  });

  const [declarations, setDeclarations] = useState({
    infoCorrect: false,
    notClaimed: false,
    cooperateInvestigation: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarations.infoCorrect || !declarations.cooperateInvestigation) {
      toast.error("Please accept all required declarations");
      return;
    }
    console.log("Insurance Claim:", { ...formData, documents, declarations });
    toast.success("Insurance claim submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Insurance Claim Form</CardTitle>
        <CardDescription>
          File a claim for crop loss due to irrigation failure or equipment malfunction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Policy Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Policy Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="claimNumber">Claim Reference Number</Label>
                <Input
                  id="claimNumber"
                  value={formData.claimNumber}
                  onChange={(e) => handleChange("claimNumber", e.target.value)}
                  placeholder="Auto-generated"
                />
              </div>
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
                <Label htmlFor="insurerName">Insurance Company *</Label>
                <Input
                  id="insurerName"
                  value={formData.insurerName}
                  onChange={(e) => handleChange("insurerName", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Claimant Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Claimant Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="claimantName">Full Name (as per policy) *</Label>
                <Input
                  id="claimantName"
                  value={formData.claimantName}
                  onChange={(e) => handleChange("claimantName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                <Input
                  id="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={(e) => handleChange("aadharNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Full Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Land & Crop Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Land & Crop Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="landSurveyNumber">Survey / Khasra Number *</Label>
                <Input
                  id="landSurveyNumber"
                  value={formData.landSurveyNumber}
                  onChange={(e) => handleChange("landSurveyNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landSize">Total Land Area *</Label>
                <div className="flex gap-2">
                  <Input
                    id="landSize"
                    type="number"
                    value={formData.landSize}
                    onChange={(e) => handleChange("landSize", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.landUnit} onValueChange={(value) => handleChange("landUnit", value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acres">Acres</SelectItem>
                      <SelectItem value="hectares">Hectares</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paddy">Paddy/Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropSeason">Crop Season *</Label>
                <Select value={formData.cropSeason} onValueChange={(value) => handleChange("cropSeason", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                    <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                    <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="expectedHarvest">Expected Harvest Date</Label>
                <Input
                  id="expectedHarvest"
                  type="date"
                  value={formData.expectedHarvest}
                  onChange={(e) => handleChange("expectedHarvest", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Incident Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Incident Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="incidentDate">Date of Incident *</Label>
                <Input
                  id="incidentDate"
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => handleChange("incidentDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="incidentType">Incident Type *</Label>
                <Select value={formData.incidentType} onValueChange={(value) => handleChange("incidentType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="irrigation_failure">Irrigation System Failure</SelectItem>
                    <SelectItem value="pump_breakdown">Pump Breakdown</SelectItem>
                    <SelectItem value="water_shortage">Water Shortage</SelectItem>
                    <SelectItem value="pipe_burst">Pipe Burst/Leakage</SelectItem>
                    <SelectItem value="power_failure">Extended Power Failure</SelectItem>
                    <SelectItem value="canal_closure">Canal Closure</SelectItem>
                    <SelectItem value="borewell_failure">Borewell Failure</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="failureType">Failure Cause *</Label>
                <Select value={formData.failureType} onValueChange={(value) => handleChange("failureType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cause" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mechanical">Mechanical Failure</SelectItem>
                    <SelectItem value="electrical">Electrical Failure</SelectItem>
                    <SelectItem value="natural">Natural Causes</SelectItem>
                    <SelectItem value="supply_issue">Water Supply Issue</SelectItem>
                    <SelectItem value="vandalism">Vandalism/Theft</SelectItem>
                    <SelectItem value="wear_tear">Normal Wear & Tear</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentAffected">Equipment Affected</Label>
                <Input
                  id="equipmentAffected"
                  value={formData.equipmentAffected}
                  onChange={(e) => handleChange("equipmentAffected", e.target.value)}
                  placeholder="Pump, pipes, drip system, etc."
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="damageDescription">Detailed Description of Damage *</Label>
              <Textarea
                id="damageDescription"
                placeholder="Describe what happened, when it was discovered, and immediate actions taken..."
                value={formData.damageDescription}
                onChange={(e) => handleChange("damageDescription", e.target.value)}
                required
                className="min-h-32"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="areaAffected">Area Affected (acres/hectares)</Label>
                <Input
                  id="areaAffected"
                  value={formData.areaAffected}
                  onChange={(e) => handleChange("areaAffected", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weatherConditions">Weather Conditions at Time</Label>
                <Input
                  id="weatherConditions"
                  value={formData.weatherConditions}
                  onChange={(e) => handleChange("weatherConditions", e.target.value)}
                  placeholder="Sunny, rainy, drought, etc."
                />
              </div>
            </div>
          </div>

          {/* Loss & Claim */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Loss & Claim Amount</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="claimAmount">Claim Amount (₹) *</Label>
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

          {/* Witness */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Witness Details</h3>
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
                <Label htmlFor="witnessPhone">Witness Phone</Label>
                <Input
                  id="witnessPhone"
                  type="tel"
                  value={formData.witnessPhone}
                  onChange={(e) => handleChange("witnessPhone", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Bank Details (for claim settlement)</h3>
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

          {/* Document Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Documents Attached</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries({
                policyDocument: "Policy Document",
                landRecords: "Land Records",
                aadharCard: "Aadhar Card",
                sowingCertificate: "Sowing Certificate",
                damagePhotos: "Damage Photos",
                weatherReport: "Weather Report",
                bankDetails: "Bank Details",
                farmInspectionReport: "Inspection Report",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={documents[key as keyof typeof documents]}
                    onCheckedChange={(checked) =>
                      setDocuments((prev) => ({ ...prev, [key]: checked as boolean }))
                    }
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Claims */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="previousClaims">Previous Claims (if any)</Label>
              <Textarea
                id="previousClaims"
                placeholder="Details of any previous insurance claims..."
                value={formData.previousClaims}
                onChange={(e) => handleChange("previousClaims", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
              />
            </div>
          </div>

          {/* Declarations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Declarations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="infoCorrect"
                  checked={declarations.infoCorrect}
                  onCheckedChange={(checked) =>
                    setDeclarations((prev) => ({ ...prev, infoCorrect: checked as boolean }))
                  }
                />
                <Label htmlFor="infoCorrect" className="text-sm leading-relaxed">
                  I declare that all information provided is true and correct. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="notClaimed"
                  checked={declarations.notClaimed}
                  onCheckedChange={(checked) =>
                    setDeclarations((prev) => ({ ...prev, notClaimed: checked as boolean }))
                  }
                />
                <Label htmlFor="notClaimed" className="text-sm leading-relaxed">
                  I have not claimed for the same loss under any other policy.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="cooperateInvestigation"
                  checked={declarations.cooperateInvestigation}
                  onCheckedChange={(checked) =>
                    setDeclarations((prev) => ({ ...prev, cooperateInvestigation: checked as boolean }))
                  }
                />
                <Label htmlFor="cooperateInvestigation" className="text-sm leading-relaxed">
                  I agree to cooperate with any investigation conducted by the insurance company. *
                </Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Insurance Claim</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IrrigationInsuranceClaimForm;

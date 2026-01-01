import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const IrrigationSubsidyForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    aadharNumber: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    district: "",
    block: "",
    village: "",
    pincode: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    landSurveyNumber: "",
    landSize: "",
    landUnit: "acres",
    landOwnership: "",
    schemeType: "",
    irrigationType: "",
    estimatedCost: "",
    subsidyRequested: "",
    previousSubsidy: "",
    additionalInfo: "",
  });

  const [documents, setDocuments] = useState({
    aadharCard: false,
    landRecords: false,
    bankPassbook: false,
    photograph: false,
    casteProof: false,
    incomeProof: false,
    quotation: false,
  });

  const [declarations, setDeclarations] = useState({
    infoCorrect: false,
    notAvailed: false,
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarations.infoCorrect || !declarations.termsAccepted) {
      toast.error("Please accept all required declarations");
      return;
    }
    console.log("Subsidy Application:", { ...formData, documents, declarations });
    toast.success("Subsidy application submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Subsidy / Government Scheme Application</CardTitle>
        <CardDescription>
          Apply for PMKSY, state irrigation subsidies, and other government schemes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Applicant Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Applicant Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">Full Name (as per Aadhar) *</Label>
                <Input
                  id="applicantName"
                  value={formData.applicantName}
                  onChange={(e) => handleChange("applicantName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father's / Spouse Name *</Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => handleChange("fatherName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                <Input
                  id="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={(e) => handleChange("aadharNumber", e.target.value)}
                  placeholder="XXXX XXXX XXXX"
                  maxLength={14}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
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
          </div>

          {/* Address Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Address Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  required
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
                <Label htmlFor="block">Block / Taluk *</Label>
                <Input
                  id="block"
                  value={formData.block}
                  onChange={(e) => handleChange("block", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village *</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleChange("village", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  required
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

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Bank Account Details (for subsidy transfer)</h3>
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

          {/* Land Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Land Details</h3>
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
                      <SelectItem value="bigha">Bigha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="landOwnership">Land Ownership Type *</Label>
                <Select value={formData.landOwnership} onValueChange={(value) => handleChange("landOwnership", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ownership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owned">Self Owned</SelectItem>
                    <SelectItem value="leased">Leased</SelectItem>
                    <SelectItem value="joint">Joint Ownership</SelectItem>
                    <SelectItem value="inherited">Inherited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Scheme Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Scheme & Irrigation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="schemeType">Scheme Type *</Label>
                <Select value={formData.schemeType} onValueChange={(value) => handleChange("schemeType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pmksy">PMKSY - Per Drop More Crop</SelectItem>
                    <SelectItem value="state_mi">State Micro Irrigation Scheme</SelectItem>
                    <SelectItem value="rkvy">RKVY - Rashtriya Krishi Vikas Yojana</SelectItem>
                    <SelectItem value="nabard">NABARD Irrigation Support</SelectItem>
                    <SelectItem value="other">Other State Scheme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="irrigationType">Irrigation System Type *</Label>
                <Select value={formData.irrigationType} onValueChange={(value) => handleChange("irrigationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select irrigation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip Irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler Irrigation</SelectItem>
                    <SelectItem value="micro_sprinkler">Micro Sprinkler</SelectItem>
                    <SelectItem value="rain_gun">Rain Gun</SelectItem>
                    <SelectItem value="solar_pump">Solar Pump Set</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedCost">Estimated Project Cost (₹) *</Label>
                <Input
                  id="estimatedCost"
                  type="number"
                  value={formData.estimatedCost}
                  onChange={(e) => handleChange("estimatedCost", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subsidyRequested">Subsidy Amount Requested (₹) *</Label>
                <Input
                  id="subsidyRequested"
                  type="number"
                  value={formData.subsidyRequested}
                  onChange={(e) => handleChange("subsidyRequested", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="previousSubsidy">Previous Subsidy Availed (if any)</Label>
              <Textarea
                id="previousSubsidy"
                placeholder="Details of any previous irrigation subsidy received..."
                value={formData.previousSubsidy}
                onChange={(e) => handleChange("previousSubsidy", e.target.value)}
              />
            </div>
          </div>

          {/* Document Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Required Documents (Upload Checklist)</h3>
            <p className="text-sm text-muted-foreground">Mark the documents you are uploading with this application:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries({
                aadharCard: "Aadhar Card",
                landRecords: "Land Records (7/12, Khata)",
                bankPassbook: "Bank Passbook / Cheque",
                photograph: "Passport Photograph",
                casteProof: "Caste Certificate (if applicable)",
                incomeProof: "Income Certificate",
                quotation: "Vendor Quotation",
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
                  I declare that all information provided is true and correct to the best of my knowledge. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="notAvailed"
                  checked={declarations.notAvailed}
                  onCheckedChange={(checked) =>
                    setDeclarations((prev) => ({ ...prev, notAvailed: checked as boolean }))
                  }
                />
                <Label htmlFor="notAvailed" className="text-sm leading-relaxed">
                  I have not availed subsidy for the same component/land under any other scheme.
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={declarations.termsAccepted}
                  onCheckedChange={(checked) =>
                    setDeclarations((prev) => ({ ...prev, termsAccepted: checked as boolean }))
                  }
                />
                <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                  I agree to the terms and conditions of the scheme and understand that false information may lead to rejection or recovery of subsidy. *
                </Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IrrigationSubsidyForm;

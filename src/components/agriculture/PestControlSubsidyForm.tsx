import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PestControlSubsidyForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    farmerName: "",
    fatherName: "",
    aadharNumber: "",
    mobileNumber: "",
    email: "",
    address: "",
    village: "",
    block: "",
    district: "",
    state: "",
    pincode: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    landHolding: "",
    surveyNumber: "",
    cropType: "",
    cropArea: "",
    schemeType: "",
    schemeName: "",
    subsidyAmount: "",
    previousSubsidy: "",
    previousSubsidyYear: "",
    pestControlMethod: "",
    estimatedCost: "",
    additionalInfo: ""
  });

  const [documents, setDocuments] = useState({
    aadharUploaded: false,
    landRecordsUploaded: false,
    bankPassbookUploaded: false,
    cropInsuranceUploaded: false,
    photographUploaded: false
  });

  const [declarations, setDeclarations] = useState({
    infoCorrect: false,
    notAvailedBefore: false,
    termsAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarations.infoCorrect || !declarations.termsAccepted) {
      toast({
        title: "Declaration Required",
        description: "Please accept all required declarations before submitting.",
        variant: "destructive"
      });
      return;
    }
    console.log("Pest Control Subsidy Application:", { ...formData, documents, declarations });
    toast({
      title: "Application Submitted",
      description: "Your subsidy application has been submitted for review."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Government Scheme / Subsidy Application Form - Pest Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farmer Eligibility Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer Name (as per Aadhar) *</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => handleChange("farmerName", e.target.value)}
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
                  maxLength={12}
                  value={formData.aadharNumber}
                  onChange={(e) => handleChange("aadharNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <Input
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
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
                <Label htmlFor="landHolding">Category</Label>
                <Select onValueChange={(value) => handleChange("landHolding", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marginal">Marginal Farmer (&lt;1 ha)</SelectItem>
                    <SelectItem value="small">Small Farmer (1-2 ha)</SelectItem>
                    <SelectItem value="medium">Medium Farmer (2-4 ha)</SelectItem>
                    <SelectItem value="large">Large Farmer (&gt;4 ha)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
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
                <Label htmlFor="block">Block/Taluk *</Label>
                <Input
                  id="block"
                  value={formData.block}
                  onChange={(e) => handleChange("block", e.target.value)}
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

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Bank Account Details</h3>
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

          {/* Land & Crop Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Land & Crop Details</h3>
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
                <Label htmlFor="cropArea">Crop Area (in hectares) *</Label>
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
                <Label htmlFor="pestControlMethod">Pest Control Method Applied For</Label>
                <Select onValueChange={(value) => handleChange("pestControlMethod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organic">Organic Pest Control</SelectItem>
                    <SelectItem value="bio-pesticides">Bio-Pesticides</SelectItem>
                    <SelectItem value="ipm">Integrated Pest Management</SelectItem>
                    <SelectItem value="equipment">Pest Control Equipment</SelectItem>
                    <SelectItem value="drone">Drone Spraying</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Scheme Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Scheme Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="schemeType">Scheme Type *</Label>
                <Select onValueChange={(value) => handleChange("schemeType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scheme type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">Central Government Scheme</SelectItem>
                    <SelectItem value="state">State Government Scheme</SelectItem>
                    <SelectItem value="joint">Joint Scheme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="schemeName">Scheme Name *</Label>
                <Select onValueChange={(value) => handleChange("schemeName", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organic-subsidy">Organic Pest Control Subsidy</SelectItem>
                    <SelectItem value="crop-protection">Crop Protection Program</SelectItem>
                    <SelectItem value="ipm-subsidy">IPM Equipment Subsidy</SelectItem>
                    <SelectItem value="bio-agent">Bio-Agent Distribution</SelectItem>
                    <SelectItem value="drone-subsidy">Drone Spraying Subsidy</SelectItem>
                    <SelectItem value="state-scheme">State Pest Control Scheme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedCost">Estimated Cost (₹) *</Label>
                <Input
                  id="estimatedCost"
                  type="number"
                  value={formData.estimatedCost}
                  onChange={(e) => handleChange("estimatedCost", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subsidyAmount">Subsidy Amount Requested (₹)</Label>
                <Input
                  id="subsidyAmount"
                  type="number"
                  value={formData.subsidyAmount}
                  onChange={(e) => handleChange("subsidyAmount", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousSubsidy">Previous Subsidy Availed (₹)</Label>
                <Input
                  id="previousSubsidy"
                  type="number"
                  value={formData.previousSubsidy}
                  onChange={(e) => handleChange("previousSubsidy", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousSubsidyYear">Year of Previous Subsidy</Label>
                <Input
                  id="previousSubsidyYear"
                  type="number"
                  min="2000"
                  max="2026"
                  value={formData.previousSubsidyYear}
                  onChange={(e) => handleChange("previousSubsidyYear", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Required Documents Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Aadhar Card *</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="aadharUploaded"
                    checked={documents.aadharUploaded}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, aadharUploaded: !!checked }))}
                  />
                  <Label htmlFor="aadharUploaded" className="text-xs">Mark as uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Land Records (7/12, Patta) *</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="landRecordsUploaded"
                    checked={documents.landRecordsUploaded}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, landRecordsUploaded: !!checked }))}
                  />
                  <Label htmlFor="landRecordsUploaded" className="text-xs">Mark as uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bank Passbook / Cancelled Cheque *</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="bankPassbookUploaded"
                    checked={documents.bankPassbookUploaded}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, bankPassbookUploaded: !!checked }))}
                  />
                  <Label htmlFor="bankPassbookUploaded" className="text-xs">Mark as uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Crop Insurance Papers (if any)</Label>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="cropInsuranceUploaded"
                    checked={documents.cropInsuranceUploaded}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, cropInsuranceUploaded: !!checked }))}
                  />
                  <Label htmlFor="cropInsuranceUploaded" className="text-xs">Mark as uploaded</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Passport Size Photograph *</Label>
                <Input type="file" accept=".jpg,.jpeg,.png" />
                <div className="flex items-center space-x-2 mt-1">
                  <Checkbox
                    id="photographUploaded"
                    checked={documents.photographUploaded}
                    onCheckedChange={(checked) => setDocuments(prev => ({ ...prev, photographUploaded: !!checked }))}
                  />
                  <Label htmlFor="photographUploaded" className="text-xs">Mark as uploaded</Label>
                </div>
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
                  I hereby declare that all the information provided above is true and correct to the best of my knowledge *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="notAvailedBefore"
                  checked={declarations.notAvailedBefore}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, notAvailedBefore: !!checked }))}
                />
                <Label htmlFor="notAvailedBefore" className="text-sm">
                  I have not availed similar subsidy for the same purpose in the current financial year
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={declarations.termsAccepted}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, termsAccepted: !!checked }))}
                />
                <Label htmlFor="termsAccepted" className="text-sm">
                  I agree to the terms and conditions of the scheme and authorize verification of my details *
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any additional information you want to provide..."
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              rows={2}
            />
          </div>

          <Button type="submit" className="w-full">Submit Subsidy Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestControlSubsidyForm;

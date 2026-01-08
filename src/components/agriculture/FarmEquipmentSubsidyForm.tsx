import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentSubsidyForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    gender: "",
    dateOfBirth: "",
    category: "",
    aadhaarNumber: "",
    panNumber: "",
    mobileNumber: "",
    email: "",
    address: "",
    village: "",
    tehsil: "",
    district: "",
    state: "",
    pincode: "",
    landHolding: "",
    farmingType: "",
    annualIncome: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    subsidyScheme: "",
    equipmentType: "",
    equipmentBrand: "",
    equipmentCost: "",
    subsidyPercentage: "",
    expectedSubsidy: "",
    dealerName: "",
    dealerAddress: "",
  });
  
  const [documents, setDocuments] = useState({
    aadhaarCard: false,
    panCard: false,
    landRecords: false,
    bankPassbook: false,
    photograph: false,
    casteCertificate: false,
    quotation: false,
  });
  
  const [declarations, setDeclarations] = useState({
    infoCorrect: false,
    notAvailedBefore: false,
    agreeTnC: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDocumentChange = (key: string, checked: boolean) => {
    setDocuments({ ...documents, [key]: checked });
  };

  const handleDeclarationChange = (key: string, checked: boolean) => {
    setDeclarations({ ...declarations, [key]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarations.infoCorrect || !declarations.notAvailedBefore || !declarations.agreeTnC) {
      toast({
        title: "Declaration Required",
        description: "Please accept all declarations to submit the application.",
        variant: "destructive",
      });
      return;
    }
    console.log("Farm Equipment Subsidy Application:", formData, documents, declarations);
    toast({
      title: "Application Submitted",
      description: "Your subsidy application has been submitted for processing.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🏛️</span> Government Subsidy/Grant Application
        </CardTitle>
        <CardDescription>
          Apply for farm equipment subsidies under PM-KUSUM, SMAM, and other Agri Mechanization schemes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Applicant Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Applicant Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">Applicant Name *</Label>
                <Input
                  id="applicantName"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  placeholder="As per Aadhaar"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father's/Husband's Name *</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father's/Husband's name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                    <SelectItem value="minority">Minority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaarNumber">Aadhaar Number *</Label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  placeholder="12-digit Aadhaar"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number</Label>
                <Input
                  id="panNumber"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  placeholder="ABCDE1234F"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="applicant@email.com"
                />
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Address Details</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Full Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House No., Street, Locality..."
                  rows={2}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="village">Village *</Label>
                <Input
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder="Village name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tehsil">Tehsil/Block *</Label>
                <Input
                  id="tehsil"
                  name="tehsil"
                  value={formData.tehsil}
                  onChange={handleChange}
                  placeholder="Tehsil/Block"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="District"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="bihar">Bihar</SelectItem>
                    <SelectItem value="west-bengal">West Bengal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  required
                />
              </div>
            </div>
          </div>

          {/* Land & Farming Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Land & Farming Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="landHolding">Total Land Holding (Acres) *</Label>
                <Input
                  id="landHolding"
                  name="landHolding"
                  type="number"
                  step="0.01"
                  value={formData.landHolding}
                  onChange={handleChange}
                  placeholder="e.g., 5.5"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmingType">Farming Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, farmingType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marginal">Marginal Farmer (&lt;1 Ha)</SelectItem>
                    <SelectItem value="small">Small Farmer (1-2 Ha)</SelectItem>
                    <SelectItem value="semi-medium">Semi-Medium (2-4 Ha)</SelectItem>
                    <SelectItem value="medium">Medium (4-10 Ha)</SelectItem>
                    <SelectItem value="large">Large Farmer (&gt;10 Ha)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="annualIncome">Annual Income (₹)</Label>
                <Input
                  id="annualIncome"
                  name="annualIncome"
                  type="number"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  placeholder="Annual farming income"
                />
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Bank Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name *</Label>
                <Input
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="e.g., State Bank of India"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branchName">Branch Name *</Label>
                <Input
                  id="branchName"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                  placeholder="Branch name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Bank account number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code *</Label>
                <Input
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  placeholder="e.g., SBIN0001234"
                  required
                />
              </div>
            </div>
          </div>

          {/* Subsidy Scheme Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Subsidy Scheme & Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="subsidyScheme">Subsidy Scheme *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, subsidyScheme: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smam">SMAM (Sub-Mission on Agricultural Mechanization)</SelectItem>
                    <SelectItem value="pm-kusum">PM-KUSUM (Solar Pump)</SelectItem>
                    <SelectItem value="rkvy">RKVY (Rashtriya Krishi Vikas Yojana)</SelectItem>
                    <SelectItem value="state-subsidy">State Agricultural Mechanization Scheme</SelectItem>
                    <SelectItem value="nabard">NABARD Farm Mechanization</SelectItem>
                    <SelectItem value="chc">Custom Hiring Centre (CHC)</SelectItem>
                    <SelectItem value="pmfby">PM Fasal Bima Yojana (Equipment)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tractor">Tractor</SelectItem>
                    <SelectItem value="power-tiller">Power Tiller</SelectItem>
                    <SelectItem value="harvester">Harvester/Combine</SelectItem>
                    <SelectItem value="rotavator">Rotavator</SelectItem>
                    <SelectItem value="sprayer">Power Sprayer</SelectItem>
                    <SelectItem value="thresher">Thresher</SelectItem>
                    <SelectItem value="pump">Solar/Electric Pump</SelectItem>
                    <SelectItem value="seeder">Seed Drill/Planter</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentBrand">Equipment Brand/Model</Label>
                <Input
                  id="equipmentBrand"
                  name="equipmentBrand"
                  value={formData.equipmentBrand}
                  onChange={handleChange}
                  placeholder="e.g., Mahindra 575 DI"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentCost">Equipment Cost (₹) *</Label>
                <Input
                  id="equipmentCost"
                  name="equipmentCost"
                  type="number"
                  value={formData.equipmentCost}
                  onChange={handleChange}
                  placeholder="Total cost of equipment"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subsidyPercentage">Subsidy Percentage (%)</Label>
                <Input
                  id="subsidyPercentage"
                  name="subsidyPercentage"
                  type="number"
                  value={formData.subsidyPercentage}
                  onChange={handleChange}
                  placeholder="e.g., 50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedSubsidy">Expected Subsidy Amount (₹)</Label>
                <Input
                  id="expectedSubsidy"
                  name="expectedSubsidy"
                  type="number"
                  value={formData.expectedSubsidy}
                  onChange={handleChange}
                  placeholder="Calculated subsidy amount"
                />
              </div>
            </div>
          </div>

          {/* Dealer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Dealer Details (Optional)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dealerName">Dealer/Supplier Name</Label>
                <Input
                  id="dealerName"
                  name="dealerName"
                  value={formData.dealerName}
                  onChange={handleChange}
                  placeholder="Authorized dealer name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dealerAddress">Dealer Address</Label>
                <Input
                  id="dealerAddress"
                  name="dealerAddress"
                  value={formData.dealerAddress}
                  onChange={handleChange}
                  placeholder="Dealer location"
                />
              </div>
            </div>
          </div>

          {/* Document Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Document Checklist</h3>
            <p className="text-sm text-muted-foreground">Please ensure you have the following documents ready for upload:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(documents).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={value}
                    onCheckedChange={(checked) => handleDocumentChange(key, checked as boolean)}
                  />
                  <Label htmlFor={key} className="capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Declarations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Declarations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="infoCorrect"
                  checked={declarations.infoCorrect}
                  onCheckedChange={(checked) => handleDeclarationChange("infoCorrect", checked as boolean)}
                />
                <Label htmlFor="infoCorrect" className="text-sm">
                  I hereby declare that all the information provided above is true and correct to the best of my knowledge. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="notAvailedBefore"
                  checked={declarations.notAvailedBefore}
                  onCheckedChange={(checked) => handleDeclarationChange("notAvailedBefore", checked as boolean)}
                />
                <Label htmlFor="notAvailedBefore" className="text-sm">
                  I have not availed subsidy for the same equipment from any other scheme. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTnC"
                  checked={declarations.agreeTnC}
                  onCheckedChange={(checked) => handleDeclarationChange("agreeTnC", checked as boolean)}
                />
                <Label htmlFor="agreeTnC" className="text-sm">
                  I agree to the terms and conditions of the subsidy scheme and authorize verification of my details. *
                </Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Subsidy Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentSubsidyForm;

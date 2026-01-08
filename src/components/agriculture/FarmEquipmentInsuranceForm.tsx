import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentInsuranceForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    address: "",
    village: "",
    district: "",
    state: "",
    pincode: "",
    insuranceType: "",
    equipmentType: "",
    equipmentBrand: "",
    equipmentModel: "",
    yearOfManufacture: "",
    registrationNumber: "",
    chassisNumber: "",
    engineNumber: "",
    purchasePrice: "",
    currentValue: "",
    sumInsured: "",
    coverageType: "",
    policyPeriod: "",
    cropInsuranceBundle: false,
    cropType: "",
    cropArea: "",
    seasonType: "",
    previousClaims: "",
    nomineeNam: "",
    nomineeRelation: "",
  });
  
  const [bundleCropInsurance, setBundleCropInsurance] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }
    console.log("Farm Equipment Insurance Quote:", formData, { bundleCropInsurance });
    toast({
      title: "Quote Request Submitted",
      description: "Your insurance quote request has been submitted. We will contact you shortly.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🛡️</span> Insurance Quote Form
        </CardTitle>
        <CardDescription>
          Get insurance quotes for your farm equipment with optional crop insurance bundling
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
                  placeholder="Full name as per ID"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father's name"
                />
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
                  placeholder="your@email.com"
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
                  placeholder="Complete address..."
                  rows={2}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="village">Village/Town *</Label>
                <Input
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder="Village/Town"
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
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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

          {/* Insurance Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Insurance Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="insuranceType">Insurance Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comprehensive">Comprehensive (All Risks)</SelectItem>
                    <SelectItem value="third-party">Third Party Only</SelectItem>
                    <SelectItem value="fire-theft">Fire & Theft</SelectItem>
                    <SelectItem value="accidental">Accidental Damage</SelectItem>
                    <SelectItem value="breakdown">Mechanical Breakdown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="coverageType">Coverage Level *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, coverageType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Coverage</SelectItem>
                    <SelectItem value="standard">Standard Coverage</SelectItem>
                    <SelectItem value="premium">Premium Coverage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tractor">Tractor</SelectItem>
                    <SelectItem value="harvester">Harvester/Combine</SelectItem>
                    <SelectItem value="power-tiller">Power Tiller</SelectItem>
                    <SelectItem value="rotavator">Rotavator</SelectItem>
                    <SelectItem value="thresher">Thresher</SelectItem>
                    <SelectItem value="pump">Pump Set</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentBrand">Brand *</Label>
                <Input
                  id="equipmentBrand"
                  name="equipmentBrand"
                  value={formData.equipmentBrand}
                  onChange={handleChange}
                  placeholder="e.g., Mahindra, John Deere"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentModel">Model *</Label>
                <Input
                  id="equipmentModel"
                  name="equipmentModel"
                  value={formData.equipmentModel}
                  onChange={handleChange}
                  placeholder="Model name/number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearOfManufacture">Year of Manufacture *</Label>
                <Input
                  id="yearOfManufacture"
                  name="yearOfManufacture"
                  type="number"
                  value={formData.yearOfManufacture}
                  onChange={handleChange}
                  placeholder="e.g., 2022"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration Number</Label>
                <Input
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="If registered"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chassisNumber">Chassis Number *</Label>
                <Input
                  id="chassisNumber"
                  name="chassisNumber"
                  value={formData.chassisNumber}
                  onChange={handleChange}
                  placeholder="Chassis/Frame number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="engineNumber">Engine Number</Label>
                <Input
                  id="engineNumber"
                  name="engineNumber"
                  value={formData.engineNumber}
                  onChange={handleChange}
                  placeholder="Engine number"
                />
              </div>
            </div>
          </div>

          {/* Valuation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Valuation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="purchasePrice">Purchase Price (₹) *</Label>
                <Input
                  id="purchasePrice"
                  name="purchasePrice"
                  type="number"
                  value={formData.purchasePrice}
                  onChange={handleChange}
                  placeholder="Original purchase price"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentValue">Current Market Value (₹)</Label>
                <Input
                  id="currentValue"
                  name="currentValue"
                  type="number"
                  value={formData.currentValue}
                  onChange={handleChange}
                  placeholder="Estimated current value"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sumInsured">Sum Insured (₹) *</Label>
                <Input
                  id="sumInsured"
                  name="sumInsured"
                  type="number"
                  value={formData.sumInsured}
                  onChange={handleChange}
                  placeholder="Amount to insure"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="policyPeriod">Policy Period *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, policyPeriod: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-year">1 Year</SelectItem>
                    <SelectItem value="2-year">2 Years</SelectItem>
                    <SelectItem value="3-year">3 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousClaims">Previous Insurance Claims</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, previousClaims: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any previous claims?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Previous Claims</SelectItem>
                    <SelectItem value="1">1 Claim</SelectItem>
                    <SelectItem value="2">2 Claims</SelectItem>
                    <SelectItem value="3+">3 or More Claims</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Crop Insurance Bundle */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Crop Insurance Bundle (Optional)</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="bundleCropInsurance"
                checked={bundleCropInsurance}
                onCheckedChange={(checked) => setBundleCropInsurance(checked as boolean)}
              />
              <Label htmlFor="bundleCropInsurance">
                Bundle with Crop Insurance (Get discounted premium)
              </Label>
            </div>
            {bundleCropInsurance && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg bg-muted/50">
                <div className="space-y-2">
                  <Label htmlFor="cropType">Crop Type</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice/Paddy</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="maize">Maize</SelectItem>
                      <SelectItem value="soybean">Soybean</SelectItem>
                      <SelectItem value="pulses">Pulses</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cropArea">Crop Area (Acres)</Label>
                  <Input
                    id="cropArea"
                    name="cropArea"
                    type="number"
                    step="0.01"
                    value={formData.cropArea}
                    onChange={handleChange}
                    placeholder="Total crop area"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seasonType">Season</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, seasonType: value })}>
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
              </div>
            )}
          </div>

          {/* Nominee Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Nominee Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nomineeName">Nominee Name</Label>
                <Input
                  id="nomineeName"
                  name="nomineeName"
                  value={formData.nomineeNam}
                  onChange={handleChange}
                  placeholder="Nominee full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nomineeRelation">Relationship</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, nomineeRelation: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="son">Son</SelectItem>
                    <SelectItem value="daughter">Daughter</SelectItem>
                    <SelectItem value="father">Father</SelectItem>
                    <SelectItem value="mother">Mother</SelectItem>
                    <SelectItem value="brother">Brother</SelectItem>
                    <SelectItem value="sister">Sister</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="termsAccepted"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <Label htmlFor="termsAccepted" className="text-sm">
              I agree to the terms and conditions and authorize the insurance company to verify my details. I understand this is a quote request and not a policy. *
            </Label>
          </div>

          <Button type="submit" className="w-full">Get Insurance Quote</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentInsuranceForm;

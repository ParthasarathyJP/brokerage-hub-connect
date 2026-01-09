import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropFarmerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    farmerName: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    village: "",
    pincode: "",
    farmSize: "",
    farmUnit: "acres",
    cropTypes: "",
    organicCertified: false,
    fairTradeCertified: false,
    governmentSchemes: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Farmer Registration:", formData);
    toast.success("Farmer registration submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Farmer / Producer Registration</CardTitle>
        <CardDescription>
          Register as a crop producer for the grains marketplace
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer Name *</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => handleChange("farmerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number *</Label>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <Label htmlFor="village">Village/Town</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleChange("village", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Farm Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Farm Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size *</Label>
                <div className="flex gap-2">
                  <Input
                    id="farmSize"
                    type="number"
                    value={formData.farmSize}
                    onChange={(e) => handleChange("farmSize", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.farmUnit} onValueChange={(value) => handleChange("farmUnit", value)}>
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
                <Label htmlFor="cropTypes">Crop Types Grown *</Label>
                <Input
                  id="cropTypes"
                  placeholder="e.g., Wheat, Rice, Maize, Pulses"
                  value={formData.cropTypes}
                  onChange={(e) => handleChange("cropTypes", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Certifications</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="organicCertified"
                  checked={formData.organicCertified}
                  onCheckedChange={(checked) => handleChange("organicCertified", !!checked)}
                />
                <Label htmlFor="organicCertified">Organic Certified</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fairTradeCertified"
                  checked={formData.fairTradeCertified}
                  onCheckedChange={(checked) => handleChange("fairTradeCertified", !!checked)}
                />
                <Label htmlFor="fairTradeCertified">Fair Trade Certified</Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="governmentSchemes">Government Schemes Enrolled</Label>
              <Textarea
                id="governmentSchemes"
                placeholder="e.g., PM-KISAN, PMFBY, State schemes..."
                value={formData.governmentSchemes}
                onChange={(e) => handleChange("governmentSchemes", e.target.value)}
              />
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Bank / UPI Details for Payouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => handleChange("bankName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => handleChange("accountNumber", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code</Label>
                <Input
                  id="ifscCode"
                  value={formData.ifscCode}
                  onChange={(e) => handleChange("ifscCode", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input
                  id="upiId"
                  placeholder="e.g., farmer@upi"
                  value={formData.upiId}
                  onChange={(e) => handleChange("upiId", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleChange("additionalNotes", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Registration</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropFarmerRegistrationForm;

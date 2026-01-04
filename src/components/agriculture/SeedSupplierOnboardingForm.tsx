import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SeedSupplierOnboardingForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    ownerName: "",
    yearEstablished: "",
    gstNumber: "",
    panNumber: "",
    registeredAddress: "",
    state: "",
    district: "",
    pincode: "",
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
    website: "",
    productCategories: [] as string[],
    seedTypes: "",
    fertilizerTypes: "",
    majorBrands: "",
    coverageArea: "",
    warehouseCapacity: "",
    coldStorageAvailable: false,
    transportFleet: false,
    seedLicenseNumber: "",
    fertilizerLicenseNumber: "",
    fssaiNumber: "",
    otherCertifications: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
    annualTurnover: "",
    creditTermsExpected: "",
    references: "",
    declaration: false
  });

  const handleProductCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFormData({...formData, productCategories: [...formData.productCategories, category]});
    } else {
      setFormData({...formData, productCategories: formData.productCategories.filter(c => c !== category)});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.declaration) {
      toast.error("Please accept the declaration to proceed");
      return;
    }
    console.log("Supplier Onboarding:", formData);
    toast.success("Supplier onboarding application submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Supplier Onboarding Form</CardTitle>
        <CardDescription>
          Register as a seeds and fertilizers supplier on our platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company/Firm Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, businessType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                    <SelectItem value="dealer">Authorized Dealer</SelectItem>
                    <SelectItem value="importer">Importer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner/Proprietor Name *</Label>
                <Input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearEstablished">Year Established</Label>
                <Input
                  id="yearEstablished"
                  type="number"
                  value={formData.yearEstablished}
                  onChange={(e) => setFormData({...formData, yearEstablished: e.target.value})}
                  placeholder="e.g., 2005"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstNumber">GST Number *</Label>
                <Input
                  id="gstNumber"
                  value={formData.gstNumber}
                  onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number *</Label>
                <Input
                  id="panNumber"
                  value={formData.panNumber}
                  onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Address & Contact</h3>
            <div className="space-y-2">
              <Label htmlFor="registeredAddress">Registered Address *</Label>
              <Textarea
                id="registeredAddress"
                value={formData.registeredAddress}
                onChange={(e) => setFormData({...formData, registeredAddress: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone Number *</Label>
                <Input
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Seeds", "Organic Fertilizers", "Chemical Fertilizers", "Biofertilizers", "Micronutrients", "Plant Growth Regulators"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={formData.productCategories.includes(category)}
                    onCheckedChange={(checked) => handleProductCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="text-sm">{category}</Label>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="seedTypes">Seed Types (if applicable)</Label>
                <Input
                  id="seedTypes"
                  value={formData.seedTypes}
                  onChange={(e) => setFormData({...formData, seedTypes: e.target.value})}
                  placeholder="e.g., Hybrid, Open-pollinated, Certified"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="majorBrands">Major Brands Dealt</Label>
                <Input
                  id="majorBrands"
                  value={formData.majorBrands}
                  onChange={(e) => setFormData({...formData, majorBrands: e.target.value})}
                  placeholder="e.g., IFFCO, Coromandel, Mahyco"
                />
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Infrastructure & Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="coverageArea">Geographical Coverage</Label>
                <Input
                  id="coverageArea"
                  value={formData.coverageArea}
                  onChange={(e) => setFormData({...formData, coverageArea: e.target.value})}
                  placeholder="e.g., Maharashtra, Gujarat, Madhya Pradesh"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warehouseCapacity">Warehouse Capacity (MT)</Label>
                <Input
                  id="warehouseCapacity"
                  type="number"
                  value={formData.warehouseCapacity}
                  onChange={(e) => setFormData({...formData, warehouseCapacity: e.target.value})}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coldStorageAvailable"
                  checked={formData.coldStorageAvailable}
                  onCheckedChange={(checked) => setFormData({...formData, coldStorageAvailable: checked as boolean})}
                />
                <Label htmlFor="coldStorageAvailable">Cold Storage Available</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="transportFleet"
                  checked={formData.transportFleet}
                  onCheckedChange={(checked) => setFormData({...formData, transportFleet: checked as boolean})}
                />
                <Label htmlFor="transportFleet">Own Transport Fleet</Label>
              </div>
            </div>
          </div>

          {/* Licenses & Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Licenses & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="seedLicenseNumber">Seed License Number</Label>
                <Input
                  id="seedLicenseNumber"
                  value={formData.seedLicenseNumber}
                  onChange={(e) => setFormData({...formData, seedLicenseNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fertilizerLicenseNumber">Fertilizer License Number</Label>
                <Input
                  id="fertilizerLicenseNumber"
                  value={formData.fertilizerLicenseNumber}
                  onChange={(e) => setFormData({...formData, fertilizerLicenseNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fssaiNumber">FSSAI Number (if applicable)</Label>
                <Input
                  id="fssaiNumber"
                  value={formData.fssaiNumber}
                  onChange={(e) => setFormData({...formData, fssaiNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="otherCertifications">Other Certifications</Label>
                <Input
                  id="otherCertifications"
                  value={formData.otherCertifications}
                  onChange={(e) => setFormData({...formData, otherCertifications: e.target.value})}
                  placeholder="e.g., ISO, Organic Certification"
                />
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Bank Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name *</Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code *</Label>
                <Input
                  id="ifscCode"
                  value={formData.ifscCode}
                  onChange={(e) => setFormData({...formData, ifscCode: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branchName">Branch Name</Label>
                <Input
                  id="branchName"
                  value={formData.branchName}
                  onChange={(e) => setFormData({...formData, branchName: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="declaration"
                checked={formData.declaration}
                onCheckedChange={(checked) => setFormData({...formData, declaration: checked as boolean})}
              />
              <Label htmlFor="declaration" className="text-sm leading-relaxed">
                I hereby declare that all information provided is true and accurate. I agree to comply with all platform terms and conditions.
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Onboarding Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedSupplierOnboardingForm;

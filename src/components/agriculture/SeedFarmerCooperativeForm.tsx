import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedFarmerCooperativeForm = () => {
  const [formData, setFormData] = useState({
    cooperativeName: "",
    registrationNumber: "",
    registrationDate: "",
    registrationAuthority: "",
    cooperativeType: "",
    chairpersonName: "",
    chairpersonContact: "",
    secretaryName: "",
    secretaryContact: "",
    officeAddress: "",
    state: "",
    district: "",
    pincode: "",
    email: "",
    phone: "",
    totalMembers: "",
    activeFarmers: "",
    totalLandHolding: "",
    majorCrops: "",
    annualTurnover: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    primaryActivity: "",
    secondaryActivities: "",
    infrastructureFacilities: "",
    certifications: "",
    governmentSchemes: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Farmer Cooperative Registration:", formData);
    toast.success("Cooperative registration submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Farmer Cooperative Registration Form</CardTitle>
        <CardDescription>
          Register farmer cooperatives/FPOs for bulk procurement of seeds and fertilizers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cooperative Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Cooperative/FPO Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cooperativeName">Cooperative/FPO Name *</Label>
                <Input
                  id="cooperativeName"
                  value={formData.cooperativeName}
                  onChange={(e) => setFormData({...formData, cooperativeName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cooperativeType">Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, cooperativeType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fpo">Farmer Producer Organization (FPO)</SelectItem>
                    <SelectItem value="cooperative">Agricultural Cooperative</SelectItem>
                    <SelectItem value="self-help-group">Self Help Group (SHG)</SelectItem>
                    <SelectItem value="producer-company">Producer Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration Number *</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationDate">Registration Date *</Label>
                <Input
                  id="registrationDate"
                  type="date"
                  value={formData.registrationDate}
                  onChange={(e) => setFormData({...formData, registrationDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationAuthority">Registration Authority</Label>
                <Select onValueChange={(value) => setFormData({...formData, registrationAuthority: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select authority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sfac">SFAC</SelectItem>
                    <SelectItem value="nabard">NABARD</SelectItem>
                    <SelectItem value="state-cooperative">State Cooperative Dept</SelectItem>
                    <SelectItem value="roc">Registrar of Companies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Office Bearers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Office Bearers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="chairpersonName">Chairperson Name *</Label>
                <Input
                  id="chairpersonName"
                  value={formData.chairpersonName}
                  onChange={(e) => setFormData({...formData, chairpersonName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chairpersonContact">Chairperson Contact *</Label>
                <Input
                  id="chairpersonContact"
                  value={formData.chairpersonContact}
                  onChange={(e) => setFormData({...formData, chairpersonContact: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secretaryName">Secretary/CEO Name</Label>
                <Input
                  id="secretaryName"
                  value={formData.secretaryName}
                  onChange={(e) => setFormData({...formData, secretaryName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secretaryContact">Secretary/CEO Contact</Label>
                <Input
                  id="secretaryContact"
                  value={formData.secretaryContact}
                  onChange={(e) => setFormData({...formData, secretaryContact: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Address & Contact</h3>
            <div className="space-y-2">
              <Label htmlFor="officeAddress">Office Address *</Label>
              <Textarea
                id="officeAddress"
                value={formData.officeAddress}
                onChange={(e) => setFormData({...formData, officeAddress: e.target.value})}
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
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Membership & Operations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Membership & Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalMembers">Total Members *</Label>
                <Input
                  id="totalMembers"
                  type="number"
                  value={formData.totalMembers}
                  onChange={(e) => setFormData({...formData, totalMembers: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activeFarmers">Active Farmers</Label>
                <Input
                  id="activeFarmers"
                  type="number"
                  value={formData.activeFarmers}
                  onChange={(e) => setFormData({...formData, activeFarmers: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalLandHolding">Total Land Holding (Acres)</Label>
                <Input
                  id="totalLandHolding"
                  type="number"
                  value={formData.totalLandHolding}
                  onChange={(e) => setFormData({...formData, totalLandHolding: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="majorCrops">Major Crops Grown</Label>
                <Input
                  id="majorCrops"
                  value={formData.majorCrops}
                  onChange={(e) => setFormData({...formData, majorCrops: e.target.value})}
                  placeholder="e.g., Rice, Wheat, Cotton"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="annualTurnover">Annual Turnover (₹)</Label>
                <Input
                  id="annualTurnover"
                  type="number"
                  value={formData.annualTurnover}
                  onChange={(e) => setFormData({...formData, annualTurnover: e.target.value})}
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
            </div>
          </div>

          {/* Activities & Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Activities & Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryActivity">Primary Activity</Label>
                <Select onValueChange={(value) => setFormData({...formData, primaryActivity: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="input-supply">Input Supply (Seeds/Fertilizers)</SelectItem>
                    <SelectItem value="marketing">Marketing & Sales</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="credit">Credit Facilitation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="certifications">Certifications Held</Label>
                <Input
                  id="certifications"
                  value={formData.certifications}
                  onChange={(e) => setFormData({...formData, certifications: e.target.value})}
                  placeholder="e.g., Organic, GlobalGAP"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="infrastructureFacilities">Infrastructure Facilities</Label>
              <Textarea
                id="infrastructureFacilities"
                value={formData.infrastructureFacilities}
                onChange={(e) => setFormData({...formData, infrastructureFacilities: e.target.value})}
                placeholder="e.g., Warehouse, Cold Storage, Processing Unit"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="governmentSchemes">Government Schemes Enrolled</Label>
              <Textarea
                id="governmentSchemes"
                value={formData.governmentSchemes}
                onChange={(e) => setFormData({...formData, governmentSchemes: e.target.value})}
                placeholder="e.g., 10,000 FPO Scheme, PM-KISAN"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Register Cooperative</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedFarmerCooperativeForm;

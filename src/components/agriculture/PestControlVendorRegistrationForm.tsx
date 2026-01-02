import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PestControlVendorRegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    licenseNumber: "",
    licenseExpiry: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    yearsInBusiness: "",
    serviceCoverage: "",
    chemicalAgents: "",
    biologicalAgents: "",
    safetyCertifications: "",
    pricingDetails: "",
    warrantyDetails: "",
    emergencyContact: ""
  });

  const [services, setServices] = useState({
    spraying: false,
    fumigation: false,
    biologicalControl: false,
    ipm: false,
    soilTreatment: false,
    seedTreatment: false,
    droneServices: false,
    consultancy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pest Control Vendor Registration:", { ...formData, services });
    toast({
      title: "Registration Submitted",
      description: "Your pest control vendor registration has been submitted successfully."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Pest Control Vendor Registration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration Number *</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => handleChange("registrationNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Pest Control License Number *</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => handleChange("licenseNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseExpiry">License Expiry Date *</Label>
                <Input
                  id="licenseExpiry"
                  type="date"
                  value={formData.licenseExpiry}
                  onChange={(e) => handleChange("licenseExpiry", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
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
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsInBusiness">Years in Business</Label>
                <Input
                  id="yearsInBusiness"
                  type="number"
                  value={formData.yearsInBusiness}
                  onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                />
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
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
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
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceCoverage">Service Coverage Area</Label>
                <Input
                  id="serviceCoverage"
                  placeholder="e.g., 50 km radius"
                  value={formData.serviceCoverage}
                  onChange={(e) => handleChange("serviceCoverage", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Service Catalog */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Service Catalog</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="spraying"
                  checked={services.spraying}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, spraying: !!checked }))}
                />
                <Label htmlFor="spraying">Spraying</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fumigation"
                  checked={services.fumigation}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, fumigation: !!checked }))}
                />
                <Label htmlFor="fumigation">Fumigation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="biologicalControl"
                  checked={services.biologicalControl}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, biologicalControl: !!checked }))}
                />
                <Label htmlFor="biologicalControl">Biological Control</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ipm"
                  checked={services.ipm}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, ipm: !!checked }))}
                />
                <Label htmlFor="ipm">IPM</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="soilTreatment"
                  checked={services.soilTreatment}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, soilTreatment: !!checked }))}
                />
                <Label htmlFor="soilTreatment">Soil Treatment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="seedTreatment"
                  checked={services.seedTreatment}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, seedTreatment: !!checked }))}
                />
                <Label htmlFor="seedTreatment">Seed Treatment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="droneServices"
                  checked={services.droneServices}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, droneServices: !!checked }))}
                />
                <Label htmlFor="droneServices">Drone Services</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consultancy"
                  checked={services.consultancy}
                  onCheckedChange={(checked) => setServices(prev => ({ ...prev, consultancy: !!checked }))}
                />
                <Label htmlFor="consultancy">Consultancy</Label>
              </div>
            </div>
          </div>

          {/* Chemicals & Agents */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Chemicals & Biological Agents</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="chemicalAgents">Chemical Agents Offered</Label>
                <Textarea
                  id="chemicalAgents"
                  placeholder="List chemical pesticides with brand names and active ingredients..."
                  value={formData.chemicalAgents}
                  onChange={(e) => handleChange("chemicalAgents", e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="biologicalAgents">Biological Agents Offered</Label>
                <Textarea
                  id="biologicalAgents"
                  placeholder="List bio-pesticides, beneficial insects, neem-based products..."
                  value={formData.biologicalAgents}
                  onChange={(e) => handleChange("biologicalAgents", e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="safetyCertifications">Safety Certifications</Label>
                <Textarea
                  id="safetyCertifications"
                  placeholder="List all safety certifications (CIB&RC, ISO, etc.)..."
                  value={formData.safetyCertifications}
                  onChange={(e) => handleChange("safetyCertifications", e.target.value)}
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Pricing & Warranty */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pricing & Warranty</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pricingDetails">Pricing Details</Label>
                <Textarea
                  id="pricingDetails"
                  placeholder="Describe pricing structure (per acre, per treatment, packages)..."
                  value={formData.pricingDetails}
                  onChange={(e) => handleChange("pricingDetails", e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyDetails">Warranty Details</Label>
                <Textarea
                  id="warrantyDetails"
                  placeholder="Describe warranty terms and conditions..."
                  value={formData.warrantyDetails}
                  onChange={(e) => handleChange("warrantyDetails", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">24/7 Emergency Contact</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleChange("emergencyContact", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Register as Pest Control Vendor</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestControlVendorRegistrationForm;

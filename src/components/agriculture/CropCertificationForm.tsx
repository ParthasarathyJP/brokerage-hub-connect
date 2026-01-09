import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropCertificationForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    businessName: "",
    phone: "",
    email: "",
    address: "",
    businessType: "",
    // Certification Type
    organicCertification: false,
    organicCertifyingBody: "",
    organicCertificateNumber: "",
    organicValidTill: "",
    isoCertification: false,
    isoStandard: "",
    isoCertificateNumber: "",
    isoValidTill: "",
    fssaiCertification: false,
    fssaiLicenseNumber: "",
    fssaiCategory: "",
    fssaiValidTill: "",
    apedaCertification: false,
    apedaRCMC: "",
    apedaProducts: "",
    apedaValidTill: "",
    // Crop Details
    cropType: "",
    quantity: "",
    exportDestination: "",
    certificationPurpose: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Certification:", formData);
    toast.success("Certification application submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Certification Form</CardTitle>
        <CardDescription>
          Apply for Organic, ISO, FSSAI, and APEDA certifications for exports
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Applicant Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Applicant Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">Applicant Name *</Label>
                <Input
                  id="applicantName"
                  value={formData.applicantName}
                  onChange={(e) => handleChange("applicantName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business/Farm Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
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
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type *</Label>
                <Select value={formData.businessType} onValueChange={(value) => handleChange("businessType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer/Producer</SelectItem>
                    <SelectItem value="processor">Processor/Miller</SelectItem>
                    <SelectItem value="exporter">Exporter</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="fpo">FPO/Cooperative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Business Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Organic Certification */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Organic Certification</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="organicCertification"
                checked={formData.organicCertification}
                onCheckedChange={(checked) => handleChange("organicCertification", !!checked)}
              />
              <Label htmlFor="organicCertification">Apply for / Update Organic Certification</Label>
            </div>
            {formData.organicCertification && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organicCertifyingBody">Certifying Body</Label>
                  <Select value={formData.organicCertifyingBody} onValueChange={(value) => handleChange("organicCertifyingBody", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select body" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indocert">INDOCERT</SelectItem>
                      <SelectItem value="control-union">Control Union</SelectItem>
                      <SelectItem value="ecocert">ECOCERT</SelectItem>
                      <SelectItem value="lacon">LACON</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organicCertificateNumber">Certificate Number</Label>
                  <Input
                    id="organicCertificateNumber"
                    value={formData.organicCertificateNumber}
                    onChange={(e) => handleChange("organicCertificateNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organicValidTill">Valid Till</Label>
                  <Input
                    id="organicValidTill"
                    type="date"
                    value={formData.organicValidTill}
                    onChange={(e) => handleChange("organicValidTill", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ISO Certification */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">ISO Certification</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="isoCertification"
                checked={formData.isoCertification}
                onCheckedChange={(checked) => handleChange("isoCertification", !!checked)}
              />
              <Label htmlFor="isoCertification">Apply for / Update ISO Certification</Label>
            </div>
            {formData.isoCertification && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="isoStandard">ISO Standard</Label>
                  <Select value={formData.isoStandard} onValueChange={(value) => handleChange("isoStandard", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select standard" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iso-22000">ISO 22000 (Food Safety)</SelectItem>
                      <SelectItem value="iso-9001">ISO 9001 (Quality)</SelectItem>
                      <SelectItem value="iso-14001">ISO 14001 (Environmental)</SelectItem>
                      <SelectItem value="haccp">HACCP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="isoCertificateNumber">Certificate Number</Label>
                  <Input
                    id="isoCertificateNumber"
                    value={formData.isoCertificateNumber}
                    onChange={(e) => handleChange("isoCertificateNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="isoValidTill">Valid Till</Label>
                  <Input
                    id="isoValidTill"
                    type="date"
                    value={formData.isoValidTill}
                    onChange={(e) => handleChange("isoValidTill", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* FSSAI Certification */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">FSSAI License</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="fssaiCertification"
                checked={formData.fssaiCertification}
                onCheckedChange={(checked) => handleChange("fssaiCertification", !!checked)}
              />
              <Label htmlFor="fssaiCertification">Apply for / Update FSSAI License</Label>
            </div>
            {formData.fssaiCertification && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fssaiCategory">License Category</Label>
                  <Select value={formData.fssaiCategory} onValueChange={(value) => handleChange("fssaiCategory", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Registration</SelectItem>
                      <SelectItem value="state">State License</SelectItem>
                      <SelectItem value="central">Central License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fssaiLicenseNumber">License Number</Label>
                  <Input
                    id="fssaiLicenseNumber"
                    value={formData.fssaiLicenseNumber}
                    onChange={(e) => handleChange("fssaiLicenseNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fssaiValidTill">Valid Till</Label>
                  <Input
                    id="fssaiValidTill"
                    type="date"
                    value={formData.fssaiValidTill}
                    onChange={(e) => handleChange("fssaiValidTill", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* APEDA Certification */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">APEDA Registration (for Exports)</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="apedaCertification"
                checked={formData.apedaCertification}
                onCheckedChange={(checked) => handleChange("apedaCertification", !!checked)}
              />
              <Label htmlFor="apedaCertification">Apply for / Update APEDA Registration</Label>
            </div>
            {formData.apedaCertification && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apedaRCMC">RCMC Number</Label>
                  <Input
                    id="apedaRCMC"
                    placeholder="Registration Cum Membership Certificate"
                    value={formData.apedaRCMC}
                    onChange={(e) => handleChange("apedaRCMC", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apedaValidTill">Valid Till</Label>
                  <Input
                    id="apedaValidTill"
                    type="date"
                    value={formData.apedaValidTill}
                    onChange={(e) => handleChange("apedaValidTill", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="apedaProducts">Registered Products</Label>
                  <Input
                    id="apedaProducts"
                    placeholder="e.g., Basmati Rice, Organic Wheat"
                    value={formData.apedaProducts}
                    onChange={(e) => handleChange("apedaProducts", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Crop & Purpose */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Certification Purpose</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Primary Crop/Product *</Label>
                <Input
                  id="cropType"
                  placeholder="e.g., Wheat, Rice, Pulses"
                  value={formData.cropType}
                  onChange={(e) => handleChange("cropType", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Expected Annual Quantity</Label>
                <Input
                  id="quantity"
                  placeholder="e.g., 500 Tons"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="exportDestination">Export Destinations (if applicable)</Label>
                <Input
                  id="exportDestination"
                  placeholder="e.g., UAE, EU, USA"
                  value={formData.exportDestination}
                  onChange={(e) => handleChange("exportDestination", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="certificationPurpose">Purpose of Certification</Label>
                <Select value={formData.certificationPurpose} onValueChange={(value) => handleChange("certificationPurpose", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic-sale">Domestic Sales</SelectItem>
                    <SelectItem value="export">Export</SelectItem>
                    <SelectItem value="both">Both Domestic & Export</SelectItem>
                    <SelectItem value="compliance">Regulatory Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">Additional Remarks</Label>
            <Textarea
              id="remarks"
              placeholder="Any additional information..."
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Certification Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropCertificationForm;

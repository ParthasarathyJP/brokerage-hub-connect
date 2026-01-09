import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropComplianceForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    businessName: "",
    businessType: "",
    cropType: "",
    variety: "",
    quantity: "",
    // MSP Reference
    mspYear: "",
    mspRate: "",
    mspApplicable: false,
    // GST Details
    gstRegistered: false,
    gstNumber: "",
    gstRate: "",
    hsnCode: "",
    // Export License
    exportLicenseRequired: false,
    exportLicenseNumber: "",
    exportDestination: "",
    iecCode: "",
    // Mandi Registration
    mandiRegistered: false,
    mandiLicenseNumber: "",
    mandiName: "",
    // Subsidy
    subsidyApplied: false,
    subsidyScheme: "",
    subsidyAmount: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Government Compliance:", formData);
    toast.success("Compliance form submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Government Compliance Form</CardTitle>
        <CardDescription>
          MSP reference, GST, export license, and mandi registration details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Details */}
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
                <Label htmlFor="businessName">Business/Farm Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
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
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="processor">Processor/Miller</SelectItem>
                    <SelectItem value="exporter">Exporter</SelectItem>
                    <SelectItem value="cooperative">Cooperative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice (Paddy)</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variety">Variety</Label>
                <Input
                  id="variety"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity (Quintals)</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* MSP Reference */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">MSP (Minimum Support Price) Reference</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="mspApplicable"
                checked={formData.mspApplicable}
                onCheckedChange={(checked) => handleChange("mspApplicable", !!checked)}
              />
              <Label htmlFor="mspApplicable">MSP Applicable for this transaction</Label>
            </div>
            {formData.mspApplicable && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mspYear">MSP Year *</Label>
                  <Select value={formData.mspYear} onValueChange={(value) => handleChange("mspYear", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-25">2024-25 (Rabi)</SelectItem>
                      <SelectItem value="2024-kharif">2024 (Kharif)</SelectItem>
                      <SelectItem value="2023-24">2023-24 (Rabi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mspRate">MSP Rate (₹/Quintal)</Label>
                  <Input
                    id="mspRate"
                    type="number"
                    placeholder="As per govt. notification"
                    value={formData.mspRate}
                    onChange={(e) => handleChange("mspRate", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* GST Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">GST / Tax Details</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="gstRegistered"
                checked={formData.gstRegistered}
                onCheckedChange={(checked) => handleChange("gstRegistered", !!checked)}
              />
              <Label htmlFor="gstRegistered">GST Registered</Label>
            </div>
            {formData.gstRegistered && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gstNumber">GST Number *</Label>
                  <Input
                    id="gstNumber"
                    value={formData.gstNumber}
                    onChange={(e) => handleChange("gstNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hsnCode">HSN Code</Label>
                  <Input
                    id="hsnCode"
                    placeholder="e.g., 1001 for Wheat"
                    value={formData.hsnCode}
                    onChange={(e) => handleChange("hsnCode", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gstRate">GST Rate (%)</Label>
                  <Select value={formData.gstRate} onValueChange={(value) => handleChange("gstRate", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0% (Exempted)</SelectItem>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="12">12%</SelectItem>
                      <SelectItem value="18">18%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          {/* Export License */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Export License (if applicable)</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="exportLicenseRequired"
                checked={formData.exportLicenseRequired}
                onCheckedChange={(checked) => handleChange("exportLicenseRequired", !!checked)}
              />
              <Label htmlFor="exportLicenseRequired">Export License Required</Label>
            </div>
            {formData.exportLicenseRequired && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="iecCode">IEC Code *</Label>
                  <Input
                    id="iecCode"
                    placeholder="Import Export Code"
                    value={formData.iecCode}
                    onChange={(e) => handleChange("iecCode", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exportLicenseNumber">Export License Number</Label>
                  <Input
                    id="exportLicenseNumber"
                    value={formData.exportLicenseNumber}
                    onChange={(e) => handleChange("exportLicenseNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="exportDestination">Export Destination Countries</Label>
                  <Input
                    id="exportDestination"
                    placeholder="e.g., UAE, Bangladesh, Nepal"
                    value={formData.exportDestination}
                    onChange={(e) => handleChange("exportDestination", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Mandi Registration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Subsidy / Mandi Registration</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="mandiRegistered"
                checked={formData.mandiRegistered}
                onCheckedChange={(checked) => handleChange("mandiRegistered", !!checked)}
              />
              <Label htmlFor="mandiRegistered">Mandi Registered</Label>
            </div>
            {formData.mandiRegistered && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mandiName">Mandi Name</Label>
                  <Input
                    id="mandiName"
                    value={formData.mandiName}
                    onChange={(e) => handleChange("mandiName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mandiLicenseNumber">Mandi License Number</Label>
                  <Input
                    id="mandiLicenseNumber"
                    value={formData.mandiLicenseNumber}
                    onChange={(e) => handleChange("mandiLicenseNumber", e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="subsidyApplied"
                checked={formData.subsidyApplied}
                onCheckedChange={(checked) => handleChange("subsidyApplied", !!checked)}
              />
              <Label htmlFor="subsidyApplied">Subsidy Applied</Label>
            </div>
            {formData.subsidyApplied && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="subsidyScheme">Subsidy Scheme</Label>
                  <Input
                    id="subsidyScheme"
                    placeholder="e.g., PM-KISAN, State scheme"
                    value={formData.subsidyScheme}
                    onChange={(e) => handleChange("subsidyScheme", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subsidyAmount">Subsidy Amount (₹)</Label>
                  <Input
                    id="subsidyAmount"
                    type="number"
                    value={formData.subsidyAmount}
                    onChange={(e) => handleChange("subsidyAmount", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              placeholder="Any additional compliance notes..."
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Compliance Form</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropComplianceForm;

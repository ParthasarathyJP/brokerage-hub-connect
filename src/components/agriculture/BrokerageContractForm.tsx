import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const BrokerageContractForm = () => {
  const [formData, setFormData] = useState({
    contractNumber: "",
    contractDate: "",
    brokerName: "",
    brokerLicense: "",
    brokerPhone: "",
    brokerEmail: "",
    farmerName: "",
    farmerId: "",
    farmerPhone: "",
    farmerAddress: "",
    vendorName: "",
    vendorId: "",
    vendorPhone: "",
    vendorAddress: "",
    serviceDescription: "",
    totalAmount: "",
    advanceAmount: "",
    deliveryDate: "",
    deliveryLocation: "",
    warrantyPeriod: "",
    maintenanceTerms: "",
    paymentSchedule: "",
    penaltyTerms: "",
    disputeResolution: "",
    additionalTerms: "",
    stampDutyPaid: "",
    witnessName1: "",
    witnessName2: "",
  });

  const [agreements, setAgreements] = useState({
    termsAccepted: false,
    eSignConsent: false,
    dataSharing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreements.termsAccepted || !agreements.eSignConsent) {
      toast.error("Please accept the terms and provide e-sign consent");
      return;
    }
    console.log("Brokerage Contract:", { ...formData, agreements });
    toast.success("Contract submitted for processing!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Brokerage Contract / Agreement Form</CardTitle>
        <CardDescription>
          Create a formal agreement between Farmer, Vendor, and Broker for irrigation services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contract Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Contract Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contractNumber">Contract Number</Label>
                <Input
                  id="contractNumber"
                  value={formData.contractNumber}
                  onChange={(e) => handleChange("contractNumber", e.target.value)}
                  placeholder="Auto-generated or manual"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contractDate">Contract Date *</Label>
                <Input
                  id="contractDate"
                  type="date"
                  value={formData.contractDate}
                  onChange={(e) => handleChange("contractDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Broker Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Broker Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brokerName">Broker Name *</Label>
                <Input
                  id="brokerName"
                  value={formData.brokerName}
                  onChange={(e) => handleChange("brokerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerLicense">Broker License Number</Label>
                <Input
                  id="brokerLicense"
                  value={formData.brokerLicense}
                  onChange={(e) => handleChange("brokerLicense", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerPhone">Broker Phone *</Label>
                <Input
                  id="brokerPhone"
                  type="tel"
                  value={formData.brokerPhone}
                  onChange={(e) => handleChange("brokerPhone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerEmail">Broker Email</Label>
                <Input
                  id="brokerEmail"
                  type="email"
                  value={formData.brokerEmail}
                  onChange={(e) => handleChange("brokerEmail", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Farmer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Farmer Details (Party A)</h3>
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
                <Label htmlFor="farmerId">Farmer ID / Registration</Label>
                <Input
                  id="farmerId"
                  value={formData.farmerId}
                  onChange={(e) => handleChange("farmerId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerPhone">Farmer Phone *</Label>
                <Input
                  id="farmerPhone"
                  type="tel"
                  value={formData.farmerPhone}
                  onChange={(e) => handleChange("farmerPhone", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="farmerAddress">Farmer Address *</Label>
              <Textarea
                id="farmerAddress"
                value={formData.farmerAddress}
                onChange={(e) => handleChange("farmerAddress", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Vendor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Vendor Details (Party B)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vendorName">Vendor / Company Name *</Label>
                <Input
                  id="vendorName"
                  value={formData.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorId">Vendor ID / GST Number</Label>
                <Input
                  id="vendorId"
                  value={formData.vendorId}
                  onChange={(e) => handleChange("vendorId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorPhone">Vendor Phone *</Label>
                <Input
                  id="vendorPhone"
                  type="tel"
                  value={formData.vendorPhone}
                  onChange={(e) => handleChange("vendorPhone", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vendorAddress">Vendor Address *</Label>
              <Textarea
                id="vendorAddress"
                value={formData.vendorAddress}
                onChange={(e) => handleChange("vendorAddress", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Terms & Conditions</h3>
            <div className="space-y-2">
              <Label htmlFor="serviceDescription">Service / Product Description *</Label>
              <Textarea
                id="serviceDescription"
                placeholder="Detailed description of irrigation equipment/services..."
                value={formData.serviceDescription}
                onChange={(e) => handleChange("serviceDescription", e.target.value)}
                required
                className="min-h-24"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalAmount">Total Amount (₹) *</Label>
                <Input
                  id="totalAmount"
                  type="number"
                  value={formData.totalAmount}
                  onChange={(e) => handleChange("totalAmount", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="advanceAmount">Advance Amount (₹)</Label>
                <Input
                  id="advanceAmount"
                  type="number"
                  value={formData.advanceAmount}
                  onChange={(e) => handleChange("advanceAmount", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryDate">Delivery Date *</Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => handleChange("deliveryDate", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryLocation">Delivery Location</Label>
                <Input
                  id="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={(e) => handleChange("deliveryLocation", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyPeriod">Warranty Period</Label>
                <Select value={formData.warrantyPeriod} onValueChange={(value) => handleChange("warrantyPeriod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select warranty period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6_months">6 Months</SelectItem>
                    <SelectItem value="1_year">1 Year</SelectItem>
                    <SelectItem value="2_years">2 Years</SelectItem>
                    <SelectItem value="3_years">3 Years</SelectItem>
                    <SelectItem value="5_years">5 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maintenanceTerms">Maintenance Terms</Label>
              <Textarea
                id="maintenanceTerms"
                placeholder="AMC, service visits, parts replacement terms..."
                value={formData.maintenanceTerms}
                onChange={(e) => handleChange("maintenanceTerms", e.target.value)}
              />
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Payment Schedule</h3>
            <div className="space-y-2">
              <Label htmlFor="paymentSchedule">Payment Schedule *</Label>
              <Textarea
                id="paymentSchedule"
                placeholder="e.g., 30% advance, 40% on delivery, 30% after installation..."
                value={formData.paymentSchedule}
                onChange={(e) => handleChange("paymentSchedule", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="penaltyTerms">Penalty Terms</Label>
              <Textarea
                id="penaltyTerms"
                placeholder="Late delivery penalties, non-compliance penalties..."
                value={formData.penaltyTerms}
                onChange={(e) => handleChange("penaltyTerms", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disputeResolution">Dispute Resolution</Label>
              <Textarea
                id="disputeResolution"
                placeholder="Arbitration, jurisdiction, mediation process..."
                value={formData.disputeResolution}
                onChange={(e) => handleChange("disputeResolution", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalTerms">Additional Terms & Conditions</Label>
              <Textarea
                id="additionalTerms"
                value={formData.additionalTerms}
                onChange={(e) => handleChange("additionalTerms", e.target.value)}
              />
            </div>
          </div>

          {/* Stamp Duty & Witnesses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">E-Stamp & Witnesses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stampDutyPaid">Stamp Duty Paid (₹)</Label>
                <Input
                  id="stampDutyPaid"
                  type="number"
                  value={formData.stampDutyPaid}
                  onChange={(e) => handleChange("stampDutyPaid", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="witnessName1">Witness 1 Name</Label>
                <Input
                  id="witnessName1"
                  value={formData.witnessName1}
                  onChange={(e) => handleChange("witnessName1", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="witnessName2">Witness 2 Name</Label>
                <Input
                  id="witnessName2"
                  value={formData.witnessName2}
                  onChange={(e) => handleChange("witnessName2", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Consent & Agreements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Digital Signature & Consent</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={agreements.termsAccepted}
                  onCheckedChange={(checked) =>
                    setAgreements((prev) => ({ ...prev, termsAccepted: checked as boolean }))
                  }
                />
                <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                  I have read and agree to all terms and conditions mentioned above. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="eSignConsent"
                  checked={agreements.eSignConsent}
                  onCheckedChange={(checked) =>
                    setAgreements((prev) => ({ ...prev, eSignConsent: checked as boolean }))
                  }
                />
                <Label htmlFor="eSignConsent" className="text-sm leading-relaxed">
                  I consent to use digital signature for this agreement as per IT Act, 2000. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="dataSharing"
                  checked={agreements.dataSharing}
                  onCheckedChange={(checked) =>
                    setAgreements((prev) => ({ ...prev, dataSharing: checked as boolean }))
                  }
                />
                <Label htmlFor="dataSharing" className="text-sm leading-relaxed">
                  I agree to share my details with relevant parties for contract execution.
                </Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Generate Contract & Request Signatures</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BrokerageContractForm;

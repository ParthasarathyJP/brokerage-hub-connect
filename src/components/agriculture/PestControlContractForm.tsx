import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PestControlContractForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    contractNumber: "",
    contractDate: "",
    validFrom: "",
    validUntil: "",
    brokerName: "",
    brokerLicense: "",
    brokerContact: "",
    brokerAddress: "",
    farmerName: "",
    farmerId: "",
    farmerContact: "",
    farmerAddress: "",
    landReference: "",
    vendorName: "",
    vendorLicense: "",
    vendorContact: "",
    vendorAddress: "",
    serviceScope: "",
    safetyProtocols: "",
    deliverySchedule: "",
    totalContractValue: "",
    advancePayment: "",
    paymentSchedule: "",
    paymentMode: "",
    brokerCommission: "",
    stampDutyValue: "",
    witness1Name: "",
    witness1Contact: "",
    witness2Name: "",
    witness2Contact: "",
    disputeResolution: "",
    additionalTerms: ""
  });

  const [agreements, setAgreements] = useState({
    termsAccepted: false,
    safetyAcknowledged: false,
    eStampConsent: false,
    digitalSignatureConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreements.termsAccepted || !agreements.safetyAcknowledged || !agreements.eStampConsent) {
      toast({
        title: "Consent Required",
        description: "Please accept all required agreements before submitting.",
        variant: "destructive"
      });
      return;
    }
    console.log("Pest Control Contract:", { ...formData, agreements });
    toast({
      title: "Contract Generated",
      description: "The brokerage contract has been generated. Awaiting digital signatures."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Pest Control Brokerage Contract / Agreement Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contract Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Contract Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contractNumber">Contract Number *</Label>
                <Input
                  id="contractNumber"
                  value={formData.contractNumber}
                  onChange={(e) => handleChange("contractNumber", e.target.value)}
                  required
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
              <div className="space-y-2">
                <Label htmlFor="validFrom">Valid From *</Label>
                <Input
                  id="validFrom"
                  type="date"
                  value={formData.validFrom}
                  onChange={(e) => handleChange("validFrom", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="validUntil">Valid Until *</Label>
                <Input
                  id="validUntil"
                  type="date"
                  value={formData.validUntil}
                  onChange={(e) => handleChange("validUntil", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Broker Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Broker Details</h3>
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
                <Label htmlFor="brokerLicense">Broker License Number *</Label>
                <Input
                  id="brokerLicense"
                  value={formData.brokerLicense}
                  onChange={(e) => handleChange("brokerLicense", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerContact">Broker Contact *</Label>
                <Input
                  id="brokerContact"
                  value={formData.brokerContact}
                  onChange={(e) => handleChange("brokerContact", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerAddress">Broker Address *</Label>
                <Input
                  id="brokerAddress"
                  value={formData.brokerAddress}
                  onChange={(e) => handleChange("brokerAddress", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Farmer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farmer Details</h3>
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
                <Label htmlFor="farmerId">Farmer ID *</Label>
                <Input
                  id="farmerId"
                  value={formData.farmerId}
                  onChange={(e) => handleChange("farmerId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerContact">Farmer Contact *</Label>
                <Input
                  id="farmerContact"
                  value={formData.farmerContact}
                  onChange={(e) => handleChange("farmerContact", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerAddress">Farmer Address *</Label>
                <Input
                  id="farmerAddress"
                  value={formData.farmerAddress}
                  onChange={(e) => handleChange("farmerAddress", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="landReference">Land Reference/Survey Number *</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Vendor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Vendor Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vendorName">Vendor Name *</Label>
                <Input
                  id="vendorName"
                  value={formData.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorLicense">Vendor License Number *</Label>
                <Input
                  id="vendorLicense"
                  value={formData.vendorLicense}
                  onChange={(e) => handleChange("vendorLicense", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorContact">Vendor Contact *</Label>
                <Input
                  id="vendorContact"
                  value={formData.vendorContact}
                  onChange={(e) => handleChange("vendorContact", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorAddress">Vendor Address *</Label>
                <Input
                  id="vendorAddress"
                  value={formData.vendorAddress}
                  onChange={(e) => handleChange("vendorAddress", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Terms & Conditions</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceScope">Scope of Services *</Label>
                <Textarea
                  id="serviceScope"
                  placeholder="Describe pest control services to be provided..."
                  value={formData.serviceScope}
                  onChange={(e) => handleChange("serviceScope", e.target.value)}
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="safetyProtocols">Safety Protocols *</Label>
                <Textarea
                  id="safetyProtocols"
                  placeholder="Detail safety measures, PPE requirements, re-entry intervals..."
                  value={formData.safetyProtocols}
                  onChange={(e) => handleChange("safetyProtocols", e.target.value)}
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliverySchedule">Delivery/Treatment Schedule *</Label>
                <Textarea
                  id="deliverySchedule"
                  placeholder="Schedule of treatments, timelines, milestones..."
                  value={formData.deliverySchedule}
                  onChange={(e) => handleChange("deliverySchedule", e.target.value)}
                  rows={2}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Payment Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalContractValue">Total Contract Value (₹) *</Label>
                <Input
                  id="totalContractValue"
                  type="number"
                  value={formData.totalContractValue}
                  onChange={(e) => handleChange("totalContractValue", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="advancePayment">Advance Payment (₹)</Label>
                <Input
                  id="advancePayment"
                  type="number"
                  value={formData.advancePayment}
                  onChange={(e) => handleChange("advancePayment", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentMode">Payment Mode</Label>
                <Select onValueChange={(value) => handleChange("paymentMode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerCommission">Broker Commission (%)</Label>
                <Input
                  id="brokerCommission"
                  type="number"
                  step="0.1"
                  value={formData.brokerCommission}
                  onChange={(e) => handleChange("brokerCommission", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentSchedule">Payment Schedule Details</Label>
              <Textarea
                id="paymentSchedule"
                placeholder="Detail payment milestones and due dates..."
                value={formData.paymentSchedule}
                onChange={(e) => handleChange("paymentSchedule", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Stamp Duty & Witnesses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Stamp Duty & Witnesses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stampDutyValue">Stamp Duty Value (₹)</Label>
                <Input
                  id="stampDutyValue"
                  type="number"
                  value={formData.stampDutyValue}
                  onChange={(e) => handleChange("stampDutyValue", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disputeResolution">Dispute Resolution Mechanism</Label>
                <Select onValueChange={(value) => handleChange("disputeResolution", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mechanism" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arbitration">Arbitration</SelectItem>
                    <SelectItem value="mediation">Mediation</SelectItem>
                    <SelectItem value="court">Civil Court</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="witness1Name">Witness 1 Name</Label>
                <Input
                  id="witness1Name"
                  value={formData.witness1Name}
                  onChange={(e) => handleChange("witness1Name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="witness1Contact">Witness 1 Contact</Label>
                <Input
                  id="witness1Contact"
                  value={formData.witness1Contact}
                  onChange={(e) => handleChange("witness1Contact", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="witness2Name">Witness 2 Name</Label>
                <Input
                  id="witness2Name"
                  value={formData.witness2Name}
                  onChange={(e) => handleChange("witness2Name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="witness2Contact">Witness 2 Contact</Label>
                <Input
                  id="witness2Contact"
                  value={formData.witness2Contact}
                  onChange={(e) => handleChange("witness2Contact", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalTerms">Additional Terms</Label>
              <Textarea
                id="additionalTerms"
                placeholder="Any additional terms and conditions..."
                value={formData.additionalTerms}
                onChange={(e) => handleChange("additionalTerms", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Consent & Agreements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Consent & Agreements</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={agreements.termsAccepted}
                  onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, termsAccepted: !!checked }))}
                />
                <Label htmlFor="termsAccepted" className="text-sm">
                  I have read and agree to all the terms and conditions mentioned above *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="safetyAcknowledged"
                  checked={agreements.safetyAcknowledged}
                  onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, safetyAcknowledged: !!checked }))}
                />
                <Label htmlFor="safetyAcknowledged" className="text-sm">
                  I acknowledge the safety protocols and agree to follow all precautionary measures *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="eStampConsent"
                  checked={agreements.eStampConsent}
                  onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, eStampConsent: !!checked }))}
                />
                <Label htmlFor="eStampConsent" className="text-sm">
                  I consent to e-stamp integration for this contract *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="digitalSignatureConsent"
                  checked={agreements.digitalSignatureConsent}
                  onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, digitalSignatureConsent: !!checked }))}
                />
                <Label htmlFor="digitalSignatureConsent" className="text-sm">
                  I consent to use digital signature for this agreement
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

export default PestControlContractForm;

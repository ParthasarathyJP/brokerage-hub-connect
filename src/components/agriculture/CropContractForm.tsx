import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropContractForm = () => {
  const [formData, setFormData] = useState({
    contractId: "",
    contractDate: "",
    // Seller Details
    sellerName: "",
    sellerAddress: "",
    sellerPhone: "",
    sellerPAN: "",
    sellerGST: "",
    // Buyer Details
    buyerName: "",
    buyerCompany: "",
    buyerAddress: "",
    buyerPhone: "",
    buyerGST: "",
    // Crop Details
    cropType: "",
    variety: "",
    quantity: "",
    quantityUnit: "quintals",
    qualityGrade: "",
    pricePerUnit: "",
    totalValue: "",
    // Payment Terms
    paymentMode: "",
    advanceAmount: "",
    balancePaymentTerms: "",
    paymentDueDate: "",
    // Delivery Terms
    deliveryLocation: "",
    deliveryDate: "",
    deliveryResponsibility: "",
    // Dispute Resolution
    arbitrationClause: "",
    jurisdiction: "",
    // Signatures
    sellerAgreed: false,
    buyerAgreed: false,
    additionalTerms: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Contract:", formData);
    toast.success("Contract submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Contract / Agreement Form</CardTitle>
        <CardDescription>
          Create a formal contract between buyer and seller for crop transactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contract Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Contract Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contractId">Contract ID *</Label>
                <Input
                  id="contractId"
                  placeholder="Auto-generated or manual"
                  value={formData.contractId}
                  onChange={(e) => handleChange("contractId", e.target.value)}
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
            </div>
          </div>

          {/* Seller Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Seller Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sellerName">Seller Name *</Label>
                <Input
                  id="sellerName"
                  value={formData.sellerName}
                  onChange={(e) => handleChange("sellerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerPhone">Seller Phone *</Label>
                <Input
                  id="sellerPhone"
                  type="tel"
                  value={formData.sellerPhone}
                  onChange={(e) => handleChange("sellerPhone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="sellerAddress">Seller Address *</Label>
                <Textarea
                  id="sellerAddress"
                  value={formData.sellerAddress}
                  onChange={(e) => handleChange("sellerAddress", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerPAN">PAN Number</Label>
                <Input
                  id="sellerPAN"
                  value={formData.sellerPAN}
                  onChange={(e) => handleChange("sellerPAN", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerGST">GST Number</Label>
                <Input
                  id="sellerGST"
                  value={formData.sellerGST}
                  onChange={(e) => handleChange("sellerGST", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Buyer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name *</Label>
                <Input
                  id="buyerName"
                  value={formData.buyerName}
                  onChange={(e) => handleChange("buyerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerCompany">Company Name</Label>
                <Input
                  id="buyerCompany"
                  value={formData.buyerCompany}
                  onChange={(e) => handleChange("buyerCompany", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerPhone">Buyer Phone *</Label>
                <Input
                  id="buyerPhone"
                  type="tel"
                  value={formData.buyerPhone}
                  onChange={(e) => handleChange("buyerPhone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerGST">GST Number</Label>
                <Input
                  id="buyerGST"
                  value={formData.buyerGST}
                  onChange={(e) => handleChange("buyerGST", e.target.value)}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="buyerAddress">Buyer Address *</Label>
                <Textarea
                  id="buyerAddress"
                  value={formData.buyerAddress}
                  onChange={(e) => handleChange("buyerAddress", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Crop Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Crop Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variety">Variety *</Label>
                <Input
                  id="variety"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualityGrade">Quality Grade *</Label>
                <Select value={formData.qualityGrade} onValueChange={(value) => handleChange("qualityGrade", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-a">Grade A</SelectItem>
                    <SelectItem value="grade-b">Grade B</SelectItem>
                    <SelectItem value="grade-c">Grade C</SelectItem>
                    <SelectItem value="faq">FAQ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <div className="flex gap-2">
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.quantityUnit} onValueChange={(value) => handleChange("quantityUnit", value)}>
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quintals">Quintals</SelectItem>
                      <SelectItem value="tons">Tons</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerUnit">Price (₹/Quintal) *</Label>
                <Input
                  id="pricePerUnit"
                  type="number"
                  value={formData.pricePerUnit}
                  onChange={(e) => handleChange("pricePerUnit", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalValue">Total Value (₹) *</Label>
                <Input
                  id="totalValue"
                  type="number"
                  value={formData.totalValue}
                  onChange={(e) => handleChange("totalValue", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Payment Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentMode">Payment Mode *</Label>
                <Select value={formData.paymentMode} onValueChange={(value) => handleChange("paymentMode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="lc">Letter of Credit</SelectItem>
                    <SelectItem value="escrow">Escrow</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="balancePaymentTerms">Balance Payment Terms</Label>
                <Input
                  id="balancePaymentTerms"
                  placeholder="e.g., On delivery, 15 days credit"
                  value={formData.balancePaymentTerms}
                  onChange={(e) => handleChange("balancePaymentTerms", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentDueDate">Payment Due Date</Label>
                <Input
                  id="paymentDueDate"
                  type="date"
                  value={formData.paymentDueDate}
                  onChange={(e) => handleChange("paymentDueDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Delivery Terms */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Delivery Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                <Input
                  id="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={(e) => handleChange("deliveryLocation", e.target.value)}
                  required
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
              <div className="space-y-2">
                <Label htmlFor="deliveryResponsibility">Delivery By *</Label>
                <Select value={formData.deliveryResponsibility} onValueChange={(value) => handleChange("deliveryResponsibility", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select responsibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seller">Seller</SelectItem>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="third-party">Third Party</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Arbitration & Dispute Resolution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="arbitrationClause">Arbitration Authority</Label>
                <Select value={formData.arbitrationClause} onValueChange={(value) => handleChange("arbitrationClause", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select authority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mandi-committee">Mandi Committee</SelectItem>
                    <SelectItem value="district-court">District Court</SelectItem>
                    <SelectItem value="arbitrator">Independent Arbitrator</SelectItem>
                    <SelectItem value="cooperative">Cooperative Society</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Jurisdiction</Label>
                <Input
                  id="jurisdiction"
                  placeholder="e.g., Indore, Madhya Pradesh"
                  value={formData.jurisdiction}
                  onChange={(e) => handleChange("jurisdiction", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Additional Terms */}
          <div className="space-y-2">
            <Label htmlFor="additionalTerms">Additional Terms & Conditions</Label>
            <Textarea
              id="additionalTerms"
              placeholder="Any additional clauses or conditions..."
              value={formData.additionalTerms}
              onChange={(e) => handleChange("additionalTerms", e.target.value)}
              rows={4}
            />
          </div>

          {/* Agreement */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Agreement</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sellerAgreed"
                  checked={formData.sellerAgreed}
                  onCheckedChange={(checked) => handleChange("sellerAgreed", !!checked)}
                />
                <Label htmlFor="sellerAgreed">Seller agrees to the terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="buyerAgreed"
                  checked={formData.buyerAgreed}
                  onCheckedChange={(checked) => handleChange("buyerAgreed", !!checked)}
                />
                <Label htmlFor="buyerAgreed">Buyer agrees to the terms and conditions</Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Generate Contract</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropContractForm;

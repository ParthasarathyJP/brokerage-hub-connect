import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedReturnReplacementForm = () => {
  const [formData, setFormData] = useState({
    returnId: "",
    requestDate: "",
    poNumber: "",
    invoiceNumber: "",
    buyerName: "",
    buyerContact: "",
    supplierName: "",
    productName: "",
    batchNumber: "",
    expiryDate: "",
    quantityPurchased: "",
    quantityReturned: "",
    unit: "",
    returnReason: "",
    damageType: "",
    damageDescription: "",
    requestType: "",
    preferredResolution: "",
    pickupRequired: false,
    pickupAddress: "",
    pickupDate: "",
    refundAmount: "",
    refundMode: "",
    replacementProductName: "",
    replacementQuantity: "",
    status: "",
    approverName: "",
    approvalDate: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Return/Replacement Request:", formData);
    toast.success("Return/replacement request submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Return / Replacement Request Form</CardTitle>
        <CardDescription>
          Request returns or replacements for damaged or expired seeds and fertilizers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Request Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Request Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="returnId">Return Request ID</Label>
                <Input
                  id="returnId"
                  value={formData.returnId}
                  onChange={(e) => setFormData({...formData, returnId: e.target.value})}
                  placeholder="Auto-generated"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requestDate">Request Date *</Label>
                <Input
                  id="requestDate"
                  type="date"
                  value={formData.requestDate}
                  onChange={(e) => setFormData({...formData, requestDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requestType">Request Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, requestType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="return">Return Only</SelectItem>
                    <SelectItem value="replacement">Replacement Only</SelectItem>
                    <SelectItem value="return-refund">Return with Refund</SelectItem>
                    <SelectItem value="return-replacement">Return with Replacement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="poNumber">PO Number *</Label>
                <Input
                  id="poNumber"
                  value={formData.poNumber}
                  onChange={(e) => setFormData({...formData, poNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number *</Label>
                <Input
                  id="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={(e) => setFormData({...formData, invoiceNumber: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Parties */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Buyer & Supplier Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name *</Label>
                <Input
                  id="buyerName"
                  value={formData.buyerName}
                  onChange={(e) => setFormData({...formData, buyerName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerContact">Buyer Contact *</Label>
                <Input
                  id="buyerContact"
                  value={formData.buyerContact}
                  onChange={(e) => setFormData({...formData, buyerContact: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplierName">Supplier Name *</Label>
                <Input
                  id="supplierName"
                  value={formData.supplierName}
                  onChange={(e) => setFormData({...formData, supplierName: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="batchNumber">Batch Number *</Label>
                <Input
                  id="batchNumber"
                  value={formData.batchNumber}
                  onChange={(e) => setFormData({...formData, batchNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantityPurchased">Quantity Purchased</Label>
                <Input
                  id="quantityPurchased"
                  type="number"
                  value={formData.quantityPurchased}
                  onChange={(e) => setFormData({...formData, quantityPurchased: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantityReturned">Quantity to Return *</Label>
                <Input
                  id="quantityReturned"
                  type="number"
                  value={formData.quantityReturned}
                  onChange={(e) => setFormData({...formData, quantityReturned: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Select onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">KG</SelectItem>
                    <SelectItem value="quintal">Quintal</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Return Reason */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Reason for Return</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="returnReason">Return Reason *</Label>
                <Select onValueChange={(value) => setFormData({...formData, returnReason: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="damaged">Damaged in Transit</SelectItem>
                    <SelectItem value="expired">Expired/Near Expiry</SelectItem>
                    <SelectItem value="wrong-product">Wrong Product Delivered</SelectItem>
                    <SelectItem value="quality-issue">Quality Issue</SelectItem>
                    <SelectItem value="germination-failure">Low Germination Rate</SelectItem>
                    <SelectItem value="packaging-defect">Packaging Defect</SelectItem>
                    <SelectItem value="excess-order">Excess Order</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="damageType">Damage Type (if applicable)</Label>
                <Select onValueChange={(value) => setFormData({...formData, damageType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select damage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical Damage</SelectItem>
                    <SelectItem value="moisture">Moisture Damage</SelectItem>
                    <SelectItem value="contamination">Contamination</SelectItem>
                    <SelectItem value="leakage">Leakage</SelectItem>
                    <SelectItem value="pest-damage">Pest/Insect Damage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="damageDescription">Detailed Description *</Label>
              <Textarea
                id="damageDescription"
                value={formData.damageDescription}
                onChange={(e) => setFormData({...formData, damageDescription: e.target.value})}
                placeholder="Describe the issue in detail"
                required
              />
            </div>
          </div>

          {/* Resolution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Preferred Resolution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredResolution">Preferred Resolution *</Label>
                <Select onValueChange={(value) => setFormData({...formData, preferredResolution: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-refund">Full Refund</SelectItem>
                    <SelectItem value="partial-refund">Partial Refund</SelectItem>
                    <SelectItem value="replacement">Product Replacement</SelectItem>
                    <SelectItem value="credit-note">Credit Note</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="refundAmount">Refund Amount (₹)</Label>
                <Input
                  id="refundAmount"
                  type="number"
                  value={formData.refundAmount}
                  onChange={(e) => setFormData({...formData, refundAmount: e.target.value})}
                />
              </div>
            </div>
            {formData.preferredResolution === "replacement" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="replacementProductName">Replacement Product</Label>
                  <Input
                    id="replacementProductName"
                    value={formData.replacementProductName}
                    onChange={(e) => setFormData({...formData, replacementProductName: e.target.value})}
                    placeholder="Same or different product"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="replacementQuantity">Replacement Quantity</Label>
                  <Input
                    id="replacementQuantity"
                    type="number"
                    value={formData.replacementQuantity}
                    onChange={(e) => setFormData({...formData, replacementQuantity: e.target.value})}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Pickup Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pickup Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pickupAddress">Pickup Address</Label>
              <Textarea
                id="pickupAddress"
                value={formData.pickupAddress}
                onChange={(e) => setFormData({...formData, pickupAddress: e.target.value})}
              />
            </div>
          </div>

          {/* Remarks */}
          <div className="space-y-2">
            <Label htmlFor="remarks">Additional Remarks</Label>
            <Textarea
              id="remarks"
              value={formData.remarks}
              onChange={(e) => setFormData({...formData, remarks: e.target.value})}
            />
          </div>

          <Button type="submit" className="w-full">Submit Return Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedReturnReplacementForm;

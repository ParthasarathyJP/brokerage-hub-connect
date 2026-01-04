import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedPurchaseOrderForm = () => {
  const [formData, setFormData] = useState({
    poNumber: "",
    poDate: "",
    buyerRequestId: "",
    quotationId: "",
    buyerName: "",
    buyerGstin: "",
    buyerAddress: "",
    buyerContact: "",
    supplierName: "",
    supplierGstin: "",
    supplierAddress: "",
    supplierContact: "",
    productName: "",
    productCode: "",
    hsnCode: "",
    quantity: "",
    unit: "",
    unitPrice: "",
    cgst: "",
    sgst: "",
    igst: "",
    totalAmount: "",
    deliveryAddress: "",
    deliveryDate: "",
    paymentTerms: "",
    advanceAmount: "",
    balanceAmount: "",
    specialInstructions: "",
    termsAndConditions: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Purchase Order:", formData);
    toast.success("Purchase order generated successfully!");
  };

  const generatePONumber = () => {
    const prefix = "PO-SF";
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    setFormData({...formData, poNumber: `${prefix}-${date}-${random}`});
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Purchase Order Form</CardTitle>
        <CardDescription>
          Generate purchase orders from approved buyer requests and quotations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PO Header */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Purchase Order Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="poNumber">PO Number *</Label>
                <div className="flex gap-2">
                  <Input
                    id="poNumber"
                    value={formData.poNumber}
                    onChange={(e) => setFormData({...formData, poNumber: e.target.value})}
                    required
                  />
                  <Button type="button" variant="outline" onClick={generatePONumber}>
                    Generate
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="poDate">PO Date *</Label>
                <Input
                  id="poDate"
                  type="date"
                  value={formData.poDate}
                  onChange={(e) => setFormData({...formData, poDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quotationId">Reference Quotation ID</Label>
                <Input
                  id="quotationId"
                  value={formData.quotationId}
                  onChange={(e) => setFormData({...formData, quotationId: e.target.value})}
                  placeholder="Link to approved quotation"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerRequestId">Buyer Request ID</Label>
                <Input
                  id="buyerRequestId"
                  value={formData.buyerRequestId}
                  onChange={(e) => setFormData({...formData, buyerRequestId: e.target.value})}
                  placeholder="Original request reference"
                />
              </div>
            </div>
          </div>

          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Buyer Details</h3>
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
                <Label htmlFor="buyerGstin">Buyer GSTIN</Label>
                <Input
                  id="buyerGstin"
                  value={formData.buyerGstin}
                  onChange={(e) => setFormData({...formData, buyerGstin: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerContact">Contact Number *</Label>
                <Input
                  id="buyerContact"
                  value={formData.buyerContact}
                  onChange={(e) => setFormData({...formData, buyerContact: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="buyerAddress">Buyer Address *</Label>
              <Textarea
                id="buyerAddress"
                value={formData.buyerAddress}
                onChange={(e) => setFormData({...formData, buyerAddress: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Supplier Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Supplier Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="supplierName">Supplier Name *</Label>
                <Input
                  id="supplierName"
                  value={formData.supplierName}
                  onChange={(e) => setFormData({...formData, supplierName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplierGstin">Supplier GSTIN</Label>
                <Input
                  id="supplierGstin"
                  value={formData.supplierGstin}
                  onChange={(e) => setFormData({...formData, supplierGstin: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplierContact">Contact Number *</Label>
                <Input
                  id="supplierContact"
                  value={formData.supplierContact}
                  onChange={(e) => setFormData({...formData, supplierContact: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="supplierAddress">Supplier Address *</Label>
              <Textarea
                id="supplierAddress"
                value={formData.supplierAddress}
                onChange={(e) => setFormData({...formData, supplierAddress: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productCode">Product Code</Label>
                <Input
                  id="productCode"
                  value={formData.productCode}
                  onChange={(e) => setFormData({...formData, productCode: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hsnCode">HSN Code</Label>
                <Input
                  id="hsnCode"
                  value={formData.hsnCode}
                  onChange={(e) => setFormData({...formData, hsnCode: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
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
                    <SelectItem value="kg">Kilograms</SelectItem>
                    <SelectItem value="quintal">Quintals</SelectItem>
                    <SelectItem value="ton">Metric Tons</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="unitPrice">Unit Price (₹) *</Label>
                <Input
                  id="unitPrice"
                  type="number"
                  value={formData.unitPrice}
                  onChange={(e) => setFormData({...formData, unitPrice: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cgst">CGST (%)</Label>
                <Input
                  id="cgst"
                  type="number"
                  value={formData.cgst}
                  onChange={(e) => setFormData({...formData, cgst: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sgst">SGST (%)</Label>
                <Input
                  id="sgst"
                  type="number"
                  value={formData.sgst}
                  onChange={(e) => setFormData({...formData, sgst: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalAmount">Total Amount (₹)</Label>
                <Input
                  id="totalAmount"
                  type="number"
                  value={formData.totalAmount}
                  onChange={(e) => setFormData({...formData, totalAmount: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Delivery & Payment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Delivery & Payment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryDate">Expected Delivery Date *</Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select onValueChange={(value) => setFormData({...formData, paymentTerms: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance">100% Advance</SelectItem>
                    <SelectItem value="50-50">50% Advance, 50% on Delivery</SelectItem>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="credit-30">30 Days Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="advanceAmount">Advance Amount (₹)</Label>
                <Input
                  id="advanceAmount"
                  type="number"
                  value={formData.advanceAmount}
                  onChange={(e) => setFormData({...formData, advanceAmount: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="balanceAmount">Balance Amount (₹)</Label>
                <Input
                  id="balanceAmount"
                  type="number"
                  value={formData.balanceAmount}
                  onChange={(e) => setFormData({...formData, balanceAmount: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryAddress">Delivery Address *</Label>
              <Textarea
                id="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialInstructions">Special Instructions</Label>
              <Textarea
                id="specialInstructions"
                value={formData.specialInstructions}
                onChange={(e) => setFormData({...formData, specialInstructions: e.target.value})}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Generate Purchase Order</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedPurchaseOrderForm;

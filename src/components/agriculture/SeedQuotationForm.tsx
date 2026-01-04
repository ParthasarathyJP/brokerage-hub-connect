import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedQuotationForm = () => {
  const [formData, setFormData] = useState({
    quotationNumber: "",
    quotationDate: "",
    validUntil: "",
    buyerRequestId: "",
    supplierName: "",
    supplierContact: "",
    buyerName: "",
    productName: "",
    quantity: "",
    unit: "",
    unitPrice: "",
    totalAmount: "",
    discountPercent: "",
    discountAmount: "",
    taxPercent: "",
    taxAmount: "",
    shippingCharges: "",
    grandTotal: "",
    deliveryTerms: "",
    paymentTerms: "",
    deliveryTimeline: "",
    warrantyTerms: "",
    negotiationNotes: "",
    counterOfferPrice: "",
    counterOfferRemarks: ""
  });

  const calculateTotals = () => {
    const qty = parseFloat(formData.quantity) || 0;
    const unitPrice = parseFloat(formData.unitPrice) || 0;
    const discountPercent = parseFloat(formData.discountPercent) || 0;
    const taxPercent = parseFloat(formData.taxPercent) || 0;
    const shipping = parseFloat(formData.shippingCharges) || 0;

    const total = qty * unitPrice;
    const discount = (total * discountPercent) / 100;
    const afterDiscount = total - discount;
    const tax = (afterDiscount * taxPercent) / 100;
    const grand = afterDiscount + tax + shipping;

    setFormData({
      ...formData,
      totalAmount: total.toFixed(2),
      discountAmount: discount.toFixed(2),
      taxAmount: tax.toFixed(2),
      grandTotal: grand.toFixed(2)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quotation Form:", formData);
    toast.success("Quotation submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Quotation / Price Negotiation Form</CardTitle>
        <CardDescription>
          Submit and negotiate quotations for seeds and fertilizers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Quotation Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Quotation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quotationNumber">Quotation Number *</Label>
                <Input
                  id="quotationNumber"
                  value={formData.quotationNumber}
                  onChange={(e) => setFormData({...formData, quotationNumber: e.target.value})}
                  placeholder="Auto-generated or manual"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quotationDate">Quotation Date *</Label>
                <Input
                  id="quotationDate"
                  type="date"
                  value={formData.quotationDate}
                  onChange={(e) => setFormData({...formData, quotationDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="validUntil">Valid Until *</Label>
                <Input
                  id="validUntil"
                  type="date"
                  value={formData.validUntil}
                  onChange={(e) => setFormData({...formData, validUntil: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerRequestId">Buyer Request ID (if applicable)</Label>
                <Input
                  id="buyerRequestId"
                  value={formData.buyerRequestId}
                  onChange={(e) => setFormData({...formData, buyerRequestId: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Parties */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Supplier & Buyer Details</h3>
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
                <Label htmlFor="supplierContact">Supplier Contact</Label>
                <Input
                  id="supplierContact"
                  value={formData.supplierContact}
                  onChange={(e) => setFormData({...formData, supplierContact: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name *</Label>
                <Input
                  id="buyerName"
                  value={formData.buyerName}
                  onChange={(e) => setFormData({...formData, buyerName: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Product & Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product & Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="productName">Product Name / Description *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  required
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
                <Label htmlFor="discountPercent">Discount (%)</Label>
                <Input
                  id="discountPercent"
                  type="number"
                  value={formData.discountPercent}
                  onChange={(e) => setFormData({...formData, discountPercent: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxPercent">Tax/GST (%)</Label>
                <Input
                  id="taxPercent"
                  type="number"
                  value={formData.taxPercent}
                  onChange={(e) => setFormData({...formData, taxPercent: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shippingCharges">Shipping Charges (₹)</Label>
                <Input
                  id="shippingCharges"
                  type="number"
                  value={formData.shippingCharges}
                  onChange={(e) => setFormData({...formData, shippingCharges: e.target.value})}
                />
              </div>
            </div>
            <Button type="button" variant="outline" onClick={calculateTotals}>
              Calculate Totals
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-muted p-4 rounded-lg">
              <div>
                <Label className="text-xs">Total Amount</Label>
                <p className="font-semibold">₹{formData.totalAmount || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">Discount</Label>
                <p className="font-semibold text-green-600">-₹{formData.discountAmount || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">Tax</Label>
                <p className="font-semibold">+₹{formData.taxAmount || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">Grand Total</Label>
                <p className="font-bold text-lg">₹{formData.grandTotal || "0.00"}</p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Terms & Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryTerms">Delivery Terms</Label>
                <Select onValueChange={(value) => setFormData({...formData, deliveryTerms: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ex-warehouse">Ex-Warehouse</SelectItem>
                    <SelectItem value="door-delivery">Door Delivery</SelectItem>
                    <SelectItem value="fob">FOB</SelectItem>
                    <SelectItem value="cif">CIF</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="deliveryTimeline">Delivery Timeline</Label>
                <Input
                  id="deliveryTimeline"
                  value={formData.deliveryTimeline}
                  onChange={(e) => setFormData({...formData, deliveryTimeline: e.target.value})}
                  placeholder="e.g., 7-10 working days"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyTerms">Warranty/Guarantee</Label>
                <Input
                  id="warrantyTerms"
                  value={formData.warrantyTerms}
                  onChange={(e) => setFormData({...formData, warrantyTerms: e.target.value})}
                  placeholder="e.g., Germination guarantee 85%"
                />
              </div>
            </div>
          </div>

          {/* Negotiation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Price Negotiation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="counterOfferPrice">Counter Offer Price (₹)</Label>
                <Input
                  id="counterOfferPrice"
                  type="number"
                  value={formData.counterOfferPrice}
                  onChange={(e) => setFormData({...formData, counterOfferPrice: e.target.value})}
                  placeholder="Buyer's counter offer"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="negotiationNotes">Negotiation Notes</Label>
              <Textarea
                id="negotiationNotes"
                value={formData.negotiationNotes}
                onChange={(e) => setFormData({...formData, negotiationNotes: e.target.value})}
                placeholder="Record negotiation discussions and agreements"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Quotation</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedQuotationForm;

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedPaymentInvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    poNumber: "",
    dueDate: "",
    sellerName: "",
    sellerGstin: "",
    sellerAddress: "",
    sellerBankName: "",
    sellerAccountNumber: "",
    sellerIfsc: "",
    buyerName: "",
    buyerGstin: "",
    buyerAddress: "",
    productName: "",
    hsnCode: "",
    quantity: "",
    unit: "",
    unitPrice: "",
    taxableAmount: "",
    cgstRate: "",
    cgstAmount: "",
    sgstRate: "",
    sgstAmount: "",
    igstRate: "",
    igstAmount: "",
    totalTax: "",
    grandTotal: "",
    amountInWords: "",
    paymentStatus: "",
    paymentMode: "",
    paymentDate: "",
    transactionId: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment Invoice:", formData);
    toast.success("Invoice generated successfully!");
  };

  const calculateTax = () => {
    const qty = parseFloat(formData.quantity) || 0;
    const price = parseFloat(formData.unitPrice) || 0;
    const cgstRate = parseFloat(formData.cgstRate) || 0;
    const sgstRate = parseFloat(formData.sgstRate) || 0;
    const igstRate = parseFloat(formData.igstRate) || 0;

    const taxable = qty * price;
    const cgst = (taxable * cgstRate) / 100;
    const sgst = (taxable * sgstRate) / 100;
    const igst = (taxable * igstRate) / 100;
    const totalTax = cgst + sgst + igst;
    const grand = taxable + totalTax;

    setFormData({
      ...formData,
      taxableAmount: taxable.toFixed(2),
      cgstAmount: cgst.toFixed(2),
      sgstAmount: sgst.toFixed(2),
      igstAmount: igst.toFixed(2),
      totalTax: totalTax.toFixed(2),
      grandTotal: grand.toFixed(2)
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Payment & Invoice Form</CardTitle>
        <CardDescription>
          Generate GST-compliant invoices integrated with financial assets vertical
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Invoice Header */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Invoice Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number *</Label>
                <Input
                  id="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={(e) => setFormData({...formData, invoiceNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoiceDate">Invoice Date *</Label>
                <Input
                  id="invoiceDate"
                  type="date"
                  value={formData.invoiceDate}
                  onChange={(e) => setFormData({...formData, invoiceDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="poNumber">PO Reference</Label>
                <Input
                  id="poNumber"
                  value={formData.poNumber}
                  onChange={(e) => setFormData({...formData, poNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Seller Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Seller Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sellerName">Seller Name *</Label>
                <Input
                  id="sellerName"
                  value={formData.sellerName}
                  onChange={(e) => setFormData({...formData, sellerName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerGstin">Seller GSTIN *</Label>
                <Input
                  id="sellerGstin"
                  value={formData.sellerGstin}
                  onChange={(e) => setFormData({...formData, sellerGstin: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sellerAddress">Seller Address *</Label>
              <Textarea
                id="sellerAddress"
                value={formData.sellerAddress}
                onChange={(e) => setFormData({...formData, sellerAddress: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sellerBankName">Bank Name</Label>
                <Input
                  id="sellerBankName"
                  value={formData.sellerBankName}
                  onChange={(e) => setFormData({...formData, sellerBankName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerAccountNumber">Account Number</Label>
                <Input
                  id="sellerAccountNumber"
                  value={formData.sellerAccountNumber}
                  onChange={(e) => setFormData({...formData, sellerAccountNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerIfsc">IFSC Code</Label>
                <Input
                  id="sellerIfsc"
                  value={formData.sellerIfsc}
                  onChange={(e) => setFormData({...formData, sellerIfsc: e.target.value})}
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

          {/* Product & Tax Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product & Tax Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="productName">Product Description *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  required
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
                <Label htmlFor="unit">Unit</Label>
                <Select onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">KG</SelectItem>
                    <SelectItem value="quintal">Quintal</SelectItem>
                    <SelectItem value="ton">Ton</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="cgstRate">CGST Rate (%)</Label>
                <Input
                  id="cgstRate"
                  type="number"
                  value={formData.cgstRate}
                  onChange={(e) => setFormData({...formData, cgstRate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sgstRate">SGST Rate (%)</Label>
                <Input
                  id="sgstRate"
                  type="number"
                  value={formData.sgstRate}
                  onChange={(e) => setFormData({...formData, sgstRate: e.target.value})}
                />
              </div>
            </div>
            <Button type="button" variant="outline" onClick={calculateTax}>
              Calculate Tax
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-muted p-4 rounded-lg">
              <div>
                <Label className="text-xs">Taxable Amount</Label>
                <p className="font-semibold">₹{formData.taxableAmount || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">CGST</Label>
                <p className="font-semibold">₹{formData.cgstAmount || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">SGST</Label>
                <p className="font-semibold">₹{formData.sgstAmount || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">Total Tax</Label>
                <p className="font-semibold">₹{formData.totalTax || "0.00"}</p>
              </div>
              <div>
                <Label className="text-xs">Grand Total</Label>
                <p className="font-bold text-lg">₹{formData.grandTotal || "0.00"}</p>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Payment Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentStatus">Payment Status</Label>
                <Select onValueChange={(value) => setFormData({...formData, paymentStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="partial">Partially Paid</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentMode">Payment Mode</Label>
                <Select onValueChange={(value) => setFormData({...formData, paymentMode: value})}>
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
                <Label htmlFor="paymentDate">Payment Date</Label>
                <Input
                  id="paymentDate"
                  type="date"
                  value={formData.paymentDate}
                  onChange={(e) => setFormData({...formData, paymentDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionId">Transaction ID</Label>
                <Input
                  id="transactionId"
                  value={formData.transactionId}
                  onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Generate Invoice</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedPaymentInvoiceForm;

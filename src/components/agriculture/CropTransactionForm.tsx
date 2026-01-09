import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropTransactionForm = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    orderDate: "",
    buyerId: "",
    buyerName: "",
    sellerId: "",
    sellerName: "",
    cropType: "",
    variety: "",
    quantity: "",
    quantityUnit: "quintals",
    pricePerUnit: "",
    totalAmount: "",
    paymentStatus: "",
    paymentDate: "",
    paymentMode: "",
    transactionId: "",
    deliveryStatus: "",
    expectedDeliveryDate: "",
    actualDeliveryDate: "",
    trackingId: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Marketplace Transaction:", formData);
    toast.success("Transaction record submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Marketplace Transaction Form</CardTitle>
        <CardDescription>
          Record and track marketplace transactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Order Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderId">Order ID *</Label>
                <Input
                  id="orderId"
                  value={formData.orderId}
                  onChange={(e) => handleChange("orderId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderDate">Order Date *</Label>
                <Input
                  id="orderDate"
                  type="date"
                  value={formData.orderDate}
                  onChange={(e) => handleChange("orderDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Buyer & Seller */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Buyer & Seller</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerId">Buyer ID *</Label>
                <Input
                  id="buyerId"
                  value={formData.buyerId}
                  onChange={(e) => handleChange("buyerId", e.target.value)}
                  required
                />
              </div>
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
                <Label htmlFor="sellerId">Seller ID *</Label>
                <Input
                  id="sellerId"
                  value={formData.sellerId}
                  onChange={(e) => handleChange("sellerId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerName">Seller Name *</Label>
                <Input
                  id="sellerName"
                  value={formData.sellerName}
                  onChange={(e) => handleChange("sellerName", e.target.value)}
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
                <Label htmlFor="variety">Variety</Label>
                <Input
                  id="variety"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                />
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
                <Label htmlFor="totalAmount">Total Amount (₹) *</Label>
                <Input
                  id="totalAmount"
                  type="number"
                  value={formData.totalAmount}
                  onChange={(e) => handleChange("totalAmount", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Payment Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentStatus">Payment Status *</Label>
                <Select value={formData.paymentStatus} onValueChange={(value) => handleChange("paymentStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="partial">Partial Payment</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                    <SelectItem value="disputed">Disputed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentMode">Payment Mode</Label>
                <Select value={formData.paymentMode} onValueChange={(value) => handleChange("paymentMode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="escrow">Escrow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentDate">Payment Date</Label>
                <Input
                  id="paymentDate"
                  type="date"
                  value={formData.paymentDate}
                  onChange={(e) => handleChange("paymentDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionId">Transaction ID</Label>
                <Input
                  id="transactionId"
                  value={formData.transactionId}
                  onChange={(e) => handleChange("transactionId", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Delivery Tracking */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Delivery Tracking</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryStatus">Delivery Status *</Label>
                <Select value={formData.deliveryStatus} onValueChange={(value) => handleChange("deliveryStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="dispatched">Dispatched</SelectItem>
                    <SelectItem value="in-transit">In Transit</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="trackingId">Tracking ID</Label>
                <Input
                  id="trackingId"
                  value={formData.trackingId}
                  onChange={(e) => handleChange("trackingId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedDeliveryDate">Expected Delivery Date</Label>
                <Input
                  id="expectedDeliveryDate"
                  type="date"
                  value={formData.expectedDeliveryDate}
                  onChange={(e) => handleChange("expectedDeliveryDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="actualDeliveryDate">Actual Delivery Date</Label>
                <Input
                  id="actualDeliveryDate"
                  type="date"
                  value={formData.actualDeliveryDate}
                  onChange={(e) => handleChange("actualDeliveryDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              placeholder="Any additional notes about the transaction..."
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Transaction</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropTransactionForm;

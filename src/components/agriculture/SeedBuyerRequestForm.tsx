import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedBuyerRequestForm = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    buyerType: "",
    contactNumber: "",
    email: "",
    productType: "",
    productName: "",
    quantity: "",
    unit: "",
    qualityGrade: "",
    deliveryState: "",
    deliveryDistrict: "",
    deliveryAddress: "",
    deliveryPincode: "",
    preferredDeliveryDate: "",
    preferredSupplier: "",
    budgetMin: "",
    budgetMax: "",
    paymentTerms: "",
    specialRequirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buyer Request Form:", formData);
    toast.success("Buyer request submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Buyer Request Form</CardTitle>
        <CardDescription>
          Submit requirements for seeds/fertilizers with quantity, delivery location, and preferred supplier
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Buyer Information</h3>
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
                <Label htmlFor="buyerType">Buyer Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, buyerType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select buyer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Individual Farmer</SelectItem>
                    <SelectItem value="fpo">FPO/Cooperative</SelectItem>
                    <SelectItem value="dealer">Dealer/Retailer</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="government">Government Agency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Product Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productType">Product Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, productType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeds">Seeds</SelectItem>
                    <SelectItem value="fertilizers">Fertilizers</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name/Variety</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  placeholder="Specific product or variety name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Required *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit *</Label>
                <Select onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kilograms (kg)</SelectItem>
                    <SelectItem value="quintal">Quintals</SelectItem>
                    <SelectItem value="ton">Metric Tons</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                    <SelectItem value="packets">Packets</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualityGrade">Quality Grade Preferred</Label>
                <Select onValueChange={(value) => setFormData({...formData, qualityGrade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certified">Certified/Premium</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="economy">Economy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Delivery Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryState">State *</Label>
                <Input
                  id="deliveryState"
                  value={formData.deliveryState}
                  onChange={(e) => setFormData({...formData, deliveryState: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryDistrict">District *</Label>
                <Input
                  id="deliveryDistrict"
                  value={formData.deliveryDistrict}
                  onChange={(e) => setFormData({...formData, deliveryDistrict: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="deliveryAddress">Full Address *</Label>
                <Textarea
                  id="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryPincode">Pincode *</Label>
                <Input
                  id="deliveryPincode"
                  value={formData.deliveryPincode}
                  onChange={(e) => setFormData({...formData, deliveryPincode: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredDeliveryDate">Preferred Delivery Date</Label>
                <Input
                  id="preferredDeliveryDate"
                  type="date"
                  value={formData.preferredDeliveryDate}
                  onChange={(e) => setFormData({...formData, preferredDeliveryDate: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Supplier & Budget */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Preferred Supplier & Budget</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredSupplier">Preferred Supplier (if any)</Label>
                <Input
                  id="preferredSupplier"
                  value={formData.preferredSupplier}
                  onChange={(e) => setFormData({...formData, preferredSupplier: e.target.value})}
                  placeholder="Supplier name or ID"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetMin">Budget Min (₹)</Label>
                <Input
                  id="budgetMin"
                  type="number"
                  value={formData.budgetMin}
                  onChange={(e) => setFormData({...formData, budgetMin: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetMax">Budget Max (₹)</Label>
                <Input
                  id="budgetMax"
                  type="number"
                  value={formData.budgetMax}
                  onChange={(e) => setFormData({...formData, budgetMax: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentTerms">Payment Terms Preferred</Label>
              <Select onValueChange={(value) => setFormData({...formData, paymentTerms: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment terms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="advance">100% Advance</SelectItem>
                  <SelectItem value="cod">Cash on Delivery</SelectItem>
                  <SelectItem value="credit-7">7 Days Credit</SelectItem>
                  <SelectItem value="credit-15">15 Days Credit</SelectItem>
                  <SelectItem value="credit-30">30 Days Credit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
                placeholder="Any specific requirements or notes"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Buyer Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedBuyerRequestForm;

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PesticideMarketplaceForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    listingId: "",
    listingDate: "",
    sellerName: "",
    sellerType: "",
    sellerId: "",
    contactNumber: "",
    email: "",
    address: "",
    district: "",
    state: "",
    listingType: "",
    productCategory: "",
    productName: "",
    brandName: "",
    activeIngredient: "",
    formulation: "",
    packSize: "",
    quantity: "",
    unit: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    originalPrice: "",
    sellingPrice: "",
    reasonForSale: "",
    productCondition: "",
    storageConditions: "",
    certifications: "",
    registrationNumber: "",
    safetyDatasheet: "",
    deliveryOption: "",
    deliveryCharges: "",
    paymentTerms: "",
    negotiable: "",
    additionalInfo: ""
  });

  const [declarations, setDeclarations] = useState({
    productAuthentic: false,
    notExpired: false,
    properlyStored: false,
    legalCompliance: false,
    termsAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarations.productAuthentic || !declarations.legalCompliance || !declarations.termsAccepted) {
      toast({
        title: "Declaration Required",
        description: "Please accept all required declarations before submitting.",
        variant: "destructive"
      });
      return;
    }
    console.log("Pesticide Marketplace Listing:", { ...formData, declarations });
    toast({
      title: "Listing Submitted",
      description: "Your marketplace listing has been submitted for review and approval."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Marketplace Listing Form - Pesticides & Pest Control Kits
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          For resale of unused pesticides, organic pest control kits, and related products
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Listing Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Listing Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="listingId">Listing ID</Label>
                <Input
                  id="listingId"
                  placeholder="Auto-generated"
                  value={formData.listingId}
                  onChange={(e) => handleChange("listingId", e.target.value)}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingDate">Listing Date *</Label>
                <Input
                  id="listingDate"
                  type="date"
                  value={formData.listingDate}
                  onChange={(e) => handleChange("listingDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingType">Listing Type *</Label>
                <Select onValueChange={(value) => handleChange("listingType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="exchange">Exchange</SelectItem>
                    <SelectItem value="donate">Donate</SelectItem>
                  </SelectContent>
                </Select>
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
                  onChange={(e) => handleChange("sellerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerType">Seller Type *</Label>
                <Select onValueChange={(value) => handleChange("sellerType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="vendor">Vendor/Dealer</SelectItem>
                    <SelectItem value="cooperative">Cooperative</SelectItem>
                    <SelectItem value="fpo">FPO</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerId">Seller ID / Registration Number</Label>
                <Input
                  id="sellerId"
                  value={formData.sellerId}
                  onChange={(e) => handleChange("sellerId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => handleChange("contactNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleChange("district", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category *</Label>
                <Select onValueChange={(value) => handleChange("productCategory", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="insecticide">Insecticide</SelectItem>
                    <SelectItem value="fungicide">Fungicide</SelectItem>
                    <SelectItem value="herbicide">Herbicide</SelectItem>
                    <SelectItem value="rodenticide">Rodenticide</SelectItem>
                    <SelectItem value="bio-pesticide">Bio-Pesticide</SelectItem>
                    <SelectItem value="organic-kit">Organic Pest Control Kit</SelectItem>
                    <SelectItem value="neem-product">Neem-based Product</SelectItem>
                    <SelectItem value="pheromone-trap">Pheromone Trap</SelectItem>
                    <SelectItem value="spray-equipment">Spray Equipment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => handleChange("productName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brandName">Brand Name *</Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => handleChange("brandName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activeIngredient">Active Ingredient</Label>
                <Input
                  id="activeIngredient"
                  placeholder="For chemical products"
                  value={formData.activeIngredient}
                  onChange={(e) => handleChange("activeIngredient", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="formulation">Formulation Type</Label>
                <Select onValueChange={(value) => handleChange("formulation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select formulation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ec">EC (Emulsifiable Concentrate)</SelectItem>
                    <SelectItem value="sc">SC (Suspension Concentrate)</SelectItem>
                    <SelectItem value="wp">WP (Wettable Powder)</SelectItem>
                    <SelectItem value="sp">SP (Soluble Powder)</SelectItem>
                    <SelectItem value="gr">GR (Granules)</SelectItem>
                    <SelectItem value="dust">Dust</SelectItem>
                    <SelectItem value="liquid">Liquid</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">CIB&RC Registration Number</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => handleChange("registrationNumber", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Quantity & Batch Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Quantity & Batch Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="packSize">Pack Size</Label>
                <Input
                  id="packSize"
                  placeholder="e.g., 500ml, 1kg"
                  value={formData.packSize}
                  onChange={(e) => handleChange("packSize", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Available *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Select onValueChange={(value) => handleChange("unit", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pieces">Pieces</SelectItem>
                    <SelectItem value="bottles">Bottles</SelectItem>
                    <SelectItem value="packets">Packets</SelectItem>
                    <SelectItem value="liters">Liters</SelectItem>
                    <SelectItem value="kg">Kilograms</SelectItem>
                    <SelectItem value="sets">Sets/Kits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="batchNumber">Batch Number *</Label>
                <Input
                  id="batchNumber"
                  value={formData.batchNumber}
                  onChange={(e) => handleChange("batchNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturingDate">Manufacturing Date *</Label>
                <Input
                  id="manufacturingDate"
                  type="date"
                  value={formData.manufacturingDate}
                  onChange={(e) => handleChange("manufacturingDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => handleChange("expiryDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original MRP (₹)</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  value={formData.originalPrice}
                  onChange={(e) => handleChange("originalPrice", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellingPrice">Selling Price (₹) *</Label>
                <Input
                  id="sellingPrice"
                  type="number"
                  value={formData.sellingPrice}
                  onChange={(e) => handleChange("sellingPrice", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="negotiable">Price Negotiable?</Label>
                <Select onValueChange={(value) => handleChange("negotiable", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="slightly">Slightly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product Condition */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Condition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productCondition">Product Condition *</Label>
                <Select onValueChange={(value) => handleChange("productCondition", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sealed">Sealed/Unopened</SelectItem>
                    <SelectItem value="opened-unused">Opened but Unused</SelectItem>
                    <SelectItem value="partially-used">Partially Used</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="storageConditions">Storage Conditions</Label>
                <Select onValueChange={(value) => handleChange("storageConditions", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cool-dry">Cool & Dry Place</SelectItem>
                    <SelectItem value="refrigerated">Refrigerated</SelectItem>
                    <SelectItem value="room-temp">Room Temperature</SelectItem>
                    <SelectItem value="warehouse">Warehouse Stored</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="reasonForSale">Reason for Sale *</Label>
                <Select onValueChange={(value) => handleChange("reasonForSale", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excess-stock">Excess Stock</SelectItem>
                    <SelectItem value="crop-change">Changed Crop Pattern</SelectItem>
                    <SelectItem value="switched-organic">Switched to Organic</SelectItem>
                    <SelectItem value="not-needed">No Longer Needed</SelectItem>
                    <SelectItem value="closing-business">Closing Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Delivery & Payment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryOption">Delivery Option *</Label>
                <Select onValueChange={(value) => handleChange("deliveryOption", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">Pickup Only</SelectItem>
                    <SelectItem value="local-delivery">Local Delivery</SelectItem>
                    <SelectItem value="courier">Courier/Shipping</SelectItem>
                    <SelectItem value="both">Pickup or Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryCharges">Delivery Charges (₹)</Label>
                <Input
                  id="deliveryCharges"
                  type="number"
                  placeholder="0 for free delivery"
                  value={formData.deliveryCharges}
                  onChange={(e) => handleChange("deliveryCharges", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select onValueChange={(value) => handleChange("paymentTerms", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance">Full Advance</SelectItem>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="partial">Partial Advance</SelectItem>
                    <SelectItem value="upi">UPI/Online Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Images & Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Product Photos *</Label>
                <Input type="file" accept="image/*" multiple />
                <p className="text-xs text-muted-foreground">Upload clear photos of product (Max 5)</p>
              </div>
              <div className="space-y-2">
                <Label>Safety Data Sheet (if available)</Label>
                <Input type="file" accept=".pdf" />
              </div>
            </div>
          </div>

          {/* Declarations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Declarations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="productAuthentic"
                  checked={declarations.productAuthentic}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, productAuthentic: !!checked }))}
                />
                <Label htmlFor="productAuthentic" className="text-sm">
                  I declare that the product is authentic and not counterfeit *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="notExpired"
                  checked={declarations.notExpired}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, notExpired: !!checked }))}
                />
                <Label htmlFor="notExpired" className="text-sm">
                  I confirm the product has not expired and has sufficient shelf life remaining
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="properlyStored"
                  checked={declarations.properlyStored}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, properlyStored: !!checked }))}
                />
                <Label htmlFor="properlyStored" className="text-sm">
                  The product has been stored as per manufacturer recommendations
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="legalCompliance"
                  checked={declarations.legalCompliance}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, legalCompliance: !!checked }))}
                />
                <Label htmlFor="legalCompliance" className="text-sm">
                  I understand and comply with all legal regulations for selling pesticides/agrochemicals *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={declarations.termsAccepted}
                  onCheckedChange={(checked) => setDeclarations(prev => ({ ...prev, termsAccepted: !!checked }))}
                />
                <Label htmlFor="termsAccepted" className="text-sm">
                  I agree to the marketplace terms and conditions *
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any additional details about the product..."
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              rows={2}
            />
          </div>

          <Button type="submit" className="w-full">Submit Listing for Approval</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PesticideMarketplaceForm;

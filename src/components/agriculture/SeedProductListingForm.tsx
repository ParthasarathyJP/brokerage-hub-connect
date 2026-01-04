import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedProductListingForm = () => {
  const [formData, setFormData] = useState({
    productType: "",
    productName: "",
    cropType: "",
    varietyType: "",
    certificationStatus: "",
    fertilizerType: "",
    fertilizerCategory: "",
    packageSize1: "",
    price1: "",
    packageSize2: "",
    price2: "",
    packageSize3: "",
    price3: "",
    supplierName: "",
    manufacturerName: "",
    manufacturerLicense: "",
    contactNumber: "",
    email: "",
    address: "",
    productDescription: "",
    shelfLife: "",
    storageInstructions: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Seed/Fertilizer Product Listing:", formData);
    toast.success("Product listing submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Product Listing & Catalog Form</CardTitle>
        <CardDescription>
          Register seeds and fertilizers with variety details, pricing, and supplier information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Type Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productType">Product Category *</Label>
                <Select onValueChange={(value) => setFormData({...formData, productType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seed">Seeds</SelectItem>
                    <SelectItem value="fertilizer">Fertilizers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  placeholder="Enter product name"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seed Details */}
          {formData.productType === "seed" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Seed Variety Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cropType">Crop Type *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, cropType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cereals">Cereals (Wheat, Rice, Maize)</SelectItem>
                      <SelectItem value="pulses">Pulses (Lentils, Chickpeas)</SelectItem>
                      <SelectItem value="oilseeds">Oilseeds (Mustard, Groundnut)</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="spices">Spices</SelectItem>
                      <SelectItem value="fiber">Fiber Crops (Cotton, Jute)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="varietyType">Variety Type *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, varietyType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select variety type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="open-pollinated">Open-Pollinated</SelectItem>
                      <SelectItem value="heirloom">Heirloom</SelectItem>
                      <SelectItem value="gmo">GMO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certificationStatus">Certification Status *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, certificationStatus: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select certification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="certified">Certified Seed</SelectItem>
                      <SelectItem value="foundation">Foundation Seed</SelectItem>
                      <SelectItem value="breeder">Breeder Seed</SelectItem>
                      <SelectItem value="truthful">Truthful Label</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Fertilizer Details */}
          {formData.productType === "fertilizer" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Fertilizer Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fertilizerType">Fertilizer Type *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, fertilizerType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fertilizer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organic">Organic</SelectItem>
                      <SelectItem value="chemical">Chemical</SelectItem>
                      <SelectItem value="micronutrients">Micronutrients</SelectItem>
                      <SelectItem value="biofertilizers">Biofertilizers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fertilizerCategory">Category</Label>
                  <Select onValueChange={(value) => setFormData({...formData, fertilizerCategory: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nitrogen">Nitrogen-based (Urea, Ammonium)</SelectItem>
                      <SelectItem value="phosphorus">Phosphorus-based (DAP, SSP)</SelectItem>
                      <SelectItem value="potassium">Potassium-based (MOP, SOP)</SelectItem>
                      <SelectItem value="complex">Complex/NPK</SelectItem>
                      <SelectItem value="organic-compost">Organic Compost</SelectItem>
                      <SelectItem value="vermicompost">Vermicompost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Packaging & Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Packaging Sizes & Pricing Tiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Package Size 1</Label>
                <Input
                  value={formData.packageSize1}
                  onChange={(e) => setFormData({...formData, packageSize1: e.target.value})}
                  placeholder="e.g., 1 kg, 5 kg, 25 kg"
                />
              </div>
              <div className="space-y-2">
                <Label>Price (₹)</Label>
                <Input
                  type="number"
                  value={formData.price1}
                  onChange={(e) => setFormData({...formData, price1: e.target.value})}
                  placeholder="Price for size 1"
                />
              </div>
              <div className="space-y-2">
                <Label>Package Size 2</Label>
                <Input
                  value={formData.packageSize2}
                  onChange={(e) => setFormData({...formData, packageSize2: e.target.value})}
                  placeholder="e.g., 10 kg, 50 kg"
                />
              </div>
              <div className="space-y-2">
                <Label>Price (₹)</Label>
                <Input
                  type="number"
                  value={formData.price2}
                  onChange={(e) => setFormData({...formData, price2: e.target.value})}
                  placeholder="Price for size 2"
                />
              </div>
            </div>
          </div>

          {/* Supplier Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Supplier / Manufacturer Details</h3>
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
                <Label htmlFor="manufacturerName">Manufacturer Name *</Label>
                <Input
                  id="manufacturerName"
                  value={formData.manufacturerName}
                  onChange={(e) => setFormData({...formData, manufacturerName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturerLicense">Manufacturer License No.</Label>
                <Input
                  id="manufacturerLicense"
                  value={formData.manufacturerLicense}
                  onChange={(e) => setFormData({...formData, manufacturerLicense: e.target.value})}
                />
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
              <div className="space-y-2">
                <Label htmlFor="shelfLife">Shelf Life (months)</Label>
                <Input
                  id="shelfLife"
                  type="number"
                  value={formData.shelfLife}
                  onChange={(e) => setFormData({...formData, shelfLife: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productDescription">Product Description</Label>
              <Textarea
                id="productDescription"
                value={formData.productDescription}
                onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                placeholder="Detailed product description, usage instructions, benefits"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Product Listing</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedProductListingForm;

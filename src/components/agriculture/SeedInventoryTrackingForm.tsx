import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedInventoryTrackingForm = () => {
  const [formData, setFormData] = useState({
    inventoryId: "",
    warehouseId: "",
    warehouseName: "",
    warehouseLocation: "",
    productCategory: "",
    productName: "",
    productCode: "",
    batchNumber: "",
    lotNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    openingStock: "",
    stockReceived: "",
    stockIssued: "",
    closingStock: "",
    unit: "",
    minimumStockLevel: "",
    maximumStockLevel: "",
    reorderLevel: "",
    storageLocation: "",
    storageCondition: "",
    qualityStatus: "",
    lastInspectionDate: "",
    nextInspectionDate: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inventory Tracking:", formData);
    toast.success("Inventory updated successfully!");
  };

  const calculateClosingStock = () => {
    const opening = parseFloat(formData.openingStock) || 0;
    const received = parseFloat(formData.stockReceived) || 0;
    const issued = parseFloat(formData.stockIssued) || 0;
    const closing = opening + received - issued;
    setFormData({...formData, closingStock: closing.toString()});
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Inventory Tracking Form</CardTitle>
        <CardDescription>
          Track stock levels, batch numbers, and expiry dates for seeds and fertilizers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Warehouse Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Warehouse Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="warehouseId">Warehouse ID</Label>
                <Input
                  id="warehouseId"
                  value={formData.warehouseId}
                  onChange={(e) => setFormData({...formData, warehouseId: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warehouseName">Warehouse Name *</Label>
                <Input
                  id="warehouseName"
                  value={formData.warehouseName}
                  onChange={(e) => setFormData({...formData, warehouseName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warehouseLocation">Location</Label>
                <Input
                  id="warehouseLocation"
                  value={formData.warehouseLocation}
                  onChange={(e) => setFormData({...formData, warehouseLocation: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category *</Label>
                <Select onValueChange={(value) => setFormData({...formData, productCategory: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeds">Seeds</SelectItem>
                    <SelectItem value="fertilizers">Fertilizers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                <Label htmlFor="productCode">Product Code</Label>
                <Input
                  id="productCode"
                  value={formData.productCode}
                  onChange={(e) => setFormData({...formData, productCode: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Batch & Expiry Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Batch & Expiry Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                <Label htmlFor="lotNumber">Lot Number</Label>
                <Input
                  id="lotNumber"
                  value={formData.lotNumber}
                  onChange={(e) => setFormData({...formData, lotNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturingDate">Manufacturing Date *</Label>
                <Input
                  id="manufacturingDate"
                  type="date"
                  value={formData.manufacturingDate}
                  onChange={(e) => setFormData({...formData, manufacturingDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Stock Levels */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Stock Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="openingStock">Opening Stock *</Label>
                <Input
                  id="openingStock"
                  type="number"
                  value={formData.openingStock}
                  onChange={(e) => setFormData({...formData, openingStock: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stockReceived">Stock Received</Label>
                <Input
                  id="stockReceived"
                  type="number"
                  value={formData.stockReceived}
                  onChange={(e) => setFormData({...formData, stockReceived: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stockIssued">Stock Issued</Label>
                <Input
                  id="stockIssued"
                  type="number"
                  value={formData.stockIssued}
                  onChange={(e) => setFormData({...formData, stockIssued: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="closingStock">Closing Stock</Label>
                <Input
                  id="closingStock"
                  type="number"
                  value={formData.closingStock}
                  onChange={(e) => setFormData({...formData, closingStock: e.target.value})}
                  readOnly
                  className="bg-muted"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Select onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">KG</SelectItem>
                    <SelectItem value="quintal">Quintal</SelectItem>
                    <SelectItem value="ton">Ton</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="button" variant="outline" onClick={calculateClosingStock}>
              Calculate Closing Stock
            </Button>
          </div>

          {/* Stock Thresholds */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Stock Thresholds</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minimumStockLevel">Minimum Stock Level</Label>
                <Input
                  id="minimumStockLevel"
                  type="number"
                  value={formData.minimumStockLevel}
                  onChange={(e) => setFormData({...formData, minimumStockLevel: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maximumStockLevel">Maximum Stock Level</Label>
                <Input
                  id="maximumStockLevel"
                  type="number"
                  value={formData.maximumStockLevel}
                  onChange={(e) => setFormData({...formData, maximumStockLevel: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reorderLevel">Reorder Level</Label>
                <Input
                  id="reorderLevel"
                  type="number"
                  value={formData.reorderLevel}
                  onChange={(e) => setFormData({...formData, reorderLevel: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Storage & Quality */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Storage & Quality</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="storageLocation">Storage Location (Rack/Bin)</Label>
                <Input
                  id="storageLocation"
                  value={formData.storageLocation}
                  onChange={(e) => setFormData({...formData, storageLocation: e.target.value})}
                  placeholder="e.g., Rack A-12, Bin 5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storageCondition">Storage Condition</Label>
                <Select onValueChange={(value) => setFormData({...formData, storageCondition: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ambient">Ambient</SelectItem>
                    <SelectItem value="cool-dry">Cool & Dry</SelectItem>
                    <SelectItem value="refrigerated">Refrigerated</SelectItem>
                    <SelectItem value="controlled">Controlled Atmosphere</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualityStatus">Quality Status</Label>
                <Select onValueChange={(value) => setFormData({...formData, qualityStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="under-inspection">Under Inspection</SelectItem>
                    <SelectItem value="quarantine">Quarantine</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastInspectionDate">Last Inspection Date</Label>
                <Input
                  id="lastInspectionDate"
                  type="date"
                  value={formData.lastInspectionDate}
                  onChange={(e) => setFormData({...formData, lastInspectionDate: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea
                id="remarks"
                value={formData.remarks}
                onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                placeholder="Any additional notes about stock condition, issues, etc."
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Update Inventory</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedInventoryTrackingForm;

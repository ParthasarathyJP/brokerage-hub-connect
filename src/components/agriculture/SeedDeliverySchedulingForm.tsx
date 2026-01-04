import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SeedDeliverySchedulingForm = () => {
  const [formData, setFormData] = useState({
    deliveryId: "",
    poNumber: "",
    invoiceNumber: "",
    productName: "",
    quantity: "",
    unit: "",
    pickupLocation: "",
    pickupType: "",
    warehouseName: "",
    warehouseAddress: "",
    coldStorageRequired: false,
    temperatureRange: "",
    deliveryAddress: "",
    deliveryState: "",
    deliveryDistrict: "",
    deliveryPincode: "",
    contactPerson: "",
    contactNumber: "",
    transportMode: "",
    vehicleType: "",
    vehicleNumber: "",
    driverName: "",
    driverContact: "",
    scheduledPickupDate: "",
    scheduledPickupTime: "",
    scheduledDeliveryDate: "",
    scheduledDeliveryTime: "",
    specialHandling: "",
    insuranceRequired: false,
    insuranceValue: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Delivery Scheduling:", formData);
    toast.success("Delivery scheduled successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Delivery Scheduling Form</CardTitle>
        <CardDescription>
          Schedule deliveries with warehouse, cold storage, and transport mode details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Reference Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Reference Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryId">Delivery ID</Label>
                <Input
                  id="deliveryId"
                  value={formData.deliveryId}
                  onChange={(e) => setFormData({...formData, deliveryId: e.target.value})}
                  placeholder="Auto-generated"
                />
              </div>
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
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input
                  id="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={(e) => setFormData({...formData, invoiceNumber: e.target.value})}
                />
              </div>
            </div>
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
            </div>
          </div>

          {/* Pickup Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pickup Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupType">Pickup Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, pickupType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pickup type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="cold-storage">Cold Storage</SelectItem>
                    <SelectItem value="factory">Factory/Plant</SelectItem>
                    <SelectItem value="godown">Godown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="warehouseName">Warehouse/Storage Name *</Label>
                <Input
                  id="warehouseName"
                  value={formData.warehouseName}
                  onChange={(e) => setFormData({...formData, warehouseName: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="warehouseAddress">Warehouse Address *</Label>
              <Textarea
                id="warehouseAddress"
                value={formData.warehouseAddress}
                onChange={(e) => setFormData({...formData, warehouseAddress: e.target.value})}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="coldStorageRequired"
                checked={formData.coldStorageRequired}
                onCheckedChange={(checked) => setFormData({...formData, coldStorageRequired: checked as boolean})}
              />
              <Label htmlFor="coldStorageRequired">Cold Storage/Temperature Control Required</Label>
            </div>
            {formData.coldStorageRequired && (
              <div className="space-y-2">
                <Label htmlFor="temperatureRange">Temperature Range (°C)</Label>
                <Input
                  id="temperatureRange"
                  value={formData.temperatureRange}
                  onChange={(e) => setFormData({...formData, temperatureRange: e.target.value})}
                  placeholder="e.g., 2-8°C"
                />
              </div>
            )}
          </div>

          {/* Delivery Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Delivery Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="space-y-2">
                <Label htmlFor="deliveryPincode">Pincode *</Label>
                <Input
                  id="deliveryPincode"
                  value={formData.deliveryPincode}
                  onChange={(e) => setFormData({...formData, deliveryPincode: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryAddress">Full Delivery Address *</Label>
              <Textarea
                id="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  required
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
            </div>
          </div>

          {/* Transport Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Transport Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="transportMode">Transport Mode *</Label>
                <Select onValueChange={(value) => setFormData({...formData, transportMode: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="road">Road Transport</SelectItem>
                    <SelectItem value="rail">Railway</SelectItem>
                    <SelectItem value="air">Air Freight</SelectItem>
                    <SelectItem value="multimodal">Multimodal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mini-truck">Mini Truck</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="trailer">Trailer</SelectItem>
                    <SelectItem value="refrigerated">Refrigerated Van</SelectItem>
                    <SelectItem value="container">Container</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                <Input
                  id="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={(e) => setFormData({...formData, vehicleNumber: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="driverName">Driver Name</Label>
                <Input
                  id="driverName"
                  value={formData.driverName}
                  onChange={(e) => setFormData({...formData, driverName: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="scheduledPickupDate">Pickup Date *</Label>
                <Input
                  id="scheduledPickupDate"
                  type="date"
                  value={formData.scheduledPickupDate}
                  onChange={(e) => setFormData({...formData, scheduledPickupDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scheduledPickupTime">Pickup Time</Label>
                <Input
                  id="scheduledPickupTime"
                  type="time"
                  value={formData.scheduledPickupTime}
                  onChange={(e) => setFormData({...formData, scheduledPickupTime: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scheduledDeliveryDate">Expected Delivery Date *</Label>
                <Input
                  id="scheduledDeliveryDate"
                  type="date"
                  value={formData.scheduledDeliveryDate}
                  onChange={(e) => setFormData({...formData, scheduledDeliveryDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scheduledDeliveryTime">Expected Delivery Time</Label>
                <Input
                  id="scheduledDeliveryTime"
                  type="time"
                  value={formData.scheduledDeliveryTime}
                  onChange={(e) => setFormData({...formData, scheduledDeliveryTime: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialHandling">Special Handling Instructions</Label>
              <Textarea
                id="specialHandling"
                value={formData.specialHandling}
                onChange={(e) => setFormData({...formData, specialHandling: e.target.value})}
                placeholder="Any special handling, stacking, or storage requirements"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Schedule Delivery</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedDeliverySchedulingForm;

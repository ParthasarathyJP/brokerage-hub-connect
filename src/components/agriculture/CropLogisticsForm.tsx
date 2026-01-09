import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropLogisticsForm = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    cropType: "",
    quantity: "",
    quantityUnit: "quintals",
    pickupLocation: "",
    pickupType: "",
    pickupState: "",
    pickupDistrict: "",
    pickupPincode: "",
    destinationLocation: "",
    destinationType: "",
    destinationState: "",
    destinationDistrict: "",
    destinationPincode: "",
    transportMode: "",
    vehicleType: "",
    expectedPickupDate: "",
    expectedDeliveryDate: "",
    insuranceRequired: false,
    insuranceValue: "",
    specialHandling: "",
    contactPerson: "",
    contactPhone: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Logistics:", formData);
    toast.success("Logistics request submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Logistics & Delivery Form</CardTitle>
        <CardDescription>
          Schedule transport and delivery for crop shipments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Shipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderId">Order/Reference ID</Label>
                <Input
                  id="orderId"
                  value={formData.orderId}
                  onChange={(e) => handleChange("orderId", e.target.value)}
                />
              </div>
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
                    <SelectItem value="mixed">Mixed Grains</SelectItem>
                  </SelectContent>
                </Select>
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
            </div>
          </div>

          {/* Pickup Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Pickup Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupType">Location Type *</Label>
                <Select value={formData.pickupType} onValueChange={(value) => handleChange("pickupType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pickup type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farm">Farm</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="mandi">Mandi</SelectItem>
                    <SelectItem value="cold-storage">Cold Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupLocation">Address *</Label>
                <Input
                  id="pickupLocation"
                  placeholder="Full address"
                  value={formData.pickupLocation}
                  onChange={(e) => handleChange("pickupLocation", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupState">State *</Label>
                <Input
                  id="pickupState"
                  value={formData.pickupState}
                  onChange={(e) => handleChange("pickupState", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupDistrict">District *</Label>
                <Input
                  id="pickupDistrict"
                  value={formData.pickupDistrict}
                  onChange={(e) => handleChange("pickupDistrict", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupPincode">Pincode *</Label>
                <Input
                  id="pickupPincode"
                  value={formData.pickupPincode}
                  onChange={(e) => handleChange("pickupPincode", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Destination */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Destination</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="destinationType">Location Type *</Label>
                <Select value={formData.destinationType} onValueChange={(value) => handleChange("destinationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer-warehouse">Buyer Warehouse</SelectItem>
                    <SelectItem value="port">Port</SelectItem>
                    <SelectItem value="factory">Factory/Mill</SelectItem>
                    <SelectItem value="mandi">Mandi</SelectItem>
                    <SelectItem value="cold-storage">Cold Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destinationLocation">Address *</Label>
                <Input
                  id="destinationLocation"
                  placeholder="Full address"
                  value={formData.destinationLocation}
                  onChange={(e) => handleChange("destinationLocation", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destinationState">State *</Label>
                <Input
                  id="destinationState"
                  value={formData.destinationState}
                  onChange={(e) => handleChange("destinationState", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destinationDistrict">District *</Label>
                <Input
                  id="destinationDistrict"
                  value={formData.destinationDistrict}
                  onChange={(e) => handleChange("destinationDistrict", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destinationPincode">Pincode *</Label>
                <Input
                  id="destinationPincode"
                  value={formData.destinationPincode}
                  onChange={(e) => handleChange("destinationPincode", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Transport Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Transport Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="transportMode">Transport Mode *</Label>
                <Select value={formData.transportMode} onValueChange={(value) => handleChange("transportMode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="truck">Truck/Lorry</SelectItem>
                    <SelectItem value="rail">Rail</SelectItem>
                    <SelectItem value="ship">Ship/Container</SelectItem>
                    <SelectItem value="multimodal">Multimodal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Select value={formData.vehicleType} onValueChange={(value) => handleChange("vehicleType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open-truck">Open Truck</SelectItem>
                    <SelectItem value="covered-truck">Covered Truck</SelectItem>
                    <SelectItem value="container">Container</SelectItem>
                    <SelectItem value="trailer">Trailer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedPickupDate">Expected Pickup Date *</Label>
                <Input
                  id="expectedPickupDate"
                  type="date"
                  value={formData.expectedPickupDate}
                  onChange={(e) => handleChange("expectedPickupDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedDeliveryDate">Expected Delivery Date *</Label>
                <Input
                  id="expectedDeliveryDate"
                  type="date"
                  value={formData.expectedDeliveryDate}
                  onChange={(e) => handleChange("expectedDeliveryDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Insurance</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="insuranceRequired"
                checked={formData.insuranceRequired}
                onCheckedChange={(checked) => handleChange("insuranceRequired", !!checked)}
              />
              <Label htmlFor="insuranceRequired">Transit Insurance Required</Label>
            </div>
            {formData.insuranceRequired && (
              <div className="space-y-2">
                <Label htmlFor="insuranceValue">Declared Value (₹) *</Label>
                <Input
                  id="insuranceValue"
                  type="number"
                  placeholder="Total shipment value"
                  value={formData.insuranceValue}
                  onChange={(e) => handleChange("insuranceValue", e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone *</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => handleChange("contactPhone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialHandling">Special Handling Instructions</Label>
            <Textarea
              id="specialHandling"
              placeholder="Fumigation requirements, moisture protection, etc."
              value={formData.specialHandling}
              onChange={(e) => handleChange("specialHandling", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleChange("additionalNotes", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Logistics Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropLogisticsForm;

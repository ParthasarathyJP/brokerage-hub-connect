import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentLogisticsForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    orderNumber: "",
    buyerName: "",
    buyerPhone: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryPincode: "",
    landmark: "",
    transportMode: "",
    preferredDate: "",
    preferredTimeSlot: "",
    equipmentType: "",
    equipmentWeight: "",
    equipmentDimensions: "",
    specialHandling: "",
    contactPersonName: "",
    contactPersonPhone: "",
    alternatePhone: "",
  });
  const [insuranceRequired, setInsuranceRequired] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Farm Equipment Logistics:", formData, { insuranceRequired });
    toast({
      title: "Delivery Request Submitted",
      description: "Your logistics and delivery request has been processed.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🚚</span> Logistics & Delivery Form
        </CardTitle>
        <CardDescription>
          Schedule delivery and logistics for your farm equipment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Reference */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Order Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order/Invoice Number *</Label>
                <Input
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  placeholder="e.g., ORD-2024-001234"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name *</Label>
                <Input
                  id="buyerName"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  placeholder="Buyer's full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerPhone">Buyer Phone *</Label>
                <Input
                  id="buyerPhone"
                  name="buyerPhone"
                  value={formData.buyerPhone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Delivery Address</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryAddress">Full Address *</Label>
                <Textarea
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  placeholder="Complete delivery address including house/building number, street..."
                  rows={3}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryCity">City *</Label>
                <Input
                  id="deliveryCity"
                  name="deliveryCity"
                  value={formData.deliveryCity}
                  onChange={handleChange}
                  placeholder="City name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryState">State *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, deliveryState: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryPincode">Pincode *</Label>
                <Input
                  id="deliveryPincode"
                  name="deliveryPincode"
                  value={formData.deliveryPincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="landmark">Landmark</Label>
              <Input
                id="landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Nearby landmark for easy location"
              />
            </div>
          </div>

          {/* Transport Mode */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Transport Mode</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="transportMode">Preferred Transport *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, transportMode: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transport mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self-pickup">Self Pickup</SelectItem>
                    <SelectItem value="dealer-delivery">Dealer Delivery</SelectItem>
                    <SelectItem value="third-party">Third-Party Logistics</SelectItem>
                    <SelectItem value="railway">Railway Goods</SelectItem>
                    <SelectItem value="specialized">Specialized Heavy Equipment Transport</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 pt-8">
                <Checkbox
                  id="insuranceRequired"
                  checked={insuranceRequired}
                  onCheckedChange={(checked) => setInsuranceRequired(checked as boolean)}
                />
                <Label htmlFor="insuranceRequired">Transit Insurance Required</Label>
              </div>
            </div>
          </div>

          {/* Expected Delivery */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Expected Delivery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Delivery Date *</Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTimeSlot">Preferred Time Slot</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, preferredTimeSlot: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Input
                  id="equipmentType"
                  name="equipmentType"
                  value={formData.equipmentType}
                  onChange={handleChange}
                  placeholder="e.g., Tractor, Harvester"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentWeight">Approximate Weight (kg)</Label>
                <Input
                  id="equipmentWeight"
                  name="equipmentWeight"
                  type="number"
                  value={formData.equipmentWeight}
                  onChange={handleChange}
                  placeholder="Weight in kg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentDimensions">Dimensions (L x W x H)</Label>
                <Input
                  id="equipmentDimensions"
                  name="equipmentDimensions"
                  value={formData.equipmentDimensions}
                  onChange={handleChange}
                  placeholder="e.g., 4m x 2m x 2.5m"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialHandling">Special Handling Instructions</Label>
              <Textarea
                id="specialHandling"
                name="specialHandling"
                value={formData.specialHandling}
                onChange={handleChange}
                placeholder="Any special handling requirements (fragile parts, assembly needed, etc.)..."
                rows={3}
              />
            </div>
          </div>

          {/* Contact Person */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Person at Delivery Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                <Input
                  id="contactPersonName"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  placeholder="Name of receiver"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPersonPhone">Contact Phone *</Label>
                <Input
                  id="contactPersonPhone"
                  name="contactPersonPhone"
                  value={formData.contactPersonPhone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternatePhone">Alternate Phone</Label>
                <Input
                  id="alternatePhone"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Delivery Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentLogisticsForm;

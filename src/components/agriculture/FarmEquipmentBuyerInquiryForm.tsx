import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentBuyerInquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    buyerName: "",
    email: "",
    phone: "",
    address: "",
    equipmentType: "",
    modelPreference: "",
    budgetMin: "",
    budgetMax: "",
    intendedUse: "",
    deliveryLocation: "",
    deliveryPincode: "",
    deliveryState: "",
    urgency: "",
    additionalRequirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Farm Equipment Buyer Inquiry:", formData);
    toast({
      title: "Inquiry Submitted",
      description: "Your equipment inquiry has been submitted successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🚜</span> Buyer Inquiry Form
        </CardTitle>
        <CardDescription>
          Express your interest in purchasing farm equipment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Buyer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name *</Label>
                <Input
                  id="buyerName"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="buyer@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>

          {/* Equipment Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Equipment Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tractor">Tractor</SelectItem>
                    <SelectItem value="harvester">Harvester</SelectItem>
                    <SelectItem value="cultivator">Cultivator</SelectItem>
                    <SelectItem value="plough">Plough</SelectItem>
                    <SelectItem value="seeder">Seeder/Planter</SelectItem>
                    <SelectItem value="sprayer">Sprayer</SelectItem>
                    <SelectItem value="thresher">Thresher</SelectItem>
                    <SelectItem value="rotavator">Rotavator</SelectItem>
                    <SelectItem value="trailer">Trailer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelPreference">Model/Brand Preference</Label>
                <Input
                  id="modelPreference"
                  name="modelPreference"
                  value={formData.modelPreference}
                  onChange={handleChange}
                  placeholder="e.g., Mahindra, John Deere, TAFE"
                />
              </div>
            </div>
          </div>

          {/* Budget Range */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Budget Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budgetMin">Minimum Budget (₹)</Label>
                <Input
                  id="budgetMin"
                  name="budgetMin"
                  type="number"
                  value={formData.budgetMin}
                  onChange={handleChange}
                  placeholder="e.g., 500000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetMax">Maximum Budget (₹)</Label>
                <Input
                  id="budgetMax"
                  name="budgetMax"
                  type="number"
                  value={formData.budgetMax}
                  onChange={handleChange}
                  placeholder="e.g., 1000000"
                />
              </div>
            </div>
          </div>

          {/* Intended Use */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Intended Use</h3>
            <div className="space-y-2">
              <Label htmlFor="intendedUse">Purpose of Equipment *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, intendedUse: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select intended use" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commercial">Commercial Farming</SelectItem>
                  <SelectItem value="rental">Rental Business</SelectItem>
                  <SelectItem value="personal">Personal Farm</SelectItem>
                  <SelectItem value="cooperative">Farmer Cooperative</SelectItem>
                  <SelectItem value="contract">Contract Farming</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Delivery Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Delivery Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryLocation">Delivery Address *</Label>
                <Input
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                  placeholder="Full delivery address"
                  required
                />
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
            </div>
          </div>

          {/* Urgency & Additional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="urgency">Purchase Urgency</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (Within 1 week)</SelectItem>
                    <SelectItem value="soon">Soon (1-4 weeks)</SelectItem>
                    <SelectItem value="planning">Planning (1-3 months)</SelectItem>
                    <SelectItem value="exploring">Just Exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalRequirements">Additional Requirements</Label>
              <Textarea
                id="additionalRequirements"
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="Any specific features, attachments, or requirements..."
                rows={4}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Inquiry</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentBuyerInquiryForm;

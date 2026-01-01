import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const IrrigationServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    farmerId: "",
    farmerName: "",
    phone: "",
    landReference: "",
    landSize: "",
    landUnit: "acres",
    cropType: "",
    irrigationType: "",
    irrigationFrequency: "",
    startDate: "",
    endDate: "",
    budgetMin: "",
    budgetMax: "",
    preferredVendor: "",
    preferredBroker: "",
    urgency: "",
    additionalRequirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Irrigation Service Request:", formData);
    toast.success("Service request submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Irrigation Service Request Form</CardTitle>
        <CardDescription>
          Request irrigation services for your agricultural land
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Farmer Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Farmer / Requester Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerId">Farmer ID / Registration Number</Label>
                <Input
                  id="farmerId"
                  value={formData.farmerId}
                  onChange={(e) => handleChange("farmerId", e.target.value)}
                  placeholder="If registered"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerName">Full Name *</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => handleChange("farmerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Land Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Land Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="landReference">Land Reference / Survey Number *</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landSize">Land Size *</Label>
                <div className="flex gap-2">
                  <Input
                    id="landSize"
                    type="number"
                    value={formData.landSize}
                    onChange={(e) => handleChange("landSize", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.landUnit} onValueChange={(value) => handleChange("landUnit", value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acres">Acres</SelectItem>
                      <SelectItem value="hectares">Hectares</SelectItem>
                      <SelectItem value="guntas">Guntas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Current/Planned Crop *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paddy">Paddy/Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits/Orchards</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Irrigation Requirements Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Irrigation Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="irrigationType">Type of Irrigation Required *</Label>
                <Select value={formData.irrigationType} onValueChange={(value) => handleChange("irrigationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select irrigation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip Irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler Irrigation</SelectItem>
                    <SelectItem value="flood">Flood Irrigation</SelectItem>
                    <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                    <SelectItem value="micro">Micro Irrigation</SelectItem>
                    <SelectItem value="center_pivot">Center Pivot</SelectItem>
                    <SelectItem value="mixed">Mixed/Multiple Types</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="irrigationFrequency">Irrigation Frequency *</Label>
                <Select value={formData.irrigationFrequency} onValueChange={(value) => handleChange("irrigationFrequency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="alternate">Alternate Days</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="as_needed">As Needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Required From Date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Required Until Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Within a month</SelectItem>
                    <SelectItem value="medium">Medium - Within 2 weeks</SelectItem>
                    <SelectItem value="high">High - Within a week</SelectItem>
                    <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Budget Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Budget Constraints</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budgetMin">Minimum Budget (₹)</Label>
                <Input
                  id="budgetMin"
                  type="number"
                  value={formData.budgetMin}
                  onChange={(e) => handleChange("budgetMin", e.target.value)}
                  placeholder="e.g., 10000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetMax">Maximum Budget (₹)</Label>
                <Input
                  id="budgetMax"
                  type="number"
                  value={formData.budgetMax}
                  onChange={(e) => handleChange("budgetMax", e.target.value)}
                  placeholder="e.g., 50000"
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Vendor / Broker Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredVendor">Preferred Vendor (if any)</Label>
                <Input
                  id="preferredVendor"
                  value={formData.preferredVendor}
                  onChange={(e) => handleChange("preferredVendor", e.target.value)}
                  placeholder="Vendor name or ID"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredBroker">Preferred Water Broker (if any)</Label>
                <Input
                  id="preferredBroker"
                  value={formData.preferredBroker}
                  onChange={(e) => handleChange("preferredBroker", e.target.value)}
                  placeholder="Broker name or ID"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalRequirements">Additional Requirements</Label>
              <Textarea
                id="additionalRequirements"
                placeholder="Any specific requirements, constraints, or preferences..."
                value={formData.additionalRequirements}
                onChange={(e) => handleChange("additionalRequirements", e.target.value)}
                className="min-h-24"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Service Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IrrigationServiceRequestForm;

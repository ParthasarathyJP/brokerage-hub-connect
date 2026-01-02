import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PestControlFarmerRegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    farmerName: "",
    contactNumber: "",
    email: "",
    address: "",
    village: "",
    district: "",
    state: "",
    pincode: "",
    surveyNumber: "",
    cropType: "",
    acreage: "",
    soilType: "",
    recurringPests: "",
    seasonalOutbreaks: "",
    lastPestIncident: "",
    pestControlMethodsUsed: "",
    pestHistory: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pest Control Farmer Registration:", formData);
    toast({
      title: "Registration Submitted",
      description: "Your farmer registration for pest control services has been submitted successfully."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Farmer / Landowner Registration - Pest Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Farmer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farmer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer Name *</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => handleChange("farmerName", e.target.value)}
                  required
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
                <Label htmlFor="village">Village/Town</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleChange("village", e.target.value)}
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
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Land Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Land Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="surveyNumber">Survey Number *</Label>
                <Input
                  id="surveyNumber"
                  value={formData.surveyNumber}
                  onChange={(e) => handleChange("surveyNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Primary Crop Type *</Label>
                <Select onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                    <SelectItem value="mixed">Mixed Crops</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="acreage">Acreage (in acres) *</Label>
                <Input
                  id="acreage"
                  type="number"
                  step="0.01"
                  value={formData.acreage}
                  onChange={(e) => handleChange("acreage", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Select onValueChange={(value) => handleChange("soilType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alluvial">Alluvial</SelectItem>
                    <SelectItem value="black">Black Soil</SelectItem>
                    <SelectItem value="red">Red Soil</SelectItem>
                    <SelectItem value="laterite">Laterite</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="clayey">Clayey</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Pest History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pest History</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="recurringPests">Recurring Pests</Label>
                <Input
                  id="recurringPests"
                  placeholder="e.g., Aphids, Bollworms, Stem borers"
                  value={formData.recurringPests}
                  onChange={(e) => handleChange("recurringPests", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seasonalOutbreaks">Seasonal Outbreaks</Label>
                <Select onValueChange={(value) => handleChange("seasonalOutbreaks", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                    <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                    <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                    <SelectItem value="year-round">Year Round</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastPestIncident">Last Major Pest Incident</Label>
                <Input
                  id="lastPestIncident"
                  type="date"
                  value={formData.lastPestIncident}
                  onChange={(e) => handleChange("lastPestIncident", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestControlMethodsUsed">Pest Control Methods Used</Label>
                <Select onValueChange={(value) => handleChange("pestControlMethodsUsed", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chemical">Chemical Pesticides</SelectItem>
                    <SelectItem value="organic">Organic Methods</SelectItem>
                    <SelectItem value="biological">Biological Control</SelectItem>
                    <SelectItem value="ipm">Integrated Pest Management</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pestHistory">Detailed Pest History</Label>
              <Textarea
                id="pestHistory"
                placeholder="Describe past pest issues, damage caused, and treatments applied..."
                value={formData.pestHistory}
                onChange={(e) => handleChange("pestHistory", e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Register for Pest Control Services</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestControlFarmerRegistrationForm;

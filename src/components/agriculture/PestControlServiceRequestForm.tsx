import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PestControlServiceRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    farmerId: "",
    farmerName: "",
    contactNumber: "",
    landReference: "",
    cropType: "",
    affectedArea: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    alternateDate: "",
    budgetMin: "",
    budgetMax: "",
    preferredVendor: "",
    brokerRequired: "",
    specialRequirements: "",
    accessInstructions: ""
  });

  const [urgency, setUrgency] = useState("");
  const [preferences, setPreferences] = useState({
    organic: false,
    chemical: false,
    biological: false,
    ipm: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pest Control Service Request:", { ...formData, urgency, preferences });
    toast({
      title: "Service Request Submitted",
      description: "Your pest control service request has been submitted. A vendor will contact you shortly."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Pest Control Service Request Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Farmer & Land Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farmer & Land Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerId">Farmer ID *</Label>
                <Input
                  id="farmerId"
                  value={formData.farmerId}
                  onChange={(e) => handleChange("farmerId", e.target.value)}
                  required
                />
              </div>
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
                <Label htmlFor="landReference">Land/Survey Reference *</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="affectedArea">Affected Area (acres) *</Label>
                <Input
                  id="affectedArea"
                  type="number"
                  step="0.01"
                  value={formData.affectedArea}
                  onChange={(e) => handleChange("affectedArea", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Service Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Service Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType">Type of Service Required *</Label>
                <Select onValueChange={(value) => handleChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chemical-spray">Chemical Spray</SelectItem>
                    <SelectItem value="biological-treatment">Biological Treatment</SelectItem>
                    <SelectItem value="fumigation">Fumigation</SelectItem>
                    <SelectItem value="soil-treatment">Soil Treatment</SelectItem>
                    <SelectItem value="drone-spray">Drone Spray</SelectItem>
                    <SelectItem value="ipm">Integrated Pest Management</SelectItem>
                    <SelectItem value="consultation">Consultation Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Urgency Level *</Label>
                <Select onValueChange={setUrgency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency (Within 24 hours)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 3 days)</SelectItem>
                    <SelectItem value="normal">Normal (Within a week)</SelectItem>
                    <SelectItem value="scheduled">Scheduled (Specific date)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Treatment Preferences</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="organic"
                    checked={preferences.organic}
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, organic: !!checked }))}
                  />
                  <Label htmlFor="organic">Organic Only</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="chemical"
                    checked={preferences.chemical}
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, chemical: !!checked }))}
                  />
                  <Label htmlFor="chemical">Chemical OK</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="biological"
                    checked={preferences.biological}
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, biological: !!checked }))}
                  />
                  <Label htmlFor="biological">Biological</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ipm"
                    checked={preferences.ipm}
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, ipm: !!checked }))}
                  />
                  <Label htmlFor="ipm">IPM</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Preferred Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange("preferredDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="early-morning">Early Morning (5-8 AM)</SelectItem>
                    <SelectItem value="morning">Morning (8-11 AM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (2-5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5-7 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternateDate">Alternate Date</Label>
                <Input
                  id="alternateDate"
                  type="date"
                  value={formData.alternateDate}
                  onChange={(e) => handleChange("alternateDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Budget & Vendor */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Budget & Vendor Preference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budgetMin">Budget Range (₹)</Label>
                <div className="flex gap-2">
                  <Input
                    id="budgetMin"
                    type="number"
                    placeholder="Min"
                    value={formData.budgetMin}
                    onChange={(e) => handleChange("budgetMin", e.target.value)}
                  />
                  <Input
                    id="budgetMax"
                    type="number"
                    placeholder="Max"
                    value={formData.budgetMax}
                    onChange={(e) => handleChange("budgetMax", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredVendor">Preferred Vendor (if any)</Label>
                <Input
                  id="preferredVendor"
                  placeholder="Vendor name or ID"
                  value={formData.preferredVendor}
                  onChange={(e) => handleChange("preferredVendor", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerRequired">Broker Assistance Required?</Label>
                <Select onValueChange={(value) => handleChange("brokerRequired", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, need broker assistance</SelectItem>
                    <SelectItem value="no">No, direct vendor contact</SelectItem>
                    <SelectItem value="maybe">Maybe, depending on options</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements</Label>
                <Textarea
                  id="specialRequirements"
                  placeholder="Any special requirements or concerns..."
                  value={formData.specialRequirements}
                  onChange={(e) => handleChange("specialRequirements", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accessInstructions">Field Access Instructions</Label>
                <Textarea
                  id="accessInstructions"
                  placeholder="How to reach your field, landmarks, road conditions..."
                  value={formData.accessInstructions}
                  onChange={(e) => handleChange("accessInstructions", e.target.value)}
                  rows={2}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Service Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestControlServiceRequestForm;

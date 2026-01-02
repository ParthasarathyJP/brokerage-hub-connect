import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const TreatmentServiceLogForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    logNumber: "",
    serviceDate: "",
    startTime: "",
    endTime: "",
    farmerId: "",
    farmerName: "",
    landReference: "",
    cropType: "",
    treatedArea: "",
    serviceType: "",
    vendorName: "",
    vendorLicense: "",
    technicianName: "",
    technicianId: "",
    technicianContact: "",
    chemicalName: "",
    chemicalType: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    dosage: "",
    applicationMethod: "",
    weatherConditions: "",
    temperature: "",
    humidity: "",
    windSpeed: "",
    reEntryInterval: "",
    preHarvestInterval: "",
    laborCost: "",
    chemicalCost: "",
    equipmentCost: "",
    totalCost: "",
    paymentStatus: "",
    safetyNotes: "",
    observations: "",
    followUpRequired: "",
    followUpDate: ""
  });

  const [safetyCompliance, setSafetyCompliance] = useState({
    ppeUsed: false,
    warningSignsPosted: false,
    safetyBriefingGiven: false,
    wasteDisposedProperly: false,
    equipmentCleaned: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Treatment Service Log:", { ...formData, safetyCompliance });
    toast({
      title: "Service Log Recorded",
      description: "The treatment service log has been recorded successfully."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Treatment & Service Log Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="logNumber">Log Number *</Label>
                <Input
                  id="logNumber"
                  value={formData.logNumber}
                  onChange={(e) => handleChange("logNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceDate">Service Date *</Label>
                <Input
                  id="serviceDate"
                  type="date"
                  value={formData.serviceDate}
                  onChange={(e) => handleChange("serviceDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select onValueChange={(value) => handleChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chemical-spray">Chemical Spray</SelectItem>
                    <SelectItem value="biological-treatment">Biological Treatment</SelectItem>
                    <SelectItem value="fumigation">Fumigation</SelectItem>
                    <SelectItem value="soil-treatment">Soil Treatment</SelectItem>
                    <SelectItem value="drone-spray">Drone Spray</SelectItem>
                    <SelectItem value="ipm">IPM Treatment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => handleChange("startTime", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => handleChange("endTime", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatedArea">Treated Area (acres) *</Label>
                <Input
                  id="treatedArea"
                  type="number"
                  step="0.01"
                  value={formData.treatedArea}
                  onChange={(e) => handleChange("treatedArea", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

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
                <Label htmlFor="landReference">Land Reference *</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Input
                  id="cropType"
                  value={formData.cropType}
                  onChange={(e) => handleChange("cropType", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Technician/Vendor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Technician/Vendor Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vendorName">Vendor Name *</Label>
                <Input
                  id="vendorName"
                  value={formData.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorLicense">Vendor License Number</Label>
                <Input
                  id="vendorLicense"
                  value={formData.vendorLicense}
                  onChange={(e) => handleChange("vendorLicense", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="technicianName">Technician Name *</Label>
                <Input
                  id="technicianName"
                  value={formData.technicianName}
                  onChange={(e) => handleChange("technicianName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="technicianId">Technician ID</Label>
                <Input
                  id="technicianId"
                  value={formData.technicianId}
                  onChange={(e) => handleChange("technicianId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="technicianContact">Technician Contact</Label>
                <Input
                  id="technicianContact"
                  value={formData.technicianContact}
                  onChange={(e) => handleChange("technicianContact", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Chemicals/Agents Used */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Chemicals/Agents Used</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="chemicalName">Chemical/Agent Name *</Label>
                <Input
                  id="chemicalName"
                  value={formData.chemicalName}
                  onChange={(e) => handleChange("chemicalName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chemicalType">Type</Label>
                <Select onValueChange={(value) => handleChange("chemicalType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="insecticide">Insecticide</SelectItem>
                    <SelectItem value="fungicide">Fungicide</SelectItem>
                    <SelectItem value="herbicide">Herbicide</SelectItem>
                    <SelectItem value="rodenticide">Rodenticide</SelectItem>
                    <SelectItem value="bio-pesticide">Bio-Pesticide</SelectItem>
                    <SelectItem value="organic">Organic Agent</SelectItem>
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
                <Label htmlFor="dosage">Dosage (per acre) *</Label>
                <Input
                  id="dosage"
                  placeholder="e.g., 500ml, 2kg"
                  value={formData.dosage}
                  onChange={(e) => handleChange("dosage", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturingDate">Manufacturing Date</Label>
                <Input
                  id="manufacturingDate"
                  type="date"
                  value={formData.manufacturingDate}
                  onChange={(e) => handleChange("manufacturingDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => handleChange("expiryDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicationMethod">Application Method</Label>
                <Select onValueChange={(value) => handleChange("applicationMethod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual-spray">Manual Spray</SelectItem>
                    <SelectItem value="power-spray">Power Spray</SelectItem>
                    <SelectItem value="drone">Drone Application</SelectItem>
                    <SelectItem value="dusting">Dusting</SelectItem>
                    <SelectItem value="soil-drench">Soil Drench</SelectItem>
                    <SelectItem value="fumigation">Fumigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Weather Conditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Weather Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weatherConditions">Weather</Label>
                <Select onValueChange={(value) => handleChange("weatherConditions", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunny">Sunny</SelectItem>
                    <SelectItem value="cloudy">Cloudy</SelectItem>
                    <SelectItem value="partly-cloudy">Partly Cloudy</SelectItem>
                    <SelectItem value="overcast">Overcast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature (°C)</Label>
                <Input
                  id="temperature"
                  type="number"
                  value={formData.temperature}
                  onChange={(e) => handleChange("temperature", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="humidity">Humidity (%)</Label>
                <Input
                  id="humidity"
                  type="number"
                  value={formData.humidity}
                  onChange={(e) => handleChange("humidity", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="windSpeed">Wind Speed (km/h)</Label>
                <Input
                  id="windSpeed"
                  type="number"
                  value={formData.windSpeed}
                  onChange={(e) => handleChange("windSpeed", e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reEntryInterval">Re-Entry Interval (hours)</Label>
                <Input
                  id="reEntryInterval"
                  type="number"
                  value={formData.reEntryInterval}
                  onChange={(e) => handleChange("reEntryInterval", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preHarvestInterval">Pre-Harvest Interval (days)</Label>
                <Input
                  id="preHarvestInterval"
                  type="number"
                  value={formData.preHarvestInterval}
                  onChange={(e) => handleChange("preHarvestInterval", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Cost Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Cost Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="laborCost">Labor Cost (₹)</Label>
                <Input
                  id="laborCost"
                  type="number"
                  value={formData.laborCost}
                  onChange={(e) => handleChange("laborCost", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chemicalCost">Chemical Cost (₹)</Label>
                <Input
                  id="chemicalCost"
                  type="number"
                  value={formData.chemicalCost}
                  onChange={(e) => handleChange("chemicalCost", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentCost">Equipment Cost (₹)</Label>
                <Input
                  id="equipmentCost"
                  type="number"
                  value={formData.equipmentCost}
                  onChange={(e) => handleChange("equipmentCost", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalCost">Total Cost (₹) *</Label>
                <Input
                  id="totalCost"
                  type="number"
                  value={formData.totalCost}
                  onChange={(e) => handleChange("totalCost", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentStatus">Payment Status</Label>
                <Select onValueChange={(value) => handleChange("paymentStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="partial">Partial Payment</SelectItem>
                    <SelectItem value="warranty">Under Warranty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Safety Compliance */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Safety Compliance Notes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ppeUsed"
                  checked={safetyCompliance.ppeUsed}
                  onCheckedChange={(checked) => setSafetyCompliance(prev => ({ ...prev, ppeUsed: !!checked }))}
                />
                <Label htmlFor="ppeUsed">PPE Used</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="warningSignsPosted"
                  checked={safetyCompliance.warningSignsPosted}
                  onCheckedChange={(checked) => setSafetyCompliance(prev => ({ ...prev, warningSignsPosted: !!checked }))}
                />
                <Label htmlFor="warningSignsPosted">Warning Signs Posted</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="safetyBriefingGiven"
                  checked={safetyCompliance.safetyBriefingGiven}
                  onCheckedChange={(checked) => setSafetyCompliance(prev => ({ ...prev, safetyBriefingGiven: !!checked }))}
                />
                <Label htmlFor="safetyBriefingGiven">Safety Briefing Given</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="wasteDisposedProperly"
                  checked={safetyCompliance.wasteDisposedProperly}
                  onCheckedChange={(checked) => setSafetyCompliance(prev => ({ ...prev, wasteDisposedProperly: !!checked }))}
                />
                <Label htmlFor="wasteDisposedProperly">Waste Disposed Properly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="equipmentCleaned"
                  checked={safetyCompliance.equipmentCleaned}
                  onCheckedChange={(checked) => setSafetyCompliance(prev => ({ ...prev, equipmentCleaned: !!checked }))}
                />
                <Label htmlFor="equipmentCleaned">Equipment Cleaned</Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="safetyNotes">Additional Safety Notes</Label>
              <Textarea
                id="safetyNotes"
                placeholder="Any additional safety observations..."
                value={formData.safetyNotes}
                onChange={(e) => handleChange("safetyNotes", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Follow-up */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Observations & Follow-up</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="observations">Observations</Label>
                <Textarea
                  id="observations"
                  placeholder="Treatment observations, effectiveness notes..."
                  value={formData.observations}
                  onChange={(e) => handleChange("observations", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="followUpRequired">Follow-up Required?</Label>
                  <Select onValueChange={(value) => handleChange("followUpRequired", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="maybe">To be assessed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="followUpDate">Follow-up Date</Label>
                  <Input
                    id="followUpDate"
                    type="date"
                    value={formData.followUpDate}
                    onChange={(e) => handleChange("followUpDate", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Record Service Log</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TreatmentServiceLogForm;

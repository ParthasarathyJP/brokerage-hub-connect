import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PestIdentificationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    farmerId: "",
    farmerName: "",
    landReference: "",
    cropType: "",
    cropVariety: "",
    growthStage: "",
    plantingDate: "",
    pestType: "",
    pestName: "",
    severityLevel: "",
    affectedArea: "",
    firstObserved: "",
    symptoms: "",
    spreadPattern: "",
    weatherConditions: "",
    previousTreatments: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pest Identification Form:", formData);
    toast({
      title: "Diagnosis Request Submitted",
      description: "Your pest identification request has been submitted for expert analysis."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Pest Identification & Diagnosis Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Farmer & Land Reference */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farmer & Land Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <Label htmlFor="landReference">Land/Survey Number *</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Crop Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Crop Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropVariety">Crop Variety</Label>
                <Input
                  id="cropVariety"
                  value={formData.cropVariety}
                  onChange={(e) => handleChange("cropVariety", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="growthStage">Growth Stage *</Label>
                <Select onValueChange={(value) => handleChange("growthStage", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select growth stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seedling">Seedling</SelectItem>
                    <SelectItem value="vegetative">Vegetative</SelectItem>
                    <SelectItem value="flowering">Flowering</SelectItem>
                    <SelectItem value="fruiting">Fruiting</SelectItem>
                    <SelectItem value="maturity">Maturity</SelectItem>
                    <SelectItem value="harvest">Ready for Harvest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="plantingDate">Planting Date</Label>
                <Input
                  id="plantingDate"
                  type="date"
                  value={formData.plantingDate}
                  onChange={(e) => handleChange("plantingDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Pest Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pest Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pestType">Pest Type *</Label>
                <Select onValueChange={(value) => handleChange("pestType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pest type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="insect">Insect</SelectItem>
                    <SelectItem value="fungus">Fungus</SelectItem>
                    <SelectItem value="bacteria">Bacteria</SelectItem>
                    <SelectItem value="virus">Virus</SelectItem>
                    <SelectItem value="weed">Weed</SelectItem>
                    <SelectItem value="rodent">Rodent</SelectItem>
                    <SelectItem value="nematode">Nematode</SelectItem>
                    <SelectItem value="bird">Bird</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestName">Suspected Pest Name (if known)</Label>
                <Input
                  id="pestName"
                  placeholder="e.g., Aphids, Bollworm, Blast"
                  value={formData.pestName}
                  onChange={(e) => handleChange("pestName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="severityLevel">Severity Level *</Label>
                <Select onValueChange={(value) => handleChange("severityLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (Less than 10% affected)</SelectItem>
                    <SelectItem value="medium">Medium (10-30% affected)</SelectItem>
                    <SelectItem value="high">High (30-60% affected)</SelectItem>
                    <SelectItem value="severe">Severe (More than 60% affected)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="affectedArea">Affected Area (in acres)</Label>
                <Input
                  id="affectedArea"
                  type="number"
                  step="0.01"
                  value={formData.affectedArea}
                  onChange={(e) => handleChange("affectedArea", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstObserved">First Observed Date *</Label>
                <Input
                  id="firstObserved"
                  type="date"
                  value={formData.firstObserved}
                  onChange={(e) => handleChange("firstObserved", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="spreadPattern">Spread Pattern</Label>
                <Select onValueChange={(value) => handleChange("spreadPattern", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="localized">Localized</SelectItem>
                    <SelectItem value="spreading">Spreading Slowly</SelectItem>
                    <SelectItem value="rapid">Rapid Spread</SelectItem>
                    <SelectItem value="scattered">Scattered Patches</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="symptoms">Observed Symptoms *</Label>
              <Textarea
                id="symptoms"
                placeholder="Describe visible symptoms (leaf damage, discoloration, wilting, holes, etc.)..."
                value={formData.symptoms}
                onChange={(e) => handleChange("symptoms", e.target.value)}
                rows={3}
                required
              />
            </div>
          </div>

          {/* Environmental Conditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Environmental Conditions</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weatherConditions">Recent Weather Conditions</Label>
                <Textarea
                  id="weatherConditions"
                  placeholder="Describe recent weather (rainfall, temperature, humidity)..."
                  value={formData.weatherConditions}
                  onChange={(e) => handleChange("weatherConditions", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousTreatments">Previous Treatments Applied</Label>
                <Textarea
                  id="previousTreatments"
                  placeholder="List any treatments already applied..."
                  value={formData.previousTreatments}
                  onChange={(e) => handleChange("previousTreatments", e.target.value)}
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Images & Documents</h3>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <p className="text-muted-foreground mb-2">Upload images of affected plants/pests for diagnosis</p>
              <Input type="file" accept="image/*,.pdf" multiple className="max-w-xs mx-auto" />
              <p className="text-xs text-muted-foreground mt-2">Supported: JPG, PNG, PDF (Max 5MB each)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any other observations or information..."
              value={formData.additionalNotes}
              onChange={(e) => handleChange("additionalNotes", e.target.value)}
              rows={2}
            />
          </div>

          <Button type="submit" className="w-full">Submit for Pest Diagnosis</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestIdentificationForm;

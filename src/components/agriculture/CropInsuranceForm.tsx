import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropInsuranceForm = () => {
  const [formData, setFormData] = useState({
    farmerName: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    village: "",
    aadharNumber: "",
    bankAccount: "",
    // Crop Details
    cropType: "",
    variety: "",
    season: "",
    sowingDate: "",
    landArea: "",
    landUnit: "acres",
    surveyNumber: "",
    // Insurance Type
    insuranceType: "",
    scheme: "",
    sumInsured: "",
    premiumAmount: "",
    premiumSubsidy: "",
    // Transit Insurance
    transitInsurance: false,
    transitValue: "",
    transitRoute: "",
    transitMode: "",
    // Additional
    previousClaims: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Insurance:", formData);
    toast.success("Insurance application submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Crop & Transit Insurance Form</CardTitle>
        <CardDescription>
          Apply for crop insurance and optional transit insurance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Farmer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Farmer Details</h3>
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
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                <Input
                  id="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={(e) => handleChange("aadharNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankAccount">Bank Account Number</Label>
                <Input
                  id="bankAccount"
                  value={formData.bankAccount}
                  onChange={(e) => handleChange("bankAccount", e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleChange("district", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleChange("village", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Crop & Land Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Crop & Land Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice (Paddy)</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variety">Variety</Label>
                <Input
                  id="variety"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="season">Season *</Label>
                <Select value={formData.season} onValueChange={(value) => handleChange("season", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kharif">Kharif</SelectItem>
                    <SelectItem value="rabi">Rabi</SelectItem>
                    <SelectItem value="zaid">Zaid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sowingDate">Sowing Date *</Label>
                <Input
                  id="sowingDate"
                  type="date"
                  value={formData.sowingDate}
                  onChange={(e) => handleChange("sowingDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landArea">Land Area *</Label>
                <div className="flex gap-2">
                  <Input
                    id="landArea"
                    type="number"
                    value={formData.landArea}
                    onChange={(e) => handleChange("landArea", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.landUnit} onValueChange={(value) => handleChange("landUnit", value)}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acres">Acres</SelectItem>
                      <SelectItem value="hectares">Hectares</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="surveyNumber">Survey Number</Label>
                <Input
                  id="surveyNumber"
                  value={formData.surveyNumber}
                  onChange={(e) => handleChange("surveyNumber", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Insurance Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Insurance Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="insuranceType">Insurance Type *</Label>
                <Select value={formData.insuranceType} onValueChange={(value) => handleChange("insuranceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crop">Crop Insurance Only</SelectItem>
                    <SelectItem value="weather">Weather-based Insurance</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive (Crop + Weather)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="scheme">Insurance Scheme *</Label>
                <Select value={formData.scheme} onValueChange={(value) => handleChange("scheme", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pmfby">PMFBY (Pradhan Mantri Fasal Bima Yojana)</SelectItem>
                    <SelectItem value="rwbcis">RWBCIS (Weather-Based)</SelectItem>
                    <SelectItem value="state">State Insurance Scheme</SelectItem>
                    <SelectItem value="private">Private Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sumInsured">Sum Insured (₹) *</Label>
                <Input
                  id="sumInsured"
                  type="number"
                  value={formData.sumInsured}
                  onChange={(e) => handleChange("sumInsured", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="premiumAmount">Premium Amount (₹)</Label>
                <Input
                  id="premiumAmount"
                  type="number"
                  value={formData.premiumAmount}
                  onChange={(e) => handleChange("premiumAmount", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="premiumSubsidy">Premium Subsidy (%)</Label>
                <Input
                  id="premiumSubsidy"
                  type="number"
                  placeholder="Govt. subsidy percentage"
                  value={formData.premiumSubsidy}
                  onChange={(e) => handleChange("premiumSubsidy", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Transit Insurance */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Transit Insurance (Optional)</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="transitInsurance"
                checked={formData.transitInsurance}
                onCheckedChange={(checked) => handleChange("transitInsurance", !!checked)}
              />
              <Label htmlFor="transitInsurance">Add Transit Insurance</Label>
            </div>
            {formData.transitInsurance && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transitValue">Cargo Value (₹) *</Label>
                  <Input
                    id="transitValue"
                    type="number"
                    value={formData.transitValue}
                    onChange={(e) => handleChange("transitValue", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transitMode">Transport Mode</Label>
                  <Select value={formData.transitMode} onValueChange={(value) => handleChange("transitMode", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="rail">Rail</SelectItem>
                      <SelectItem value="ship">Ship</SelectItem>
                      <SelectItem value="multimodal">Multimodal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="transitRoute">Transit Route</Label>
                  <Input
                    id="transitRoute"
                    placeholder="e.g., Farm to Mumbai Port"
                    value={formData.transitRoute}
                    onChange={(e) => handleChange("transitRoute", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="previousClaims">Previous Claims History</Label>
            <Textarea
              id="previousClaims"
              placeholder="Details of any previous insurance claims..."
              value={formData.previousClaims}
              onChange={(e) => handleChange("previousClaims", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">Additional Remarks</Label>
            <Textarea
              id="remarks"
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Insurance Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropInsuranceForm;

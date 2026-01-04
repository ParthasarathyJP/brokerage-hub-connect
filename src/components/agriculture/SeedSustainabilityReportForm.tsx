import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SeedSustainabilityReportForm = () => {
  const [formData, setFormData] = useState({
    reportId: "",
    reportingYear: "",
    reportDate: "",
    companyName: "",
    reportingContact: "",
    totalProductionVolume: "",
    organicProductionVolume: "",
    organicPercentage: "",
    biofertilizerVolume: "",
    chemicalFertilizerVolume: "",
    carbonFootprintTotal: "",
    carbonFootprintPerUnit: "",
    carbonReductionTarget: "",
    carbonReductionAchieved: "",
    waterUsage: "",
    waterRecycled: "",
    energyConsumption: "",
    renewableEnergyPercent: "",
    wasteGenerated: "",
    wasteRecycled: "",
    packagingType: "",
    recyclablePackagingPercent: "",
    transportEmissions: "",
    localSourcingPercent: "",
    sustainablePractices: [] as string[],
    certifications: "",
    farmerTrainingPrograms: "",
    farmersReached: "",
    soilHealthInitiatives: "",
    biodiversityPrograms: "",
    futureTargets: "",
    challenges: "",
    remarks: ""
  });

  const handlePracticeChange = (practice: string, checked: boolean) => {
    if (checked) {
      setFormData({...formData, sustainablePractices: [...formData.sustainablePractices, practice]});
    } else {
      setFormData({...formData, sustainablePractices: formData.sustainablePractices.filter(p => p !== practice)});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sustainability Report:", formData);
    toast.success("Sustainability report submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Sustainability Reporting Form</CardTitle>
        <CardDescription>
          Report on eco-friendly fertilizers, carbon footprint tracking, and sustainability initiatives
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Report Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Report Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reportId">Report ID</Label>
                <Input
                  id="reportId"
                  value={formData.reportId}
                  onChange={(e) => setFormData({...formData, reportId: e.target.value})}
                  placeholder="Auto-generated"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportingYear">Reporting Year *</Label>
                <Input
                  id="reportingYear"
                  type="number"
                  value={formData.reportingYear}
                  onChange={(e) => setFormData({...formData, reportingYear: e.target.value})}
                  placeholder="e.g., 2025"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportDate">Report Date *</Label>
                <Input
                  id="reportDate"
                  type="date"
                  value={formData.reportDate}
                  onChange={(e) => setFormData({...formData, reportDate: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company/Organization Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportingContact">Reporting Contact</Label>
                <Input
                  id="reportingContact"
                  value={formData.reportingContact}
                  onChange={(e) => setFormData({...formData, reportingContact: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Production Volumes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Eco-Friendly Production</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalProductionVolume">Total Production (MT)</Label>
                <Input
                  id="totalProductionVolume"
                  type="number"
                  value={formData.totalProductionVolume}
                  onChange={(e) => setFormData({...formData, totalProductionVolume: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organicProductionVolume">Organic Products (MT)</Label>
                <Input
                  id="organicProductionVolume"
                  type="number"
                  value={formData.organicProductionVolume}
                  onChange={(e) => setFormData({...formData, organicProductionVolume: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organicPercentage">Organic Percentage (%)</Label>
                <Input
                  id="organicPercentage"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.organicPercentage}
                  onChange={(e) => setFormData({...formData, organicPercentage: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="biofertilizerVolume">Biofertilizers Produced (MT)</Label>
                <Input
                  id="biofertilizerVolume"
                  type="number"
                  value={formData.biofertilizerVolume}
                  onChange={(e) => setFormData({...formData, biofertilizerVolume: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chemicalFertilizerVolume">Chemical Fertilizers (MT)</Label>
                <Input
                  id="chemicalFertilizerVolume"
                  type="number"
                  value={formData.chemicalFertilizerVolume}
                  onChange={(e) => setFormData({...formData, chemicalFertilizerVolume: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Carbon Footprint */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Carbon Footprint Tracking</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="carbonFootprintTotal">Total Carbon Footprint (tCO2e)</Label>
                <Input
                  id="carbonFootprintTotal"
                  type="number"
                  value={formData.carbonFootprintTotal}
                  onChange={(e) => setFormData({...formData, carbonFootprintTotal: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbonFootprintPerUnit">Carbon per Unit Product (kgCO2e/MT)</Label>
                <Input
                  id="carbonFootprintPerUnit"
                  type="number"
                  value={formData.carbonFootprintPerUnit}
                  onChange={(e) => setFormData({...formData, carbonFootprintPerUnit: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbonReductionTarget">Carbon Reduction Target (%)</Label>
                <Input
                  id="carbonReductionTarget"
                  type="number"
                  value={formData.carbonReductionTarget}
                  onChange={(e) => setFormData({...formData, carbonReductionTarget: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbonReductionAchieved">Reduction Achieved (%)</Label>
                <Input
                  id="carbonReductionAchieved"
                  type="number"
                  value={formData.carbonReductionAchieved}
                  onChange={(e) => setFormData({...formData, carbonReductionAchieved: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Resource Usage */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Resource Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="waterUsage">Water Usage (KL)</Label>
                <Input
                  id="waterUsage"
                  type="number"
                  value={formData.waterUsage}
                  onChange={(e) => setFormData({...formData, waterUsage: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waterRecycled">Water Recycled (%)</Label>
                <Input
                  id="waterRecycled"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.waterRecycled}
                  onChange={(e) => setFormData({...formData, waterRecycled: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="energyConsumption">Energy Consumption (MWh)</Label>
                <Input
                  id="energyConsumption"
                  type="number"
                  value={formData.energyConsumption}
                  onChange={(e) => setFormData({...formData, energyConsumption: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="renewableEnergyPercent">Renewable Energy (%)</Label>
                <Input
                  id="renewableEnergyPercent"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.renewableEnergyPercent}
                  onChange={(e) => setFormData({...formData, renewableEnergyPercent: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wasteGenerated">Waste Generated (MT)</Label>
                <Input
                  id="wasteGenerated"
                  type="number"
                  value={formData.wasteGenerated}
                  onChange={(e) => setFormData({...formData, wasteGenerated: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wasteRecycled">Waste Recycled (%)</Label>
                <Input
                  id="wasteRecycled"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.wasteRecycled}
                  onChange={(e) => setFormData({...formData, wasteRecycled: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Packaging & Transport */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Sustainable Packaging & Transport</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="packagingType">Primary Packaging Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, packagingType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biodegradable">Biodegradable</SelectItem>
                    <SelectItem value="recyclable-plastic">Recyclable Plastic</SelectItem>
                    <SelectItem value="paper">Paper/Cardboard</SelectItem>
                    <SelectItem value="jute">Jute/Natural Fiber</SelectItem>
                    <SelectItem value="mixed">Mixed Materials</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="recyclablePackagingPercent">Recyclable Packaging (%)</Label>
                <Input
                  id="recyclablePackagingPercent"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.recyclablePackagingPercent}
                  onChange={(e) => setFormData({...formData, recyclablePackagingPercent: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transportEmissions">Transport Emissions (tCO2e)</Label>
                <Input
                  id="transportEmissions"
                  type="number"
                  value={formData.transportEmissions}
                  onChange={(e) => setFormData({...formData, transportEmissions: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Sustainable Practices */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Sustainable Practices Adopted</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Integrated Pest Management",
                "Organic Farming Support",
                "Soil Health Programs",
                "Water Conservation",
                "Zero Waste Manufacturing",
                "Solar/Renewable Energy",
                "Carbon Offset Programs",
                "Plastic-Free Packaging",
                "Farmer Training Programs"
              ].map((practice) => (
                <div key={practice} className="flex items-center space-x-2">
                  <Checkbox
                    id={practice}
                    checked={formData.sustainablePractices.includes(practice)}
                    onCheckedChange={(checked) => handlePracticeChange(practice, checked as boolean)}
                  />
                  <Label htmlFor={practice} className="text-sm">{practice}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Social Impact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Social Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerTrainingPrograms">Farmer Training Programs</Label>
                <Input
                  id="farmerTrainingPrograms"
                  type="number"
                  value={formData.farmerTrainingPrograms}
                  onChange={(e) => setFormData({...formData, farmerTrainingPrograms: e.target.value})}
                  placeholder="Number of programs conducted"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmersReached">Farmers Reached</Label>
                <Input
                  id="farmersReached"
                  type="number"
                  value={formData.farmersReached}
                  onChange={(e) => setFormData({...formData, farmersReached: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="soilHealthInitiatives">Soil Health Initiatives</Label>
              <Textarea
                id="soilHealthInitiatives"
                value={formData.soilHealthInitiatives}
                onChange={(e) => setFormData({...formData, soilHealthInitiatives: e.target.value})}
                placeholder="Describe soil health programs and initiatives"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="biodiversityPrograms">Biodiversity Programs</Label>
              <Textarea
                id="biodiversityPrograms"
                value={formData.biodiversityPrograms}
                onChange={(e) => setFormData({...formData, biodiversityPrograms: e.target.value})}
                placeholder="Programs supporting biodiversity and ecosystem health"
              />
            </div>
          </div>

          {/* Future Targets */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Future Targets & Challenges</h3>
            <div className="space-y-2">
              <Label htmlFor="futureTargets">Sustainability Targets for Next Year</Label>
              <Textarea
                id="futureTargets"
                value={formData.futureTargets}
                onChange={(e) => setFormData({...formData, futureTargets: e.target.value})}
                placeholder="List your sustainability goals and targets"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="challenges">Challenges Faced</Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                placeholder="Key challenges in achieving sustainability goals"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Sustainability Report</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedSustainabilityReportForm;

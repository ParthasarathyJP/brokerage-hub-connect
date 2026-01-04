import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SeedDemandForecastForm = () => {
  const [formData, setFormData] = useState({
    forecastId: "",
    forecastDate: "",
    forecastPeriod: "",
    cropSeason: "",
    year: "",
    region: "",
    state: "",
    district: "",
    productCategory: "",
    productType: "",
    cropType: "",
    estimatedDemand: "",
    unit: "",
    historicalDemand: "",
    growthRate: "",
    marketTrends: "",
    weatherForecast: "",
    governmentSchemes: "",
    priceExpectation: "",
    supplyAvailability: "",
    competitorAnalysis: "",
    riskFactors: "",
    assumptions: "",
    dataSource: "",
    submittedBy: "",
    department: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demand Forecast:", formData);
    toast.success("Demand forecast submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Demand Forecasting Form</CardTitle>
        <CardDescription>
          Submit crop season and regional demand inputs for seeds and fertilizers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Forecast Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Forecast Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="forecastId">Forecast ID</Label>
                <Input
                  id="forecastId"
                  value={formData.forecastId}
                  onChange={(e) => setFormData({...formData, forecastId: e.target.value})}
                  placeholder="Auto-generated"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="forecastDate">Forecast Date *</Label>
                <Input
                  id="forecastDate"
                  type="date"
                  value={formData.forecastDate}
                  onChange={(e) => setFormData({...formData, forecastDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="forecastPeriod">Forecast Period *</Label>
                <Select onValueChange={(value) => setFormData({...formData, forecastPeriod: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="half-yearly">Half-Yearly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Season & Region */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Season & Region</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropSeason">Crop Season *</Label>
                <Select onValueChange={(value) => setFormData({...formData, cropSeason: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                    <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                    <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                    <SelectItem value="annual">Annual/Perennial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  placeholder="e.g., 2026"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Region/Zone</Label>
              <Select onValueChange={(value) => setFormData({...formData, region: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">North India</SelectItem>
                  <SelectItem value="south">South India</SelectItem>
                  <SelectItem value="east">East India</SelectItem>
                  <SelectItem value="west">West India</SelectItem>
                  <SelectItem value="central">Central India</SelectItem>
                  <SelectItem value="northeast">North-East India</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category *</Label>
                <Select onValueChange={(value) => setFormData({...formData, productCategory: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeds">Seeds</SelectItem>
                    <SelectItem value="fertilizers">Fertilizers</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productType">Specific Product Type</Label>
                <Input
                  id="productType"
                  value={formData.productType}
                  onChange={(e) => setFormData({...formData, productType: e.target.value})}
                  placeholder="e.g., Hybrid Maize Seeds, DAP"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, cropType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cereals">Cereals (Wheat, Rice, Maize)</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Demand Estimates */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Demand Estimates</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="estimatedDemand">Estimated Demand *</Label>
                <Input
                  id="estimatedDemand"
                  type="number"
                  value={formData.estimatedDemand}
                  onChange={(e) => setFormData({...formData, estimatedDemand: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit *</Label>
                <Select onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mt">Metric Tons</SelectItem>
                    <SelectItem value="quintals">Quintals</SelectItem>
                    <SelectItem value="kg">Kilograms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="historicalDemand">Historical Demand (Last Year)</Label>
                <Input
                  id="historicalDemand"
                  type="number"
                  value={formData.historicalDemand}
                  onChange={(e) => setFormData({...formData, historicalDemand: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="growthRate">Expected Growth Rate (%)</Label>
                <Input
                  id="growthRate"
                  type="number"
                  value={formData.growthRate}
                  onChange={(e) => setFormData({...formData, growthRate: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Market Analysis Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weatherForecast">Weather Forecast Impact</Label>
                <Select onValueChange={(value) => setFormData({...formData, weatherForecast: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select impact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="favorable">Favorable - Normal Monsoon</SelectItem>
                    <SelectItem value="above-normal">Above Normal Rainfall</SelectItem>
                    <SelectItem value="below-normal">Below Normal/Deficit</SelectItem>
                    <SelectItem value="uncertain">Uncertain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplyAvailability">Supply Availability</Label>
                <Select onValueChange={(value) => setFormData({...formData, supplyAvailability: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adequate">Adequate</SelectItem>
                    <SelectItem value="tight">Tight/Limited</SelectItem>
                    <SelectItem value="shortage">Expected Shortage</SelectItem>
                    <SelectItem value="surplus">Surplus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="marketTrends">Market Trends & Insights</Label>
              <Textarea
                id="marketTrends"
                value={formData.marketTrends}
                onChange={(e) => setFormData({...formData, marketTrends: e.target.value})}
                placeholder="Key market trends, farmer preferences, new varieties gaining popularity"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="governmentSchemes">Government Schemes Impact</Label>
              <Textarea
                id="governmentSchemes"
                value={formData.governmentSchemes}
                onChange={(e) => setFormData({...formData, governmentSchemes: e.target.value})}
                placeholder="e.g., PM-KISAN, subsidy programs, MSP announcements"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="riskFactors">Risk Factors</Label>
              <Textarea
                id="riskFactors"
                value={formData.riskFactors}
                onChange={(e) => setFormData({...formData, riskFactors: e.target.value})}
                placeholder="Potential risks: supply chain disruptions, price volatility, pest outbreaks"
              />
            </div>
          </div>

          {/* Submission Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Submission Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submittedBy">Submitted By *</Label>
                <Input
                  id="submittedBy"
                  value={formData.submittedBy}
                  onChange={(e) => setFormData({...formData, submittedBy: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dataSource">Data Source</Label>
                <Input
                  id="dataSource"
                  value={formData.dataSource}
                  onChange={(e) => setFormData({...formData, dataSource: e.target.value})}
                  placeholder="e.g., Field Survey, Historical Data"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="assumptions">Key Assumptions</Label>
              <Textarea
                id="assumptions"
                value={formData.assumptions}
                onChange={(e) => setFormData({...formData, assumptions: e.target.value})}
                placeholder="List the key assumptions made in this forecast"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Demand Forecast</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedDemandForecastForm;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropWarehouseStorageForm = () => {
  const [formData, setFormData] = useState({
    depositorName: "",
    phone: "",
    email: "",
    depositorType: "",
    // Commodity Details
    commodityType: "",
    variety: "",
    quantity: "",
    quantityUnit: "quintals",
    qualityGrade: "",
    packagingType: "",
    // Warehouse Selection
    warehouseName: "",
    warehouseLocation: "",
    warehouseType: "",
    storageType: "",
    // Duration & Services
    depositDate: "",
    expectedDuration: "",
    fumigationRequired: false,
    fumigationFrequency: "",
    insuranceRequired: false,
    insuranceValue: "",
    // NWR
    nwrRequired: false,
    nwrForFinancing: false,
    // Additional
    specialInstructions: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Warehouse Storage:", formData);
    toast.success("Storage booking submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Warehouse Storage Form</CardTitle>
        <CardDescription>
          Book grain storage with fumigation and other services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Depositor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Depositor Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="depositorName">Depositor Name *</Label>
                <Input
                  id="depositorName"
                  value={formData.depositorName}
                  onChange={(e) => handleChange("depositorName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="depositorType">Depositor Type *</Label>
                <Select value={formData.depositorType} onValueChange={(value) => handleChange("depositorType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="fpo">FPO/Cooperative</SelectItem>
                    <SelectItem value="processor">Processor</SelectItem>
                    <SelectItem value="exporter">Exporter</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Commodity Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Commodity Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="commodityType">Commodity Type *</Label>
                <Select value={formData.commodityType} onValueChange={(value) => handleChange("commodityType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select commodity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                    <SelectItem value="oilseeds">Oilseeds</SelectItem>
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
                <Label htmlFor="qualityGrade">Quality Grade</Label>
                <Select value={formData.qualityGrade} onValueChange={(value) => handleChange("qualityGrade", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-a">Grade A</SelectItem>
                    <SelectItem value="grade-b">Grade B</SelectItem>
                    <SelectItem value="grade-c">Grade C</SelectItem>
                    <SelectItem value="faq">FAQ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <div className="flex gap-2">
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.quantityUnit} onValueChange={(value) => handleChange("quantityUnit", value)}>
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quintals">Quintals</SelectItem>
                      <SelectItem value="tons">Tons</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="packagingType">Packaging Type</Label>
                <Select value={formData.packagingType} onValueChange={(value) => handleChange("packagingType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select packaging" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jute-bags">Jute Bags</SelectItem>
                    <SelectItem value="pp-bags">PP Bags</SelectItem>
                    <SelectItem value="hdpe-bags">HDPE Bags</SelectItem>
                    <SelectItem value="bulk">Bulk (Loose)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Warehouse Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Warehouse Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="warehouseName">Warehouse Name *</Label>
                <Input
                  id="warehouseName"
                  value={formData.warehouseName}
                  onChange={(e) => handleChange("warehouseName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warehouseLocation">Warehouse Location *</Label>
                <Input
                  id="warehouseLocation"
                  placeholder="City, District, State"
                  value={formData.warehouseLocation}
                  onChange={(e) => handleChange("warehouseLocation", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warehouseType">Warehouse Type *</Label>
                <Select value={formData.warehouseType} onValueChange={(value) => handleChange("warehouseType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cwc">CWC (Central Warehousing)</SelectItem>
                    <SelectItem value="swc">SWC (State Warehousing)</SelectItem>
                    <SelectItem value="private">Private Warehouse</SelectItem>
                    <SelectItem value="wdra-registered">WDRA Registered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="storageType">Storage Type *</Label>
                <Select value={formData.storageType} onValueChange={(value) => handleChange("storageType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="covered">Covered Storage</SelectItem>
                    <SelectItem value="open">Open Storage (CAP)</SelectItem>
                    <SelectItem value="silo">Silo Storage</SelectItem>
                    <SelectItem value="cold">Cold Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Duration & Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Duration & Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="depositDate">Deposit Date *</Label>
                <Input
                  id="depositDate"
                  type="date"
                  value={formData.depositDate}
                  onChange={(e) => handleChange("depositDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedDuration">Expected Storage Duration</Label>
                <Select value={formData.expectedDuration} onValueChange={(value) => handleChange("expectedDuration", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="3-months">3 Months</SelectItem>
                    <SelectItem value="6-months">6 Months</SelectItem>
                    <SelectItem value="12-months">12 Months</SelectItem>
                    <SelectItem value="indefinite">Indefinite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Fumigation */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="fumigationRequired"
                checked={formData.fumigationRequired}
                onCheckedChange={(checked) => handleChange("fumigationRequired", !!checked)}
              />
              <Label htmlFor="fumigationRequired">Fumigation Services Required</Label>
            </div>
            {formData.fumigationRequired && (
              <div className="space-y-2">
                <Label htmlFor="fumigationFrequency">Fumigation Frequency</Label>
                <Select value={formData.fumigationFrequency} onValueChange={(value) => handleChange("fumigationFrequency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on-deposit">On Deposit Only</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="as-needed">As Needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Insurance */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="insuranceRequired"
                checked={formData.insuranceRequired}
                onCheckedChange={(checked) => handleChange("insuranceRequired", !!checked)}
              />
              <Label htmlFor="insuranceRequired">Storage Insurance Required</Label>
            </div>
            {formData.insuranceRequired && (
              <div className="space-y-2">
                <Label htmlFor="insuranceValue">Insured Value (₹)</Label>
                <Input
                  id="insuranceValue"
                  type="number"
                  value={formData.insuranceValue}
                  onChange={(e) => handleChange("insuranceValue", e.target.value)}
                />
              </div>
            )}
          </div>

          {/* NWR Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Warehouse Receipt Options</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="nwrRequired"
                  checked={formData.nwrRequired}
                  onCheckedChange={(checked) => handleChange("nwrRequired", !!checked)}
                />
                <Label htmlFor="nwrRequired">Issue Negotiable Warehouse Receipt (NWR)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="nwrForFinancing"
                  checked={formData.nwrForFinancing}
                  onCheckedChange={(checked) => handleChange("nwrForFinancing", !!checked)}
                />
                <Label htmlFor="nwrForFinancing">Interested in Warehouse Receipt Financing</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialInstructions">Special Handling Instructions</Label>
            <Textarea
              id="specialInstructions"
              placeholder="Moisture control, stacking preferences, etc."
              value={formData.specialInstructions}
              onChange={(e) => handleChange("specialInstructions", e.target.value)}
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

          <Button type="submit" className="w-full">Submit Storage Booking</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropWarehouseStorageForm;

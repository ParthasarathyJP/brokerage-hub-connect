import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const MaintenanceServiceLogForm = () => {
  const [formData, setFormData] = useState({
    equipmentId: "",
    equipmentType: "",
    equipmentModel: "",
    serialNumber: "",
    ownerName: "",
    ownerPhone: "",
    location: "",
    serviceDate: "",
    serviceType: "",
    serviceDescription: "",
    technicianName: "",
    technicianId: "",
    vendorName: "",
    vendorContact: "",
    partsReplaced: "",
    partsCost: "",
    laborCost: "",
    totalCost: "",
    warrantyStatus: "",
    warrantyClaim: "",
    warrantyClaimAmount: "",
    nextServiceDate: "",
    remarks: "",
  });

  const [serviceChecks, setServiceChecks] = useState({
    pipesInspected: false,
    filtersClean: false,
    emittersWorking: false,
    pumpsChecked: false,
    valvesTested: false,
    pressureTested: false,
    leaksFixed: false,
    controllersChecked: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Maintenance Log:", { ...formData, serviceChecks });
    toast.success("Maintenance log recorded successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Maintenance & Service Log Form</CardTitle>
        <CardDescription>
          Record maintenance activities, service visits, and warranty claims for irrigation equipment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentId">Equipment ID *</Label>
                <Input
                  id="equipmentId"
                  value={formData.equipmentId}
                  onChange={(e) => handleChange("equipmentId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select value={formData.equipmentType} onValueChange={(value) => handleChange("equipmentType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip_system">Drip Irrigation System</SelectItem>
                    <SelectItem value="sprinkler_system">Sprinkler System</SelectItem>
                    <SelectItem value="pump">Water Pump</SelectItem>
                    <SelectItem value="filter">Filter Unit</SelectItem>
                    <SelectItem value="controller">Irrigation Controller</SelectItem>
                    <SelectItem value="sensor">IoT Sensor</SelectItem>
                    <SelectItem value="valve">Valve Assembly</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentModel">Model / Make</Label>
                <Input
                  id="equipmentModel"
                  value={formData.equipmentModel}
                  onChange={(e) => handleChange("equipmentModel", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serialNumber">Serial Number</Label>
                <Input
                  id="serialNumber"
                  value={formData.serialNumber}
                  onChange={(e) => handleChange("serialNumber", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Owner Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Owner / Location Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner Name *</Label>
                <Input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => handleChange("ownerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerPhone">Owner Phone *</Label>
                <Input
                  id="ownerPhone"
                  type="tel"
                  value={formData.ownerPhone}
                  onChange={(e) => handleChange("ownerPhone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Installation Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="Village, District"
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="installation">New Installation</SelectItem>
                    <SelectItem value="routine">Routine Maintenance</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                    <SelectItem value="emergency">Emergency Service</SelectItem>
                    <SelectItem value="amc">AMC Visit</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                    <SelectItem value="upgrade">Upgrade/Replacement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceDescription">Service Description *</Label>
              <Textarea
                id="serviceDescription"
                placeholder="Describe the service performed, issues found, and actions taken..."
                value={formData.serviceDescription}
                onChange={(e) => handleChange("serviceDescription", e.target.value)}
                required
                className="min-h-24"
              />
            </div>
          </div>

          {/* Service Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Service Checklist</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries({
                pipesInspected: "Pipes Inspected",
                filtersClean: "Filters Cleaned",
                emittersWorking: "Emitters Working",
                pumpsChecked: "Pumps Checked",
                valvesTested: "Valves Tested",
                pressureTested: "Pressure Tested",
                leaksFixed: "Leaks Fixed",
                controllersChecked: "Controllers Checked",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={serviceChecks[key as keyof typeof serviceChecks]}
                    onCheckedChange={(checked) =>
                      setServiceChecks((prev) => ({ ...prev, [key]: checked as boolean }))
                    }
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Technician / Vendor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Technician / Vendor Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="vendorName">Vendor / Company Name</Label>
                <Input
                  id="vendorName"
                  value={formData.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendorContact">Vendor Contact</Label>
                <Input
                  id="vendorContact"
                  value={formData.vendorContact}
                  onChange={(e) => handleChange("vendorContact", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Cost Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Cost Details</h3>
            <div className="space-y-2">
              <Label htmlFor="partsReplaced">Parts Replaced</Label>
              <Textarea
                id="partsReplaced"
                placeholder="List parts replaced with quantities..."
                value={formData.partsReplaced}
                onChange={(e) => handleChange("partsReplaced", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="partsCost">Parts Cost (₹)</Label>
                <Input
                  id="partsCost"
                  type="number"
                  value={formData.partsCost}
                  onChange={(e) => handleChange("partsCost", e.target.value)}
                />
              </div>
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
                <Label htmlFor="totalCost">Total Cost (₹)</Label>
                <Input
                  id="totalCost"
                  type="number"
                  value={formData.totalCost}
                  onChange={(e) => handleChange("totalCost", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Warranty Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Warranty Claims</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="warrantyStatus">Warranty Status</Label>
                <Select value={formData.warrantyStatus} onValueChange={(value) => handleChange("warrantyStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Under Warranty</SelectItem>
                    <SelectItem value="expired">Warranty Expired</SelectItem>
                    <SelectItem value="no_warranty">No Warranty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyClaim">Warranty Claim Filed?</Label>
                <Select value={formData.warrantyClaim} onValueChange={(value) => handleChange("warrantyClaim", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyClaimAmount">Claim Amount (₹)</Label>
                <Input
                  id="warrantyClaimAmount"
                  type="number"
                  value={formData.warrantyClaimAmount}
                  onChange={(e) => handleChange("warrantyClaimAmount", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Next Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Follow-up</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nextServiceDate">Next Scheduled Service</Label>
                <Input
                  id="nextServiceDate"
                  type="date"
                  value={formData.nextServiceDate}
                  onChange={(e) => handleChange("nextServiceDate", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="remarks">Additional Remarks</Label>
              <Textarea
                id="remarks"
                placeholder="Any additional observations or recommendations..."
                value={formData.remarks}
                onChange={(e) => handleChange("remarks", e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Save Maintenance Log</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MaintenanceServiceLogForm;
